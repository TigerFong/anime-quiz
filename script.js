// === 状态变量 ===
let currentQIndex = 0;
let userScores = { anime: 0, gacha: 0, jrpg: 0, galgame: 0, meme: 0, music: 0, merch: 0 };
let userQuestionCount = { anime: 0, gacha: 0, jrpg: 0, galgame: 0, meme: 0, music: 0, merch: 0 };
let activeQuestions = [];
let selectedCount = 30;
let answered = false;
let typeTimer = null;

// 游戏元素状态
let comboCount = 0;
let wrongStreak = 0;
let companionTimer = null;
let maxComboThisRun = 0;

// 角色反应系统
let lastCompanionDim = null;
let dimStreak = 0;
let dimWrongStreak = 0;

// === 转场控制 ===
const transitionLayer = document.getElementById('transitionLayer');
let transitionTimer = null;

function playTransition(onMid) {
    transitionLayer.classList.remove('closing');
    transitionLayer.classList.add('active');

    if (transitionTimer) clearTimeout(transitionTimer);

    transitionTimer = setTimeout(() => {
        try {
            onMid();
        } catch (e) {
            console.error('转场中出错：', e);
        }

        setTimeout(() => {
            transitionLayer.classList.add('closing');
            setTimeout(() => {
                transitionLayer.classList.remove('active', 'closing');
            }, 500);
        }, 100);
    }, 450);
}

// === 抽题 ===
function groupByDim() {
    const groups = { anime: [], gacha: [], jrpg: [], galgame: [], meme: [], music: [], merch: [] };
    QUESTIONS.forEach(q => {
        if (groups[q.dim]) groups[q.dim].push(q);
    });
    return groups;
}

function splitByDifficulty(list) {
    return {
        easy: list.filter(q => q.difficulty === 'easy'),
        medium: list.filter(q => q.difficulty === 'medium'),
        hard: list.filter(q => q.difficulty === 'hard')
    };
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function drawQuestions(count) {
    const groups = groupByDim();
    const dims = ['anime', 'gacha', 'jrpg', 'galgame', 'meme', 'music', 'merch'];

    const easyCount   = Math.round(count * 0.5);
    const mediumCount = Math.round(count * 0.3);
    const hardCount   = count - easyCount - mediumCount;

    const selected = [];
    const usedIds = new Set();

    const pools = { easy: {}, medium: {}, hard: {} };
    dims.forEach(dim => {
        const s = splitByDifficulty(groups[dim]);
        pools.easy[dim]   = shuffle([...s.easy]);
        pools.medium[dim] = shuffle([...s.medium]);
        pools.hard[dim]   = shuffle([...s.hard]);
    });

    function drawByDifficulty(diffKey, totalCount) {
        const perDim = Math.floor(totalCount / dims.length);
        let remainder = totalCount - perDim * dims.length;
        dims.forEach(dim => {
            let take = perDim;
            if (remainder > 0) { take++; remainder--; }
            pools[diffKey][dim].slice(0, take).forEach(q => {
                if (!usedIds.has(q.id)) {
                    selected.push(q);
                    usedIds.add(q.id);
                }
            });
        });
    }

    drawByDifficulty('easy', easyCount);
    drawByDifficulty('medium', mediumCount);
    drawByDifficulty('hard', hardCount);

    if (selected.length < count) {
        const rest = shuffle(QUESTIONS.filter(q => !usedIds.has(q.id)));
        selected.push(...rest.slice(0, count - selected.length));
    }

    if (selected.length > count) selected.length = count;

    return shuffle(selected);
}

// === 角色陪伴（带反应系统） ===
function showBubble(text) {
    const bubble = document.getElementById('companionBubble');
    bubble.textContent = '';
    bubble.classList.add('show', 'typing');

    if (companionTimer) clearTimeout(companionTimer);
    if (typeTimer) clearInterval(typeTimer);

    let idx = 0;
    typeTimer = setInterval(() => {
        bubble.textContent = text.slice(0, idx + 1);
        idx++;
        if (idx >= text.length) {
            clearInterval(typeTimer);
            typeTimer = null;
            bubble.classList.remove('typing');
        }
    }, 40);

    companionTimer = setTimeout(() => {
        bubble.classList.remove('show');
    }, text.length * 40 + 2000);
}

function updateCompanion(dim, messageType) {
    const reaction = COMPANION_REACTIONS[dim];
    if (!reaction) return;

    const img = document.getElementById('companionImg');
    const companion = document.getElementById('companion');
    companion.classList.remove('hidden');

    // 换维度 → 切换角色 + 显示开场白
    const isNewDim = lastCompanionDim !== dim;
    if (isNewDim) {
        lastCompanionDim = dim;
        dimStreak = 0;
        dimWrongStreak = 0;

        if (img.getAttribute('src') !== reaction.img) {
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = reaction.img;
                img.style.opacity = 1;
            }, 150);
        }

        const introPool = reaction.intro;
        showBubble(introPool[Math.floor(Math.random() * introPool.length)]);
        return;
    }

    if (!messageType) return;

    let pool = null;

    if (messageType === 'correct') {
        dimStreak++;
        dimWrongStreak = 0;
        if (dimStreak >= 5 && reaction.streak5) pool = reaction.streak5;
        else if (dimStreak >= 3 && reaction.streak3) pool = reaction.streak3;
        else pool = reaction.correct;

        img.classList.remove('correct-flash');
        void img.offsetWidth;
        img.classList.add('correct-flash');
    } else if (messageType === 'wrong') {
        dimWrongStreak++;
        dimStreak = 0;
        if (dimWrongStreak >= 5 && reaction.streak5wrong) pool = reaction.streak5wrong;
        else if (dimWrongStreak >= 3 && reaction.streak3wrong) pool = reaction.streak3wrong;
        else pool = reaction.wrong;

        img.classList.remove('wrong-flash');
        void img.offsetWidth;
        img.classList.add('wrong-flash');
    }

    if (pool) {
        showBubble(pool[Math.floor(Math.random() * pool.length)]);
    }
}

