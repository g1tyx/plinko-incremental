document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    var newsticker,
        event,
        newstickerelement,
        newstickercontainer,
        left,
        leftcap,
        resetonce,
        newstickerchoices;
    newstickerelement = document.getElementById('newstickertext');
    newstickercontainer = document.getElementById('newsticker');
    left = 0;
    leftcap = 80;
    resetonce = 0;
    leftcap = (newstickercontainer.getBoundingClientRect().right - newstickercontainer.getBoundingClientRect().left) - (newstickerelement.getBoundingClientRect().right - newstickerelement.getBoundingClientRect().left);

    function newnewsticker() {
        newstickerchoices = ['hey im back! life is so good', 'the next news ticker is lying', 'the previous news ticker was lying', 'lab explodes after unfortunate delete save incident', 'can i borrow 5 ballpoints', 'man eats 3 special pegs and dies in minutes', '43 ballpoints crush a mans house, victim says: "what just happened"', 'amazon warehouse accidentally ships a boxpoint instead of a package', 'man loses pc after cheating and spawning 1000 balls at once', 'journalist killed after talking about horrible cod- HELP ME', '3 criminals arrested for distributing tools to modify save files', 'skins will not be added', 'assasination attempt on dev over mobile support', 'import button breaks for the 29th time', 'please send help :(', 'scientists invent time travel by spamming the mute sfx button', 'roblox plinko incremental will update in around 5 hours (probably)', 'researchers figure out how to make special pegs', 'researchers shot over new discovery', 'oh great pelle please give me 30 fun reactions in lethal games discord server', 'pressing alt+f 4 gives 2 dollars cashapp', 'you should delete balls NOW!!!', 'plinkoland bans racing after race track discovered', 'fish', 'incremental games banned for uh mm i forogt', 'you should ping meowfest to update the game!', 'meowfest found DEAD from mike and ike overdose', 'for(;;;) {}', 'please save me', 'should i stop updating after strike part 1', '', 'plinko incremental balls being sold in 1000 packs found at costco', 'the woke left protests against plinko incremental', 'the radical right protests against plinko incremental', 'jesus you stink i dont even have a nose and i can smell you (jk love you :3)', 'this message has a 1/1e9e15 chance to appear', 'the green box actually sets your ballpoints to 0, dont go for it', 'break;', 'import 7271337691337420 for a theme', 'reality update in 5 hours', '"I HAVE NOT SHOWERED SINCE 2022" -meowfest, 12/31/23', 'ball layer that generates sperm WILL BE ADDED TOMORROW', ':sob:', 'waiting for the day i forget the c in sec(x)', 'REMOVE RULE 1 REMOVE RULE 1 REMOVE RULE 1', 'why did they remove support to the marquee tag', 'plinko incremental anime delayed to mid 2027 amid developmental issues', 'chris pratt confirmed to voice the ball in plinko incremental movie', 'lore', 'have a random number: ' + Math.random().toString() + '!!!', 'end of the world delayed another year', '1 jslint problem: mixed spaces and tabs', 'walls will not be added stop complaning', 'scientists struggle to understand physics. quote: "what the fuck"', 'whats 9 + 10', 'please dont squish me', 'serial killer caught trapping victims inside boxpoints', 'keep I is still useless', 'cant wait for the NaN update', 'you should try playing around in the console!!!', 'new update: increased the update number to look like something changed', 'p', 'rabbits', 'RIP MEOWFEST o7', 'use the arrowkeys to move :3 :3 :3', 'explore the map! its worth it', 'im about to rolllll', 'for april fools level requirement scales very fast', 'green box abolished in plinkoland', 'plinko masters ripoff smhh', 'stop gambling', 'HELPPPP HELLP SOMEBODY HELP ME', 'you should shrink the window size', 'funny how this is a newsticker but it isnt even news', 'i can see you', 'ask meowfest to add loops to plinko incremental', 'i should make this empty for no reason in particular', 'hey you forgot that ;', '"I HAVE NOT SHOWERED SINCE 2022" -meowfest, 12/31/23', 'top ten bangers of all time (unless you are on mute :<)', 'man accidentally touches the rollpoint gear and loses arm', 'im running out of ideas', ':3', 'imagine if the rollpoint gear was real', 'you spin me right round baby right round', 'look for the plinko incremental album in stores on november 15'];
        newsticker = Math.ceil(Math.random() * newstickerchoices.length);
        newstickerelement.innerHTML = newstickerchoices[newsticker - 1];
    }

    function wait() {
        left = 0;
        resetonce = 0;
        newnewsticker();
    }

    function marquee() {
        left = left + 1;
        newstickerelement.style.left = left.toString() + 'px';
        leftcap = (newstickercontainer.getBoundingClientRect().right - newstickercontainer.getBoundingClientRect().left) - (newstickerelement.getBoundingClientRect().right - newstickerelement.getBoundingClientRect().left);
        if (left >= leftcap) {
            newstickerelement.innerHTML = '';
            if (resetonce === 0) {
                resetonce = 1;
                setTimeout(wait, 2000);
            }
        }
    }
    setInterval(marquee, 10);
});