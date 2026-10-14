// === 状态变量 ===
let currentQIndex = 0;
let userScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
let maxScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
let activeQuestions = []; 
let selectedCount = 30;   

const img1 = new Image(); img1.src = 'images/quiz_bg.png';

function groupQuestionsByDim() {
    const groups = { anime: [], gacha: [], jrpg: [], meme: [], music: [], merch: [], other: [] };
    QUESTIONS.forEach(q => {
        if (q.id >= 1 && q.id <= 8) groups.anime.push(q);
        else if (q.id >= 9 && q.id <= 16) groups.gacha.push(q);
        else if (q.id >= 17 && q.id <= 24) groups.jrpg.push(q);
        else if (q.id >= 25 && q.id <= 32) groups.meme.push(q);
        else if (q.id >= 33 && q.id <= 40) groups.music.push(q);
        else if (q.id >= 41 && q.id <= 48) groups.merch.push(q);
        else groups.other.push(q);
    });
    return groups;
}

function drawQuestions(count) {
    const groups = groupQuestionsByDim();
    const dims = ['anime', 'gacha', 'jrpg', 'meme', 'music', 'merch'];
    const result = [];
    const perDim = Math.floor(count / 6);
    const remainder = count - perDim * 6;

    dims.forEach(dim => {
        const pool = [...groups[dim]];
        shuffle(pool);
        result.push(...pool.slice(0, perDim));
    });

    const usedIds = new Set(result.map(q => q.id));
    const restPool = QUESTIONS.filter(q => !usedIds.has(q.id));
    shuffle(restPool);
    result.push(...restPool.slice(0, remainder));

    shuffle(result);
    return result;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function calculateMaxScores() {
    Object.keys(maxScores).forEach(dim => maxScores[dim] = 0);
    activeQuestions.forEach(q => {
        Object.keys(maxScores).forEach(dim => {
            const maxOptionScore = Math.max(...q.options.map(opt => opt.scores[dim] || 0));
            maxScores[dim] += maxOptionScore;
        });
    });
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

// === 答题流程 ===
function startQuiz() {
    activeQuestions = drawQuestions(selectedCount);
    calculateMaxScores();

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQIndex = 0;
    userScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
    totalQEl.textContent = activeQuestions.length;

    document.body.classList.remove('room-mode');

    renderQuestion();
}

let isLocked = false;

function renderQuestion() {
    const q = activeQuestions[currentQIndex];
    questionText.textContent = q.question;
    currentQEl.textContent = currentQIndex + 1;
    progressFill.style.width = ((currentQIndex) / activeQuestions.length * 100) + '%';
    isLocked = false;

    optionsEl.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => selectOption(opt));
        optionsEl.appendChild(btn);
    });
}

function selectOption(opt) {
    if (isLocked) return;
    isLocked = true;

    Object.entries(opt.scores).forEach(([key, val]) => {
        userScores[key] = (userScores[key] || 0) + val;
    });

    currentQIndex++;
    if (currentQIndex < activeQuestions.length) {
        renderQuestion();
    } else {
        progressFill.style.width = '100%';
        setTimeout(showRoom, 400);
    }
}

// === 房间渲染 ===
function showRoom() {
    quizScreen.classList.remove('active');
    document.getElementById('roomScreen').classList.add('active');
    document.body.classList.add('room-mode');

    const percentages = {};

    Object.keys(userScores).forEach(dim => {
        const percent = userScores[dim] / maxScores[dim];
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

    // 绘制雷达图
    setTimeout(() => {
        drawRadar(percentages);
    }, 300);
}

// === 雷达图绘制 ===
function drawRadar(percentages) {
    const canvas = document.getElementById('radarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 400;
    
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);
    
    const cx = size / 2, cy = size / 2, r = size / 2 - 60;
    const dims = ['anime', 'gacha', 'jrpg', 'meme', 'music', 'merch'];
    const labels = ['番剧', '二游', 'JRPG', '梗/同人', '音乐', '周边'];
    const n = dims.length;
    const angle = Math.PI * 2 / n;
    
    // 背景网格
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
    
    // 轴线
    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();
    }
    
    // 数据区域
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const v = percentages[dims[i]] || 0;
        const x = cx + Math.cos(a) * r * v;
        const y = cy + Math.sin(a) * r * v;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 105, 180, 0.35)';
    ctx.fill();
    ctx.strokeStyle = '#ff69b4';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 顶点
    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const v = percentages[dims[i]] || 0;
        const x = cx + Math.cos(a) * r * v;
        const y = cy + Math.sin(a) * r * v;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ff69b4';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    // 标签
    ctx.fillStyle = '#d8d0f0';
    ctx.font = '14px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + angle * i;
        const x = cx + Math.cos(a) * (r + 35);
        const y = cy + Math.sin(a) * (r + 35);
        ctx.fillText(labels[i], x, y);
    }
}

// === 角色对话互动 ===
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
    
    const pAnime = userScores.anime / maxScores.anime;
    const pGacha = userScores.gacha / maxScores.gacha;
    const pJrpg = userScores.jrpg / maxScores.jrpg;
    const pMeme = userScores.meme / maxScores.meme;
    const pMusic = userScores.music / maxScores.music;
    const pMerch = userScores.merch / maxScores.merch;
    const percentages = { anime: pAnime, gacha: pGacha, jrpg: pJrpg, meme: pMeme, music: pMusic, merch: pMerch };

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
    } else if (clickCounts[dim] >= 5 && !DIALOGUES[dim]['easter_egg']) {
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

    if (!node) {
        characterPopup.classList.add('hidden');
        return;
    }

    textEl.textContent = node.text;
    optionsEl.innerHTML = '';

    if (node.options.length === 0) {
        const finalBtn = document.createElement('button');
        finalBtn.className = 'dialogue-btn';
        finalBtn.textContent = '结束对话';
        finalBtn.onclick = () => {
            characterPopup.classList.add('hidden');
        };
        optionsEl.appendChild(finalBtn);
    } else {
        node.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'dialogue-btn';
            btn.textContent = opt.text;
            btn.onclick = () => {
                currentNodeId = opt.next;
                renderDialogueNode();
            };
            optionsEl.appendChild(btn);
        });
    }
}

document.getElementById('retryBtn').addEventListener('click', () => {
    currentQIndex = 0;
    userScores = { anime: 0, gacha: 0, jrpg: 0, meme: 0, music: 0, merch: 0 };
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