// === 连击全屏扫光 ===
function fireMilestone() {
    const el = document.createElement('div');
    el.className = 'combo-milestone fire';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
}

// === 难度自适应 ===
function adaptDifficulty() {
    const nextIdx = currentQIndex + 1;
    if (nextIdx >= activeQuestions.length) return;

    let targetDifficulty = null;
    if (comboCount >= 5) targetDifficulty = 'hard';
    else if (wrongStreak >= 3) targetDifficulty = 'easy';
    if (!targetDifficulty) return;

    const nextDim = activeQuestions[nextIdx].dim;

    for (let i = nextIdx + 1; i < activeQuestions.length; i++) {
        if (activeQuestions[i].difficulty === targetDifficulty && activeQuestions[i].dim === nextDim) {
            [activeQuestions[nextIdx], activeQuestions[i]] = [activeQuestions[i], activeQuestions[nextIdx]];
            comboCount = 0;
            wrongStreak = 0;
            return;
        }
    }
    for (let i = nextIdx + 1; i < activeQuestions.length; i++) {
        if (activeQuestions[i].difficulty === targetDifficulty) {
            [activeQuestions[nextIdx], activeQuestions[i]] = [activeQuestions[i], activeQuestions[nextIdx]];
            comboCount = 0;
            wrongStreak = 0;
            return;
        }
    }
}

// === 页面元素 ===
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const roomScreen = document.getElementById('roomScreen');
const questionText = document.getElementById('questionText');
const optionsEl = document.getElementById('options');
const progressFill = document.getElementById('progressFill');
const currentQEl = document.getElementById('currentQ');
const totalQEl = document.getElementById('totalQ');
const characterPopup = document.getElementById('characterPopup');
const companion = document.getElementById('companion');
const boxLayer = document.getElementById('boxLayer');
const boxCard = document.getElementById('boxCard');

// === 初始化 ===

// 开始按钮
document.getElementById('startBtn').addEventListener('click', startQuiz);

// 题数选择按钮
document.querySelectorAll('.length-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCount = parseInt(btn.dataset.count);
    });
});

// 点击头像 → 说一句随机吐槽
document.getElementById('companionImg').addEventListener('click', () => {
    if (!lastCompanionDim) return;
    const reaction = COMPANION_REACTIONS[lastCompanionDim];
    if (!reaction) return;

    const pool = reaction.idle || [...reaction.correct, ...reaction.wrong];
    const line = pool[Math.floor(Math.random() * pool.length)];
    showBubble(line);

    const img = document.getElementById('companionImg');
    img.classList.remove('bounce');
    void img.offsetWidth;
    img.classList.add('bounce');
});

// 开箱卡片点击
boxCard.addEventListener('click', () => {
    if (!boxCard.classList.contains('flipped')) {
        boxCard.classList.add('flipped', 'flipping');
        boxLayer.classList.add('bursting');
        setTimeout(() => boxLayer.classList.remove('bursting'), 1200);
        setTimeout(() => boxCard.classList.remove('flipping'), 1000);
    } else {
        boxLayer.classList.add('hidden');
        setTimeout(showRoom, 300);
    }
});

