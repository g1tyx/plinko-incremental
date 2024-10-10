/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Play!": "开始!",
    "Play (while muted)": "开始 (静音)",
    "Import!": "导入!",
    "Join our": "加入我们的",
    "Buy 1!": "购买 1!",
    "Utility / Movement": "效用 / 移动",
    "Use WASD to move!": "使用 WASD 键切换!",
    "V - Stop Revolutions Wheel\n": "V - 停止转轮\n",
    "Level Requirement": "等级要求",
    "Log": "日志",
    "> Autosave activated.": ">自动保存已激活。",
    "> Welcome!": "> 欢迎!",
    "> Move Right! >": "> 向右移动! >",
    "< Move Left! <": "< 向左移动! <",
    "Delete Save (!)": "删除存档 (!)",
    "Delete Balls (if stuck)": "删除小球 (如果卡住)",
    "Export!": "导出!",
    "Drop Ball!": "扔下小球!",
    "Drop Automation": "掉落自动化",
    "Changelog found": "发现更新日志",
    "Currencies": "货币",
    "Point Self-Synergy": "点数自协同",
    "Plinko Upgrades": "弹珠盘升级",
    "Ball Amount": "小球数量",
    "The drop ball button will recharge 25% faster.": "掉落小球的按钮充能时间加快25%",
    "Revolution Upgrades": "转轮升级",
    "Respec?": "重洗?",
    "Roll Upgrades": "滚动升级",
    "Level-XP Synergy": "等级-经验协同",
    "Button Cooldown": "按钮冷却",
    "HELPPPP HELLP SOMEBODY HELP ME": "救命啊，救命啊，救救我",
    "Focus/Unfocus on board": "专注/不专注于面板",
    "Reach level 16 to Boxify.": "升到16级可以开盒。",
    "Reach level 30 to Roll.": "升到30级可以滚动。",
    "BallPoints": "小球点数",
    "Cooldown...": "冷却中...",
    "B - Boxify\n": "B - 开盒\n",
    "Arrow Keys/WASD/the menu - Move\n": "方向键/WASD/菜单 - 移动\n",
    "RP Gain": "RP 增益",
    "Rotations boost... themselves.": "旋转提升…他们自己。",
    "Rotations boost XP gain": "旋转提升经验增益。",
    "Rotations boost BoxPoint gain.": "旋转提升盒子点数增益。",
    "Rotations boost  BallPoints gain.": "旋转提升小球点数增益。",
    "Hotkeys:\n": "快捷键:\n",
    "E - Energize\n": "E - 充能\n",
    "H - Strike\n": "H - 打击\n",
    "O - Package": "O - 打包",
    "U - Condense\n": "U - 压缩\n",
    "Stop!": "停止!",
    "Strike!": "打击!",
    "Start!": "开始!",
    "T - Transfer\n": "T - 转移\n",
    "Toggle Music": "切换音乐",
    "Toggle SFX": "切换音效",
    "Space - Drop Ball\n": "空格键 - 扔小球\n",
    "Bounce Upgrade Selector": "弹跳升级选择器",
    "Bounce Upgrade Viewer": "弹跳升级查看器",
    "Bounce": "弹跳",
    "Bounce-Roll Synergy": "弹跳滚动协同",
    "Disable Auto Drop": "禁用自动掉落",
    "Disable Auto Plinko Upgrades": "禁用自动弹珠盘升级",
    "Disable Auto Boxify Upgrades": "禁用自动开盒升级",
    "Nothing Selected...": "没有选择…",
    "Settings": "设置",
    "Plinko Machine": "弹珠机",
    "Battery-PP Synergy": "电池-PP协同",
    "Battery-Self Synergy": "电池自协同",
    "Boxify": "开盒",
    "Boxify Upgrades": "开盒升级",
    "BoxPoints": "盒子点数",
    "BP Gain": "BP增益",
    "BP-RP Synergy": "BP-RP协同",
    "Condense!": "压缩!",
    "-- Energy --": "-- 能量 --",
    "Q - Save\n": "Q - 保存\n",
    "Gain another ball.": "获得另一个小球。",
    "\t\tBoost:\n": "\t\提升:\n",
    "> Game saved.": "> 游戏已保存.",
    "Annihilate!": "湮灭!",
    "Boxify!": "开盒!",
    "Boxify Area": "开盒区域",
    "Boost rotation gain based on Energy.": "基于能量提升旋转增益。",
    "BoxPoints lowers the RollPoint requirement.": "盒子点数降低了滚动点数要求。",
    "Highlight Certain Upgrades": "高亮部分升级",
    "R - Roll\n": "R - 滚动\n",
    "J - Bounce\n": "J - 弹跳\n",
    "Quality of Life Upgrades": "生活质量升级",
    "PP-Strike Synergy": "PP-打击协同",
    "P - Annihilate\n": "P - 湮灭\n",
    "Special Peg Upgrades": "特殊钉桩升级",
    "stop gambling": "停止赌博",
    "stop clicking on me": "别再点击我了",
    "Shift (hold) - Highlight Certain Upgrades\n": "Shift(按住)-突出某些升级\n",
    "\tRoll\n": "\t滚动\n",
    "\t\tAutomatically drops the ball if on the plinko screen and unlocking offline time. Starting at 5s, each level after 1 reduces the cooldown\n\t\t\t\t\t\tby 0.5s.\n": "\t\t如果在弹珠盘屏幕上自动掉落球并解锁离线时间。从5秒开始，每过1级，冷却时间缩短0.5秒",
    "Keep 25% (rounded down) of plinko upgrades on boxify.": "开盒时保留25%(四舍五入)的弹珠盘升级。",
    "Keep another 25% (rounded down) of plinko upgrades on boxify and 25% on roll.": "开盒时保留另外25%的弹珠盘升级，滚动保留25%。",
    "Multiplies the value of the green box by +100% per upgrade.": "每次升级将绿色盒子的价值乘以 +100%。",
    "Multiplies the value of the orange boxes by +100% per upgrade.": "每次升级将橙色盒子的价值乘以 +100%。",
    "Multiplies the value of the red boxes by +100% per upgrade.": "每次升级将红色盒子的价值乘以 +100%。",
    "Multiplies the value of the yellow boxes by +100% per upgrade.": "每次升级将黄色盒子的价值乘以 +100%。",
    "Multiplies the value of the orange boxes by x1.25 per upgrade.": "每次升级将橙色盒子的价值乘以 x1.25。",
    "Multiplies the value of the red boxes by x1.25 per upgrade.": "每次升级将红色盒子的价值乘以 x1.25。",
    "Multiplies the value of the yellow boxes by x1.25 per upgrade.": "每次升级将黄色盒子的价值乘以 x1.25。",
    "Multiplies the value of the green box by 2.": "将绿色盒子的价值乘以 2。",
    "Multiplies the value of the orange boxes by 2.": "将橙色盒子的价值乘以 2。",
    "Multiplies the value of the red boxes by 2.": "将红色盒子的价值乘以 2。",
    "Multiplies the value of the yellow boxes by 2.": "将黄色盒子的价值乘以 2。",
    "RollPoint Requirement": "滚动点数要求",
    "Plinko upgrades are now automatically bought (without spending).": "弹珠盘升级现在可以自动购买(无需花费)。",
    "Packaged Points": "打包点数",
    "Particle Tree Viewer": "粒子树查看器",
    "Pack!": "打包!",
    "Multiplies rotation gain by 2.": "旋转增益乘以 2。",
    "Multiplies revolution gain by 2.": "转轮增益乘以 2。",
    "Multiplies BP gain by 2.": "BP增益乘以 2。",
    "Multiples XP gain by 2.": "经验增益乘以 2。",
    "Multiplies BallPoint gain by 1.15.": "小球点数增益乘以 1.15。",
    "Multiples ball value by 2.": "小球价值乘以 2。",
    "Lower the Strike requirement by 2 levels.": "将打击要求降低2级。",
    "Lower the Roll requirement based on itself.": "根据自身降低滚动要求。",
    "Lower Strike requirement based on Revolutions.": "根据旋转降低打击要求。",
    "Lower IRev requirement based on Batteries.": "降低基于电池的IRev要求。",
    "Increases base value by +150%.": "增加基础价值+150%。",
    "Increases XP gain by +150%.": "增加150%的经验增益。",
    "here": "这里",
    "Misc Stats": "杂项统计",
    "Multiplies the value of the green boxes by x1.25 per upgrade.": "每次升级将绿色盒子的价值乘以 x1.25。",
    "Special Pegs": "特殊钉桩",
    "Special Peg Chance": "特殊钉桩几率",
    "\tClick on the boxes above to show a upgrade in the viewer. This lets you view what it does and lets you purchase it. Hold shift to view which\n\t\t\t\t\tupgrades you have already purchased in the selector. Bounce upgrades have a special property where the price increases based on the amount\n\t\t\t\t\tof upgrades bought in that row. Since the choices you make on which upgrades to buy and what order can be very bad, there is a respec button\n\t\t\t\t\tbelow to reset those upgrades. This will force a bounce reset and refund all upgrades. Have fun! :3\n": "单击上面的方框，在查看器中显示升级。这可以让你查看它的功能，并让你购买它。按住shift键以查看您已经在选择器中购买的\n\t\t\t\升级。弹跳升级有一个特殊属性，即价格会根据在这一行中购买的升级数量而上涨。因为你所做的购买升级的选择和顺序可能非常糟糕，所以在下面有一个尊重按钮来重置这些升级。这将强制弹跳重置和退款所有升级。玩得开心!:3 \n",
    "\tPackaging\n": "\t打包\n",
    "Adds 1 to special peg gain. When upgrade is maxed out, you get x2 special peg chance.": "特殊钉桩增益加1。当升级满时，你会得到x2的特殊钉桩几率。",
    "\t\tBP boosts all box multipliers. Each purchase after the first one boosts the effect of this upgrade by 2.5%.\n": "\t\tBP提升所有盒子乘数。第一次购买之后的每一次购买都会使升级效果提升2.5%\n",
    "BP-Box Synergy": "BP-盒子协同",
    "Keep": "保留",
    "(remix by me shocker)\n": "(由我混音，令人震惊)\n",
    "Bounce Area": "弹跳区域",
    "Bounce-Extension Area": "弹跳扩展区域",
    "UPDATE... IS... TOMORROW!!!": "更新……是……明天! !",
    "Ultra Peg": "超级钉桩",
    "Ultra Peg Boost": "超级钉桩提升",
    "Ultra Peg Upgrades": "超级钉桩升级",
    "Uncapped": "未上限",
    "You need at least 10 RollPoints to Bounce.": "你需要至少 10 滚动点数以弹跳。",
    "Energize!": "充能！",
    "Energy": "能量",
    "Rotation Speed": "旋转速度",
    "Rotation Boost": "旋转提升",
    "Rotated XP": "旋转经验",
    "Rotated BP": "旋转的BP",
    "Rotated Rotations": "旋转的旋转",
    "Rotated BallPoints": "旋转的小球点数",
    "Rotation gain is boosted by +100%.": "旋转增益增加+100%。",
    "Rotations boost BallPoints gain.": "旋转提升小球点数增益。",
    "Rotations boost XP gain.": "旋转提升经验增益。",
    "RP-Box Synergy": "RP-盒子协同",
    "Reach level 33 to Roll.": "升到33级以滚动。",
    "PP Boost": "PP提升",
    "The caps for 'Point Synergy' and 'Level-XP Synergy' are increased by 10.": "“点数协同”和“等级-经验协同”的上限增加了10。",
    "Adds a couple of new QoL upgrades.": "增加了一些新的生活质量升级。",
    "Adds a couple of new Boxify upgrades.": "增加了一些新的开盒升级。",
    "QoL": "生活质量",
    "Adds a new feature!": "增加一个新功能",
    "Roll": "滚动",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Base: ": "基数: ",
    "Random Number: ": "随机数: ",
    "XP Gain": "经验增益",
    "XP Value": "经验值",
    "Green Box Value": "绿色盒子价值",
    "Red Box Value": "红色盒子价值",
    "Orange Box Value": "橙色盒子价值",
    "Yellow Box Value": "黄色盒子价值",
    "Orange Value": "橙色价值",
    "Yellow Value": "黄色价值",
    "Green Value": "绿色价值",
    "Red Value": "红色价值",
    "Strike Boost": "打击提升",
    "Layer+": "层+",
    "Locked...": "未解锁...",
    "Points boost themselves. Each purchase after the first one boosts this upgrade by ": "点数可以自我提升。在第一次购买之后的每一次购买都将提升这一升级 ",
    "Box Synergy": "盒子协同",
    "Revolutions Boost": "转轮提升",
    "Revolutions Building": "转轮建筑",
    "Revolutions Effects": "转轮效果",
    "More Balls": "更多小球",
    "Ball Value": "小球价值",
    "Level Bonus: x": "等级加成: x",
    "\t\tLevels boost XP gain. Each purchase after the first one boosts the effect of this upgrade by ": "\t\t等级提升经验增益。第一次购买之后的每一次购买都将提升此升级的效果",
    "Waiting... ": "等待中... ",
    "Base Gain: ": "基础增益: ",
    "Ball Value: ": "小球价值: ",
    "Automation": "自动化",
    "Average Box Value: ": "平均盒子价值: ",
    "Battery Boost": "电池提升",
    "Synergy": "协同",
    "Number Notation: ": "数字符号: ",
    "Area: ": "区域: ",
    "Bounce Reset Time: ": "弹跳复位时间: ",
    "Broken Gear ": "齿轮损坏 ",
    "Burnout ": "熄火 ",
    "Level-XP Synergy: x": "等级-经验协同: x",
    "Point Synergy: x": "点数协同: x",
    "Progression": "进度",
    "SP-UP Synergy": "SP-UP协同",
    " (reach level ": " (达到等级 ",
    "Other": "其他",
    "XP: ": "经验值: ",
    "Upgrade Drought ": "升级荒 ",
    "Scaling at level ": "缩放于等级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "++": "++",
    "+": "+",
    " Hits ~ Keep Point/Boxify/Special Pegs/Roll upgrades on Bounce": " 命中 ~ 保留点数/开盒/特殊钉桩/弹跳滚动升级",
    " Hits ~ Electricity is set to 1 on strike reset.": " 命中 ~ 在打击重置时，电力设置为1。",
    " Hits ~ Positive terminal boosts special peg chance (capped at 20%)": " 命中 ~ 正极提升特殊钉桩概率(上限20%)",
    " Hits ~ Negative terminal boosts task speed": " 命中 ~ 负极提升任务的速度",
    " Hits ~ Gain 1% of Energy per second.": " 命中 ~ 每秒获得1%的能量。",
    " Hits ~ Milestone 21's effect is better.": " 命中 ~ 里程碑21的效果更好。",
    " Hits ~ Get a hug. :3": " 命中 ~ 得到一个拥抱。:3",
    " Hits ~ Reduce \"Revolving Hell\" requirement by x0.4.": " 命中 ~ 减少“旋转地狱”的要求 x0.4。",
    " Hits ~ Lower Strike requirement based on Annihlation requirement.": " 命中 ~ 降低基于湮灭需求的打击要求。",
    " Hits ~ Unlock Annihilation.": " 命中 ~ 解锁湮灭。",
    " Hits ~ Special Peg content is kept on all previous resets.": " 命中 ~ 在之前的所有重置中都保留特殊钉桩内容。",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^: x([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) BallPoints!$/, '你有 $1 小球点数!'],
    [/^You have (.+) RollPoints!$/, '你有 $1 滚动点数!'],
    [/^You have (.+) BoxPoints!$/, '你有 $1 盒子点数!'],
    [/^You have (.+) Rotations!$/, '你有 $1 旋转!'],
    [/^Gear Rotation Speed: (.+)°\/s \((.+) RPM\) \[can stand on\]$/, '齿轮转速: $1°\/秒 \($2 RPM\) [能站得住]'],
    [/^You currently have (.+) RollPoints.$/, '你当前有 $1 滚动点数。'],
    [/^You have (.+) Special Pegs!$/, '你有 $1 特殊钉桩!'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Reach (.+) Special Pegs to Condense$/, '达到 $1 特殊钉桩以压缩'],
    [/^Reach (.+) BoxPoints to reset...$/, '达到 $1 盒子点数以重置...'],
    [/^Digit Precision: (.+) Places$/, '数字精度: $1 位'],
    [/^(.+) BallPoints, (.+) XP$/, '$1 小球点数，$2 经验值'],
    [/^\> Roll reset triggered. Gain: (.+) RP$/, '> 滚轮重置触发。获得: $1 RP'],
    [/^Boxify for (.+) BoxPoints and reset Level, XP, BallPoints, and all Plinko Upgrades. You need level (.+) to reset. Resetting for the first time unlocks (.+) new features.$/, '开盒为 $1 盒子点数并重置等级，经验，小球点数，和所有的 弹珠盘 升级。你需要 $2 级才能重置。第一次重置可以解锁 $3 个新功能。'],
    [/^ \(reach (.+) total ball amount to annihilate\)$/, ' \(达到总计 $1 小球以湮灭\)'],
    [/^Energize for (.+) Energy. Spend Energy and time on tasks to get buffs. Energizing resets Level, XP, BallPoints, Point Upgrades, Box Upgrades, Special Peg Upgrades, Special Pegs and BoxPoints and Roll content.$/, '充能获得 $1 能量。在任务上花费精力和时间来获得Buff。激活重置等级，经验，小球点数，点数升级，盒子升级，特殊钉桩升级，特殊钉桩和盒子点数和滚动内容。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^\(there are (.+) balls left\)$/, '(剩余 $1 小球)'],
    [/^Increases XP gain by (.+). Every (.+) purchases gives a (.+) boost to XP gain.$/, '增加 $1 的经验值。每购买 $2 次可以增加 $3 的经验值。'],
    [/^Increases base gain by (.+). Every twenty purchases gives a (.+)x boost to base gain.$/, '增加基础增益 $1。每购买20次就会增加 $2x 的基础收益。'],
    [/^have a random number: (.+)!!!$/, '有一个随机数: $1!!'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Current: ([\d\.]+)$/, '当前: $1'],
    [/^Current Setting: ([\d\.]+)$/, '当前设置: $1'],
    [/^Gain: ([\d\.]+)$/, '增益: $1'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Next Save: ([\d\.,]+)s$/, '下次保存还有: $1秒'],
    [/^Requirement: ([\d\.,]+)$/, '要求: $1'],
    [/^Total Balls: ([\d\.,]+)$/, '总计小球: $1'],
    [/^Level: ([\d\.,]+)$/, '等级: $1'],
    [/^Row ([\d\.,]+)$/, '行 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) BallPoints$/, '成本：$1 小球点数'],
    [/^Cost: (.+) Revolutions$/, '成本：$1 转轮'],
    [/^Cost: (.+) Special Pegs$/, '成本：$1 特殊钉桩'],
    [/^Cost: (.+) Ultra Pegs$/, '成本：$1 超级钉桩'],
    [/^Cost: (.+) Rotations$/, '成本：$1 旋转'],
    [/^Cost: (.+) BoxPoints$/, '成本：$1 盒子点数'],
    [/^Cost: (.+) Packaged Points$/, '成本：$1 包装点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);