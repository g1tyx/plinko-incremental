var ballamount,
    xposdespawn,
    cooldown;
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var savefile,
        pupgradeprice,
        screen,
        pupgrade,
        boxvalues,
        str,
        xp,
        autosavetimer,
        level,
        xpgain,
        pupgradelist,
        pcaplist,
        levelreq,
        m,
        ballpointgain,
        ballpoints,
        cap,
        price;
	screen = 1;
    autosavetimer = 0;
    xposdespawn = 0;
	pupgrade = 1;
    function decimalToString(num) {
        str = '';
        if (num.exponent >= 6) {
            str = num.mantissa.toString() + 'e' + num.exponent.toString();
        } else {
            str = num.toString();
        }
        return str;
    }
    function persecond() {
        if (autosavetimer >= 60) {
            window.console.log('autosaved!');
            savefile = {'ballpoints': decimalToString(ballpoints), 'xp': decimalToString(xp), 'level': decimalToString(level), 'pupgrade1': decimalToString(pupgradelist[0]), 'pupgrade2': decimalToString(pupgradelist[1]), 'pupgrade3': decimalToString(pupgradelist[2]), 'pupgrade4': decimalToString(pupgradelist[3]), 'pupgrade5': decimalToString(pupgradelist[4])};
            savefile = JSON.stringify(savefile);
            localStorage.setItem('save', savefile);
            autosavetimer =  0;
        } else {
            autosavetimer = autosavetimer + 1;
        }
    }
    setInterval(persecond, 1000);
    ballpoints = new Decimal('0');
    xp = new Decimal('0');
	level = new Decimal('1');
    pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    if (localStorage.getItem('save') !== null) {
		savefile = JSON.parse(localStorage.getItem('save'));
		ballpoints = new Decimal(savefile.ballpoints);
		xp = new Decimal(savefile.xp);
		level = new Decimal(savefile.level);
		pupgradelist = [new Decimal(savefile.pupgrade1), new Decimal(savefile.pupgrade2), new Decimal(savefile.pupgrade3), new Decimal(savefile.pupgrade4), new Decimal(savefile.pupgrade5)];
	}
	pcaplist = [new Decimal('400'), new Decimal('400'), new Decimal('25'), new Decimal('4'), new Decimal('25')];
	pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
    for (m = 1; m <= pupgradelist.length; m = m + 1) {
        document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1].floor()) + ' BallPoints';
        document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1].floor()) + '/' + decimalToString(pcaplist[m - 1]);
    }
    function tick() {
        cooldown = 5000 / Math.pow(2, pupgradelist[3]);
        ballamount = new Decimal('1');
        ballpointgain = new Decimal('1')
            .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[0])))
            .times(new Decimal('2').pow(pupgradelist[0].divideBy(20).floor()))
            .times(new Decimal('1').plus(new Decimal('1.02').times(pupgradelist[2])).times(new Decimal(new Decimal('1').add(ballpointgain).log()).divideBy(new Decimal('2')).plus(new Decimal('1'))));
        xpgain = new Decimal('1')
            .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[1])))
            .times(new Decimal('2').pow(pupgradelist[1].divideBy(25).floor()))
            .times(new Decimal('1').plus(new Decimal('1.04').times(pupgradelist[4]).times(new Decimal(level.log(new Decimal('6'))).plus(new Decimal('1')))));
        levelreq = new Decimal('1.5').pow(level).times(new Decimal('3').pow(level.divideBy(new Decimal('10')).floor()));
        boxvalues = [new Decimal('1'), new Decimal('1.5'), new Decimal('0.5'), new Decimal('5')];
        document.getElementById('orangedisplay').innerHTML = 'x' + decimalToString(boxvalues[0]);
        document.getElementById('orangedisplay2').innerHTML = 'x' + decimalToString(boxvalues[0]);
        document.getElementById('yellowdisplay').innerHTML = 'x' + decimalToString(boxvalues[1]);
        document.getElementById('yellowdisplay2').innerHTML = 'x' + decimalToString(boxvalues[1]);
        document.getElementById('reddisplay').innerHTML = 'x' + decimalToString(boxvalues[2]);
        document.getElementById('reddisplay2').innerHTML = 'x' + decimalToString(boxvalues[2]);
        document.getElementById('greendisplay').innerHTML = 'x' + decimalToString(boxvalues[3].floor());
        document.getElementById('ballpointsdisplay').innerHTML = 'You have ' + decimalToString(ballpoints.floor()) + ' BallPoints!';
        document.getElementById('leveldisplay').innerHTML = 'Level: ' + decimalToString(level) + '                    ' + decimalToString(xp.floor()) + ' / ' + decimalToString(levelreq.floor());
        document.getElementById('levelbar').style.width = decimalToString(xp.divideBy(levelreq).times(new Decimal('100'))) + '%';
        if (despawn === 1) {
            xposdespawn = xposdespawn / 100;
            if (xposdespawn <= 1 / 7 || (xposdespawn > 6 / 7)) {
                ballpoints = ballpointgain.times(boxvalues[0]).plus(ballpoints);
                xp = xpgain.times(boxvalues[0]).plus(xp);
            }
            if ((xposdespawn > 1 / 7 && xposdespawn <= 2 / 7) || (xposdespawn > 5 / 7 && xposdespawn <= 6 / 7)) {
                ballpoints = ballpointgain.times(boxvalues[1]).plus(ballpoints);
                xp = xpgain.times(boxvalues[1]).plus(xp);
            }
            if ((xposdespawn > 2 / 7 && xposdespawn <= 3 / 7) || (xposdespawn > 4 / 7 && xposdespawn <= 5 / 7)) {
                ballpoints = ballpointgain.times(boxvalues[2]).plus(ballpoints);
                xp = xpgain.times(boxvalues[2]).plus(xp);
            }
            if (xposdespawn > 3 / 7 && xposdespawn <= 4 / 7) {
                ballpoints = ballpointgain.times(boxvalues[3]).plus(ballpoints);
                xp = xpgain.times(boxvalues[3]).plus(xp);
            }
            despawn = 0;
            xposdespawn = 0;
        }
        if (xp.compare(levelreq) >= 0) {
            xp = xp.minus(levelreq);
            level = level.plus(new Decimal('1'));
        }
        if (level >= 16) {
            document.getElementById('boxifyresetbutton').innerHTML = 'Boxify!';
            document.getElementById('boxifyresettext').innerHTML = 'Boxify for' + 'tbd' + 'BoxPoints and reset Level, XP, BallPoints, and all Plinko Upgrades.';
        } else {
            document.getElementById('boxifyresetbutton').innerHTML = 'Locked...';
            document.getElementById('boxifyresettext').innerHTML = 'Reach level 16 to Boxify.';
        }
        window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
    document.getElementById('parrow1').addEventListener('click', function () {
        if (pupgrade > 1) {
            document.getElementById('pupgrade' + pupgrade.toString()).style.display = 'none';
            pupgrade = pupgrade - 1;
            document.getElementById('pupgrade' + pupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('parrow2').addEventListener('click', function () {
        if (pupgrade < 5) {
            document.getElementById('pupgrade' + pupgrade.toString()).style.display = 'none';
            pupgrade = pupgrade + 1;
            document.getElementById('pupgrade' + pupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('pupgradebutton1').addEventListener('click', function () {
        price = pupgradeprice[pupgrade - 1];
        cap = pcaplist[pupgrade - 1];
        if (ballpoints.compare(price) >= 0 && pupgradelist[pupgrade - 1].compare(cap) < 0) {
            ballpoints = ballpoints.minus(price);
            pupgradelist[pupgrade - 1] = pupgradelist[pupgrade - 1].add(new Decimal('1'));
            pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
        }
        for (m = 1; m <= pupgradelist.length; m = m + 1) {
            document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1].floor()) + ' BallPoints';
            document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1].floor()) + '/' + decimalToString(pcaplist[m - 1]);
        }
    });
    document.getElementById('import').addEventListener('click', function () {
        savefile = {'ballpoints': decimalToString(ballpoints), 'xp': decimalToString(xp), 'level': decimalToString(level), 'pupgrade1': decimalToString(pupgradelist[0]), 'pupgrade2': decimalToString(pupgradelist[1]), 'pupgrade3': decimalToString(pupgradelist[2]), 'pupgrade4': decimalToString(pupgradelist[3]), 'pupgrade5': decimalToString(pupgradelist[4])};
        savefile = JSON.stringify(savefile);
        savefile = btoa(savefile);
        navigator.clipboard.writeText(savefile);
        alert('Copied to clipboard!');
    });
    document.getElementById('export').addEventListener('click', function () {
        savefile = window.prompt('Paste your save here:', 'save file entering box');
        savefile = atob(savefile);
        savefile = JSON.parse(savefile);
        ballpoints = new Decimal(savefile.ballpoints);
		xp = new Decimal(savefile.xp);
		level = new Decimal(savefile.level);
		pupgradelist = [new Decimal(savefile.pupgrade1), new Decimal(savefile.pupgrade2), new Decimal(savefile.pupgrade3), new Decimal(savefile.pupgrade4), new Decimal(savefile.pupgrade5)];
        alert('save file loaded!');
    });
    document.getElementById('deletesave').addEventListener('click', function () {
        if (window.confirm('are you sure?')) {
            localStorage.removeItem('save');
            ballpoints = new Decimal('0');
            xp = new Decimal('0');
            level = new Decimal('1');
            pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
            alert('save wiped!');
        }
    });
    document.addEventListener('keydown', function (event) {
		//window.console.log(event.keyCode);
		if (event.keyCode === 83) {
			savefile = {'ballpoints': decimalToString(ballpoints), 'xp': decimalToString(xp), 'level': decimalToString(level), 'pupgrade1': decimalToString(pupgradelist[0]), 'pupgrade2': decimalToString(pupgradelist[1]), 'pupgrade3': decimalToString(pupgradelist[2]), 'pupgrade4': decimalToString(pupgradelist[3]), 'pupgrade5': decimalToString(pupgradelist[4])};
			savefile = JSON.stringify(savefile);
			localStorage.setItem('save', savefile);
		}
		if (event.keyCode === 39 && screen < 2) {
			for (l = 0; l < ballList.length; l = l + 1) {
				pegarea.removeChild(document.getElementById('ball' + ballList[l].index.toString()));
			}
			ballList = [];
			document.getElementById('balldrop').innerHTML = 'Drop Ball!';
            document.getElementById('balldrop').style.backgroundColor = '#c2c2c2';
			document.getElementById('screen' + screen.toString()).style.display = 'none';
			screen = screen + 1;
			document.getElementById('screen' + screen.toString()).style.display = 'inline';
		}
		if (event.keyCode === 37 && screen > 0) {
			for (l = 0; l < ballList.length; l = l + 1) {
				pegarea.removeChild(document.getElementById('ball' + ballList[l].index.toString()));
			}
			ballList = [];
			document.getElementById('balldrop').innerHTML = 'Drop Ball!';
			document.getElementById('balldrop').style.backgroundColor = '#c2c2c2';
			document.getElementById('screen' + screen.toString()).style.display = 'none';
			screen = screen - 1;
			document.getElementById('screen' + screen.toString()).style.display = 'inline';
		}
	});
});