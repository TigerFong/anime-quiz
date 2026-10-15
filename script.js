// === 状态变量 ===
let currentQIndex = 0;
let userScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
let userQuestionCount = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
let activeQuestions = [];
let selectedCount = 30;
let answered = false;

// 按维度分组
function groupByDim() {
    const groups = { anime: [], gacha: [], jrpg: [], meme: [], music: [], merch: [] };
    QUESTIONS.forEach(q => {
        if (groups[q.dim]) groups[q.dim].push(q);
    });
    return groups;
}

// 按难度拆分
function splitByDifficulty(list) {
    return {
        easy: list.filter(q => q.difficulty === 'easy'),
        medium: list.filter(q => q.difficulty === 'medium'),
        hard: list.filter(q => q.difficulty === 'hard')
    };
}

// 洗牌
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// 抽题：80% 中低 + 20% 高难
function drawQuestions(count) {
    const groups = groupByDim();
    const dims = ['anime', 'gacha', 'jrpg', 'meme', 'music', 'merch'];

    const lowMediumCount = Math.round(count * 0.8);
    const hardCount = count - lowMediumCount;

    const perDimLow = Math.floor(lowMediumCount / 6);
    let lowRemainder = lowMediumCount - perDimLow * 6;

    const perDimHard = Math.floor(hardCount / 6);
    let hardRemainder = hardCount - perDimHard * 6;

    const selected = [];
    const usedIds = new Set();

    const lowPools = {};
    const hardPools = {};
    dims.forEach(dim => {
        const split = splitByDifficulty(groups[dim]);
        lowPools[dim] = shuffle([...split.easy, ...split.medium]);
        hardPools[dim] = shuffle([...split.hard]);
    });

    // 先抽中低题
    dims.forEach(dim => {
        let take = perDimLow;
        if (lowRemainder > 0) { take++; lowRemainder--; }
        lowPools[dim].slice(0, take).forEach(q => {
            if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id); }
        });
    });

    // 再抽高难题
    dims.forEach(dim => {
        let take = perDimHard;
        if (hardRemainder > 0) { take++; hardRemainder--; }
        hardPools[dim].slice(0, take).forEach(q => {
            if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id); }
        });
    });

    // 不够就从总池子补
    if (selected.length < count) {
        const rest = shuffle(QUESTIONS.filter(q => !usedIds.has(q.id)));
        selected.push(...rest.slice(0, count - selected.length));
    }

    return shuffle(selected);
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

// === 初始化 ===
document.getElementById('startBtn').addEventListener('click', startQuiz);

document.querySelectorAll('.length-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCount = parseInt(btn.dataset.count);
    });
});

// === 开始答题 ===
function startQuiz() {
    activeQuestions = drawQuestions(selectedCount);

    userScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
    userQuestionCount = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };

    activeQuestions.forEach(q => { userQuestionCount[q.dim]++; });

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQIndex = 0;
    totalQEl.textContent = activeQuestions.length;

    document.body.classList.remove('room-mode');
    renderQuestion();
}

// === 渲染题目 ===
function renderQuestion() {
    const q = activeQuestions[currentQIndex];
    questionText.textContent = q.question;
    currentQEl.textContent = currentQIndex + 1;
    progressFill.style.width = (currentQIndex / activeQuestions.length * 100) + '%';
    answered = false;

    optionsEl.innerHTML = '';
    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => selectOption(opt, btn, q));
        optionsEl.appendChild(btn);
    });
}