// === 开始答题 ===
function startQuiz() {
    activeQuestions = drawQuestions(selectedCount);
    userScores = { anime: 0, gacha: 0, jrpg: 0, galgame: 0, meme: 0, music: 0, merch: 0 };
    userQuestionCount = { anime: 0, gacha: 0, jrpg: 0, galgame: 0, meme: 0, music: 0, merch: 0 };
    comboCount = 0;
    wrongStreak = 0;
    maxComboThisRun = 0;
    lastCompanionDim = null;
    dimStreak = 0;
    dimWrongStreak = 0;

    activeQuestions.forEach(q => { userQuestionCount[q.dim]++; });

    playTransition(() => {
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        currentQIndex = 0;
        totalQEl.textContent = activeQuestions.length;

        document.body.classList.remove('room-mode');
        companion.classList.remove('hidden');
        renderQuestion();
    });
}

// === 渲染题目 ===
function renderQuestion() {
    optionsEl.classList.add('fading');

    setTimeout(() => {
        const q = activeQuestions[currentQIndex];
        questionText.textContent = q.question;
        currentQEl.textContent = currentQIndex + 1;
        progressFill.style.width = (currentQIndex / activeQuestions.length * 100) + '%';
        progressFill.classList.add('progress-fill-active');
        answered = false;

        const diffLabel = document.getElementById('quizDifficulty');
        const difficultyMap = { easy: '入门', medium: '中等', hard: '高难' };
        const dimMap = { anime: '番剧', gacha: '二游', jrpg: 'JRPG', meme: '梗/同人', music: '音乐', merch: '周边' };
        diffLabel.textContent = `[ ${dimMap[q.dim]} · ${difficultyMap[q.difficulty]} ]`;

        const comboEl = document.getElementById('quizCombo');
        if (comboEl) comboEl.textContent = comboCount > 1 ? `×${comboCount}` : '';

        updateCompanion(q.dim, null);

        const eggEl = document.getElementById('easterEgg');
        if (Math.random() < 0.08) {
            const eggs = [
                '出题人说他也不知道答案',
                '这道题有点怪，你自己看着办',
                '注意：本题包含隐藏知识',
                '这道题曾难倒过 90% 的测试者'
            ];
            eggEl.textContent = '* ' + eggs[Math.floor(Math.random() * eggs.length)];
            eggEl.classList.remove('hidden');
        } else {
            eggEl.classList.add('hidden');
        }

        optionsEl.innerHTML = '';
        q.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => selectOption(opt, btn, q));
            optionsEl.appendChild(btn);
        });

        optionsEl.classList.remove('fading');
    }, 200);
}

