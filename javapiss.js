var ballamount,
    xposdespawn,
    despawn,
    mutesfx,
    specialpegchance,
    specialpegtouch,
    specialpegunlocked,
    balldropunlocked,
    balldropcooldown,
    load,
    cooldown;
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var savefile,
        pupgradeprice,
        mutemusic,
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
        musictrack,
        levelreq,
        boxifyresets,
        boxpoints,
        timelaston,
        bupgrade,
        spupgrade,
        qolupgrade,
        boxpointgain,
        specialpegs,
        specialpeggain,
        offlinetime,
        rollpointreq,
        m,
        decimalplaces,
        ballpointgain,
        ballpoints,
        bupgradelist,
        bcaplist,
        bupgradeprice,
        spupgradelist,
        spcaplist,
        spupgradeprice,
        qolupgradelist,
        qolupgradeprice,
        qolcaplist,
        cap,
        price;
    screen = -1;
    load = 0;
    despawn = 0;
    autosavetimer = 0;
    xposdespawn = 0;
    pupgrade = 1;
    bupgrade = 1;
    specialpegtouch = 0;
    spupgrade = 1;
    qolupgrade = 1;
    specialpegunlocked = 0;
    balldropunlocked = 0;
    balldropcooldown = new Decimal('0');

    function decimalToString(num) {
        str = '';
        if (num.exponent >= 6) {
            if (Math.floor(num.mantissa.valueOf()) === num.mantissa.valueOf()) {
                decimalplaces = 0;
            } else {
                decimalplaces = num.mantissa.toString().split(".")[1].length;
            }
            if (decimalplaces < 3) {
                str = num.mantissa.toString() + 'e' + num.exponent.toString();
            } else {
                str = num.mantissa.toFixed(3).toString() + 'e' + num.exponent.toString();
            }
        } else {
            if (Math.floor(num.mantissa.valueOf()) === num.mantissa.valueOf()) {
                decimalplaces = 0;
            } else {
                decimalplaces = num.mantissa.toString().split(".")[1].length;
            }
            if (decimalplaces < 3) {
                str = num.toString();
            } else {
                str = num.toFixed(3).toString();
            }
        }
        return str;
    }

    function persecond() {
        if (autosavetimer >= 60) {
            window.console.log('autosaved!');
            timelaston = new Date().getTime();
            timelaston = Math.floor(timelaston / 1000);
            savefile = {
                'timelaston': timelaston.toString(),
                'ballpoints': decimalToString(ballpoints),
                'xp': decimalToString(xp),
                'level': decimalToString(level),
                'pupgrade1': decimalToString(pupgradelist[0]),
                'pupgrade2': decimalToString(pupgradelist[1]),
                'pupgrade3': decimalToString(pupgradelist[2]),
                'pupgrade4': decimalToString(pupgradelist[3]),
                'pupgrade5': decimalToString(pupgradelist[4]),
                'mutemusic': decimalToString(mutemusic),
                'mutesfx': decimalToString(mutesfx),
                'boxifyresets': boxifyresets,
                'boxpoints': boxpoints,
                'specialpegs': specialpegs,
                'bupgrade1': decimalToString(bupgradelist[0]),
                'bupgrade2': decimalToString(bupgradelist[1]),
                'bupgrade3': decimalToString(bupgradelist[2]),
                'bupgrade4': decimalToString(bupgradelist[3]),
                'bupgrade5': decimalToString(bupgradelist[4]),
                'bupgrade6': decimalToString(bupgradelist[5]),
                'bupgrade7': decimalToString(bupgradelist[6]),
                'bupgrade8': decimalToString(bupgradelist[7]),
                'spupgrade1': decimalToString(spupgradelist[0]),
                'spupgrade2': decimalToString(spupgradelist[1]),
                'spupgrade3': decimalToString(spupgradelist[2]),
                'spupgrade4': decimalToString(spupgradelist[3]),
                'spupgrade5': decimalToString(spupgradelist[4]),
                'spupgrade6': decimalToString(spupgradelist[5]),
                'spupgrade7': decimalToString(spupgradelist[6]),
                'qolupgrade1': decimalToString(qolupgradelist[0]),
                'qolupgrade2': decimalToString(qolupgradelist[1])
            };
            if (JSON.stringify(savefile) != '[object Object]') {
                savefile = JSON.stringify(savefile);
                localStorage.setItem('save', savefile);
                autosavetimer = 0;
            } else {
                alert('save failed!');
            }
        } else {
            autosavetimer = autosavetimer + 1;
        }
    }
    timelaston = new Date().getTime();
    timelaston = Math.floor(timelaston / 1000);
    ballpoints = new Decimal('0');
    xp = new Decimal('0');
    level = new Decimal('1');
    pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    mutemusic = new Decimal('0');
    mutesfx = new Decimal('0');
    boxifyresets = new Decimal('0');
    boxpoints = new Decimal('0');
    specialpegs = new Decimal('0');
    bupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    spupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    qolupgradelist = [new Decimal('0'), new Decimal('0')];
    if (localStorage.getItem('save') !== null) {
        savefile = JSON.parse(localStorage.getItem('save'));
        timelaston = savefile.timelaston;
        ballpoints = new Decimal(savefile.ballpoints);
        xp = new Decimal(savefile.xp);
        level = new Decimal(savefile.level);
        pupgradelist = [new Decimal(savefile.pupgrade1), new Decimal(savefile.pupgrade2), new Decimal(savefile.pupgrade3), new Decimal(savefile.pupgrade4), new Decimal(savefile.pupgrade5)];
        mutemusic = new Decimal(savefile.mutemusic);
        mutesfx = new Decimal(savefile.mutesfx);
        boxifyresets = new Decimal(savefile.boxifyresets);
        boxpoints = new Decimal(savefile.boxpoints);
        specialpegs = new Decimal(savefile.specialpegs);
        bupgradelist = [new Decimal(savefile.bupgrade1), new Decimal(savefile.bupgrade2), new Decimal(savefile.bupgrade3), new Decimal(savefile.bupgrade4), new Decimal(savefile.bupgrade5), new Decimal(savefile.bupgrade6), new Decimal(savefile.bupgrade7), new Decimal(savefile.bupgrade8)];
        spupgradelist = [new Decimal(savefile.spupgrade1), new Decimal(savefile.spupgrade2), new Decimal(savefile.spupgrade3), new Decimal(savefile.spupgrade4), new Decimal(savefile.spupgrade5), new Decimal(savefile.spupgrade6), new Decimal(savefile.spupgrade7)];
        qolupgradelist = [new Decimal(savefile.qolupgrade1), new Decimal(savefile.qolupgrade2)];
        if (qolupgradelist[0].compare(1) >= 0 && timelaston <= Math.floor(new Date().getTime() / 1000)) {
            window.console.log('offline progress added!');
            timelaston = Math.floor(new Date().getTime() / 1000) - timelaston;
            timelaston = Math.floor(timelaston / 5);
            window.console.log('time: ' + timelaston.toString());
            ballpointgain = new Decimal('1')
                .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[0])))
                .times(new Decimal('2').pow(pupgradelist[0].divideBy(20).floor()))
                .times(new Decimal('1').plus(new Decimal('1.02').times(pupgradelist[2]).times(new Decimal(new Decimal('1').add(ballpointgain).log10()).divideBy(new Decimal('2')).plus(new Decimal('1')))))
                .times(new Decimal('1').plus(new Decimal('1.5').times(bupgradelist[4])))
                .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[2])));
            xpgain = new Decimal('1')
                .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[1])))
                .times(new Decimal('2').pow(pupgradelist[1].divideBy(25).floor()))
                .times(new Decimal('1').plus(new Decimal('1.04').times(pupgradelist[4]).times(new Decimal(level.log(new Decimal('6'))).plus(new Decimal('1')))))
                .times(new Decimal('1').plus(new Decimal('1.5').times(bupgradelist[1])))
                .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[1])));
            boxvalues = [new Decimal('1').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[1]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[4]))), new Decimal('1.5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[2]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[5]))), new Decimal('0.5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[0]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[3]))), new Decimal('5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[6]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[3])))];
            ballpoints = ballpoints.add(ballpointgain.times(boxvalues[0].times(new Decimal('2')).add(boxvalues[1].times(new Decimal('2')).add((boxvalues[2].times(new Decimal('2')).add((boxvalues[3]))))).divideBy('7')).times(new Decimal(timelaston)));
            xp = xp.add(xpgain.times(boxvalues[0].times(new Decimal('2')).add(boxvalues[1].times(new Decimal('2')).add((boxvalues[2].times(new Decimal('2')).add((boxvalues[3]))))).divideBy('7')));
            timelaston = Math.floor(new Date().getTime() / 1000);
            savefile = {
                'timelaston': timelaston.toString(),
                'ballpoints': decimalToString(ballpoints),
                'xp': decimalToString(xp),
                'level': decimalToString(level),
                'pupgrade1': decimalToString(pupgradelist[0]),
                'pupgrade2': decimalToString(pupgradelist[1]),
                'pupgrade3': decimalToString(pupgradelist[2]),
                'pupgrade4': decimalToString(pupgradelist[3]),
                'pupgrade5': decimalToString(pupgradelist[4]),
                'mutemusic': decimalToString(mutemusic),
                'mutesfx': decimalToString(mutesfx),
                'boxifyresets': boxifyresets,
                'boxpoints': boxpoints,
                'specialpegs': specialpegs,
                'bupgrade1': decimalToString(bupgradelist[0]),
                'bupgrade2': decimalToString(bupgradelist[1]),
                'bupgrade3': decimalToString(bupgradelist[2]),
                'bupgrade4': decimalToString(bupgradelist[3]),
                'bupgrade5': decimalToString(bupgradelist[4]),
                'bupgrade6': decimalToString(bupgradelist[5]),
                'bupgrade7': decimalToString(bupgradelist[6]),
                'bupgrade8': decimalToString(bupgradelist[7]),
                'spupgrade1': decimalToString(spupgradelist[0]),
                'spupgrade2': decimalToString(spupgradelist[1]),
                'spupgrade3': decimalToString(spupgradelist[2]),
                'spupgrade4': decimalToString(spupgradelist[3]),
                'spupgrade5': decimalToString(spupgradelist[4]),
                'spupgrade6': decimalToString(spupgradelist[5]),
                'spupgrade7': decimalToString(spupgradelist[6]),
                'qolupgrade1': decimalToString(qolupgradelist[0]),
                'qolupgrade2': decimalToString(qolupgradelist[1])
            };
			localStorage.setItem('save', savefile);
        }
    }
    pcaplist = [new Decimal('400'), new Decimal('400'), new Decimal('25'), new Decimal('4'), new Decimal('25')];
    spcaplist = [new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1')];
    bcaplist = [new Decimal('999'), new Decimal('999'), new Decimal('999'), new Decimal('999'), new Decimal('400'), new Decimal('400'), new Decimal('25'), new Decimal('50')];
    qolcaplist = [new Decimal('7'), new Decimal('1')];
    pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
    bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7]))];
    spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15')];
    qolupgradeprice = [new Decimal('50').times(new Decimal('5').pow(qolupgradelist[0])), new Decimal('1000')];
    for (m = 1; m <= pupgradelist.length; m = m + 1) {
        document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
        document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
    }
    for (m = 1; m <= bupgradelist.length; m = m + 1) {
        document.getElementById('bupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(bupgradeprice[m - 1]) + ' BoxPoints';
        document.getElementById('bupgrade' + m.toString() + 'cap').innerHTML = decimalToString(bupgradelist[m - 1]) + '/' + decimalToString(bcaplist[m - 1]);
    }
    for (m = 1; m <= spupgradelist.length; m = m + 1) {
        document.getElementById('spupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(spupgradeprice[m - 1]) + ' Special Pegs';
        document.getElementById('spupgrade' + m.toString() + 'cap').innerHTML = decimalToString(spupgradelist[m - 1]) + '/' + decimalToString(spcaplist[m - 1]);
    }
    for (m = 1; m <= qolupgradelist.length; m = m + 1) {
        document.getElementById('qolupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(qolupgradeprice[m - 1]) + ' BoxPoints';
        document.getElementById('qolupgrade' + m.toString() + 'cap').innerHTML = decimalToString(qolupgradelist[m - 1]) + '/' + decimalToString(qolcaplist[m - 1]);
    }
    if (mutesfx.compare(new Decimal('0')) === 0) {
        document.getElementById('mutesfx').style.backgroundColor = '#b4f277';
    } else {
        document.getElementById('mutesfx').style.backgroundColor = '#f27777';
    }
    if (mutemusic.compare(new Decimal('0')) === 0) {
        document.getElementById('mutemusic').style.backgroundColor = '#b4f277';
    } else {
        document.getElementById('mutemusic').style.backgroundColor = '#f27777';
    }

    function tick() {
        cooldown = 5000 / Math.pow(2, pupgradelist[3]);
        ballamount = new Decimal('1');
        ballpointgain = new Decimal('1')
            .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[0])))
            .times(new Decimal('2').pow(pupgradelist[0].divideBy(20).floor()))
            .times(new Decimal('1').plus(new Decimal('1.02').times(pupgradelist[2]).times(new Decimal(new Decimal('1').add(ballpointgain).log10()).divideBy(new Decimal('2')).plus(new Decimal('1')))))
            .times(new Decimal('1').plus(new Decimal('1.5').times(bupgradelist[4])))
            .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[2])));
        xpgain = new Decimal('1')
            .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[1])))
            .times(new Decimal('2').pow(pupgradelist[1].divideBy(25).floor()))
            .times(new Decimal('1').plus(new Decimal('1.04').times(pupgradelist[4]).times(new Decimal(level.log(new Decimal('6'))).plus(new Decimal('1')))))
            .times(new Decimal('1').plus(new Decimal('1.5').times(bupgradelist[1])))
            .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[1])));
        boxpointgain = (new Decimal('1.2').pow(level.minus(new Decimal('16')))).times(new Decimal('3').pow(level.minus('16').divideBy(10).floor()))
            .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[0])));
        levelreq = new Decimal('1.3').pow(level).times(new Decimal('1.8').pow(level.divideBy(new Decimal('10')).floor()));
        boxvalues = [new Decimal('1').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[1]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[4]))), new Decimal('1.5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[2]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[5]))), new Decimal('0.5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[0]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[3]))), new Decimal('5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[6]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[3])))];
        for (m = 0; m < boxvalues.length; m = m + 1) {
            boxvalues[m] = boxvalues[m].times(new Decimal('1').plus(new Decimal('1.02').times(bupgradelist[7]).times(new Decimal(new Decimal('1').add(boxpoints).log10()).divideBy(new Decimal('3')))));
        }
        specialpeggain = new Decimal('1')
            .add(bupgradelist[6]);
        specialpegchance = new Decimal('0.001')
            .times(new Decimal('2').pow(bupgradelist[6].divideBy(25).floor()));
        document.getElementById('orangedisplay').innerHTML = 'x' + decimalToString(boxvalues[0]);
        document.getElementById('orangedisplay2').innerHTML = 'x' + decimalToString(boxvalues[0]);
        document.getElementById('yellowdisplay').innerHTML = 'x' + decimalToString(boxvalues[1]);
        document.getElementById('yellowdisplay2').innerHTML = 'x' + decimalToString(boxvalues[1]);
        document.getElementById('reddisplay').innerHTML = 'x' + decimalToString(boxvalues[2]);
        document.getElementById('reddisplay2').innerHTML = 'x' + decimalToString(boxvalues[2]);
        document.getElementById('greendisplay').innerHTML = 'x' + decimalToString(boxvalues[3]);
        document.getElementById('ballpointsdisplay').innerHTML = 'You have ' + decimalToString(ballpoints) + ' BallPoints!';
        document.getElementById('levelbar').style.width = decimalToString(xp.divideBy(levelreq).times(new Decimal('100'))) + '%';
        document.getElementById('leveldisplay').innerHTML = 'Level: ' + decimalToString(level);
        document.getElementById('leveldisplayxp').innerHTML = 'XP: ' + decimalToString(xp) + ' / ' + decimalToString(levelreq);
        if (boxifyresets.compare(1) >= 0) {
            document.getElementById('boxifyupgradebuilding').style.display = 'inline';
            document.getElementById('specialpegbuilding').style.display = 'inline';
            document.getElementById('qolbuilding').style.display = 'inline';
            document.getElementById('movehelp').style.display = 'none';
            document.getElementById('newsticker').style.display = 'inline';
            specialpegunlocked = 1;
        } else {
            specialpegunlocked = 0;
        }
        document.getElementById('bbuildingtitle').innerHTML = 'Boxify Upgrades ' + '(you have ' + decimalToString(boxpoints) + ' BoxPoints)';
        document.getElementById('spbuildingtitle').innerHTML = 'Special Peg Upgrades ' + '(you have ' + decimalToString(specialpegs) + ' Special Pegs)';
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
        if (specialpegtouch === 1) {
            specialpegs = specialpegs.add(specialpeggain);
            specialpegtouch = 0;
        }
        if (qolupgradelist[0].compare(1) >= 0) {
            balldropcooldown = new Decimal('6').minus(new Decimal('1').plus(new Decimal('0.5').times(qolupgradelist[0])));
            balldropunlocked = 1;
        } else {
            balldropunlocked = 0;
        }
        if (xp.compare(levelreq) >= 0) {
            xp = xp.minus(levelreq);
            level = level.plus(new Decimal('1'));
        }
        if (level >= 16) {
            document.getElementById('boxifyresetbutton').innerHTML = 'Boxify!';
            document.getElementById('boxifyresettext').innerHTML = 'Boxify for ' + decimalToString(boxpointgain) + ' BoxPoints and reset Level, XP, BallPoints, and all Plinko Upgrades. You need level 16 to reset. Resetting for the first time unlocks 3 new features.';
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
            document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
            document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
        }
    });

    document.getElementById('import').addEventListener('click', function () {
        timelaston = new Date().getTime();
        timelaston = Math.floor(timelaston / 1000);
        savefile = {
            'timelaston': timelaston.toString(),
            'ballpoints': decimalToString(ballpoints),
            'xp': decimalToString(xp),
            'level': decimalToString(level),
            'pupgrade1': decimalToString(pupgradelist[0]),
            'pupgrade2': decimalToString(pupgradelist[1]),
            'pupgrade3': decimalToString(pupgradelist[2]),
            'pupgrade4': decimalToString(pupgradelist[3]),
            'pupgrade5': decimalToString(pupgradelist[4]),
            'mutemusic': decimalToString(mutemusic),
            'mutesfx': decimalToString(mutesfx),
            'boxifyresets': boxifyresets,
            'boxpoints': boxpoints,
            'specialpegs': specialpegs,
            'bupgrade1': decimalToString(bupgradelist[0]),
            'bupgrade2': decimalToString(bupgradelist[1]),
            'bupgrade3': decimalToString(bupgradelist[2]),
            'bupgrade4': decimalToString(bupgradelist[3]),
            'bupgrade5': decimalToString(bupgradelist[4]),
            'bupgrade6': decimalToString(bupgradelist[5]),
            'bupgrade7': decimalToString(bupgradelist[6]),
            'bupgrade8': decimalToString(bupgradelist[7]),
            'spupgrade1': decimalToString(spupgradelist[0]),
            'spupgrade2': decimalToString(spupgradelist[1]),
            'spupgrade3': decimalToString(spupgradelist[2]),
            'spupgrade4': decimalToString(spupgradelist[3]),
            'spupgrade5': decimalToString(spupgradelist[4]),
            'spupgrade6': decimalToString(spupgradelist[5]),
            'spupgrade7': decimalToString(spupgradelist[6]),
            'qolupgrade1': decimalToString(qolupgradelist[0]),
            'qolupgrade2': decimalToString(qolupgradelist[1])
        };
        if (JSON.stringify(savefile) != '[object Object]') {
            savefile = JSON.stringify(savefile);
            savefile = btoa(savefile);
            navigator.clipboard.writeText(savefile);
            alert('Copied to clipboard!');
        } else {
            alert('save failed!');
        }
    });
    document.getElementById('export').addEventListener('click', function () {
        savefile = window.prompt('Paste your save here:', 'save file entering box');
        savefile = atob(savefile);
        savefile = JSON.parse(savefile);
        savefile = JSON.stringify(savefile);
        localStorage.setItem('save', savefile);
        alert('save file loaded!');
        location.reload();
    });
    document.getElementById('deletesave').addEventListener('click', function () {
        if (window.confirm('are you sure?')) {
            localStorage.removeItem('save');
            ballpoints = new Decimal('0');
            xp = new Decimal('0');
            level = new Decimal('1');
            pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
            alert('save wiped!');
            location.reload();
        }
    });
    document.getElementById('loadingbutton').addEventListener('click', function () {
        screen = 1;
        load = 1;
        setInterval(persecond, 1000);
        if (mutemusic.compare(new Decimal('0')) === 0) {
            musictrack = new Audio('real.mp3');
            musictrack.setAttribute('src', 'real.mp3');
            musictrack.play();
            musictrack.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        }
        document.getElementById('loading').style.display = 'none';
        document.getElementById('screen' + screen.toString()).style.display = 'inline';
    });
    document.getElementById('mutemusic').addEventListener('click', function () {
        mutemusic = new Decimal('1').minus(mutemusic);
        if (mutemusic.compare(new Decimal('0')) === 0) {
            document.getElementById('mutemusic').style.backgroundColor = '#b4f277';
            musictrack = new Audio('real.mp3');
            musictrack.setAttribute('src', 'real.mp3');
            musictrack.play();
            musictrack.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        } else {
            document.getElementById('mutemusic').style.backgroundColor = '#f27777';
            musictrack.pause();
        }
    });
    document.getElementById('mutesfx').addEventListener('click', function () {
        mutesfx = new Decimal('1').minus(mutesfx);
        if (mutesfx.compare(new Decimal('0')) === 0) {
            document.getElementById('mutesfx').style.backgroundColor = '#b4f277';
        } else {
            document.getElementById('mutesfx').style.backgroundColor = '#f27777';
        }
    });
    document.getElementById('boxifyresetbutton').addEventListener('click', function () {
        if (level >= 16) {
            boxpoints = boxpoints.plus(boxpointgain);
            boxifyresets = boxifyresets.plus(new Decimal('1'));
            ballpoints = new Decimal('0');
            xp = new Decimal('0');
            level = new Decimal('1');
            if (qolupgradelist[1].compare(1) === 0) {
                pupgradelist = [pupgradelist[0].divideBy(4).floor(), pupgradelist[1].divideBy(4).floor(), pupgradelist[2].divideBy(4).floor(), pupgradelist[3].divideBy(4).floor(), pupgradelist[4].divideBy(4).floor()];
                pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
                for (m = 1; m <= pupgradelist.length; m = m + 1) {
                    document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                    document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
                }
            } else {
                pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
            }
        }
    });
    document.getElementById('barrow1').addEventListener('click', function () {
        if (bupgrade > 1) {
            document.getElementById('bupgrade' + bupgrade.toString()).style.display = 'none';
            bupgrade = bupgrade - 1;
            document.getElementById('bupgrade' + bupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('barrow2').addEventListener('click', function () {
        if (bupgrade < 8) {
            document.getElementById('bupgrade' + bupgrade.toString()).style.display = 'none';
            bupgrade = bupgrade + 1;
            document.getElementById('bupgrade' + bupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('bupgradebutton1').addEventListener('click', function () {
        price = bupgradeprice[bupgrade - 1];
        cap = bcaplist[bupgrade - 1];
        if (boxpoints.compare(price) >= 0 && bupgradelist[bupgrade - 1].compare(cap) < 0) {
            boxpoints = boxpoints.minus(price);
            bupgradelist[bupgrade - 1] = bupgradelist[bupgrade - 1].add(new Decimal('1'));
            bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7]))];
        }
        for (m = 1; m <= bupgradelist.length; m = m + 1) {
            document.getElementById('bupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(bupgradeprice[m - 1]) + ' BoxPoints';
            document.getElementById('bupgrade' + m.toString() + 'cap').innerHTML = decimalToString(bupgradelist[m - 1]) + '/' + decimalToString(bcaplist[m - 1]);
        }
    });
    document.getElementById('sparrow1').addEventListener('click', function () {
        if (spupgrade > 1) {
            document.getElementById('spupgrade' + spupgrade.toString()).style.display = 'none';
            spupgrade = spupgrade - 1;
            document.getElementById('spupgrade' + spupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('sparrow2').addEventListener('click', function () {
        if (spupgrade < 7) {
            document.getElementById('spupgrade' + spupgrade.toString()).style.display = 'none';
            spupgrade = spupgrade + 1;
            document.getElementById('spupgrade' + spupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('spupgradebutton1').addEventListener('click', function () {
        price = spupgradeprice[spupgrade - 1];
        cap = spcaplist[spupgrade - 1];
        if (specialpegs.compare(price) >= 0 && spupgradelist[spupgrade - 1].compare(cap) < 0) {
            specialpegs = specialpegs.minus(price);
            spupgradelist[spupgrade - 1] = spupgradelist[spupgrade - 1].add(new Decimal('1'));
            spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15')];
        }
        for (m = 1; m <= spupgradelist.length; m = m + 1) {
            document.getElementById('spupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(spupgradeprice[m - 1]) + ' Special Pegs';
            document.getElementById('spupgrade' + m.toString() + 'cap').innerHTML = decimalToString(spupgradelist[m - 1]) + '/' + decimalToString(spcaplist[m - 1]);
        }
    });
    document.getElementById('qolarrow1').addEventListener('click', function () {
        if (qolupgrade > 1) {
            document.getElementById('qolupgrade' + qolupgrade.toString()).style.display = 'none';
            qolupgrade = qolupgrade - 1;
            document.getElementById('qolupgrade' + qolupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('qolarrow2').addEventListener('click', function () {
        if (qolupgrade < 2) {
            document.getElementById('qolupgrade' + qolupgrade.toString()).style.display = 'none';
            qolupgrade = qolupgrade + 1;
            document.getElementById('qolupgrade' + qolupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('qolupgradebutton1').addEventListener('click', function () {
        price = qolupgradeprice[qolupgrade - 1];
        cap = qolcaplist[qolupgrade - 1];
        if (boxpoints.compare(price) >= 0 && qolupgradelist[qolupgrade - 1].compare(cap) < 0) {
            boxpoints = boxpoints.minus(price);
            qolupgradelist[qolupgrade - 1] = qolupgradelist[qolupgrade - 1].add(new Decimal('1'));
            qolupgradeprice = [new Decimal('50').times(new Decimal('5').pow(qolupgradelist[0])), new Decimal('1000')];
        }
        for (m = 1; m <= qolupgradelist.length; m = m + 1) {
            document.getElementById('qolupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(qolupgradeprice[m - 1]) + ' BoxPoints';
            document.getElementById('qolupgrade' + m.toString() + 'cap').innerHTML = decimalToString(qolupgradelist[m - 1]) + '/' + decimalToString(qolcaplist[m - 1]);
        }
    });
    document.addEventListener('keydown', function (event) {
        //window.console.log(event.keyCode);
        if (event.keyCode === 83) {
            timelaston = new Date().getTime();
            timelaston = Math.floor(timelaston / 1000);
            savefile = {
                'timelaston': timelaston.toString(),
                'ballpoints': decimalToString(ballpoints),
                'xp': decimalToString(xp),
                'level': decimalToString(level),
                'pupgrade1': decimalToString(pupgradelist[0]),
                'pupgrade2': decimalToString(pupgradelist[1]),
                'pupgrade3': decimalToString(pupgradelist[2]),
                'pupgrade4': decimalToString(pupgradelist[3]),
                'pupgrade5': decimalToString(pupgradelist[4]),
                'mutemusic': decimalToString(mutemusic),
                'mutesfx': decimalToString(mutesfx),
                'boxifyresets': boxifyresets,
                'boxpoints': boxpoints,
                'specialpegs': specialpegs,
                'bupgrade1': decimalToString(bupgradelist[0]),
                'bupgrade2': decimalToString(bupgradelist[1]),
                'bupgrade3': decimalToString(bupgradelist[2]),
                'bupgrade4': decimalToString(bupgradelist[3]),
                'bupgrade5': decimalToString(bupgradelist[4]),
                'bupgrade6': decimalToString(bupgradelist[5]),
                'bupgrade7': decimalToString(bupgradelist[6]),
                'bupgrade8': decimalToString(bupgradelist[7]),
                'spupgrade1': decimalToString(spupgradelist[0]),
                'spupgrade2': decimalToString(spupgradelist[1]),
                'spupgrade3': decimalToString(spupgradelist[2]),
                'spupgrade4': decimalToString(spupgradelist[3]),
                'spupgrade5': decimalToString(spupgradelist[4]),
                'spupgrade6': decimalToString(spupgradelist[5]),
                'spupgrade7': decimalToString(spupgradelist[6]),
                'qolupgrade1': decimalToString(qolupgradelist[0]),
                'qolupgrade2': decimalToString(qolupgradelist[1])
            };
            if (JSON.stringify(savefile) != '[object Object]') {
                savefile = JSON.stringify(savefile);
                localStorage.setItem('save', savefile);
            } else {
                alert('save failed!');
            }
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
        if (event.keyCode === 66 && level >= 16) {
            boxpoints = boxpoints.plus(boxpointgain);
            boxifyresets = boxifyresets.plus(new Decimal('1'));
            ballpoints = new Decimal('0');
            xp = new Decimal('0');
            level = new Decimal('1');
            pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        }
    });
});