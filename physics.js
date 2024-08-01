var ballList,
    l,
    pegarea;
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var ball,
        i,
        ballcheckphysical,
        ballcheck,
        angle,
        str,
        decimalplaces,
        j,
        k,
        pegs,
        dotprod,
        audiotrack,
        peg,
        touching,
        num,
        touching2,
        touch,
        balldrop,
        pegtouch,
        specialpegnumber,
        specialpeglocation,
        specialpegpermission,
        specialpeglist,
        balldropallow,
        audiorepeat,
        obj,
        cooldowncheck,
        gravity,
        pegseperationlist,
        pegsepstart,
        fps,
        z,
        fps1,
        fps2,
        spawnindex;
    spawnindex = -1;
    gravity = 0.01;
    cooldowncheck = 0;
    despawn = 0;
    audiorepeat = 0;
    specialpeglist = [];
    for (i = 1; i <= 67; i += 1) {
        specialpeglist.push(i);
    }
    ballList = [];
    balldropallow = 1;
    pegseperationlist = [0, 0, 10, 19, 29, 38, 48, 57, 67, 67];
    pegsepstart = 1;
    pegarea = document.getElementById('pegs');

    function decimalToString(num) {
        str = '';
        if (num.exponent >= 6) {
            str = num.mantissa.toFixed(3).toString();
            for (z = 1; z <= 4; z = z + 1) {
                if (str.slice(-1) === '0' || str.slice(-1) === '.') {
                    str = str.slice(0, -1);
                }
            }
            str = str + 'e' + num.exponent.toString();
        } else {
            str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(3).toString();
            for (z = 1; z <= 4; z = z + 1) {
                if (str.slice(-1) === '0' || str.slice(-1) === '.') {
                    str = str.slice(0, -1);
                }
            }
        }
        return str;
    }
    function distance(x1, y1, x2, y2) {
        return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    }
    function wait() {
        if (cooldowncheck === 1) {
            cooldowncheck = 0;
            balldropallow = 1;
            document.getElementById('balldrop').innerHTML = 'Drop Ball!';
            document.getElementById('balldrop').style.backgroundColor = '#c2c2c2';
            if (audiorepeat === 0) {
                audiorepeat = 1;
            }
        }
    }
    function collision() {
        j = 0;
        touch = 0;
        gravity = 0.01;
        pegsepstart = 0;
        if (ballcheckphysical.offsetTop <= pegs[0].offsetTop || (ballcheckphysical.offsetTop >= pegs[0].offsetTop && ballcheckphysical.offsetTop <= pegs[9].offsetTop)) {
            pegsepstart = 1;
        } else if ((ballcheckphysical.offsetTop >= pegs[0].offsetTop && ballcheckphysical.offsetTop <= pegs[9].offsetTop) || (ballcheckphysical.offsetTop >= pegs[9].offsetTop && ballcheckphysical.offsetTop <= pegs[18].offsetTop)) {
            pegsepstart = 2;
        } else if ((ballcheckphysical.offsetTop >= pegs[9].offsetTop && ballcheckphysical.offsetTop <= pegs[18].offsetTop) || (ballcheckphysical.offsetTop >= pegs[18].offsetTop && ballcheckphysical.offsetTop <= pegs[28].offsetTop)) {
            pegsepstart = 3;
        } else if ((ballcheckphysical.offsetTop >= pegs[18].offsetTop && ballcheckphysical.offsetTop <= pegs[28].offsetTop) || (ballcheckphysical.offsetTop >= pegs[28].offsetTop && ballcheckphysical.offsetTop <= pegs[37].offsetTop)) {
            pegsepstart = 4;
        } else if ((ballcheckphysical.offsetTop >= pegs[28].offsetTop && ballcheckphysical.offsetTop <= pegs[37].offsetTop) || (ballcheckphysical.offsetTop >= pegs[37].offsetTop && ballcheckphysical.offsetTop <= pegs[47].offsetTop)) {
            pegsepstart = 5;
        } else if ((ballcheckphysical.offsetTop >= pegs[37].offsetTop && ballcheckphysical.offsetTop <= pegs[47].offsetTop) || (ballcheckphysical.offsetTop >= pegs[47].offsetTop && ballcheckphysical.offsetTop <= pegs[56].offsetTop)) {
            pegsepstart = 6;
        } else if ((ballcheckphysical.offsetTop >= pegs[47].offsetTop && ballcheckphysical.offsetTop <= pegs[56].offsetTop) || (ballcheckphysical.offsetTop >= pegs[56].offsetTop && ballcheckphysical.offsetTop <= pegs[66].offsetTop)) {
            pegsepstart = 7;
        } else if (ballcheckphysical.offsetTop >= pegs[66].offsetTop) {
            pegsepstart = 8;
        }
        for (j = pegseperationlist[pegsepstart - 1]; j < pegseperationlist[pegsepstart + 1]; j = j + 1) {
            peg = pegs[j];
            touching = distance(peg.getBoundingClientRect().left + (peg.getBoundingClientRect().width / 2), peg.getBoundingClientRect().top + (peg.getBoundingClientRect().height / 2), ballcheckphysical.getBoundingClientRect().left + (ballcheckphysical.getBoundingClientRect().width / 2), ballcheckphysical.getBoundingClientRect().top + (ballcheckphysical.getBoundingClientRect().height / 2));
            // x1.22 is to make up for how css handles subpixels
            if (touching <= 1.22 * (((peg.getBoundingClientRect().width / 2) + (ballcheckphysical.getBoundingClientRect().width / 2)) * ((peg.getBoundingClientRect().width / 2) + (ballcheckphysical.getBoundingClientRect().width / 2)))) {
                touch = 1;
                pegtouch = j + 1;
            }
        }
        j = 0;
    }

    function rectToPolar(x, y) {
        k = [];
        k.push(Math.sqrt((x * x) + (y * y)));
        if (x !== 0) {
            k.push(Math.atan(y / x));
        } else {
            k.push(0);
        }
        return k;
    }
    function spawnball() {
        if (sscreen === 1) {
            spawnindex = spawnindex + 1;
            ball = document.createElement('div');
            document.getElementById('pegs').appendChild(ball);
            ball.style.width = '10px';
            ball.style.height = '10px';
            ball.style.borderRadius = "50%";
            ball.style.position = 'absolute';
            ball.style.top = '-10%';
            ball.style.backgroundColor = '#c2c2c2';
            ball.style.outline = 'black solid 0.1vmin';
            ball.setAttribute('id', 'ball' + spawnindex.toString());
            ball.setAttribute('class', 'ball');
            obj = {
                'index': spawnindex,
                'xvel': 0,
                'yvel': 0,
                'ypos': -10,
                'xpos': 0
            };
            obj.xpos = Math.random() * 99;
            ballList.push(obj);
            ball.style.left = obj.xpos.toString() + '%';
        }
    }

    function spawnball2() {
        document.getElementById('balldrop').style.backgroundColor = '#aaaaaa';
        for (l = 0; l < ballamount; l = l + 1) {
            if (ballList.length < ballamount) {
                spawnball();
            }
        }
        document.querySelectorAll('.ball').forEach(b => {
            if (b.offsetWidth >= 0) {
                b.style.width = (document.getElementById('peg1').getBoundingClientRect().width / 3).toString() + 'px';
                b.style.height = b.getBoundingClientRect().width.toString() + 'px';
            }
        });
        document.getElementById('balldrop').innerHTML = 'Waiting... (there are ' + ballList.length.toString() + ' balls left)';
        if (mutesfx.compare(new Decimal('0')) === 0) {
            audiotrack = new Audio('ballspawn.mp3');
            audiotrack.play();
        }
        clearTimeout(balldrop);
    }

    function specialpegspawn() {
        if ((Math.random() <= parseFloat(decimalToString(specialpegchance)) && specialpegchance != undefined) && specialpegunlocked === 1 && specialpeglist.length !== 0) {
            specialpegnumber = Math.ceil(Math.random() * specialpeglist.length)
            specialpeglist = specialpeglist.filter(e => e !== specialpegnumber);
            document.getElementById('peg' + specialpegnumber.toString()).style.backgroundColor = 'gold';
        }
    }
    setInterval(specialpegspawn, 1000);
    document.getElementById('balldrop').addEventListener('click', function () {
        if (ballList.length === 0 && cooldowncheck === 0) {
            clearTimeout(balldrop);
            audiorepeat = 0;
            document.getElementById('balldrop').style.backgroundColor = '#aaaaaa';
            for (l = 0; l < ballamount; l = l + 1) {
                spawnball();
            }
            document.getElementById('balldrop').innerHTML = 'Waiting... (there are ' + ballList.length.toString() + ' balls left)';
            if (mutesfx.compare(new Decimal('0')) === 0) {
                audiotrack = new Audio('ballspawn.mp3');
                audiotrack.play();
            }
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.code == 'Space' && ballList.length === 0 && cooldowncheck === 0) {
            audiorepeat = 0;
            document.getElementById('balldrop').style.backgroundColor = '#aaaaaa';
            for (l = 0; l < ballamount; l = l + 1) {
                spawnball();
            }
            document.getElementById('balldrop').innerHTML = 'Waiting... (there are ' + ballList.length.toString() + ' balls left)';
            if (mutesfx.compare(new Decimal('0')) === 0) {
                audiotrack = new Audio('ballspawn.mp3');
                audiotrack.play();
            }
        }
    });
    document.getElementById('deleteballs').addEventListener('click', function () {
        for (l = 0; l < ballList.length; l = l + 1) {
            pegarea.removeChild(document.getElementById('ball' + ballList[l].index.toString()));
        }
        ballList = [];
        document.getElementById('balldrop').innerHTML = 'Drop Ball!';
        document.getElementById('balldrop').style.backgroundColor = '#c2c2c2';
    });
    fps1 = new Date();

    function physics() {
        if (typeof ballamount != 'string') {
            ballamount = decimalToString(ballamount);
        }
        if (audiorepeat === 1 && (mutesfx.compare(new Decimal('0')) === 0)) {
            audiotrack = new Audio('balldisappear.mp3');
            audiorepeat = 2;
            audiotrack.play();
        }
        if (cooldowncheck === 1) {
            document.getElementById('balldrop').innerHTML = 'Cooldown...';
            document.getElementById('balldrop').style.backgroundColor = '#aaaaaa';
            setTimeout(wait, cooldown);
        }
        i = 0;
        for (i = 0; i < ballList.length; i = i + 1) {
            ballcheck = ballList[i];
            ballcheckphysical = document.getElementById('ball' + ballcheck.index.toString());
            pegs = document.getElementsByClassName('peg');
            collision();
            if (touch === 0) {
                ballcheck.yvel = (ballcheck.yvel * 0.99) + gravity;
                ballcheck.ypos = ballcheck.ypos + ballcheck.yvel;
                ballcheck.xpos = ballcheck.xpos + ballcheck.xvel;
                gravity = gravity * 1.75;
                ballcheckphysical.style.left = ballcheck.xpos.toString() + '%';
                ballcheckphysical.style.top = ballcheck.ypos.toString() + '%';
                if (ballcheck.ypos >= 90) {
                    if (mutesfx.compare(new Decimal('0')) === 0) {
                        audiotrack = new Audio('ballgain.mp3');
                        audiotrack.play();

                    }
                    xposdespawn = ballcheck.xpos;
                    despawn = 1;
                    ballList.splice(i, 1);
                    pegarea.removeChild(ballcheckphysical);
                    document.getElementById('balldrop').innerHTML = 'Waiting... (there are ' + ballList.length.toString() + ' balls left)';
                    if (ballList.length === 0) {
                        cooldowncheck = 1;
                        audiorepeat = 0;
                    }
                    break;
                }
            } else {
                if (mutesfx.compare(new Decimal('0')) === 0) {
                    audiotrack = new Audio('ballht.mp3');
                    audiotrack.play();
                }
                if (!specialpeglist.includes(pegtouch)) {
                   specialpeglist.push(pegtouch);
                   document.getElementById('peg' + pegtouch.toString()).style.backgroundColor = '#c2c2c2';
                   specialpegtouch = 1;
                }
                while (touch == 1) { 
                    gravity = 0.01;
                    angle = rectToPolar(ballcheck.xvel, ballcheck.yvel);
                    angle[1] = 180 - angle[1];
                    dotprod = (ballcheck.xvel * Math.sin(angle[1])) + (ballcheck.yvel * Math.cos(angle[1]));
                    ballcheck.xvel = -1.25 * Math.sin(angle[1]) * dotprod;
                    ballcheck.yvel = -1.25 * Math.cos(angle[1]) * dotprod;
                    ballcheck.ypos = ballcheck.ypos + ballcheck.yvel;
                    ballcheck.xpos = ballcheck.xpos + ballcheck.xvel;
                    ballcheckphysical.style.left = ballcheck.xpos.toString() + '%';
                    ballcheckphysical.style.top = ballcheck.ypos.toString() + '%';
                    collision();
                }
            }
            if (ballcheck.xpos <= 0 || ballcheck.ypos < -10 || ballcheck.ypos >= 99 || ballcheck.xpos >= 99) {
                gravity = 0.01;
                ballcheck.xvel *= -1;
                ballcheck.ypos = ballcheck.ypos + ballcheck.yvel;
                ballcheck.xpos = ballcheck.xpos + ballcheck.xvel;
                ballcheckphysical.style.left = ballcheck.xpos.toString() + '%';
                ballcheckphysical.style.top = ballcheck.ypos.toString() + '%';
            }
        }
        if (disableautodrop.compare(new Decimal('0')) === 0) {
            balldropallow = 1;
            balldrop = 0;
        }
        if (sscreen !== 1) {
            balldropallow = -1;
            balldrop = 0;
            clearTimeout(balldrop);
        } else if (balldropallow === -1) {
            balldropallow = 1;
        }
        if (balldropunlocked === 1 && ballList.length === 0 && cooldowncheck === 0 && balldropallow === 1 && load === 1 && disableautodrop.compare(new Decimal('1')) === 0) {
            balldropallow = 0;
            balldrop = setTimeout(spawnball2, parseFloat(decimalToString(balldropcooldown)) * 1000);
        }
        if (cooldowncheck === 1) {
            clearTimeout(balldrop);
        }
        fps2 = new Date();
        fps = fps2 - fps1;
        fps1 = fps2;
        //16.7 for 60fps
        if (fps <= 16.7) {
            fps = 16.7;
            window.setTimeout(physics, fps);
        } else {
            window.requestAnimationFrame(physics);
        }
    }
    window.requestAnimationFrame(physics);
});
