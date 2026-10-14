const QUESTIONS = [
    // ================= 番剧（8道） =================
    { 
        id: 1, 
        question: "你平均每周看多少部新番？", 
        options: [
            { text: "基本不看，纯路人", scores: { anime: 1 } }, 
            { text: "1~2 部，佛系追番", scores: { anime: 2 } }, 
            { text: "3~5 部，新番表常客", scores: { anime: 3, music: 1 } }, 
            { text: "5 部以上，每季新番全追！", scores: { anime: 4, meme: 1 } }
        ] 
    },
    { 
        id: 2, 
        question: "你看番的方式更接近哪种？", 
        options: [
            { text: "随缘看，有人推荐才看", scores: { anime: 1 } }, 
            { text: "每季挑几部感兴趣的", scores: { anime: 2 } }, 
            { text: "新番表出来先加追番列表", scores: { anime: 3, meme: 1 } }, 
            { text: "会做番剧笔记/写吐槽长评", scores: { anime: 4, meme: 2 } }
        ] 
    },
    { 
        id: 3, 
        question: "让你坚持看一部番的最大动力是？", 
        options: [
            { text: "画风好看就行", scores: { anime: 2, merch: 1 } }, 
            { text: "剧情神展开，停不下来", scores: { anime: 3, jrpg: 1 } }, 
            { text: "声优阵容豪华", scores: { anime: 3, music: 1 } }, 
            { text: "OP/ED 好听，为了音乐也要看完", scores: { anime: 3, music: 3 } }
        ] 
    },
    { 
        id: 4, 
        question: "你一般什么时候看番？", 
        options: [
            { text: "周末偶尔看一会儿", scores: { anime: 1 } }, 
            { text: "每天固定睡前看", scores: { anime: 2 } }, 
            { text: "吃饭时、通勤时都在看", scores: { anime: 3, music: 1 } }, 
            { text: "熬夜通宵看，根本停不下来", scores: { anime: 4, meme: 1 } }
        ] 
    },
    { 
        id: 5, 
        question: "你更喜欢哪种长度的番？", 
        options: [
            { text: "12集左右，短平快", scores: { anime: 2 } }, 
            { text: "24集半年番", scores: { anime: 3 } }, 
            { text: "长载番，几百集我都追", scores: { anime: 4, jrpg: 1 } }, 
            { text: "不一定，看题材", scores: { anime: 1 } }
        ] 
    },
    { 
        id: 6, 
        question: "番剧里出现作画崩坏，你会？", 
        options: [
            { text: "能看就行，不挑", scores: { anime: 1 } }, 
            { text: "吐槽两句，继续看", scores: { anime: 2, meme: 2 } }, 
            { text: "截图发群里，当乐子", scores: { anime: 3, meme: 3 } }, 
            { text: "非常介意，甚至弃番", scores: { anime: 4, jrpg: 1 } }
        ] 
    },
    { 
        id: 7, 
        question: "你会追已经知道结局的漫改/轻改番吗？", 
        options: [
            { text: "不会，没悬念了", scores: { anime: 1 } }, 
            { text: "看情况，画风好会看", scores: { anime: 2 } }, 
            { text: "会，能动就行", scores: { anime: 3, meme: 1 } }, 
            { text: "不仅看，还会对比原著细节", scores: { anime: 4, jrpg: 1 } }
        ] 
    },
    { 
        id: 8, 
        question: "你有过为了看番专门开通会员吗？", 
        options: [
            { text: "没有，能白嫖就白嫖", scores: { anime: 1 } }, 
            { text: "开过一次，为了某部番", scores: { anime: 2 } }, 
            { text: "长期会员，每个季度都在用", scores: { anime: 3, gacha: 1 } }, 
            { text: "各大平台全开，只为追番", scores: { anime: 4, gacha: 2 } }
        ] 
    },

    // ================= 二游（8道） =================
    { 
        id: 9, 
        question: "你手机里装了几款二游？", 
        options: [
            { text: "0 款，我是纯良单机人", scores: { gacha: 1 } }, 
            { text: "1~2 款，佛系日常", scores: { gacha: 2 } }, 
            { text: "3~4 款，每天清体力像上班", scores: { gacha: 3, anime: 1 } }, 
            { text: "5 款以上，手机里全是老婆", scores: { gacha: 4, merch: 1 } }
        ] 
    },
    { 
        id: 10, 
        question: "你抽卡的心态是？", 
        options: [
            { text: "一分不氪，随缘出", scores: { gacha: 1 } }, 
            { text: "月卡党，细水长流", scores: { gacha: 2 } }, 
            { text: "攒井，只抽真爱", scores: { gacha: 3, merch: 1 } }, 
            { text: "氪金抽满命，老婆必须拉满", scores: { gacha: 4, merch: 1 } }
        ] 
    },
    { 
        id: 11, 
        question: "二游最吸引你的点是什么？", 
        options: [
            { text: "打发时间，随便玩玩", scores: { gacha: 1 } }, 
            { text: "剧情演出和世界观", scores: { gacha: 2, anime: 1 } }, 
            { text: "角色人设和立绘", scores: { gacha: 3, merch: 1 } }, 
            { text: "数值和配队，我是强度党", scores: { gacha: 4, jrpg: 2 } }
        ] 
    },
    { 
        id: 12, 
        question: "限定池歪了，你会？", 
        options: [
            { text: "无所谓，反正也是随缘", scores: { gacha: 1 } }, 
            { text: "有点难受，但还是会继续玩", scores: { gacha: 2 } }, 
            { text: "破防了，但下次还会抽", scores: { gacha: 3, meme: 1 } }, 
            { text: "不能忍，直接氪服困难", scores: { gacha: 4 } }
        ] 
    },
    { 
        id: 13, 
        question: "你每天花多少时间清二游日常？", 
        options: [
            { text: "10分钟以内，速战速决", scores: { gacha: 1 } }, 
            { text: "半小时左右，慢慢来", scores: { gacha: 2 } }, 
            { text: "一小时以上，还有活动要肝", scores: { gacha: 3, jrpg: 1 } }, 
            { text: "挂机+脚本，24小时在线", scores: { gacha: 4, meme: 1 } }
        ] 
    },
    { 
        id: 14, 
        question: "你会为了二游去了解它的背景设定集吗？", 
        options: [
            { text: "不会，玩游戏而已", scores: { gacha: 1 } }, 
            { text: "偶尔看看论坛考据", scores: { gacha: 2, meme: 1 } }, 
            { text: "会买设定集/画集", scores: { gacha: 3, merch: 2 } }, 
            { text: "深度考据党，比官方还懂", scores: { gacha: 4, meme: 2 } }
        ] 
    },
    { 
        id: 15, 
        question: "二游停服/关服了，你会？", 
        options: [
            { text: "无所谓，换一个玩", scores: { gacha: 1 } }, 
            { text: "有点可惜，截图纪念", scores: { gacha: 2, meme: 1 } }, 
            { text: "很难过，会去社区告别", scores: { gacha: 3, anime: 1 } }, 
            { text: "无法接受，感觉失去了一部分", scores: { gacha: 4, anime: 3 } }
        ] 
    },
    { 
        id: 16, 
        question: "你有过因为二游角色而去看它的番/轻小说吗？", 
        options: [
            { text: "没有，只玩游戏", scores: { gacha: 1 } }, 
            { text: "有，但只是随便看看", scores: { gacha: 2, anime: 1 } }, 
            { text: "有，而且看得很投入", scores: { gacha: 3, anime: 3 } }, 
            { text: "经常，游戏和番剧我全都要", scores: { gacha: 4, anime: 4 } }
        ] 
    },

    // ================= JRPG（8道） =================
    { 
        id: 17, 
        question: "你通关过几款 JRPG？", 
        options: [
            { text: "0 款，手残玩不来", scores: { jrpg: 1 } }, 
            { text: "1~3 款，经典都玩过", scores: { jrpg: 2 } }, 
            { text: "4~8 款，练级狂魔", scores: { jrpg: 3, anime: 1 } }, 
            { text: "8 款以上，系列作如数家珍", scores: { jrpg: 4, music: 1 } }
        ] 
    },
    { 
        id: 18, 
        question: "JRPG 里你最享受哪个环节？", 
        options: [
            { text: "看剧情动画", scores: { jrpg: 1, anime: 1 } }, 
            { text: "刷怪升级，数值变强", scores: { jrpg: 3, gacha: 1 } }, 
            { text: "研究配装和隐藏要素", scores: { jrpg: 4, meme: 1 } }, 
            { text: "听 BGM 和结局曲", scores: { jrpg: 2, music: 3 } }
        ] 
    },
    { 
        id: 19, 
        question: "你会为了练级而刻意刷怪吗？", 
        options: [
            { text: "不会，能过就行", scores: { jrpg: 1 } }, 
            { text: "偶尔，卡关了会刷一下", scores: { jrpg: 2 } }, 
            { text: "会，不练满不舒服", scores: { jrpg: 3, gacha: 1 } }, 
            { text: "必须全满级全收集，不然不睡", scores: { jrpg: 4, gacha: 2 } }
        ] 
    },
    { 
        id: 20, 
        question: "JRPG 里遇到迷宫，你会？", 
        options: [
            { text: "查攻略，直接走最短路径", scores: { jrpg: 1, meme: 1 } }, 
            { text: "自己慢慢摸索，走错也没关系", scores: { jrpg: 2 } }, 
            { text: "迷路也开心，喜欢探索感", scores: { jrpg: 3, anime: 1 } }, 
            { text: "迷宫设计太烂，边骂边玩", scores: { jrpg: 4, meme: 2 } }
        ] 
    },
    { 
        id: 21, 
        question: "你会为了白金奖杯/全成就而反复玩一款JRPG吗？", 
        options: [
            { text: "不会，通关就封盘", scores: { jrpg: 1 } }, 
            { text: "看情况，特别喜欢的会", scores: { jrpg: 2 } }, 
            { text: "会，至少把主线支线全清", scores: { jrpg: 3, anime: 1 } }, 
            { text: "白金是我的基本目标，全系列都要", scores: { jrpg: 4, meme: 1 } }
        ] 
    },
    { 
        id: 22, 
        question: "你更喜欢哪一类 JRPG？", 
        options: [
            { text: "动作类，操作爽快", scores: { jrpg: 1 } }, 
            { text: "回合制，策略性强", scores: { jrpg: 2 } }, 
            { text: "半即时（ATB），有紧张感", scores: { jrpg: 3, gacha: 1 } }, 
            { text: "战棋类，烧脑走格子", scores: { jrpg: 4, meme: 2 } }
        ] 
    },
    { 
        id: 23, 
        question: "JRPG 剧情到了高潮，你会？", 
        options: [
            { text: "按跳过，赶紧打完", scores: { jrpg: 1 } }, 
            { text: "慢慢看，享受剧情", scores: { jrpg: 2, anime: 1 } }, 
            { text: "忍不住通宵打完这段", scores: { jrpg: 3, anime: 2 } }, 
            { text: "感动到哭，甚至写长评", scores: { jrpg: 4, anime: 2, meme: 1 } }
        ] 
    },
    { 
        id: 24, 
        question: "你有过为了 JRPG 专门去买主机/设备吗？", 
        options: [
            { text: "没有，有什么玩什么", scores: { jrpg: 1 } }, 
            { text: "有过一次，为了某款独占", scores: { jrpg: 2, gacha: 1 } }, 
            { text: "有，而且不止一次", scores: { jrpg: 3, gacha: 1 } }, 
            { text: "全平台制霸，只为玩全系列", scores: { jrpg: 4, merch: 2 } }
        ] 
    },

    // ================= 梗/同人（8道） =================
    { 
        id: 25, 
        question: "你在二次元圈子里属于哪种人？", 
        options: [
            { text: "只看不产，默默点赞", scores: { meme: 1 } }, 
            { text: "偶尔转发，群里的乐子人", scores: { meme: 2 } }, 
            { text: "收藏无数表情包，资深玩梗大师", scores: { meme: 3, gacha: 1 } }, 
            { text: "自己画/写/剪，产粮大户", scores: { meme: 4, merch: 1 } }
        ] 
    },
    { 
        id: 26, 
        question: "你平时怎么表达对某个角色的喜欢？", 
        options: [
            { text: "默默看着，不打扰", scores: { meme: 1, anime: 1 } }, 
            { text: "截图保存，当手机壁纸", scores: { meme: 2, merch: 1 } }, 
            { text: "买周边/手办支持", scores: { meme: 2, merch: 3 } }, 
            { text: "产同人图/写同人文", scores: { meme: 4, merch: 1 } }
        ] 
    },
    { 
        id: 27, 
        question: "你的表情包库里有多少二次元内容？", 
        options: [
            { text: "几乎没有", scores: { meme: 1 } }, 
            { text: "几十张，偶尔用", scores: { meme: 2 } }, 
            { text: "几百张，分门别类整理好", scores: { meme: 3, gacha: 1 } }, 
            { text: "上千张，斗图从未输过", scores: { meme: 4, anime: 1 } }
        ] 
    },
    { 
        id: 28, 
        question: "群里有人发了一个你懂的烂梗，你会？", 
        options: [
            { text: "无视，潜水", scores: { meme: 1 } }, 
            { text: "跟着发个表情包", scores: { meme: 2 } }, 
            { text: "立刻接梗，开始接龙", scores: { meme: 3, anime: 1 } }, 
            { text: "不但接梗，还截图做成新表情包", scores: { meme: 4, gacha: 1 } }
        ] 
    },
    { 
        id: 29, 
        question: "你会去漫展吗？", 
        options: [
            { text: "不去，人多太累", scores: { meme: 1 } }, 
            { text: "偶尔去逛逛", scores: { meme: 2, merch: 1 } }, 
            { text: "经常去，每次都有目标", scores: { meme: 3, merch: 2 } }, 
            { text: "每场必到，甚至出 Cos/摆摊", scores: { meme: 4, merch: 4 } }
        ] 
    },
    { 
        id: 30, 
        question: "你会剪辑二次元相关的视频吗？", 
        options: [
            { text: "不会，只看别人的", scores: { meme: 1 } }, 
            { text: "偶尔剪一下简单的", scores: { meme: 2 } }, 
            { text: "经常剪，发在平台上", scores: { meme: 3, music: 1 } }, 
            { text: "靠二创恰饭/有粉丝群", scores: { meme: 4, music: 2 } }
        ] 
    },
    { 
        id: 31, 
        question: "对于圈内的“争议话题”，你的态度是？", 
        options: [
            { text: "不参与，佛系吃瓜", scores: { meme: 1 } }, 
            { text: "看别人吵，自己不发言", scores: { meme: 2 } }, 
            { text: "有自己的立场，会去讨论", scores: { meme: 3 } }, 
            { text: "深度参与，甚至写长文分析", scores: { meme: 4, anime: 1 } }
        ] 
    },
    { 
        id: 32, 
        question: "你有过自己产出内容被很多人看到/点赞的经历吗？", 
        options: [
            { text: "没有，从没发过", scores: { meme: 1 } }, 
            { text: "发过，但没什么人看", scores: { meme: 2 } }, 
            { text: "有，被同好夸过", scores: { meme: 3, music: 1 } }, 
            { text: "有，而且是圈子里的知名产粮人", scores: { meme: 4, music: 1 } }
        ] 
    },

    // ================= 音乐（8道） =================
    { 
        id: 33, 
        question: "你的耳机里现在放的是什么？", 
        options: [
            { text: "随便听听，不怎么特意找歌", scores: { music: 1 } }, 
            { text: "当季新番的 OP/ED", scores: { music: 3, anime: 1 } }, 
            { text: "游戏 OST/OP/ED，循环到倒背如流", scores: { music: 3, jrpg: 2 } }, 
            { text: "声优/唱见/同人音乐，全都要", scores: { music: 4, meme: 2 } }
        ] 
    },
    { 
        id: 34, 
        question: "你会为了音乐去补一部番或者游戏吗？", 
        options: [
            { text: "不会，音乐只是附属品", scores: { music: 1 } }, 
            { text: "偶尔，如果 PV 很惊艳", scores: { music: 2, anime: 1 } }, 
            { text: "经常，音乐是我的入坑动力", scores: { music: 3, anime: 2 } }, 
            { text: "这就是我的入坑方式，歌单即安利", scores: { music: 4, meme: 2 } }
        ] 
    },
    { 
        id: 35, 
        question: "你会在意动漫/游戏歌曲的演唱者是谁吗？", 
        options: [
            { text: "不在意，好听就行", scores: { music: 1 } }, 
            { text: "会看一眼，记不住名字", scores: { music: 2 } }, 
            { text: "会关注喜欢的歌手/声优", scores: { music: 3, anime: 2 } }, 
            { text: "会专门去听他们的所有作品", scores: { music: 4, anime: 3 } }
        ] 
    },
    { 
        id: 36, 
        question: "你会去听二次元相关的演唱会/线上Live吗？", 
        options: [
            { text: "不会，没兴趣", scores: { music: 1 } }, 
            { text: "偶尔看看免费的线上Live", scores: { music: 2 } }, 
            { text: "买过线上票，会追直播", scores: { music: 3, anime: 1 } }, 
            { text: "买过线下票，甚至飞去日本看", scores: { music: 4, merch: 3 } }
        ] 
    },
    { 
        id: 37, 
        question: "你歌单里纯音乐（OST/伴奏）的比例是多少？", 
        options: [
            { text: "几乎没有，不听纯音乐", scores: { music: 1 } }, 
            { text: "10% 左右", scores: { music: 2 } }, 
            { text: "一半以上都是纯音乐", scores: { music: 3, jrpg: 2 } }, 
            { text: "几乎全是OST，人声反而少", scores: { music: 4, jrpg: 3 } }
        ] 
    },
    { 
        id: 38, 
        question: "你玩音游吗？", 
        options: [
            { text: "不玩，手残", scores: { music: 1 } }, 
            { text: "偶尔玩一下，打发时间", scores: { music: 2, gacha: 1 } }, 
            { text: "经常玩，会去刷分", scores: { music: 3, gacha: 2 } }, 
            { text: "音游高手，甚至参加线上比赛", scores: { music: 4, gacha: 3 } }
        ] 
    },
    { 
        id: 39, 
        question: "对于翻唱/同人音乐，你的接受度是？", 
        options: [
            { text: "只听原版，翻唱不习惯", scores: { music: 1 } }, 
            { text: "偶尔听，好听的会收藏", scores: { music: 2 } }, 
            { text: "经常听，甚至比原版还喜欢", scores: { music: 3, meme: 2 } }, 
            { text: "自己就是唱见/做同人音乐", scores: { music: 4, meme: 3 } }
        ] 
    },
    { 
        id: 40, 
        question: "你会因为一首BGM去玩一款游戏/看一部番吗？", 
        options: [
            { text: "不会，还是看题材", scores: { music: 1 } }, 
            { text: "可能会，如果音乐特别神", scores: { music: 2, jrpg: 1 } }, 
            { text: "经常，音乐就是第一驱动力", scores: { music: 3, jrpg: 2, anime: 2 } }, 
            { text: "会，甚至会为了OST买游戏实体版", scores: { music: 4, jrpg: 3, merch: 2 } }
        ] 
    },

    // ================= 周边（8道） =================
    { 
        id: 41, 
        question: "你在二次元上花过最大的一笔钱是？", 
        options: [
            { text: "基本白嫖，不花钱", scores: { merch: 1 } }, 
            { text: "买过几个吧唧/立牌", scores: { merch: 2, gacha: 1 } }, 
            { text: "吃过谷，买过手办", scores: { merch: 3, anime: 1 } }, 
            { text: "为了周边可以吃土，家里有展示柜", scores: { merch: 4, meme: 1 } }
        ] 
    },
    { 
        id: 42, 
        question: "如果现在有一场漫展，你会？", 
        options: [
            { text: "在家睡觉，人太多不想去", scores: { merch: 1, anime: 1 } }, 
            { text: "去逛逛，买点小东西", scores: { merch: 2, meme: 1 } }, 
            { text: "提前做好攻略，冲着特定摊位去", scores: { merch: 4, meme: 2 } }, 
            { text: "出 Cos 或者摆摊卖同人", scores: { merch: 4, meme: 4 } }
        ] 
    },
    { 
        id: 43, 
        question: "你的房间/桌面上有展示二次元周边吗？", 
        options: [
            { text: "没有，都收在箱子里", scores: { merch: 1 } }, 
            { text: "有一两个小摆件", scores: { merch: 2 } }, 
            { text: "有一层书架/一个区域专门放周边", scores: { merch: 3, anime: 1 } }, 
            { text: "有一整面墙/展示柜，精心布置", scores: { merch: 4, anime: 2 } }
        ] 
    },
    { 
        id: 44, 
        question: "你会为了买周边而吃土/超预算吗？", 
        options: [
            { text: "绝对不会，量力而行", scores: { merch: 1 } }, 
            { text: "偶尔会，但会控制", scores: { merch: 2 } }, 
            { text: "经常超预算，但很快乐", scores: { merch: 3, gacha: 1 } }, 
            { text: "吃土也要买，爱就是一切", scores: { merch: 4, gacha: 2 } }
        ] 
    },
    { 
        id: 45, 
        question: "你更喜欢哪种类型的周边？", 
        options: [
            { text: "实用型（杯子、挂件）", scores: { merch: 1, anime: 1 } }, 
            { text: "观赏型（立牌、吧唧）", scores: { merch: 2, anime: 1 } }, 
            { text: "收藏型（手办、模型）", scores: { merch: 3, jrpg: 1 } }, 
            { text: "全都要，出什么买什么", scores: { merch: 4, gacha: 1 } }
        ] 
    },
    { 
        id: 46, 
        question: "你有过购买“海景房”（高价绝版周边）的经历吗？", 
        options: [
            { text: "没有，太贵了", scores: { merch: 1 } }, 
            { text: "观望过，但没下手", scores: { merch: 2 } }, 
            { text: "买过一件，肉痛但值得", scores: { merch: 3, gacha: 1 } }, 
            { text: "买过好几件，为爱买单", scores: { merch: 4, gacha: 2 } }
        ] 
    },
    { 
        id: 47, 
        question: "你会为了周边专门飞去另一个城市吗？", 
        options: [
            { text: "不会，太麻烦了", scores: { merch: 1 } }, 
            { text: "如果顺路会去", scores: { merch: 2 } }, 
            { text: "会，已经这么干过了", scores: { merch: 3, meme: 2 } }, 
            { text: "经常为了漫展/快闪店全国跑", scores: { merch: 4, meme: 3 } }
        ] 
    },
    { 
        id: 48, 
        question: "你买周边更看重什么？", 
        options: [
            { text: "价格便宜，随便买买", scores: { merch: 1 } }, 
            { text: "做工精致，性价比高", scores: { merch: 2 } }, 
            { text: "角色人气和收藏价值", scores: { merch: 3, gacha: 1 } }, 
            { text: "只要是我推，不管多贵都买", scores: { merch: 4, gacha: 3 } }
        ] 
    },

    // ================= 综合（2道） =================
    { 
        id: 49, 
        question: "如果有一天你醒来，发现二次元从世界上消失了，你会？", 
        options: [
            { text: "有些遗憾，但生活还能继续", scores: { anime: 1, gacha: 1, jrpg: 1, meme: 1, music: 1, merch: 1 } }, 
            { text: "非常难过，感觉少了很多快乐", scores: { anime: 2, gacha: 2, jrpg: 2, meme: 2, music: 2, merch: 2 } }, 
            { text: "无法接受，这已经是我生活的一部分", scores: { anime: 4, gacha: 4, jrpg: 4, meme: 4, music: 4, merch: 4 } }, 
            { text: "可能会想办法自己创造一个二次元世界", scores: { anime: 3, gacha: 3, jrpg: 3, meme: 5, music: 3, merch: 2 } }
        ] 
    },
    { 
        id: 50, 
        question: "最后，你觉得二次元对你来说是什么？", 
        options: [
            { text: "打发时间的娱乐", scores: { anime: 1, gacha: 1, jrpg: 1 } }, 
            { text: "生活的一部分，不可或缺", scores: { anime: 3, gacha: 3, jrpg: 3 } }, 
            { text: "精神寄托，避风港", scores: { music: 4, jrpg: 4, anime: 3 } }, 
            { text: "全部，没有二次元我活不下去", scores: { anime: 5, gacha: 5, jrpg: 5, meme: 5, music: 5, merch: 5 } }
        ] 
    }
];