// === 选择选项 ===
function selectOption(opt, btnEl, q) {
    if (answered) return;
    answered = true;

    const allBtns = optionsEl.querySelectorAll('.option');
    const comboEl = document.getElementById('quizCombo');
    const panel = document.querySelector('.main-panel');

    if (opt.correct) {
        btnEl.classList.add('correct');
        userScores[q.dim]++;
        comboCount++;
        wrongStreak = 0;
        if (comboCount > maxComboThisRun) maxComboThisRun = comboCount;

        panel.classList.add('flash-correct');
        setTimeout(() => panel.classList.remove('flash-correct'), 400);

        if (comboCount >= 5 && comboCount % 5 === 0) {
            fireMilestone();
        }

        updateCompanion(q.dim, 'correct');

        if (comboEl) comboEl.textContent = comboCount > 1 ? `×${comboCount}` : '';

        const compImg = document.getElementById('companionImg');
        if (compImg) {
            compImg.classList.remove('bounce');
            void compImg.offsetWidth;
            compImg.classList.add('bounce');
        }

        if (comboCount > 1 && comboEl) {
            comboEl.classList.remove('bump');
            void comboEl.offsetWidth;
            comboEl.classList.add('bump');
        }
    } else {
        btnEl.classList.add('wrong');
        comboCount = 0;
        wrongStreak++;
        allBtns.forEach((b, i) => {
            if (q.options[i].correct) b.classList.add('correct');
        });

        updateCompanion(q.dim, 'wrong');

        if (comboEl) comboEl.textContent = '';

        panel.classList.add('flash-wrong');
        setTimeout(() => panel.classList.remove('flash-wrong'), 400);

        const shakeSeq = [0, -4, 4, -3, 3, -1, 0];
        let shakeIdx = 0;
        const shakeTimer = setInterval(() => {
            panel.style.transform = `translateX(${shakeSeq[shakeIdx]}px)`;
            shakeIdx++;
            if (shakeIdx >= shakeSeq.length) {
                clearInterval(shakeTimer);
                panel.style.transform = '';
            }
        }, 40);
    }

    allBtns.forEach(b => b.style.pointerEvents = 'none');

    const explainEl = document.createElement('div');
    explainEl.className = 'explain';
    explainEl.innerHTML = `
        <div class="explain-title">${opt.correct ? '✓ 答对了' : '✗ 答错了'}</div>
        <div class="explain-text">${q.explain}</div>
    `;
    optionsEl.appendChild(explainEl);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = currentQIndex + 1 < activeQuestions.length ? '下 一 题' : '查 看 结 果';
    nextBtn.addEventListener('click', () => {
        adaptDifficulty();
        currentQIndex++;
        if (currentQIndex < activeQuestions.length) {
            renderQuestion();
        } else {
            progressFill.style.width = '100%';
            companion.classList.add('hidden');
            setTimeout(() => {
                boxLayer.classList.remove('hidden');
                boxCard.classList.remove('flipped');
            }, 300);
        }
    });
    optionsEl.appendChild(nextBtn);

    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// === 显示房间 ===
function showRoom() {
    playTransition(() => {
        quizScreen.classList.remove('active');
        roomScreen.classList.add('active');
        document.body.classList.add('room-mode');
        companion.classList.add('hidden');

        const percentages = {};

        Object.keys(userScores).forEach(dim => {
            const total = userQuestionCount[dim];
            const correct = userScores[dim];
            const percent = total > 0 ? correct / total : 0;
            percentages[dim] = percent;

            const hotspotEl = document.getElementById(`hotspot-${dim}`);
            hotspotEl.classList.remove('mid', 'high');

            if (percent >= 0.8) hotspotEl.classList.add('high');
            else if (percent >= 0.5) hotspotEl.classList.add('mid');

            hotspotEl.onclick = () => handleItemClick(dim, percent);
        });

        updateRank(percentages);

        setTimeout(() => drawRadar(percentages), 400);
    });
}

// === 称号 + 类型计算 ===
function updateRank(percentages) {
    const dims = ['anime', 'gacha', 'jrpg', 'galgame', 'meme', 'music', 'merch'];

    let totalCorrect = 0;
    let totalQuestions = 0;
    dims.forEach(dim => {
        totalCorrect += userScores[dim];
        totalQuestions += userQuestionCount[dim];
    });
    const totalPercent = totalQuestions > 0 ? totalCorrect / totalQuestions : 0;

    let rank = '圈外人士';
    if (totalPercent >= 1.0)       rank = '二次元之神';
    else if (totalPercent >= 0.9)  rank = '婆罗门';
    else if (totalPercent >= 0.75) rank = '老宅';
    else if (totalPercent >= 0.6)  rank = '资深宅';
    else if (totalPercent >= 0.4)  rank = '普通爱好者';
    else if (totalPercent >= 0.2)  rank = '萌新';

    document.getElementById('rankTitle').textContent = rank;

    let topDim = 'anime';
    let topPercent = -1;
    let minPercent = 2;
    dims.forEach(dim => {
        const p = percentages[dim] || 0;
        if (p > topPercent) { topPercent = p; topDim = dim; }
        if (p < minPercent) { minPercent = p; }
    });

    const typeMap = {
        anime:   '追 番 型 宅',
        gacha:   '抽 卡 型 宅',
        jrpg:    '练 级 型 宅',
        galgame: '读 本 型 宅',
        meme:    '整 活 型 宅',
        music:   '耳 朵 型 宅',
        merch:   '吃 谷 型 宅'
    };

    let typeText;
    if (topPercent - minPercent < 0.25) {
        typeText = '全 能 型 宅';
    } else {
        typeText = typeMap[topDim];
    }

    document.getElementById('rankType').textContent = typeText;
}

// === 雷达图 ===
function drawRadar(percentages) {
    const canvas = document.getElementById('radarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 460;
    const x = cx + Math.cos(a) * (r + 55);   // 原来是 r + 45
    const y = cy + Math.sin(a) * (r + 55);

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2, r = size / 2 - 70;
    const dims = ['anime', 'gacha', 'jrpg', 'galgame', 'meme', 'music', 'merch'];
    const labels = ['番剧', '二游', 'JRPG', 'Galgame', '梗/同人', '音乐', '周边'];
    const n = dims.length;
    const angle = Math.PI * 2 / n;

    for (let level = 1; level <= 5; level++) {
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            const a = -Math.PI / 2 + angle * i;
            const x = cx + Math.cos(a) * r * level / 5;
            const y = cy + Math.sin(a) * r * level / 5;
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();
    }

    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const v = percentages[dims[i]] || 0;
        const x = cx + Math.cos(a) * r * v;
        const y = cy + Math.sin(a) * r * v;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(236, 72, 153, 0.35)';
    ctx.fill();
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const v = percentages[dims[i]] || 0;
        const x = cx + Math.cos(a) * r * v;
        const y = cy + Math.sin(a) * r * v;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ec4899';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const v = percentages[dims[i]] || 0;
        const x = cx + Math.cos(a) * r * v;
        const y = cy + Math.sin(a) * r * v;
        const percentText = Math.round(v * 100) + '%';

        ctx.font = 'bold 12px "PingFang SC", "Microsoft YaHei", sans-serif';
        const textWidth = ctx.measureText(percentText).width;
        const boxW = textWidth + 12;
        const boxH = 20;

        let offsetX = 0, offsetY = -18;
        if (a > -Math.PI / 2 && a < Math.PI / 2) { offsetX = 20; offsetY = 0; }
        else if (a > Math.PI / 2 || a < -Math.PI / 2) { offsetX = -20; offsetY = 0; }

        ctx.beginPath();
        ctx.rect(x + offsetX - boxW / 2, y + offsetY - boxH / 2, boxW, boxH);
        ctx.fillStyle = 'rgba(15, 10, 30, 0.9)';
        ctx.fill();
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#ec4899';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(percentText, x + offsetX, y + offsetY);
    }

    ctx.fillStyle = '#d8d0f0';
    ctx.font = '14px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const x = cx + Math.cos(a) * (r + 45);
        const y = cy + Math.sin(a) * (r + 45);
        ctx.fillText(labels[i], x, y);
    }
}

