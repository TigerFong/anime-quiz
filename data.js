const QUESTIONS = [
  {
    "id": 1,
    "dim": "anime",
    "difficulty": "easy",
    "question": "“我变秃了，也变强了。”这句经典台词出自哪部作品？",
    "options": [
      { "text": "《一拳超人》", "correct": true },
      { "text": "《我的英雄学院》", "correct": false },
      { "text": "《灵能百分百》", "correct": false },
      { "text": "《齐木楠雄的灾难》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "埼玉老师用亲身经历告诉你，变强的代价不是失去头发，是失去表情管理。"
  },
  {
    "id": 2,
    "dim": "anime",
    "difficulty": "easy",
    "question": "“教练，我想打篮球。”这句名台词出自哪部作品？",
    "options": [
      { "text": "《黑子的篮球》", "correct": false },
      { "text": "《灌篮高手》", "correct": true },
      { "text": "《排球少年》", "correct": false },
      { "text": "《free!》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "三井寿用一句台词证明，男人可以堕落两年，但看到安西教练的下巴就能原地复活。"
  },
  {
    "id": 3,
    "dim": "anime",
    "difficulty": "easy",
    "question": "下列哪部作品的主角名字叫“漩涡鸣人”？",
    "options": [
      { "text": "《海贼王》", "correct": false },
      { "text": "《死神》", "correct": false },
      { "text": "《火影忍者》", "correct": true },
      { "text": "《妖精的尾巴》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "鸣人：我不仅是火影，还是全忍界最忙的嘴遁使用者。"
  },
  {
    "id": 4,
    "dim": "anime",
    "difficulty": "easy",
    "question": "“我是要成为海贼王的男人！”这句话是谁说的？",
    "options": [
      { "text": "蒙奇·D·路飞", "correct": true },
      { "text": "罗罗诺亚·索隆", "correct": false },
      { "text": "山治", "correct": false },
      { "text": "波特卡斯·D·艾斯", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "路飞喊了二十多年，海贼王还没当上，草帽倒是越来越传说了。"
  },
  {
    "id": 5,
    "dim": "anime",
    "difficulty": "easy",
    "question": "《鬼灭之刃》中，灶门炭治郎的妹妹叫什么名字？",
    "options": [
      { "text": "灶门祢豆子", "correct": true },
      { "text": "灶门花子", "correct": false },
      { "text": "灶门向日葵", "correct": false },
      { "text": "灶门小梅", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "祢豆子咬着竹筒不说话，靠颜值撑起了整部番的周边销量。"
  },
  {
    "id": 6,
    "dim": "anime",
    "difficulty": "easy",
    "question": "“吱吱吱吱吱吱”这段经典“鼠叫”出自哪部作品？",
    "options": [
      { "text": "《进击的巨人》", "correct": false },
      { "text": "《东京喰种》", "correct": true },
      { "text": "《甲铁城的卡巴内瑞》", "correct": false },
      { "text": "《寄生兽》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "金木研本是一介文弱大学生，直到被迫上演人肉刺身名场面。"
  },
  {
    "id": 7,
    "dim": "anime",
    "difficulty": "easy",
    "question": "“艾伦，你坐啊。”这句著名的“椅子梗”出自哪部作品？",
    "options": [
      { "text": "《进击的巨人》", "correct": true },
      { "text": "《东京喰种》", "correct": false },
      { "text": "《钢之炼金术师》", "correct": false },
      { "text": "《亚人》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "莱纳在马莱当了四年战士，最后被艾伦一句你坐啊干碎心理防线。"
  },
  {
    "id": 8,
    "dim": "anime",
    "difficulty": "medium",
    "question": "“都是时臣的错”这个梗最初出自哪部动画？",
    "options": [
      { "text": "《Fate/stay night》", "correct": false },
      { "text": "《Fate/Zero》", "correct": true },
      { "text": "《空之境界》", "correct": false },
      { "text": "《魔法少女小圆》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "时臣死了还要给全宇宙悲剧背锅，堪称二次元最强承重墙。"
  },
  {
    "id": 9,
    "dim": "anime",
    "difficulty": "medium",
    "question": "“我打完这场仗，就回老家结婚。”这句“死亡Flag”名言出自哪部动画？",
    "options": [
      { "text": "《龙之塔》", "correct": true },
      { "text": "《Fate/Zero》", "correct": false },
      { "text": "《进击的巨人》", "correct": false },
      { "text": "《Re:从零开始的异世界生活》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "说完这句话的角色基本都领了便当，堪称用嘴发便当的祖师爷。"
  },
  {
    "id": 10,
    "dim": "anime",
    "difficulty": "medium",
    "question": "动画《钢之炼金术师 FULLMETAL ALCHEMIST》（2009版）由哪家公司制作？",
    "options": [
      { "text": "MAPPA", "correct": false },
      { "text": "BONES（骨头社）", "correct": true },
      { "text": "ufotable（飞碟社）", "correct": false },
      { "text": "J.C.STAFF", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "骨头社：我们不差钱，我们只差销量。"
  },
  {
    "id": 11,
    "dim": "anime",
    "difficulty": "medium",
    "question": "动画《鬼灭之刃》和《Fate/Zero》的共同制作公司是？",
    "options": [
      { "text": "MAPPA", "correct": false },
      { "text": "BONES", "correct": false },
      { "text": "ufotable", "correct": true },
      { "text": "京都动画", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "飞碟社把特效做成了招牌菜，光污染？那叫经费在燃烧。"
  },
  {
    "id": 12,
    "dim": "anime",
    "difficulty": "medium",
    "question": "动画《Re:从零开始的异世界生活》的原作者是谁？",
    "options": [
      { "text": "丸山黄金", "correct": false },
      { "text": "长月达平", "correct": true },
      { "text": "川原砾", "correct": false },
      { "text": "伏濑", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "长月老贼以把主角往死里虐闻名，菜月昴死了一次又一次。"
  },
  {
    "id": 13,
    "dim": "anime",
    "difficulty": "medium",
    "question": "声优钉宫理惠的代表角色不包括以下哪一个？",
    "options": [
      { "text": "夏娜（《灼眼的夏娜》）", "correct": false },
      { "text": "逢坂大河（《龙与虎》）", "correct": false },
      { "text": "三千院凪（《旋风管家》）", "correct": false },
      { "text": "御坂美琴（《某科学的超电磁炮》）", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "御坂美琴的声优是佐藤利奈，钉宫病疫苗里没有炮姐。"
  },
  {
    "id": 14,
    "dim": "anime",
    "difficulty": "medium",
    "question": "动画《星际牛仔》（Cowboy Bebop）的导演是谁？",
    "options": [
      { "text": "庵野秀明", "correct": false },
      { "text": "渡边信一郎", "correct": true },
      { "text": "今敏", "correct": false },
      { "text": "押井守", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "渡边信一郎用爵士乐配太空西部片，Spike的whatever happens至今是社畜哲学。"
  },
  {
    "id": 15,
    "dim": "anime",
    "difficulty": "hard",
    "question": "1998年播出的实验性赛博朋克动画《玲音》（Serial Experiments Lain），导演是？",
    "options": [
      { "text": "中村隆太郎", "correct": true },
      { "text": "汤浅政明", "correct": false },
      { "text": "几原邦彦", "correct": false },
      { "text": "神山健治", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "中村隆太郎用13集把网络与现实边界拍成哲学论文。"
  },
  {
    "id": 16,
    "dim": "anime",
    "difficulty": "hard",
    "question": "下列哪部作品不是导演汤浅政明的作品？",
    "options": [
      { "text": "《四叠半神话大系》", "correct": false },
      { "text": "《乒乓》", "correct": false },
      { "text": "《恶魔人 Crybaby》", "correct": false },
      { "text": "《攻壳机动队 STAND ALONE COMPLEX》", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "攻壳SAC的导演是神山健治，汤浅政明的人物可以扭成麻花。"
  },
  {
    "id": 17,
    "dim": "anime",
    "difficulty": "hard",
    "question": "1997年播出，由几原邦彦执导，以“蔷薇新娘”和“革命”为核心意象的动画是？",
    "options": [
      { "text": "《少女革命》", "correct": true },
      { "text": "《美少女战士》", "correct": false },
      { "text": "《魔卡少女樱》", "correct": false },
      { "text": "《NANA》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "几原邦彦把性别、权力和童话全部拆了重组。"
  },
  {
    "id": 18,
    "dim": "anime",
    "difficulty": "hard",
    "question": "动画《虫师》的主角“银古”的职业设定是什么？",
    "options": [
      { "text": "阴阳师", "correct": false },
      { "text": "妖怪猎人", "correct": false },
      { "text": "虫师", "correct": true },
      { "text": "驱魔人", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "银古不除妖不驱魔，只是到处旅游顺便解决虫引发的怪事。"
  },
  {
    "id": 19,
    "dim": "anime",
    "difficulty": "hard",
    "question": "以下哪部作品与《攻壳机动队》（1995年剧场版）的导演相同？",
    "options": [
      { "text": "《星际牛仔》", "correct": false },
      { "text": "《机动警察剧场版2》", "correct": true },
      { "text": "《玲音》", "correct": false },
      { "text": "《四叠半神话大系》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "两部都是押井守，他拍的是让你看完睡不着的东西。"
  },
  {
    "id": 20,
    "dim": "anime",
    "difficulty": "easy",
    "question": "在二次元圈子里说“错的不是我，是这个世界”，大家第一时间会想到哪个角色？",
    "options": [
      { "text": "鲁路修·兰佩路基", "correct": false },
      { "text": "夜神月", "correct": false },
      { "text": "金木研", "correct": true },
      { "text": "艾伦·耶格尔", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "弹幕里刷这句话的，十个有九个刚看完金木被折磨。"
  },
  {
    "id": 21,
    "dim": "anime",
    "difficulty": "easy",
    "question": "圈内著名的梗“战斗力只有5的渣渣”出自哪部作品？",
    "options": [
      { "text": "《一拳超人》", "correct": false },
      { "text": "《龙珠》", "correct": true },
      { "text": "《火影忍者》", "correct": false },
      { "text": "《北斗神拳》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "拉蒂兹看一眼农夫，你就学会嘲讽所有打游戏比你菜的朋友。"
  },
  {
    "id": 22,
    "dim": "anime",
    "difficulty": "easy",
    "question": "蕾姆是哪部异世界题材动画中的人气女仆角色？",
    "options": [
      { "text": "《关于我转生变成史莱姆这档事》", "correct": false },
      { "text": "《Re:从零开始的异世界生活》", "correct": true },
      { "text": "《无职转生》", "correct": false },
      { "text": "《为美好的世界献上祝福！》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "选错这道题的人，大概率已经被雷姆的流星锤砸碎了膝盖。"
  },
  {
    "id": 23,
    "dim": "anime",
    "difficulty": "easy",
    "question": "以下哪部作品的男主角不是靠“转生/穿越”去异世界的？",
    "options": [
      { "text": "《刀剑神域》", "correct": true },
      { "text": "《盾之勇者成名录》", "correct": false },
      { "text": "《幼女战记》", "correct": false },
      { "text": "《游戏人生》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "桐人只是戴头盔把自己锁在游戏里，顶多算物理网瘾少年。"
  },
  {
    "id": 24,
    "dim": "anime",
    "difficulty": "easy",
    "question": "《咒术回战》中，五条悟摘下眼罩发动领域展开时喊出的招式名是什么？",
    "options": [
      { "text": "无量空处", "correct": true },
      { "text": "伏魔御厨子", "correct": false },
      { "text": "嵌合暗翳庭", "correct": false },
      { "text": "自闭圆顿裹", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "把敌人大脑塞满无限信息导致宕机，就像考前复习高数。"
  },
  {
    "id": 25,
    "dim": "anime",
    "difficulty": "medium",
    "question": "《命运石之门》中，冈部伦太郎每次挂电话前必说的中二口头禅是什么？",
    "options": [
      { "text": "爆裂吧现实！粉碎吧精神！", "correct": false },
      { "text": "El Psy Kongroo", "correct": true },
      { "text": "我毁灭了世界，又创造了世界", "correct": false },
      { "text": "一切都是命运石之门的选择", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "现实里对着电话说这句，别人只会建议你挂精神科。"
  },
  {
    "id": 26,
    "dim": "anime",
    "difficulty": "medium",
    "question": "被誉为“人类圣经”的TV动画《紫罗兰永恒花园》，是由哪家动画公司制作的？",
    "options": [
      { "text": "京都动画", "correct": true },
      { "text": "P.A.WORKS", "correct": false },
      { "text": "骨头社", "correct": false },
      { "text": "Madhouse", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "京阿尼用每一帧告诉你，打字机能打出经费的味道。"
  },
  {
    "id": 27,
    "dim": "anime",
    "difficulty": "medium",
    "question": "《辉夜大小姐想让我告白》中，藤原千花在第三集片尾跳的那段洗脑舞蹈叫什么？",
    "options": [
      { "text": "书记舞", "correct": true },
      { "text": "恋爱循环", "correct": false },
      { "text": "极乐净土", "correct": false },
      { "text": "辉夜舞", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "这段舞让无数画师肝到吐血，证明卖萌真的可以为所欲为。"
  },
  {
    "id": 28,
    "dim": "anime",
    "difficulty": "hard",
    "question": "赛博朋克神作《攻壳机动队 S.A.C.》的导演是谁？",
    "options": [
      { "text": "押井守", "correct": false },
      { "text": "神山健治", "correct": true },
      { "text": "黄濑和哉", "correct": false },
      { "text": "士郎正宗", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "别看到攻壳就喊押井守，TV版的神山健治也有姓名。"
  },
  {
    "id": 29,
    "dim": "anime",
    "difficulty": "hard",
    "question": "汤浅政明执导的《四叠半神话大系》中，男主在每个平行世界里都会遇到的损友叫什么名字？",
    "options": [
      { "text": "小津", "correct": true },
      { "text": "樋口", "correct": false },
      { "text": "城崎", "correct": false },
      { "text": "相岛", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "长得像妖怪、性格像恶魔的小津，是每个大学生都避不开的社交诅咒。"
  },
  {
    "id": 30,
    "dim": "anime",
    "difficulty": "hard",
    "question": "《无职转生》中，男主鲁迪乌斯前世因为什么契机决定走出家门？",
    "options": [
      { "text": "父母去世后被赶出家门", "correct": false },
      { "text": "参加父母葬礼后遭到侄子们殴打驱赶", "correct": true },
      { "text": "房子被强制拆除", "correct": false },
      { "text": "突然觉醒了魔法系统", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "34岁啃老族被亲侄子揍出门，然后救人被卡车创死，异世界召唤越来越不讲究。"
  },
  {
    "id": 31,
    "dim": "anime",
    "difficulty": "hard",
    "question": "《进击的巨人》中，艾尔文·史密斯在最终冲锋前对利威尔托付了什么？",
    "options": [
      { "text": "“谢谢你一直陪着我”", "correct": false },
      { "text": "“放弃梦想去死吧，带着新兵们冲向地狱”", "correct": true },
      { "text": "“献出你的心脏”", "correct": false },
      { "text": "“这是最后的命令了”", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "兵长一句放弃梦想去死吧直接封神。"
  },
  {
    "id": 32,
    "dim": "anime",
    "difficulty": "easy",
    "question": "名台词“真相只有一个！”出自以下哪部作品？",
    "options": [
      { "text": "《名侦探柯南》", "correct": true },
      { "text": "《金田一少年事件簿》", "correct": false },
      { "text": "《死亡笔记》", "correct": false },
      { "text": "《心理测量者》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "死神小学生走到哪死到哪，物理意义上的真相只有一个。"
  },
  {
    "id": 33,
    "dim": "anime",
    "difficulty": "easy",
    "question": "以下哪一部是京都动画制作的日常系神作？",
    "options": [
      { "text": "《进击的巨人》", "correct": false },
      { "text": "《轻音少女》", "correct": true },
      { "text": "《鬼灭之刃》", "correct": false },
      { "text": "《咒术回战》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "当年的废萌巅峰，拯救无数社畜心灵的电子阿米巴原虫。"
  },
  {
    "id": 34,
    "dim": "anime",
    "difficulty": "easy",
    "question": "在《进击的巨人》中，调查兵团标志性的敬礼动作是哪只手拍击胸口？",
    "options": [
      { "text": "左手", "correct": true },
      { "text": "右手", "correct": false },
      { "text": "双手同时", "correct": false },
      { "text": "随便哪只手，帅就行", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "把心脏献给左边，因为心脏在左胸。"
  },
  {
    "id": 35,
    "dim": "anime",
    "difficulty": "medium",
    "question": "以下哪部日常恋爱番以“颜艺”和“屑”属性闻名，被称为“疯狂的颜艺秀”？",
    "options": [
      { "text": "《月色真美》", "correct": false },
      { "text": "《擅长捉弄的高木同学》", "correct": false },
      { "text": "《辉夜大小姐想让我告白》", "correct": false },
      { "text": "《狂赌之渊》", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "百花王学园的日行一疯，把美少女变成颜艺怪兽。"
  },
  {
    "id": 36,
    "dim": "anime",
    "difficulty": "medium",
    "question": "圈内梗“白色相簿的季节”通常用来形容哪一种复杂的感情关系？",
    "options": [
      { "text": "后宫大团圆", "correct": false },
      { "text": "纯爱战神无敌", "correct": false },
      { "text": "三角恋、胃疼、药丸的修罗场", "correct": true },
      { "text": "单身狗的狂欢", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "又到了白色相簿的季节，为什么你这么熟练啊。"
  },
  {
    "id": 37,
    "dim": "anime",
    "difficulty": "medium",
    "question": "以下哪部运动番以“排球”为主题，被称为“没有超能力但燃到飞起”的王道佳作？",
    "options": [
      { "text": "《网球王子》", "correct": false },
      { "text": "《排球少年！！》", "correct": true },
      { "text": "《钻石王牌》", "correct": false },
      { "text": "《Free!》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "飞吧，乌野高中，青春和汗水的味道透过屏幕直冲面门。"
  },
  {
    "id": 38,
    "dim": "anime",
    "difficulty": "hard",
    "question": "在庵野秀明监督的《EVA》中，人类补完计划的终极呈现形态通常被粉丝戏称为？",
    "options": [
      { "text": "全员赛博飞升", "correct": false },
      { "text": "橙汁大锅炖", "correct": true },
      { "text": "异世界转生大礼包", "correct": false },
      { "text": "变成巨大的初号机手办", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "恭喜，人类最终实现了物理意义上的你侬我侬大融合。"
  },
  {
    "id": 39,
    "dim": "anime",
    "difficulty": "hard",
    "question": "被称为冷门神作的实验性科幻动画《玲音》，其故事核心主要通过什么媒介与人类世界相连？",
    "options": [
      { "text": "称为Navi的早期个人终端与网络Wired", "correct": true },
      { "text": "智能手机与短视频APP", "correct": false },
      { "text": "魔法阵", "correct": false },
      { "text": "外星飞船信号", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "1998年就精准预测了万物皆可连网的社恐互联网时代。"
  },
  {
    "id": 40,
    "dim": "anime",
    "difficulty": "hard",
    "question": "被誉为“治愈系天花板”的《虫师》，其主角“银古”的标志性外貌特征是什么？",
    "options": [
      { "text": "金发碧眼、戴黑框眼镜", "correct": false },
      { "text": "一头银发、带着眼罩、常年抽烟", "correct": true },
      { "text": "光头、披着红色斗篷", "correct": false },
      { "text": "戴草帽、穿背带裤", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "虫师界的烟鬼大叔，行走的生态平衡维护者。"
  },
  {
    "id": 41,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "二游抽卡术语“歪了”是什么意思？",
    "options": [
      { "text": "抽卡时网络断了，抽卡失败", "correct": false },
      { "text": "抽到非当期UP角色", "correct": true },
      { "text": "抽到了重复角色", "correct": false },
      { "text": "抽卡时手机歪着拿", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "金光一闪出来常驻熟面孔，心也跟着歪了。"
  },
  {
    "id": 42,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "“小保底”通常指什么？",
    "options": [
      { "text": "第一次出金有概率不是当期UP", "correct": true },
      { "text": "必出当期UP角色的保底", "correct": false },
      { "text": "武器池专属保底", "correct": false },
      { "text": "新手池首次十连", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "小保底给你希望，再给你绝望。"
  },
  {
    "id": 43,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "明日方舟中，玩家在游戏里被称为什么？",
    "options": [
      { "text": "指挥官", "correct": false },
      { "text": "博士", "correct": true },
      { "text": "老师", "correct": false },
      { "text": "御主", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "罗德岛战术全靠一个失忆症患者，这合理吗？"
  },
  {
    "id": 44,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "蔚蓝档案中，玩家在游戏里的身份是？",
    "options": [
      { "text": "博士", "correct": false },
      { "text": "指挥官", "correct": false },
      { "text": "老师", "correct": true },
      { "text": "骑士君", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "带领一群持枪少女在学园都市解决问题，现实里第二天就被请喝茶。"
  },
  {
    "id": 45,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "下列哪款游戏是米哈游开发的？",
    "options": [
      { "text": "明日方舟", "correct": false },
      { "text": "战双帕弥什", "correct": false },
      { "text": "崩坏3", "correct": true },
      { "text": "少女前线", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "米哈游从崩坏学园一路崩到原神，崩就一个字。"
  },
  {
    "id": 46,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "明日方舟的制作公司是？",
    "options": [
      { "text": "米哈游", "correct": false },
      { "text": "鹰角网络", "correct": true },
      { "text": "库洛游戏", "correct": false },
      { "text": "散爆网络", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "鹰角几个人的小团队做出明日方舟，然后发现玩家比他们还懂游戏。"
  },
  {
    "id": 47,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "公主连结Re:Dive的国服由哪家公司代理？",
    "options": [
      { "text": "腾讯", "correct": false },
      { "text": "网易", "correct": false },
      { "text": "bilibili", "correct": true },
      { "text": "米哈游", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "B站代理的游戏，B站自己就是最大宣传渠道。"
  },
  {
    "id": 48,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "二游术语“吃井”是什么意思？",
    "options": [
      { "text": "抽到了常驻角色", "correct": false },
      { "text": "抽满保底次数才拿到当期UP角色", "correct": true },
      { "text": "吃掉了其他角色的保底", "correct": false },
      { "text": "十连全是三星", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "井底之蛙不是最惨的，最惨的是还得自己掏钱买井。"
  },
  {
    "id": 49,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "少女前线的开发商是？",
    "options": [
      { "text": "鹰角网络", "correct": false },
      { "text": "散爆网络", "correct": true },
      { "text": "库洛游戏", "correct": false },
      { "text": "叠纸游戏", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "羽中带着云母组做出了少女前线，枪娘成了无数指挥官的信仰。"
  },
  {
    "id": 50,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "战双帕弥什的开发商是？",
    "options": [
      { "text": "米哈游", "correct": false },
      { "text": "库洛游戏", "correct": true },
      { "text": "鹰角网络", "correct": false },
      { "text": "散爆网络", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "库洛做动作手游，最大敌人不是米哈游，是玩家手机发烫。"
  },
  {
    "id": 51,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "蔚蓝档案的开发商是哪家韩国公司旗下的工作室？",
    "options": [
      { "text": "NEXON Games（MX studio）", "correct": true },
      { "text": "NCSoft", "correct": false },
      { "text": "Netmarble", "correct": false },
      { "text": "Smilegate", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "韩国人做出蔚蓝档案，悠星带到日本，B站带到中国，钱包是全世界的。"
  },
  {
    "id": 52,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "明日方舟中，天灾过后会在土地上留下什么神秘矿物？",
    "options": [
      { "text": "魔晶", "correct": false },
      { "text": "源石", "correct": true },
      { "text": "以太", "correct": false },
      { "text": "贤者之石", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "源石既是能源也是绝症，感染者不是病了，是被天灾收割了。"
  },
  {
    "id": 53,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "蔚蓝档案的故事舞台“基沃托斯”是什么类型的城市？",
    "options": [
      { "text": "军事要塞都市", "correct": false },
      { "text": "学园都市", "correct": true },
      { "text": "海上浮岛", "correct": false },
      { "text": "地下城市", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "学生自治、头顶光环、随身带枪，这叫持枪学区房。"
  },
  {
    "id": 54,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "二游中常说的“常驻池”和“限定池”最大的区别是什么？",
    "options": [
      { "text": "常驻池抽卡更便宜", "correct": false },
      { "text": "限定池的角色不会进入常驻池", "correct": true },
      { "text": "常驻池没有保底", "correct": false },
      { "text": "限定池只能用付费货币抽", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "限定池过了这个村没这个店，常驻池你什么时候来他们都在。"
  },
  {
    "id": 55,
    "dim": "gacha",
    "difficulty": "hard",
    "question": "FGO日服的保底（天井）系统是什么时候实装的？",
    "options": [
      { "text": "2018年", "correct": false },
      { "text": "2020年", "correct": false },
      { "text": "2022年", "correct": true },
      { "text": "2024年", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "运营了六年半才实装保底，千石一宝时代终于结束。"
  },
  {
    "id": 56,
    "dim": "gacha",
    "difficulty": "hard",
    "question": "下列哪位不是米哈游的创始人？",
    "options": [
      { "text": "蔡浩宇", "correct": false },
      { "text": "刘伟", "correct": false },
      { "text": "罗宇皓", "correct": false },
      { "text": "羽中", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "羽中是散爆网络创始人，做的是少女前线。"
  },
  {
    "id": 57,
    "dim": "gacha",
    "difficulty": "hard",
    "question": "库洛游戏的创始人兼董事长是？",
    "options": [
      { "text": "刘伟", "correct": false },
      { "text": "刘胜", "correct": true },
      { "text": "黄翀", "correct": false },
      { "text": "海猫络合物", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "刘胜做战双和鸣潮，然后腾讯带着钱来了。"
  },
  {
    "id": 58,
    "dim": "gacha",
    "difficulty": "hard",
    "question": "白夜极光国服正式停止运营的时间是？",
    "options": [
      { "text": "2023年6月", "correct": false },
      { "text": "2024年1月", "correct": false },
      { "text": "2025年1月24日", "correct": true },
      { "text": "2026年1月", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "一年半，一款美术顶级的游戏就这么没了。"
  },
  {
    "id": 59,
    "dim": "gacha",
    "difficulty": "hard",
    "question": "少女前线国服于哪一年正式停止运营？",
    "options": [
      { "text": "2022年", "correct": false },
      { "text": "2023年", "correct": false },
      { "text": "2024年", "correct": true },
      { "text": "2025年", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "运营八年多，指挥官等来的是停服公告。"
  },
  {
    "id": 60,
    "dim": "gacha",
    "difficulty": "hard",
    "question": "下列哪款游戏不属于“塔防”类型？",
    "options": [
      { "text": "明日方舟", "correct": false },
      { "text": "千年之旅", "correct": false },
      { "text": "白夜极光", "correct": false },
      { "text": "少女前线", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "少女前线核心是战棋策略，不是塔防。"
  },
  {
    "id": 61,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "开放世界二游《原神》是由哪家公司开发的？",
    "options": [
      { "text": "鹰角网络", "correct": false },
      { "text": "库洛游戏", "correct": false },
      { "text": "米哈游", "correct": true },
      { "text": "叠纸游戏", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "大伟哥用你们的648在上海买楼，你还在提瓦特捡垃圾。"
  },
  {
    "id": 62,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "在《崩坏：星穹铁道》中，用来抽取角色卡的专属道具叫什么？",
    "options": [
      { "text": "纠缠之缘", "correct": false },
      { "text": "星轨专票", "correct": true },
      { "text": "相遇之缘", "correct": false },
      { "text": "命运石之门", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "星轨专票，一张通往非酋地狱的单程车票。"
  },
  {
    "id": 63,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "以下哪位角色不属于《蔚蓝档案》？",
    "options": [
      { "text": "阿罗娜", "correct": false },
      { "text": "白子", "correct": false },
      { "text": "优香", "correct": false },
      { "text": "派蒙", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "派蒙是应急食品，塞进基沃托斯钱包和胃都会爆炸。"
  },
  {
    "id": 64,
    "dim": "gacha",
    "difficulty": "easy",
    "question": "《Fate/Grand Order》在游戏类型上属于什么？",
    "options": [
      { "text": "3D动作游戏", "correct": false },
      { "text": "塔防游戏", "correct": false },
      { "text": "指令卡牌RPG", "correct": true },
      { "text": "开放世界探索", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "2015年上线的回合制卡牌游戏，硬是靠厨力让人倾家荡产。"
  },
  {
    "id": 65,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "《公主连结Re:Dive》中，玩家扮演的男主角因为失去记忆变成了什么状态？",
    "options": [
      { "text": "变成了一只猫", "correct": false },
      { "text": "智力退化，被称为骑士君", "correct": true },
      { "text": "变成了反派BOSS", "correct": false },
      { "text": "穿越回了现实世界", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "全兰德索尔的老婆都在养一个生活不能自理的废人。"
  },
  {
    "id": 66,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "《少女前线》的玩家在游戏剧情中被设定为什么身份？",
    "options": [
      { "text": "博士", "correct": false },
      { "text": "开拓者", "correct": false },
      { "text": "指挥官", "correct": true },
      { "text": "老师", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "指挥官听起来威风，实际是格里芬基地的赛博包工头。"
  },
  {
    "id": 67,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "《永远的7日之都》的核心玩法类型是什么？",
    "options": [
      { "text": "开放世界射击", "correct": false },
      { "text": "多结局文字AVG加即时战斗", "correct": true },
      { "text": "自走棋", "correct": false },
      { "text": "纯音游", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "网易教你如何在7天里体验100种死法。"
  },
  {
    "id": 68,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "在《碧蓝航线》中，“科研船”主要通过什么方式获取？",
    "options": [
      { "text": "直接在常规卡池里抽", "correct": false },
      { "text": "消耗钻石购买", "correct": false },
      { "text": "通过收集图纸在船坞研发建造", "correct": true },
      { "text": "完成主线剧情赠送", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "每天像打卡上班一样刷图纸，肝到肝硬化才换来的老婆。"
  },
  {
    "id": 69,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "《白夜极光》最核心的战斗玩法机制是什么？",
    "options": [
      { "text": "连线消除格子进行攻击", "correct": true },
      { "text": "类似三消的合成玩法", "correct": false },
      { "text": "纯挂机放置收菜", "correct": false },
      { "text": "音乐节奏打歌", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "腾讯证明只要美术够卷，连连看也能包装成史诗救世传说。"
  },
  {
    "id": 70,
    "dim": "gacha",
    "difficulty": "medium",
    "question": "《崩坏3》中，经典动画短片《最后一课》的主角是谁？",
    "options": [
      { "text": "雷电芽衣", "correct": false },
      { "text": "琪亚娜", "correct": false },
      { "text": "无量塔姬子", "correct": true },
      { "text": "布洛妮娅", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "姬子老师用命教会琪亚娜长大，也教会你一分钟流干一年眼泪。"
  },
  {
    "id": 71,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "最终幻想7中，主角克劳德手中的标志性巨剑叫什么名字？",
    "options": [
      { "text": "正宗", "correct": false },
      { "text": "破坏剑", "correct": true },
      { "text": "诸神黄昏", "correct": false },
      { "text": "龙牙", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "一把剑传了三代人，传的不是武器，是替我继续砍的悲壮KPI。"
  },
  {
    "id": 72,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "JRPG里喊“我要成为勇者”的经典系列是？",
    "options": [
      { "text": "最终幻想", "correct": false },
      { "text": "勇者斗恶龙", "correct": true },
      { "text": "传说系列", "correct": false },
      { "text": "女神异闻录", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "三十多年来主角官方身份只有一个，勇者。"
  },
  {
    "id": 73,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "勇者斗恶龙11的主角被国王和敌对势力称为什么？",
    "options": [
      { "text": "光之战士", "correct": false },
      { "text": "恶魔之子", "correct": true },
      { "text": "被选中的人", "correct": false },
      { "text": "龙之化身", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "明明是拯救世界的勇者，一进城就被全国通缉。"
  },
  {
    "id": 74,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "女神异闻录5的主角在怪盗团中的行动代号是？",
    "options": [
      { "text": "Joker", "correct": true },
      { "text": "王子", "correct": false },
      { "text": "骷髅", "correct": false },
      { "text": "狐狸", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "塔罗牌愚者，0号牌，代表无限可能性，现实里连早八都起不来。"
  },
  {
    "id": 75,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "异度神剑的主角修尔克手中的神剑叫什么？",
    "options": [
      { "text": "天羽羽斩", "correct": false },
      { "text": "蒙纳多", "correct": true },
      { "text": "草薙剑", "correct": false },
      { "text": "圣剑·艾克斯卡利伯", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "拿着蒙纳多打架等于开未来视，可惜预知到的未来往往是队友先倒。"
  },
  {
    "id": 76,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "火焰纹章：风花雪月中，以下哪个不是学级名称？",
    "options": [
      { "text": "黑鹫", "correct": false },
      { "text": "青狮子", "correct": false },
      { "text": "金鹿", "correct": false },
      { "text": "白龙", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "三个学级，三条路线，五年后学生全变成要你命的敌人。"
  },
  {
    "id": 77,
    "dim": "jrpg",
    "difficulty": "easy",
    "question": "空之轨迹的主角艾丝蒂尔和约修亚立志从事的职业叫什么？",
    "options": [
      { "text": "猎人", "correct": false },
      { "text": "游击士", "correct": true },
      { "text": "骑士", "correct": false },
      { "text": "魔导士", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "既不是警察也不是佣兵，是给钱就帮你打魔兽找猫修路灯的万能工具人。"
  },
  {
    "id": 78,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "传说系列标志性的战斗系统简称是什么？",
    "options": [
      { "text": "ATB", "correct": false },
      { "text": "LMBS", "correct": true },
      { "text": "CTB", "correct": false },
      { "text": "RTWP", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "线性动作战斗系统，说白了就是2D横版格斗加RPG。"
  },
  {
    "id": 79,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "传说系列的第一部作品是哪款游戏，最初登陆哪个平台？",
    "options": [
      { "text": "宿命传说，PS", "correct": false },
      { "text": "幻想传说，SFC", "correct": true },
      { "text": "永恒传说，PS", "correct": false },
      { "text": "仙乐传说，NGC", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "1995年幻想传说在SFC发售，横版格斗RPG活了三十年。"
  },
  {
    "id": 80,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "时空之轮的开发团队被称为“梦幻团队”，以下哪位不在其中？",
    "options": [
      { "text": "坂口博信", "correct": false },
      { "text": "堀井雄二", "correct": false },
      { "text": "鸟山明", "correct": false },
      { "text": "宫本茂", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "宫本茂在任天堂忙着做马里奥，没空来联合项目串门。"
  },
  {
    "id": 81,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "异度神剑1中，修尔克能够“预见未来”的能力来源于什么？",
    "options": [
      { "text": "他的血统", "correct": false },
      { "text": "蒙纳多", "correct": true },
      { "text": "阿尔维斯", "correct": false },
      { "text": "巨神的祝福", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "预知到的画面通常是队友即将被打飞，像极了你看到DDL后的反应。"
  },
  {
    "id": 82,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "女神异闻录系列中，与伙伴建立羁绊、提升人格面具力量的系统叫什么？",
    "options": [
      { "text": "好感度", "correct": false },
      { "text": "社群 / Social Link", "correct": true },
      { "text": "羁绊值", "correct": false },
      { "text": "信赖度", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "白天上学打工谈恋爱，晚上进异世界砍影子，社恐玩家被针对了。"
  },
  {
    "id": 83,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "最终幻想7中，萨菲罗斯使用的标志性武器是什么？",
    "options": [
      { "text": "巨剑", "correct": false },
      { "text": "太刀“正宗”", "correct": true },
      { "text": "长枪", "correct": false },
      { "text": "双刀", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "三米长太刀，砍人时你甚至不确定他在战斗还是在表演书法。"
  },
  {
    "id": 84,
    "dim": "jrpg",
    "difficulty": "medium",
    "question": "空之轨迹中，角色学习魔法和强化属性依赖的核心装备叫什么？",
    "options": [
      { "text": "魔导器", "correct": false },
      { "text": "导力器", "correct": true },
      { "text": "回路器", "correct": false },
      { "text": "结晶器", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "本质是RPG装备Build系统，但Falcom把它包装成核心科技。"
  },
  {
    "id": 85,
    "dim": "jrpg",
    "difficulty": "hard",
    "question": "异度装甲最初于哪一年、哪个平台发售？",
    "options": [
      { "text": "1996年，SFC", "correct": false },
      { "text": "1998年，PlayStation", "correct": true },
      { "text": "2000年，PS2", "correct": false },
      { "text": "2002年，NGC", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "第二张碟全程坐椅子听旁白，游戏史上最著名的预算用完现场。"
  },
  {
    "id": 86,
    "dim": "jrpg",
    "difficulty": "hard",
    "question": "异度神剑1的最终反派赞扎，其真实身份是什么？",
    "options": [
      { "text": "被蒙纳多控制的机神", "correct": false },
      { "text": "巨神本身 / 人类科学家克劳乌斯", "correct": true },
      { "text": "修尔克的父亲", "correct": false },
      { "text": "阿尔维斯的化身", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "整个异度神剑1，本质是一个科学家炸了宇宙之后的精神内耗。"
  },
  {
    "id": 87,
    "dim": "jrpg",
    "difficulty": "hard",
    "question": "火焰纹章系列初代《暗黑龙与光之剑》的主角是谁？",
    "options": [
      { "text": "罗伊", "correct": false },
      { "text": "马尔斯", "correct": true },
      { "text": "艾克", "correct": false },
      { "text": "林", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "马尔斯奠定了火纹主角模板：亡国、丧父、复国、杀龙。"
  },
  {
    "id": 88,
    "dim": "jrpg",
    "difficulty": "hard",
    "question": "以下哪款游戏是史克威尔在PS1时代发行的原创JRPG，而非最终幻想或勇者斗恶龙系列？",
    "options": [
      { "text": "异度装甲", "correct": true },
      { "text": "时空之轮", "correct": false },
      { "text": "圣剑传说", "correct": false },
      { "text": "浪漫沙加", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "一部异度装甲，养活了异度传说和异度神剑三个系列。"
  },
  {
    "id": 89,
    "dim": "jrpg",
    "difficulty": "hard",
    "question": "勇者斗恶龙系列的正统续作，战斗系统一直坚持的是什么形式？",
    "options": [
      { "text": "即时动作战斗", "correct": false },
      { "text": "指令回合制", "correct": true },
      { "text": "半即时ATB", "correct": false },
      { "text": "战棋策略", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "你们要回合制，我就给你们回合制，反正改改数值还能再卖三百万份。"
  },
  {
    "id": 90,
    "dim": "jrpg",
    "difficulty": "hard",
    "question": "最终幻想7最初发售于哪一年、哪个平台？",
    "options": [
      { "text": "1995年，SFC", "correct": false },
      { "text": "1997年，PlayStation", "correct": true },
      { "text": "1999年，PS2", "correct": false },
      { "text": "2001年，GBA", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "史克威尔从任天堂跳到索尼，带走的是整整一代JRPG版图。"
  },
  {
    "id": 91,
    "dim": "meme",
    "difficulty": "easy",
    "question": "弹幕中常刷的“前方高能”是什么意思？",
    "options": [
      { "text": "前方有危险，请立刻撤离", "correct": false },
      { "text": "接下来有高能、刺激、震撼内容，注意护眼", "correct": true },
      { "text": "前方电池电量高", "correct": false },
      { "text": "前方网络信号强", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "接下来要么神作画，要么神转折，要么神级社死，心脏准备一下。"
  },
  {
    "id": 92,
    "dim": "meme",
    "difficulty": "easy",
    "question": "弹幕里的“233”通常表示什么？",
    "options": [
      { "text": "编号233", "correct": false },
      { "text": "笑", "correct": true },
      { "text": "生气", "correct": false },
      { "text": "惊讶", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "源自猫扑表情编号，后来成了弹幕的哈哈哈。"
  },
  {
    "id": 93,
    "dim": "meme",
    "difficulty": "easy",
    "question": "同人圈黑话“吃粮”是什么意思？",
    "options": [
      { "text": "吃米饭", "correct": false },
      { "text": "看、消费喜欢的同人作品", "correct": true },
      { "text": "买同人本", "correct": false },
      { "text": "参加同人展", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "粮仓一空人就疯了，粮一多人就撑死。"
  },
  {
    "id": 94,
    "dim": "meme",
    "difficulty": "easy",
    "question": "同人圈黑话“产粮”是什么意思？",
    "options": [
      { "text": "种粮食", "correct": false },
      { "text": "创作同人作品", "correct": true },
      { "text": "购买同人周边", "correct": false },
      { "text": "翻译同人作品", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "自己动手喂饱全圈，最后收获一句太太好强和一身肝病。"
  },
  {
    "id": 95,
    "dim": "meme",
    "difficulty": "easy",
    "question": "“FFF团”这个梗出自哪部作品？",
    "options": [
      { "text": "《凉宫春日的忧郁》", "correct": false },
      { "text": "《笨蛋、测验、召唤兽》", "correct": true },
      { "text": "《我的青春恋爱物语果然有问题》", "correct": false },
      { "text": "《中二病也要谈恋爱》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "专烧情侣的异端审问会，单身狗的精神武装。"
  },
  {
    "id": 96,
    "dim": "meme",
    "difficulty": "easy",
    "question": "网络梗“德国骨科”通常指什么？",
    "options": [
      { "text": "德国骨科医院", "correct": false },
      { "text": "兄妹相恋被父亲打断腿，去德国治疗", "correct": true },
      { "text": "留学德国的医学生", "correct": false },
      { "text": "二次元骨科CP", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "后来这个词就成了禁忌之恋的暗号。"
  },
  {
    "id": 97,
    "dim": "meme",
    "difficulty": "easy",
    "question": "同人圈里说的“本子”通常指什么？",
    "options": [
      { "text": "课本", "correct": false },
      { "text": "同人志 / 同人漫画本", "correct": true },
      { "text": "笔记本", "correct": false },
      { "text": "剧本", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "圈外人以为是作业本，圈内人知道那是精神食粮和钱包刺客。"
  },
  {
    "id": 98,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人展上“无料”通常指什么？",
    "options": [
      { "text": "没有料", "correct": false },
      { "text": "免费发放的同人周边或配布", "correct": true },
      { "text": "无料抽奖", "correct": false },
      { "text": "没有限制的展区", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "你以为是无料，其实是摊主在用爱发电，电费还自己交。"
  },
  {
    "id": 99,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人展中的“only展”是什么意思？",
    "options": [
      { "text": "只有摊主能进的展", "correct": false },
      { "text": "单一作品或CP主题的同人展", "correct": true },
      { "text": "只有一天的同人展", "correct": false },
      { "text": "只有女性参加的展", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "圈外人看是大型同好聚会，圈内人看是大型钱包火葬场。"
  },
  {
    "id": 100,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人黑话“刀子”通常指什么？",
    "options": [
      { "text": "真的刀", "correct": false },
      { "text": "虐心剧情", "correct": true },
      { "text": "战斗场面", "correct": false },
      { "text": "角色便当", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "作者发刀，读者接刀，一边流血一边喊再来一刀。"
  },
  {
    "id": 101,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人黑话“糖”通常指什么？",
    "options": [
      { "text": "甜食", "correct": false },
      { "text": "甜蜜剧情", "correct": true },
      { "text": "白糖", "correct": false },
      { "text": "糖果周边", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "吃糖时笑得像傻子，吃刀时哭得像疯子，同人圈就是血糖过山车。"
  },
  {
    "id": 102,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人术语“OOC”是什么意思？",
    "options": [
      { "text": "Out of Control，失控", "correct": false },
      { "text": "Out of Character，角色崩坏", "correct": true },
      { "text": "Only One Character，单角色", "correct": false },
      { "text": "Original Character，原创角色", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "你喜欢的角色突然说出完全不像他会说的话，读者：这不是我推。"
  },
  {
    "id": 103,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人术语“AU”通常指什么？",
    "options": [
      { "text": "音频单元", "correct": false },
      { "text": "Alternate Universe，架空世界观", "correct": true },
      { "text": "作者署名", "correct": false },
      { "text": "动画更新", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "官方不写的，同人全给你写，写到你怀疑哪个才是正史。"
  },
  {
    "id": 104,
    "dim": "meme",
    "difficulty": "medium",
    "question": "同人形式“MMD”是什么的缩写？",
    "options": [
      { "text": "MikuMikuDance", "correct": true },
      { "text": "Music Movie Drama", "correct": false },
      { "text": "Manga Motion Design", "correct": false },
      { "text": "Multi Media Data", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "初音未来是亲女儿，后来什么角色都能被丢进去跳舞。"
  },
  {
    "id": 105,
    "dim": "meme",
    "difficulty": "hard",
    "question": "东方Project最大的专属同人展会叫什么？",
    "options": [
      { "text": "Comiket", "correct": false },
      { "text": "例大祭", "correct": true },
      { "text": "M3", "correct": false },
      { "text": "CWT", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "每年例大祭，东方众的钱包都要经历一次异变。"
  },
  {
    "id": 106,
    "dim": "meme",
    "difficulty": "hard",
    "question": "在Pixiv上，“R-18G”通常指什么内容？",
    "options": [
      { "text": "18禁恋爱", "correct": false },
      { "text": "猎奇或血腥成人内容", "correct": true },
      { "text": "全年龄搞笑", "correct": false },
      { "text": "一般向同人图", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "R-18让你脸红，R-18G让你脸绿。"
  },
  {
    "id": 107,
    "dim": "meme",
    "difficulty": "hard",
    "question": "同人圈常把Lofter平台昵称为什么？",
    "options": [
      { "text": "老坟头", "correct": false },
      { "text": "老福特", "correct": true },
      { "text": "老佛爷", "correct": false },
      { "text": "老干妈", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "同人女的精神粮仓之一，也是屏蔽词和限流的老朋友。"
  },
  {
    "id": 108,
    "dim": "meme",
    "difficulty": "hard",
    "question": "贴吧早期黑话“兰州烧饼”是什么意思？",
    "options": [
      { "text": "兰州特产", "correct": false },
      { "text": "楼主傻逼", "correct": true },
      { "text": "楼上烧饼", "correct": false },
      { "text": "兰州拉面", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "用拼音首字母LZSB伪装，后来成了贴吧祖传问候语。"
  },
  {
    "id": 109,
    "dim": "meme",
    "difficulty": "hard",
    "question": "百度贴吧的“滑稽”表情通常用来表达什么？",
    "options": [
      { "text": "开心", "correct": false },
      { "text": "讽刺、调侃、你懂的", "correct": true },
      { "text": "悲伤", "correct": false },
      { "text": "愤怒", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "表面在笑，实际在阴阳怪气。"
  },
  {
    "id": 110,
    "dim": "meme",
    "difficulty": "hard",
    "question": "同人术语“合同本”通常指什么？",
    "options": [
      { "text": "合同契约书", "correct": false },
      { "text": "多人合作出版的同人本", "correct": true },
      { "text": "官方设定集", "correct": false },
      { "text": "同人本再版", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "你以为是合作，其实是大型拖稿现场。"
  },
  {
    "id": 111,
    "dim": "music",
    "difficulty": "easy",
    "question": "“拔剑神曲”这个称号出自哪部动画的插曲？",
    "options": [
      { "text": "《进击的巨人》", "correct": false },
      { "text": "《罪恶王冠》", "correct": true },
      { "text": "《ALDNOAH ZERO》", "correct": false },
      { "text": "《KILL la KILL》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "男主从女主胸口拔出大剑时响起，别人拔剑要钱，他拔剑要命。"
  },
  {
    "id": 112,
    "dim": "music",
    "difficulty": "easy",
    "question": "“核爆神曲”指的是哪首歌曲？",
    "options": [
      { "text": "《aLIEz》", "correct": true },
      { "text": "《βίος》", "correct": false },
      { "text": "《红莲的弓矢》", "correct": false },
      { "text": "《unravel》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "泽野弘之写歌不是为了配动画，是为了炸你们的音响。"
  },
  {
    "id": 113,
    "dim": "music",
    "difficulty": "easy",
    "question": "动画《鬼灭之刃》第一季片头曲《红莲华》由哪位歌手演唱？",
    "options": [
      { "text": "Aimer", "correct": false },
      { "text": "蓝井艾露", "correct": false },
      { "text": "LiSA", "correct": true },
      { "text": "南条爱乃", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "红莲华一响，全日本的CD店都在颤抖。"
  },
  {
    "id": 114,
    "dim": "music",
    "difficulty": "easy",
    "question": "《某科学的超电磁炮》最经典的OP《only my railgun》由哪个组合演唱？",
    "options": [
      { "text": "ClariS", "correct": false },
      { "text": "fripSide", "correct": true },
      { "text": "Kalafina", "correct": false },
      { "text": "Linked Horizon", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "前奏一响，弹幕就会刷满炮姐来了。"
  },
  {
    "id": 115,
    "dim": "music",
    "difficulty": "easy",
    "question": "《新世纪福音战士》的经典主题曲《残酷な天使のテーゼ》由谁演唱？",
    "options": [
      { "text": "宇多田光", "correct": false },
      { "text": "高桥洋子", "correct": true },
      { "text": "水树奈奈", "correct": false },
      { "text": "坂本真绫", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "一首歌吃了快三十年，堪称动漫音乐界的养老保险。"
  },
  {
    "id": 116,
    "dim": "music",
    "difficulty": "easy",
    "question": "《魔法少女小圆》的片头曲《コネクト》由哪个组合演唱？",
    "options": [
      { "text": "fripSide", "correct": false },
      { "text": "Kalafina", "correct": false },
      { "text": "ClariS", "correct": true },
      { "text": "LiSA", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "唱着最元气的OP，配着最致郁的剧情。"
  },
  {
    "id": 117,
    "dim": "music",
    "difficulty": "easy",
    "question": "《东京喰种》第一季的OP《unravel》由谁创作并演唱？",
    "options": [
      { "text": "TK from 凛として時雨", "correct": true },
      { "text": "泽野弘之", "correct": false },
      { "text": "梶浦由记", "correct": false },
      { "text": "Revo", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "副歌一响，金木研的头发就白了。"
  },
  {
    "id": 118,
    "dim": "music",
    "difficulty": "medium",
    "question": "作曲家泽野弘之被称为“神曲制造机”，以下哪部作品不是他担任配乐的？",
    "options": [
      { "text": "《进击的巨人》", "correct": false },
      { "text": "《罪恶王冠》", "correct": false },
      { "text": "《魔法少女小圆》", "correct": true },
      { "text": "《ALDNOAH ZERO》", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "小圆配乐是梶浦由记，泽野配乐要么炸要么燃。"
  },
  {
    "id": 119,
    "dim": "music",
    "difficulty": "medium",
    "question": "动画《AIR》的主题曲《鸟之诗》在ACGN圈内被称为什么？",
    "options": [
      { "text": "神之曲", "correct": false },
      { "text": "ACGN国歌", "correct": true },
      { "text": "催泪神曲", "correct": false },
      { "text": "治愈之诗", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "国歌一响，老宅落泪。"
  },
  {
    "id": 120,
    "dim": "music",
    "difficulty": "medium",
    "question": "作曲家梶浦由记的代表作不包括以下哪部？",
    "options": [
      { "text": "《魔法少女小圆》", "correct": false },
      { "text": "《Fate/Zero》", "correct": false },
      { "text": "《刀剑神域》", "correct": false },
      { "text": "《星际牛仔》", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "星际牛仔配乐是菅野洋子，梶浦风是古典加电子加多语言歌词。"
  },
  {
    "id": 121,
    "dim": "music",
    "difficulty": "medium",
    "question": "动画《超时空要塞F》中，雪露·诺姆演唱的《射手座☆午後九時Don't be late》的作曲者是谁？",
    "options": [
      { "text": "菅野洋子", "correct": true },
      { "text": "泽野弘之", "correct": false },
      { "text": "梶浦由记", "correct": false },
      { "text": "久石让", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "菅野洋子是动画音乐界全能女王，泽野见了都得叫前辈。"
  },
  {
    "id": 122,
    "dim": "music",
    "difficulty": "medium",
    "question": "《游戏王 怪兽之决斗》中，暗游戏逆转取胜时的经典BGM叫什么名字？",
    "options": [
      { "text": "决斗者的王国", "correct": false },
      { "text": "热烈的决斗者", "correct": true },
      { "text": "王牌", "correct": false },
      { "text": "MY TURN", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "使用次数多到你怀疑制作组是不是只买了这一首。"
  },
  {
    "id": 123,
    "dim": "music",
    "difficulty": "medium",
    "question": "《进击的巨人》第一季OP《红莲的弓矢》由哪个乐队演唱？",
    "options": [
      { "text": "Linked Horizon", "correct": true },
      { "text": "Sound Horizon", "correct": false },
      { "text": "Kalafina", "correct": false },
      { "text": "fripSide", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "Revo的马甲，一首OP搞出社会现象。"
  },
  {
    "id": 124,
    "dim": "music",
    "difficulty": "medium",
    "question": "《崩坏：星穹铁道》公测主题曲《星间旅行》的中文版由谁演唱？",
    "options": [
      { "text": "LiSA", "correct": false },
      { "text": "茶理理", "correct": true },
      { "text": "张杰", "correct": false },
      { "text": "谭晶", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "米哈游做游戏是副业，做音乐才是主业。"
  },
  {
    "id": 125,
    "dim": "music",
    "difficulty": "hard",
    "question": "菅野洋子为《星际牛仔》创作的第一张原声碟获得了什么奖项？",
    "options": [
      { "text": "格莱美最佳配乐奖", "correct": false },
      { "text": "日本金唱片大奖", "correct": true },
      { "text": "安妮奖最佳音乐", "correct": false },
      { "text": "奥斯卡最佳原创配乐", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "别的作曲家配乐是配合画面，她是画面配合我的音乐。"
  },
  {
    "id": 126,
    "dim": "music",
    "difficulty": "hard",
    "question": "《魔法少女小圆》中，梶浦由记创作的魔女结界BGM使用了什么独特的演唱语言？",
    "options": [
      { "text": "拉丁语", "correct": false },
      { "text": "德语", "correct": false },
      { "text": "造语", "correct": true },
      { "text": "古英语", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "梶浦语听起来像德语拉丁语意大利语混合体，但你一个字都听不懂。"
  },
  {
    "id": 127,
    "dim": "music",
    "difficulty": "hard",
    "question": "《勇者斗恶龙》系列大部分作品的音乐由哪位作曲家负责？",
    "options": [
      { "text": "植松伸夫", "correct": false },
      { "text": "光田康典", "correct": false },
      { "text": "すぎやまこういち", "correct": true },
      { "text": "目黑将司", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "椙山浩一是日本游戏音乐界活化石，从DQ1配到DQ11。"
  },
  {
    "id": 128,
    "dim": "music",
    "difficulty": "hard",
    "question": "《最终幻想》系列标志性的“水晶序曲”是植松伸夫用多长时间创作出来的？",
    "options": [
      { "text": "15分钟", "correct": true },
      { "text": "1小时", "correct": false },
      { "text": "一整天", "correct": false },
      { "text": "一周", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "有时候神曲就是在DDL面前诞生的。"
  },
  {
    "id": 129,
    "dim": "music",
    "difficulty": "hard",
    "question": "《异度神剑1》的片尾曲《Beyond the Sky》由哪位作曲家创作？",
    "options": [
      { "text": "下村阳子", "correct": false },
      { "text": "光田康典", "correct": true },
      { "text": "泽野弘之", "correct": false },
      { "text": "植松伸夫", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "他在异度系列里的地位，就像植松伸夫在FF系列里一样。"
  },
  {
    "id": 130,
    "dim": "music",
    "difficulty": "hard",
    "question": "以下哪位歌手或组合不是动画《鬼灭之刃》系列主题曲的演唱者？",
    "options": [
      { "text": "LiSA", "correct": false },
      { "text": "Aimer", "correct": false },
      { "text": "梶浦由记", "correct": false },
      { "text": "高桥洋子", "correct": true },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "高桥洋子唱的是EVA残酷天使，和鬼灭没关系。"
  },
  {
    "id": 131,
    "dim": "merch",
    "difficulty": "easy",
    "question": "二次元周边黑话“吧唧”指的是什么？",
    "options": [
      { "text": "一种挂件", "correct": false },
      { "text": "马口铁徽章", "correct": true },
      { "text": "一种立牌", "correct": false },
      { "text": "一种贴纸", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "英语badge音译，一块成本几毛钱的铁皮印上你推的脸就能卖几十块。"
  },
  {
    "id": 132,
    "dim": "merch",
    "difficulty": "easy",
    "question": "谷圈黑话“吃谷”是什么意思？",
    "options": [
      { "text": "吃米饭", "correct": false },
      { "text": "购买二次元周边", "correct": true },
      { "text": "吃零食", "correct": false },
      { "text": "参加漫展", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "吃谷一时爽，交肾火葬场。"
  },
  {
    "id": 133,
    "dim": "merch",
    "difficulty": "easy",
    "question": "“痛包”指的是什么？",
    "options": [
      { "text": "一种让人痛苦的包", "correct": false },
      { "text": "一种医疗用包", "correct": false },
      { "text": "用二次元周边装饰的包", "correct": true },
      { "text": "一种运动背包", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "别人背的是包，你背的是你推的整个后宫。"
  },
  {
    "id": 134,
    "dim": "merch",
    "difficulty": "easy",
    "question": "二次元周边中的“立牌”通常是用什么材质做的？",
    "options": [
      { "text": "马口铁", "correct": false },
      { "text": "亚克力", "correct": true },
      { "text": "陶瓷", "correct": false },
      { "text": "木头", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "成本可能不到五块钱，卖你五十块，你还觉得赚了，因为爱所以盲。"
  },
  {
    "id": 135,
    "dim": "merch",
    "difficulty": "easy",
    "question": "GSC旗下最著名的Q版可动手办系列叫什么？",
    "options": [
      { "text": "Figma", "correct": false },
      { "text": "粘土人", "correct": true },
      { "text": "景品", "correct": false },
      { "text": "盒蛋", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "大头小身子，表情可替换，一旦买了第一个钱包就回不去了。"
  },
  {
    "id": 136,
    "dim": "merch",
    "difficulty": "easy",
    "question": "二次元周边中的“景品”通常是什么？",
    "options": [
      { "text": "限量版手办", "correct": false },
      { "text": "抽奖或娃娃机的奖品", "correct": true },
      { "text": "官方售卖的手办", "correct": false },
      { "text": "同人自制周边", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "价格便宜品质一般，但胜在便宜。"
  },
  {
    "id": 137,
    "dim": "merch",
    "difficulty": "easy",
    "question": "谷圈黑话“回血”是什么意思？",
    "options": [
      { "text": "游戏里恢复生命值", "correct": false },
      { "text": "卖掉周边换钱", "correct": true },
      { "text": "吃补品", "correct": false },
      { "text": "输血的俗称", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "挂闲鱼那一刻，你不是在卖谷，是在卖自己曾经的爱。"
  },
  {
    "id": 138,
    "dim": "merch",
    "difficulty": "medium",
    "question": "谷圈黑话“海景房”指的是什么？",
    "options": [
      { "text": "海边的房子", "correct": false },
      { "text": "特别值钱、稀有的周边", "correct": true },
      { "text": "一种展示柜", "correct": false },
      { "text": "大型手办", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "有些谷子能被炒到数万块，比真房子还离谱。"
  },
  {
    "id": 139,
    "dim": "merch",
    "difficulty": "medium",
    "question": "手办品牌ALTER最出名的特点是什么？",
    "options": [
      { "text": "价格最便宜", "correct": false },
      { "text": "做工品质极高", "correct": true },
      { "text": "只做Q版手办", "correct": false },
      { "text": "发货速度最快", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "手办界品质天花板，缺点是热门角色出得慢。"
  },
  {
    "id": 140,
    "dim": "merch",
    "difficulty": "medium",
    "question": "寿屋在手办圈被戏称为什么？",
    "options": [
      { "text": "再版狂魔", "correct": true },
      { "text": "限定狂魔", "correct": false },
      { "text": "打折狂魔", "correct": false },
      { "text": "跳票狂魔", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "卖得好就再版，再版再再版，初版党绝版升值梦碎。"
  },
  {
    "id": 141,
    "dim": "merch",
    "difficulty": "medium",
    "question": "日本最大的手办展会“Wonder Festival”通常每年举办几次？",
    "options": [
      { "text": "1次", "correct": false },
      { "text": "2次", "correct": true },
      { "text": "3次", "correct": false },
      { "text": "4次", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "WF每年冬夏各一次，手办圈的年度朝圣。"
  },
  {
    "id": 142,
    "dim": "merch",
    "difficulty": "medium",
    "question": "国内规模最大的同人展会“CP”的全称是什么？",
    "options": [
      { "text": "Comic Party", "correct": false },
      { "text": "Comicup", "correct": true },
      { "text": "Cosplay Paradise", "correct": false },
      { "text": "China Pop", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "CP展上你花的最多的钱，永远是买本子。"
  },
  {
    "id": 143,
    "dim": "merch",
    "difficulty": "medium",
    "question": "二次元周边中，“食玩”指的是什么？",
    "options": [
      { "text": "可以吃的玩具", "correct": false },
      { "text": "附赠小玩具的零食", "correct": true },
      { "text": "零食造型的周边", "correct": false },
      { "text": "玩具造型的零食", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "本质是买玩具送零食，但你从来不吃零食，只留玩具。"
  },
  {
    "id": 144,
    "dim": "merch",
    "difficulty": "medium",
    "question": "手办界的“御三家”通常指哪三家？",
    "options": [
      { "text": "GSC、ALTER、Max Factory", "correct": true },
      { "text": "GSC、寿屋、万代", "correct": false },
      { "text": "ALTER、寿屋、万代", "correct": false },
      { "text": "Max Factory、寿屋、HobbyMax", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "三家各有绝活，但共同点是你的钱包都是它们的。"
  },
  {
    "id": 145,
    "dim": "merch",
    "difficulty": "hard",
    "question": "手办中的“原型师”主要负责什么工作？",
    "options": [
      { "text": "负责手办的涂装上色", "correct": false },
      { "text": "负责手办的原型雕刻制作", "correct": true },
      { "text": "负责手办的包装设计", "correct": false },
      { "text": "负责手办的销售推广", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "原型师的审美，就是你推整容后的脸。"
  },
  {
    "id": 146,
    "dim": "merch",
    "difficulty": "hard",
    "question": "手办术语“初版”和“再版”的核心区别是什么？",
    "options": [
      { "text": "初版是正版，再版是盗版", "correct": false },
      { "text": "初版是第一次发售，再版是后续再生产", "correct": true },
      { "text": "初版是限量版，再版是普通版", "correct": false },
      { "text": "初版是手工制作，再版是机器生产", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "买初版还是再版，这个问题能让手办圈吵三天。"
  },
  {
    "id": 147,
    "dim": "merch",
    "difficulty": "hard",
    "question": "手办中的“GK”通常指什么？",
    "options": [
      { "text": "一种塑料材质", "correct": false },
      { "text": "未涂装的树脂模型套件", "correct": true },
      { "text": "一种限定版手办", "correct": false },
      { "text": "一种展示底座", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "买GK的人分两种：一种真大佬，一种以为自己是真大佬。"
  },
  {
    "id": 148,
    "dim": "merch",
    "difficulty": "hard",
    "question": "日本二手周边交易平台“煤炉”的正式名称是什么？",
    "options": [
      { "text": "Yahoo Auction", "correct": false },
      { "text": "Mercari", "correct": true },
      { "text": "Surugaya", "correct": false },
      { "text": "Rakuten", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "煤炉上什么都有，就是没有良心价。"
  },
  {
    "id": 149,
    "dim": "merch",
    "difficulty": "hard",
    "question": "手办术语“1/7比例”通常指什么？",
    "options": [
      { "text": "手办重量是原角色的1/7", "correct": false },
      { "text": "手办价格是原价的1/7", "correct": false },
      { "text": "手办尺寸是原角色的1/7", "correct": true },
      { "text": "手办生产数量是限量的1/7", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "买1/7的人是认真的，买1/4的人是认真的且有房的。"
  },
  {
    "id": 150,
    "dim": "merch",
    "difficulty": "hard",
    "question": "二次元周边中的“盒蛋”和“扭蛋”最大的区别是什么？",
    "options": [
      { "text": "盒蛋更贵", "correct": false },
      { "text": "盒蛋用纸盒装，扭蛋用蛋壳装", "correct": true },
      { "text": "盒蛋是限量版，扭蛋是普通版", "correct": false },
      { "text": "盒蛋不能选款，扭蛋可以选款", "correct": false },
      { "text": "不知道 / 没听过", "correct": false }
    ],
    "explain": "买扭蛋买的是刺激，和赌博唯一的区别是扭蛋不会让你上社会新闻。"
  }
]

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