// === 选择选项 ===
function selectOption(opt, btnEl, q) {
    if (answered) return;
    answered = true;

    const allBtns = optionsEl.querySelectorAll('.option');

    if (opt.correct) {
        btnEl.classList.add('correct');
        userScores[q.dim]++;
    } else {
        btnEl.classList.add('wrong');
        allBtns.forEach((b, i) => {
            if (q.options[i].correct) b.classList.add('correct');
        });
    }

    allBtns.forEach(b => b.style.pointerEvents = 'none');

    // 解释
    const explainEl = document.createElement('div');
    explainEl.className = 'explain';
    explainEl.innerHTML = `
        <div class="explain-title">${opt.correct ? '✓ 答对了' : '✗ 答错了'}</div>
        <div class="explain-text">${q.explain}</div>
    `;
    optionsEl.appendChild(explainEl);

    // 下一题按钮
    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = currentQIndex + 1 < activeQuestions.length ? '下 一 题' : '查 看 结 果';
    nextBtn.addEventListener('click', () => {
        currentQIndex++;
        if (currentQIndex < activeQuestions.length) {
            renderQuestion();
        } else {
            progressFill.style.width = '100%';
            setTimeout(showRoom, 300);
        }
    });
    optionsEl.appendChild(nextBtn);

    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// === 显示房间 ===
function showRoom() {
    quizScreen.classList.remove('active');
    document.getElementById('roomScreen').classList.add('active');
    document.body.classList.add('room-mode');

    const percentages = {};

    Object.keys(userScores).forEach(dim => {
        const total = userQuestionCount[dim];
        const correct = userScores[dim];
        const percent = total > 0 ? correct / total : 0;
        percentages[dim] = percent;

        const hotspotEl = document.getElementById(`hotspot-${dim}`);
        hotspotEl.classList.remove('mid', 'high');

        if (percent >= 0.7) {
            hotspotEl.classList.add('high');
        } else if (percent >= 0.4) {
            hotspotEl.classList.add('mid');
        }

        hotspotEl.onclick = () => handleItemClick(dim, percent);
    });

    setTimeout(() => {
        drawRadar(percentages);
    }, 400);
}

// === 雷达图 ===
function drawRadar(percentages) {
    const canvas = document.getElementById('radarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 420;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2, r = size / 2 - 70;
    const dims = ['anime', 'gacha', 'jrpg', 'meme', 'music', 'merch'];
    const labels = ['番剧', '二游', 'JRPG', '梗/同人', '音乐', '周边'];
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
let clickCounts = {};
let pendingSpecialNode = null;

function handleItemClick(dim, percent) {
    if (percent < 0.4) return;

    const char = CHARACTERS[dim];
    document.getElementById('charImg').src = char.img;
    document.getElementById('charName').textContent = `${char.name} · ${char.title}`;
    currentDialogueDim = dim;

    const percentages = {};
    Object.keys(userScores).forEach(d => {
        percentages[d] = userQuestionCount[d] > 0 ? userScores[d] / userQuestionCount[d] : 0;
    });

    pendingSpecialNode = null;
    if (percent >= 0.85 && DIALOGUES[dim]['special_high']) {
        pendingSpecialNode = 'special_high';
    } else {
        const combos = {
            anime: ['music'], gacha: ['merch'], jrpg: ['music'],
            meme: ['merch', 'gacha'], music: ['anime', 'jrpg'], merch: ['gacha', 'meme']
        };
        if (combos[dim] && DIALOGUES[dim]['special_combo']) {
            for (let otherDim of combos[dim]) {
                if (percentages[dim] > 0.7 && percentages[otherDim] > 0.7) {
                    pendingSpecialNode = 'special_combo';
                    break;
                }
            }
        }
    }

    clickCounts[dim] = (clickCounts[dim] || 0) + 1;
    if (clickCounts[dim] >= 5 && DIALOGUES[dim]['easter_egg']) {
        pendingSpecialNode = 'easter_egg';
        clickCounts[dim] = 0;
    } else if (clickCounts[dim] >= 5) {
        clickCounts[dim] = 0;
    }

    currentNodeId = 'start';
    characterPopup.classList.remove('hidden');
    renderDialogueNode();
}

function renderDialogueNode() {
    if (currentNodeId === 'end' && pendingSpecialNode) {
        currentNodeId = pendingSpecialNode;
        pendingSpecialNode = null;
    }

    const node = DIALOGUES[currentDialogueDim][currentNodeId];
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
    userScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
    userQuestionCount = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
    currentNodeId = 'start';
    currentDialogueDim = '';
    clickCounts = {};
    pendingSpecialNode = null;

    document.querySelectorAll('.hotspot').forEach(item => {
        item.classList.remove('mid', 'high');
        item.onclick = null;
    });

    document.body.classList.remove('room-mode');
    roomScreen.classList.remove('active');
    startScreen.classList.add('active');
});