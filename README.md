# 二次元成分检测器 (Anime Component Analyzer)

一个纯前端的二次元浓度测试应用。答题计分，生成成分雷达图和专属称号，并在"房间"场景中和 7 位陪伴角色互动。

**在线体验**：https://tigerfong.github.io/anime-quiz/

无需构建工具，无需服务器，双击 `index.html` 即可运行。

---

## 目录

- [功能亮点](#功能亮点)
- [目录结构](#目录结构)
- [快速开始](#快速开始)
- [数据格式](#数据格式)
- [计分规则](#计分规则)
- [如何扩展](#如何扩展)
- [素材准备清单](#素材准备清单)
- [浏览器兼容](#浏览器兼容)
- [已知限制](#已知限制)
- [许可](#许可)

---

## 功能亮点

- **7 维成分分析**：番剧、二游、JRPG、Galgame、梗/同人、音乐、周边
- **四档题量**：速测 15 / 标准 30 / 深度 50 / 全测 100
- **难度自适应**：连击 5 次出高难题，错 3 题降低难度
- **角色陪伴系统**：答题时右下角出现当前维度角色，答对/答错有实时反应
- **房间探索**：答完题进入房间，热点按浓度点亮，点击触发角色对话
- **7 位角色 × 3 档对话**：低/中/高浓度三段式对话剧本
- **纯 CSS 特效**：转场动画、连击扫光、粒子爆发、3D 翻转开箱

---

## 目录结构

```
.
├── index.html          页面骨架（含所有 DOM 结构）
├── style.css           全部样式与动画
├── script.js           全部逻辑（抽题、计分、渲染、交互）
├── data.js             数据层（题库、对话、角色、反应台词）
├── images/
│   ├── quiz_bg.png     答题页背景
│   ├── room_bg.png     房间背景（16:9）
│   ├── chun.png        小春（番剧）
│   ├── rin.png         凛（二游）
│   ├── yukino.png      雪乃（JRPG）
│   ├── shirayu.png     白羽（Galgame）
│   ├── aoi.png         小葵（梗/同人）
│   ├── shiori.png      诗织（音乐）
│   └── chihiro.png     千寻（周边）
└── README.md
```

---

## 快速开始

**在线访问**：https://tigerfong.github.io/anime-quiz/

**本地打开**：双击 `index.html`。

**本地起服务**（推荐，避免某些浏览器的跨域限制）：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

然后访问 `http://localhost:8000`。

### GitHub Pages 部署

项目已部署在 GitHub Pages 上。如需自己部署：

1. Fork 或 clone 本仓库
2. 进入仓库 `Settings → Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`，目录选 `/ (root)`
5. 保存后等待 1–2 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`

---

## 数据格式

### 1. 题库 `QUESTIONS`

```javascript
{
  "id": 1,                    // 唯一编号（当前 1–207，跳号不影响）
  "dim": "anime",             // 维度：anime/gacha/jrpg/galgame/meme/music/merch
  "difficulty": "easy",       // 难度：easy/medium/hard
  "question": "题干……",
  "options": [
    { "text": "选项 A", "correct": true },
    { "text": "选项 B", "correct": false },
    { "text": "不知道 / 没听过", "correct": false }
  ],
  "explain": "答完后的解析文案"
}
```

**约定**：每题最后一个选项通常固定为"不知道 / 没听过"，方便统计"未接触"。

### 2. 角色对话 `DIALOGUES`

三段式结构，按玩家在该维度的正确率触发不同档位：

```javascript
DIALOGUES = {
  <维度>: {
    low:  { start: {...}, a1: {...}, ... },   // 正确率 50% ~ 80%
    mid:  { ... },                             // 正确率 80% ~ 90%
    high: { ... }                              // 正确率 90% 以上
  }
}
```

每个节点格式：

```javascript
start: {
  text: "角色说的话",
  options: [
    { text: "玩家的回复", next: "a1" }    // 跳到下一个节点
  ]
}
```

**终止节点**：`options: []` 时，会自动显示"结束对话"按钮。

### 3. 角色资料 `CHARACTERS`

```javascript
CHARACTERS = {
  anime: { name: '小春', title: '追番狂', img: 'images/chun.png' }
}
```

用于房间页点击热点后弹出的角色立绘和名字标签。

### 4. 陪伴反应 `COMPANION_REACTIONS`

答题过程中右下角角色的实时反应：

```javascript
COMPANION_REACTIONS = {
  <维度>: {
    name, title, img,
    intro:        [...],   // 切换到该维度时的开场白
    correct:      [...],   // 答对的常规台词
    wrong:        [...],   // 答错的常规台词
    streak3:      [...],   // 连对 3 题
    streak5:      [...],   // 连对 5 题
    streak3wrong: [...],   // 连错 3 题
    streak5wrong: [...],   // 连错 5 题
    idle:         [...]    // 点击头像时随机吐槽
  }
}
```

---

## 计分规则

### 题目抽取

- 题量分配：**简单 50% / 中等 30% / 困难 20%**
- 每个难度层在 7 个维度间均匀分配
- 剩余名额随机从题库补齐

### 难度自适应

- **连击 ≥ 5**：下一题替换成 hard
- **连错 ≥ 3**：下一题替换成 easy
- 触发后连击/错题计数重置

### 称号（根据总正确率）

| 正确率 | 称号 |
|--------|------|
| 100%   | 二次元之神 |
| ≥ 90%  | 婆罗门 |
| ≥ 75%  | 老宅 |
| ≥ 60%  | 资深宅 |
| ≥ 40%  | 普通爱好者 |
| ≥ 20%  | 萌新 |
| < 20%  | 圈外人士 |

### 类型（根据维度分布）

- 取正确率最高的维度 → `追番型宅 / 抽卡型宅 / 练级型宅 / 读本型宅 / 整活型宅 / 耳朵型宅 / 吃谷型宅`
- 若最高与最低差距 < 25% → 判定为 **全能型宅**

### 房间热点

| 维度正确率 | 热点状态 | 视觉 |
|-----------|---------|------|
| ≥ 80%     | `high`   | 金色 + 脉动 |
| 50% ~ 80% | `mid`    | 青色 + 半亮 |
| < 50%     | 无        | 完全熄灭（不可点击） |

只有 `mid` 和 `high` 的热点可以点击进入对话。

---

## 如何扩展

### 新增一道题

在 `data.js` 的 `QUESTIONS` 数组末尾追加对象，`id` 取当前最大 id + 1，`dim` 必须是已存在的维度之一。

### 新增一个维度

需要同步改 5 处（否则会静默失效）：

1. `data.js`：`CHARACTERS` 加角色
2. `data.js`：`DIALOGUES` 加三档对话
3. `data.js`：`COMPANION_REACTIONS` 加反应池
4. `index.html`：房间页加 `<div class="hotspot" id="hotspot-<新维度>" data-dim="<新维度>">`
5. `script.js`：搜索 `dims = [`，共 3 处（`drawQuestions` / `updateRank` / `drawRadar`），都加上新维度

另外 `script.js` 顶部有两个状态变量（`userScores` 和 `userQuestionCount`）也要补上新键。

### 新增一个角色

只需在 `data.js` 的三处（`CHARACTERS`、`DIALOGUES`、`COMPANION_REACTIONS`）里用已有的维度键替换，角色名、称号、图片路径都可以任意改。

---

## 素材准备清单

| 文件 | 尺寸建议 | 说明 |
|------|---------|------|
| `images/quiz_bg.png` | 1920×1080 以上 | 答题页背景，深色 |
| `images/room_bg.png` | 1920×1080 (16:9) | 房间背景，热点位置按此图布局 |
| `images/*.png` 角色立绘 | 800×800 以上 | 建议上半身 + 透明底，圆形裁剪后显示 |

角色立绘在陪伴区以 **圆形 110×110** 显示，在对话弹窗以 **max-height 60vh** 显示。建议原图按正方形构图，人脸居中偏上。

---

## 浏览器兼容

| 特性 | 依赖 |
|------|------|
| `backdrop-filter` | Chrome 76+ / Safari 9+ / Firefox 103+ |
| `scroll-snap-type` | Chrome 69+ / Safari 11+ |
| `aspect-ratio` | Chrome 88+ / Safari 15+ |
| `mask-composite` | 主流现代浏览器 |
| ES6 模板字符串 / 箭头函数 | 现代浏览器 |

**不支持 IE**。目标环境为现代 Chromium / Safari / Firefox。

---

## 已知限制

- 题库 id 存在跳号（156 / 172 / 193 缺失），不影响运行，抽题按 id 唯一性而非连续性工作
- 雷达图 7 个顶点的百分比标签在窄屏上可能略显拥挤，可通过调整 `script.js` 的 `drawRadar()` 中 `size` 参数缓解
- 房间热点位置硬编码在 HTML 里，更换 `room_bg.png` 后需要手动重新定位

---

## 许可

个人项目，未指定开源协议。使用、修改、分发请自行判断。
