var ballList,
    despawn,
    l,
    pegarea;
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var ball,
        i,
        ballcheckphysical,
        ballcheck,
        angle,
        j,
        k,
        pegs,
        dotprod,
        audiotrack,
        peg,
        touching,
        touching2,
        touch,
        audiorepeat,
        obj,
        cooldowncheck,
        gravity,
        spawnindex;
    spawnindex = -1;
	gravity = 0.01;
    cooldowncheck = 0;
    despawn = 0;
    audiorepeat = 0;
    ballList = [];
    pegarea = document.getElementById('pegs');
    function wait() {
        if (cooldowncheck === 1) {
            cooldowncheck = 0;
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
		for (j = 0; j < pegs.length; j = j + 1) {
            peg = pegs[j];
            touching = (peg.offsetLeft - 5) - (ballcheckphysical.offsetLeft - 20);
            touching = touching * touching;
            touching2 = (peg.offsetTop - 5) - (ballcheckphysical.offsetTop - 20);
            touching2 = touching2 * touching2;
            touching = touching + touching2;
            if (touching <= 400) {
                touch = 1;
            }
        }
        j = 0;
        if (ballcheck.xpos <= 0 || ballcheck.ypos < -10 || ballcheck.ypos >= 99 || ballcheck.xpos >= 99) {
            touch = 1;
        }
    }
    
    function rectToPolar(x, y) {
        k = [];
        x = x * 100;
        y = y * 100;
        k.push(Math.sqrt((x * x) + (y * y)));
        if (x !== 0) {
            k.push(Math.atan(y / x));
        } else {
            k.push(0);
        }
        return k;
    }
    function spawnball() {
        spawnindex = spawnindex + 1;
        ball = document.createElement('div');
		document.getElementById('pegs').appendChild(ball);
        ball.style.width = '10px';
        ball.style.height = '10px';
        ball.style.borderRadius = "50%";
		ball.style.position = 'absolute';
		ball.style.top = '-10%';
		ball.style.backgroundColor = '#c2c2c2';
		ball.style.outline = 'black solid 1px';
        ball.setAttribute('id', 'ball' + spawnindex.toString());
        obj = {'index': spawnindex, 'xvel': 0, 'yvel': 0, 'ypos': -10, 'xpos': 0};
        obj.xpos = Math.random() * 100;
		ballList.push(obj);
        ball.style.left = obj.xpos;
    }
    document.getElementById('balldrop').addEventListener('click', function () {
        if (ballList.length === 0 && cooldowncheck === 0) {
            audiorepeat = 0;
            document.getElementById('balldrop').style.backgroundColor = '#aaaaaa';
            for (l = 0; l < ballamount; l = l + 1) {
                spawnball();
            }
            document.getElementById('balldrop').innerHTML = 'Waiting... (there are ' + ballList.length.toString() + ' balls left)';
            audiotrack = new Audio('ballspawn.mp3');
            audiotrack.play();
        }
	});
	document.addEventListener('keydown', function (event) {
		if (event.keyCode === 68 && ballList.length === 0 && cooldowncheck === 0) {
			audiorepeat = 0;
            document.getElementById('balldrop').style.backgroundColor = '#aaaaaa';
            for (l = 0; l < ballamount; l = l + 1) {
                spawnball();
            }
            document.getElementById('balldrop').innerHTML = 'Waiting... (there are ' + ballList.length.toString() + ' balls left)';
            audiotrack = new Audio('ballspawn.mp3');
            audiotrack.play();
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
    function physics() {
		if (audiorepeat === 1) {
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
				ballcheck.yvel = (ballcheck.yvel * 0.995) + gravity;
				ballcheck.ypos = ballcheck.ypos + ballcheck.yvel;
				ballcheck.xvel = ballcheck.xvel * 0.995;
                ballcheck.xpos = ballcheck.xpos + ballcheck.xvel;
                gravity = gravity * 1.85;
                ballcheckphysical.style.left = ballcheck.xpos.toString() + '%';
                ballcheckphysical.style.top = ballcheck.ypos.toString() + '%';
                if (ballcheck.ypos >= 90) {
					audiotrack = new Audio('ballgain.mp3');
					audiotrack.play();
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
				audiotrack = new Audio('ballht.mp3');
				audiotrack.play();
                while (touch === 1) {
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
		}
		window.requestAnimationFrame(physics);
	}
	window.requestAnimationFrame(physics);
});