// === 角色对话 ===
let currentNodeId = 'start';
let currentDialogueDim = '';
let currentTier = 'low';
let clickCounts = {};
let pendingSpecialNode = null;

function handleItemClick(dim, percent) {
    if (percent < 0.5) return;

    const char = CHARACTERS[dim];
    document.getElementById('charImg').src = char.img;
    document.getElementById('charName').textContent = `${char.name} · ${char.title}`;
    currentDialogueDim = dim;

    let tier = 'low';
    if (percent >= 0.8) tier = 'high';
    else if (percent >= 0.5) tier = 'mid';

    currentTier = tier;
    currentNodeId = 'start';
    characterPopup.classList.remove('hidden');
    renderDialogueNode();
}

function renderDialogueNode() {
    const node = DIALOGUES[currentDialogueDim][currentTier][currentNodeId];
    const textEl = document.getElementById('dialogueText');
    const optionsEl = document.getElementById('dialogueOptions');

    if (!node) { characterPopup.classList.add('hidden'); return; }

    textEl.textContent = node.text;
    optionsEl.innerHTML = '';

    if (node.options.length === 0) {
        const finalBtn = document.createElement('button');
        finalBtn.className = 'dialogue-btn';
        finalBtn.textContent = '结束对话';
        finalBtn.onclick = () => characterPopup.classList.add('hidden');
        optionsEl.appendChild(finalBtn);
    } else {
        node.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'dialogue-btn';
            btn.textContent = opt.text;
            btn.onclick = () => { currentNodeId = opt.next; renderDialogueNode(); };
            optionsEl.appendChild(btn);
        });
    }
}

// === 重新测试 ===
document.getElementById('retryBtn').addEventListener('click', () => {
    currentQIndex = 0;
    userScores = { anime: 0, gacha: 0, jrpg: 0, galgame: 0, meme: 0, music: 0, merch: 0 };
    userQuestionCount = { anime: 0, gacha: 0, jrpg: 0, galgame: 0, meme: 0, music: 0, merch: 0 };
    currentNodeId = 'start';
    currentDialogueDim = '';
    currentTier = 'low';
    clickCounts = {};
    pendingSpecialNode = null;
    comboCount = 0;
    wrongStreak = 0;
    lastCompanionDim = null;
    dimStreak = 0;
    dimWrongStreak = 0;

    document.querySelectorAll('.hotspot').forEach(item => {
        item.classList.remove('mid', 'high');
        item.onclick = null;
    });

    playTransition(() => {
        document.body.classList.remove('room-mode');
        roomScreen.classList.remove('active');
        startScreen.classList.add('active');
    });
});