const DIALOGUES = {
    // ① 小春（番剧 - 追番狂）
    anime: {
        start: {
            text: "哇！你也是追番狂魔吗？这季新番你追了几部？",
            options: [
                { text: "全追了，熬夜通宵！", next: "a1" },
                { text: "只挑了几部感兴趣的吧。", next: "a2" }
            ]
        },
        a1: { 
            text: "太强了吧！熬夜看番虽然爽，但要注意身体哦。", 
            options: [
                { text: "没事，为了新番值得！", next: "end" }, 
                { text: "你说的对，下次一定早睡。", next: "end" }
            ] 
        },
        a2: { 
            text: "那也挺好，精挑细选都是精品。那你一般怎么决定看哪部？", 
            options: [
                { text: "看声优阵容和制作公司。", next: "end" }, 
                { text: "看封面和PV，对上电波就看。", next: "end" }
            ] 
        },
        end: { text: "下次新番表出来，我们来交流一下避雷经验！", options: [] },

        special_high: {
            text: "天呐！你居然每季新番全追，连冷门泡面番都不放过！你才是真正的“追番机器”！",
            options: [
                { text: "这就是爱的力量！", next: "end_high" },
                { text: "其实我也在努力脱宅。", next: "end_high" }
            ]
        },
        end_high: { text: "不管怎样，保持热爱是很棒的事！下次同步追番啊！", options: [] },

        special_combo: {
            text: "你不仅看番多，还这么懂音乐！你是不是连每一集的OP和ED都不跳过？",
            options: [
                { text: "没错，OP/ED才是灵魂！", next: "end_combo" },
                { text: "有时候神回确实舍不得跳。", next: "end_combo" }
            ]
        },
        end_combo: { text: "真正的视听盛宴就是要连音乐一起享受！", options: [] }
    },

    // ② 凛（二游 - 欧皇）
    gacha: {
        start: {
            text: "哼，看到本欧皇的运气了吗？今天的卡池我十连双黄！",
            options: [
                { text: "吸吸欧气，我今天歪了……", next: "g1" },
                { text: "切，你这也叫欧？有本事单抽出奇迹！", next: "g2" }
            ]
        },
        g1: { 
            text: "哎呀别难过，玄学抽卡要不要了解一下？", 
            options: [
                { text: "快教教我！", next: "end" }, 
                { text: "算了，我还是攒井吧。", next: "end" }
            ] 
        },
        g2: { 
            text: "你竟然敢质疑本欧皇？你肯定是个非酋！", 
            options: [
                { text: "谁说的，我运气好着呢！", next: "end" }, 
                { text: "呜呜呜，别骂了别骂了。", next: "end" }
            ] 
        },
        end: { text: "总之，快乐游戏，理性消费哦！", options: [] },

        special_high: {
            text: "我看你这配置，手机里至少装了五款二游吧！一个月生活费是不是都进卡池了？",
            options: [
                { text: "嘘，不要告诉我妈！", next: "end_high" },
                { text: "真爱的力量，你懂什么！", next: "end_high" }
            ]
        },
        end_high: { text: "哈哈哈放心，我们都是自己人。祝你下次十连满命！", options: [] },

        special_combo: {
            text: "你不仅抽卡，还买手办？！你这属于是线上线下双管齐下，钱包还活着吗？",
            options: [
                { text: "吃土使我快乐。", next: "end_combo" },
                { text: "不买立省百分百，但我做不到。", next: "end_combo" }
            ]
        },
        end_combo: { text: "这就是二次元消费的终极形态吧。", options: [] }
    },

    // ③ 雪乃（JRPG - 练级狂）
    jrpg: {
        start: {
            text: "你也是练级狂吗？我最喜欢在隐藏迷宫刷满级了。",
            options: [
                { text: "满级才有安全感，我懂！", next: "j1" },
                { text: "我只想快点推主线看剧情……", next: "j2" }
            ]
        },
        j1: { 
            text: "对吧！看着经验条涨满的感觉太棒了。", 
            options: [
                { text: "尤其是全队99级的时候。", next: "end" }, 
                { text: "你已经练满几队了？", next: "end" }
            ] 
        },
        j2: { 
            text: "剧情党也不错，不过不练级后面容易卡关哦。", 
            options: [
                { text: "到时候再回头刷吧。", next: "end" }, 
                { text: "卡关了我直接查攻略！", next: "end" }
            ] 
        },
        end: { text: "下次聊聊你最喜欢的战斗系统吧。", options: [] },

        special_high: {
            text: "你不仅练级，还要全成就白金？你这种强迫症玩家，玩起游戏来一定很肝吧。",
            options: [
                { text: "白金是我的最低要求。", next: "end_high" },
                { text: "其实肝完很有成就感。", next: "end_high" }
            ]
        },
        end_high: { text: "下次如果你遇到难白金的游戏，欢迎来找我交流经验。", options: [] },

        special_combo: {
            text: "你不仅喜欢JRPG，还收藏OST？你是不是经常打完最终boss，听着片尾曲发呆？",
            options: [
                { text: "片尾曲一响，眼泪就下来了。", next: "end_combo" },
                { text: "有些游戏光听音乐就值回票价了。", next: "end_combo" }
            ]
        },
        end_combo: { text: "好的游戏音乐和剧情，就是能让人记一辈子。", options: [] }
    },

    // ④ 小葵（梗/同人 - 整活王）
    meme: {
        start: { 
            text: "嘿嘿，发现一个整活的好苗子！你也是玩梗大师吗？", 
            options: [
                { text: "表情包储备过万，斗图从未输过！", next: "m1" }, 
                { text: "我只是个默默看大家整活的潜水员。", next: "m2" }
            ] 
        },
        m1: { 
            text: "高手！快把这张梗图收下，我刚刚做的。", 
            options: [
                { text: "好图，拿了！", next: "end" }, 
                { text: "这个梗有点冷啊哈哈。", next: "end" }
            ] 
        },
        m2: { 
            text: "潜水多没意思，来，跟我一起整活！", 
            options: [
                { text: "下次一定，下次一定。", next: "end" }, 
                { text: "好，那你带带我！", next: "end" }
            ] 
        },
        end: { text: "下次一起在群里整活啊！", options: [] },
        special_high: { 
            text: "你居然是个产粮大户？！你这已经不是玩梗了，你是在创造梗！大佬受我一拜。", 
            options: [
                { text: "低调低调。", next: "end_high" }, 
                { text: "为了圈子，用爱发电！", next: "end_high" }
            ] 
        },
        end_high: { text: "有你在，我们圈子永远不会缺乐子！", options: [] },
        special_combo: { 
            text: "既能产粮又买周边，你简直是二次元的模范夫妻（？）", 
            options: [
                { text: "爱他就为他花钱！", next: "end_combo" }, 
                { text: "我的钱包已经空了。", next: "end_combo" }
            ] 
        },
        end_combo: { text: "这就是用真金白银和才华表达的爱啊。", options: [] }
    },

    // ⑤ 诗织（音乐 - 感性派）
    music: {
        start: { 
            text: "你听到了吗？这首 OP 真的太好听了，循环了一下午。", 
            options: [
                { text: "是呀，戴上耳机整个世界都安静了。", next: "mu1" }, 
                { text: "我最近在听 OST，纯音乐也很棒。", next: "mu2" }
            ] 
        },
        mu1: { 
            text: "对！有时候听歌比看番还让人感动呢。", 
            options: [
                { text: "音乐真的能治愈一切。", next: "end" }, 
                { text: "你最喜欢哪首？", next: "end" }
            ] 
        },
        mu2: { 
            text: "OST 超有画面感的，特别是战斗曲！", 
            options: [
                { text: "打boss的时候燃爆了。", next: "end" }, 
                { text: "听完感觉又能再战三百回合！", next: "end" }
            ] 
        },
        end: { text: "推荐你几首我最近单曲循环的曲子吧。", options: [] },
        special_high: { 
            text: "你的歌单里居然全是纯音乐和OST？！你这种听觉生物，绝对是个有故事的人。", 
            options: [
                { text: "纯音乐更能引发想象。", next: "end_high" }, 
                { text: "人声有时候太吵了。", next: "end_high" }
            ] 
        },
        end_high: { text: "说得太对了，音乐就是另一种语言。", options: [] },
        special_combo: { 
            text: "你不仅听，还去线下Live？能为了音乐飞日本，你的行动力太强了。", 
            options: [
                { text: "Live的氛围无可替代。", next: "end_combo" }, 
                { text: "为了见歌手，值了！", next: "end_combo" }
            ] 
        },
        end_combo: { text: "亲临现场的感受，确实比耳机里震撼一万倍。", options: [] }
    },

    // ⑥ 千寻（周边 - 收藏家）
    merch: {
        start: { 
            text: "哇，你的收藏柜好整齐啊。我也超喜欢收集周边！", 
            options: [
                { text: "为了收齐这套，我吃了一个月泡面。", next: "me1" }, 
                { text: "还好啦，我比较克制，只买最喜欢的。", next: "me2" }
            ] 
        },
        me1: { 
            text: "同道中人！为了爱饿肚子也值得！", 
            options: [
                { text: "这就是爱吧！", next: "end" }, 
                { text: "不过下次还是得量力而行。", next: "end" }
            ] 
        },
        me2: { 
            text: "理智消费也很好，看着它们就很开心了。", 
            options: [
                { text: "是呀，每次看到心情都会变好。", next: "end" }, 
                { text: "你最喜欢哪个角色的周边？", next: "end" }
            ] 
        },
        end: { text: "下次如果有漫展，我们一起去扫货！", options: [] },
        special_high: { 
            text: "你这收藏量……不仅吃土，甚至专门为周边买了个大柜子吧？这就是传说中的“为爱买单”吗！", 
            options: [
                { text: "柜子已经满了，准备换房。", next: "end_high" }, 
                { text: "这都是我打下的江山！", next: "end_high" }
            ] 
        },
        end_high: { text: "下次去你家参观一下我的梦中情柜！", options: [] },
        special_combo: { 
            text: "你买周边，还去漫展摆摊？你这不仅是消费者，还是圈内的商业鬼才啊！", 
            options: [
                { text: "回血才能买更多周边。", next: "end_combo" }, 
                { text: "主要是为了和同好交流！", next: "end_combo" }
            ] 
        },
        end_combo: { text: "以贩养吸，这就是周边圈的生存法则。", options: [] }
    }
};

// 角色数据（图片名字对应你的 images 文件夹）
const CHARACTERS = {
    anime:  { name: '小春', title: '追番狂', img: 'images/chun.png' },
    gacha:  { name: '凛',   title: '欧皇',   img: 'images/rin.png' },
    jrpg:   { name: '雪乃', title: '练级狂', img: 'images/yukino.png' },
    meme:   { name: '小葵', title: '整活王', img: 'images/aoi.png' },
    music:  { name: '诗织', title: '感性派', img: 'images/shiori.png' },
    merch:  { name: '千寻', title: '收藏家', img: 'images/chihiro.png' }
};