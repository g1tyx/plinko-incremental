var ballamount,
    xposdespawn,
    despawn,
    mutesfx,
    sscreen,
    specialpegchance,
    specialpegtouch,
    specialpegunlocked,
    balldropunlocked,
    balldropcooldown,
    disableautodrop,
    load,
    cooldown;
//todo: qol off buttons
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var savefile,
        fps,
        fps1,
        fps2,
        pupgradeprice,
        mutemusic,
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
        y,
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
        rollpoints,
        rotations,
        rollresets,
        rupgrade,
        rotationgain,
        rupgradelist,
        rupgradeprice,
        rcaplist,
        revolutions,
        revstreak,
        revgain,
        revupgradelist,
        revupgradeprice,
        revcaplist,
        revupgrade,
        revselect,
        gearangle,
        gearangletotal,
        disableautoplinko,
        disableautoboxify,
        revimgrotation,
        revrotationallow,
        revstreakeffect,
        cap,
        version,
        revselectlist,
        maxrevselect,
        ballcap,
        ballcomp,
        totaljumps,
        z,
        ballpointgaindisplay,
        xpgaindisplay,
        popup,
        popupid,
        bounceresets,
        bounceresettime,
        jumps,
        jumpgain,
        boupgradelist,
        boupgradeprice,
        bocaplist,
        templist,
        irev,
        energy,
        energygain,
        tasks,
        taskprice,
        tasktime,
        taskprogress,
        borespec,
        bobuttons,
        bobutton,
        bodescriptionlist,
        botitlelist,
        tempcolor,
        respec,
        irevreq,
        price;
    //other variable setups
    sscreen = -1;
    load = 0;
    despawn = 0;
    autosavetimer = 0;
    xposdespawn = 0;
    pupgrade = 1;
    bupgrade = 1;
    specialpegtouch = 0;
    spupgrade = 1;
    qolupgrade = 1;
    rupgrade = 1;
    revupgrade = 1;
    specialpegunlocked = 0;
    balldropunlocked = 0;
    balldropcooldown = new Decimal('0');
    gearangletotal = 0;
    gearangle = 0;
    version = '1.3';
    revimgrotation = 0;
    revrotationallow = 1;
    revstreak = 0;
    revstreakeffect = 1;
    revselectlist = [];
    ballcap = 10;
    ballcomp = 1;
    popupid = 0;
    respec = 0;
    
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

    function missingvar() {
        if (savefile.version == undefined) {
            savefile.bupgrade9 = '0';
            savefile.bupgrade10 = '0';
            savefile.qolupgrade3 = '0';
            savefile.qolupgrade4 = '0';
            savefile.rollpoints = '0';
            savefile.rotations = '0';
            savefile.rollresets = '0';
            savefile.rupgrade1 = '0';
            savefile.rupgrade2 = '0';
            savefile.rupgrade3 = '0';
            savefile.rupgrade4 = '0';
            savefile.rupgrade5 = '0';
            savefile.rupgrade6 = '0';
            savefile.rupgrade7 = '0';
            savefile.rupgrade8 = '0';
            savefile.rupgrade9 = '0';
            savefile.revolutions = '0';
            savefile.revupgrade1 = '0';
            savefile.spupgrade8 = '0';
            savefile.spupgrade9 = '0';
            savefile.spupgrade10 = '0';
            savefile.disableautodrop = '0';
            savefile.disableautoplinko = '0';
            savefile.ballcap = '10';
            bupgradelist[8] = new Decimal('0');
            rollpoints = new Decimal('0');
            rotations = new Decimal('0');
            rollresets = new Decimal('0');
            rupgradelist[0] = new Decimal('0');
            rupgradelist[1] = new Decimal('0');
            rupgradelist[2] = new Decimal('0');
            rupgradelist[3] = new Decimal('0');
            rupgradelist[4] = new Decimal('0');
            rupgradelist[5] = new Decimal('0');
            rupgradelist[6] = new Decimal('0');
            rupgradelist[7] = new Decimal('0');
            rupgradelist[8] = new Decimal('0');
            bupgradelist[9] = new Decimal('0');
            qolupgradelist[2] = new Decimal('0');
            qolupgradelist[3] = new Decimal('0');
            spupgradelist[7] = new Decimal('0');
            spupgradelist[8] = new Decimal('0');
            spupgradelist[9] = new Decimal('0');
            revupgradelist[0] = new Decimal('0');
            disableautodrop = new Decimal('0');
            disableautoplinko = new Decimal('0');
            ballcap = 10;
            savefile.version = '1.2';
        }
        if (savefile.version === '1.2') {
            savefile.bounceresets = '0';
            savefile.bounceresettime = '0';
            savefile.jumps = '0';
            savefile.boupgradelist = '[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]';
            savefile.energy = '0';
            savefile.task1 = '0';
            savefile.task2 = '0';
            savefile.task3 = '0';
            savefile.taskprogress1 = '0';
            savefile.taskprogress2 = '0';
            savefile.taskprogress3 = '0';
            savefile.revupgrade2 = '0';
            savefile.revupgrade3 = '0';
            savefile.revupgrade4 = '0';
            savefile.revupgrade5 = '0';
            savefile.disableautoboxify = '0';
            bounceresets = new Decimal('0');
            bounceresettime = new Decimal('0');
            jumps = new Decimal('0');
            boupgradelist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            energy = new Decimal('0');
            tasks = [new Decimal('0'), new Decimal('0'), new Decimal('0')];
            taskprogress = [new Decimal('0'), new Decimal('0'), new Decimal('0')];
            revupgradelist[1] = new Decimal('0');
            revupgradelist[2] = new Decimal('0');
            revupgradelist[3] = new Decimal('0');
            revupgradelist[4] = new Decimal('0');
            irev = new Decimal('0');
            totaljumps = new Decimal('0');
            disableautoboxify = new Decimal('0');
            savefile.version = version;
        }
    }

    function save() {
        timelaston = new Date().getTime();
        timelaston = Math.floor(timelaston / 1000);
        savefile = {
            'timelaston': timelaston.toString(),
            'version': version,
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
            'bupgrade9': decimalToString(bupgradelist[8]),
            'bupgrade10': decimalToString(bupgradelist[9]),
            'spupgrade1': decimalToString(spupgradelist[0]),
            'spupgrade2': decimalToString(spupgradelist[1]),
            'spupgrade3': decimalToString(spupgradelist[2]),
            'spupgrade4': decimalToString(spupgradelist[3]),
            'spupgrade5': decimalToString(spupgradelist[4]),
            'spupgrade6': decimalToString(spupgradelist[5]),
            'spupgrade7': decimalToString(spupgradelist[6]),
            'spupgrade8': decimalToString(spupgradelist[7]),
            'spupgrade9': decimalToString(spupgradelist[8]),
            'spupgrade10': decimalToString(spupgradelist[9]),
            'qolupgrade1': decimalToString(qolupgradelist[0]),
            'qolupgrade2': decimalToString(qolupgradelist[1]),
            'qolupgrade3': decimalToString(qolupgradelist[2]),
            'qolupgrade4': decimalToString(qolupgradelist[3]),
            'rotations': decimalToString(rotations),
            'rollpoints': decimalToString(rollpoints),
            'rollresets': decimalToString(rollresets),
            'rupgrade1': decimalToString(rupgradelist[0]),
            'rupgrade2': decimalToString(rupgradelist[1]),
            'rupgrade3': decimalToString(rupgradelist[2]),
            'rupgrade4': decimalToString(rupgradelist[3]),
            'rupgrade5': decimalToString(rupgradelist[4]),
            'rupgrade6': decimalToString(rupgradelist[5]),
            'rupgrade7': decimalToString(rupgradelist[6]),
            'rupgrade8': decimalToString(rupgradelist[7]),
            'rupgrade9': decimalToString(rupgradelist[8]),
            'revolutions': decimalToString(revolutions),
            'revupgrade1': decimalToString(revupgradelist[0]),
            'disableautodrop': decimalToString(disableautodrop),
            'disableautoplinko': decimalToString(disableautoplinko),
            'ballcap': ballcap.toString(),
            'bounceresets': decimalToString(bounceresets),
            'bounceresettime': decimalToString(bounceresettime),
            'jumps': decimalToString(jumps),
            'boupgradelist': JSON.stringify(boupgradelist),
            'energy': decimalToString(energy),
            'task1': decimalToString(tasks[0]),
            'task2': decimalToString(tasks[1]),
            'task3': decimalToString(tasks[2]),
            'taskprogress1': decimalToString(taskprogress[0]),
            'taskprogress2': decimalToString(taskprogress[1]),
            'taskprogress3': decimalToString(taskprogress[2]),
            'revupgrade2': decimalToString(revupgradelist[1]),
            'revupgrade3': decimalToString(revupgradelist[2]),
            'revupgrade4': decimalToString(revupgradelist[3]),
            'revupgrade5': decimalToString(revupgradelist[4]),
            'irev': decimalToString(irev),
            'totaljumps': decimalToString(totaljumps),
            'disableautoboxify': decimalToString(disableautoboxify)
        };
    }

    function persecond() {
        rotations = rotations.plus(rotationgain);
        if (qolupgradelist[3].compare(new Decimal('1')) === 0 && disableautoplinko.compare('1') === 0) {
            for (m = 1; m <= pupgradelist.length; m = m + 1) {
                price = pupgradeprice[m - 1];
                cap = pcaplist[m - 1];
                if (ballpoints.compare(price) >= 0 && pupgradelist[m - 1].compare(cap) < 0) {
                    pupgradelist[m - 1] = pupgradelist[m - 1].add(new Decimal('1'));
                    pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
                    document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                    document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
                }
            }
        }
        if (boupgradelist[5] >= 1) {
            boxpoints = boxpoints.add(boxpointgain.times(new Decimal('0.1')));
        }
        if (boupgradelist[8] >= 1 && disableautoboxify.compare('1') === 0) {
            for (m = 1; m <= bupgradelist.length; m = m + 1) {
                price = bupgradeprice[m - 1];
                cap = bcaplist[m - 1];

                if (boxpoints.compare(price) >= 0 && bupgradelist[m - 1].compare(cap) < 0) {
                    if (boupgradelist[6] < 1) {
                        boxpoints = boxpoints.minus(price);
                    }
                    bupgradelist[m - 1] = bupgradelist[m - 1].add(new Decimal('1'));
                    bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7])), new Decimal('100'), new Decimal('150')];
                    document.getElementById('bupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(bupgradeprice[m - 1]) + ' BoxPoints';
                    document.getElementById('bupgrade' + m.toString() + 'cap').innerHTML = decimalToString(bupgradelist[m - 1]) + '/' + decimalToString(bcaplist[m - 1]);
                }
            }
            bounceresettime = bounceresettime.add(1);
        }
        if (revrotationallow < 0) {
            revrotationallow = revrotationallow + 1;
        } else if (revrotationallow === 0) {
            revrotationallow = 1;
            document.getElementById('revolutionline').style.backgroundColor = 'skyblue';
            document.getElementById('revbutton').innerHTML = 'Stop!';
            revimgrotation = Math.floor(Math.random() * 360);
            document.getElementById('revolutioncircle').style.transform = 'rotate(' + revimgrotation.toString() + 'deg)';
        }
        for (m = 0; m < tasks.length; m = m + 1) {
            if (taskprogress[m].compare(0) > 0) {
                taskprogress[m] = taskprogress[m].minus(1);
                if (taskprogress[m].compare(0) === 0) {
                    tasks[m] = tasks[m].add(1);
                }
            }
        }
        if (autosavetimer >= 60) {
            window.console.log('autosaved!');
            save();
            if (JSON.stringify(savefile) !== '[object Object]') {
                localStorage.setItem('save', JSON.stringify(savefile));
                autosavetimer = 0;
            } else {
                alert('save failed!');
            }
        } else {
            autosavetimer = autosavetimer + 1;
        }
    }

    function gaincalc() {
        cooldown = 5000 / Math.pow(2, pupgradelist[3]);
        ballamount = new Decimal('1')
            .plus(spupgradelist[9])
            .times(new Decimal('1').plus(new Decimal('1').times(boupgradelist[2])))
            .plus(revupgradelist[4]);
        if (ballamount.compare(ballcap) >= 0) {
            ballcomp = ballamount - ballcap;
            ballamount = ballcap;
        }
        if (ballcomp < 1) {
            ballcomp = 10;
        }
        ballpointgain = new Decimal('1')
            .times(new Decimal(ballcomp))
            .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[0])))
            .times(new Decimal('2').pow(pupgradelist[0].divideBy(20).floor()));
        ballpointgain = ballpointgain.times(new Decimal('1').plus(new Decimal('1.02').times(pupgradelist[2]).times(new Decimal(new Decimal('1').add(ballpointgain).log10()).divideBy(new Decimal('2')).plus(new Decimal('1')))));
        if (boupgradelist[1] >= 1) {
            ballpointgain = ballpointgain.times(new Decimal('1').plus(new Decimal('1.02').times(pupgradelist[2]).times(new Decimal(new Decimal('1').add(ballpointgain).log(new Decimal('9'))).times(new Decimal('2')).divideBy(new Decimal('1.75')).plus(new Decimal('1')))));
        }
        ballpointgain = ballpointgain.times(new Decimal('1').plus(new Decimal('1.5').times(bupgradelist[4])))
            .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[2])))
            .times(new Decimal('1').plus(new Decimal('1').times(rupgradelist[0]).times(rotations.pow(new Decimal(0.5)))))
            .times(new Decimal('1').plus(new Decimal('1.38').times(revolutions.pow(new Decimal('0.58'))).times(Number(revselectlist.includes(1))).times(irev.pow(new Decimal('1.25')))))
            .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))));
        xpgain = new Decimal('1')
            .times(new Decimal(ballcomp))
            .times(new Decimal('1').plus(new Decimal('1.25').times(pupgradelist[1])))
            .times(new Decimal('2').pow(pupgradelist[1].divideBy(25).floor()))
            .times(new Decimal('1').plus(new Decimal('1.04').times(pupgradelist[4]).times(new Decimal(level.log(new Decimal('6'))).plus(new Decimal('1')))))
            .times(new Decimal('1').plus(new Decimal('1.5').times(bupgradelist[1])))
            .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[1])))
            .times(new Decimal('1').plus(new Decimal('1').times(rupgradelist[1]).times(rotations.pow(new Decimal(0.5))).times(new Decimal('0.6666666'))))
            .times(new Decimal('1').plus(new Decimal('1.25').times(revolutions.pow(new Decimal('0.64'))).times(Number(revselectlist.includes(2))).times(irev.pow(new Decimal('1.25')))))
            .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))))
            .times(new Decimal('1').add(new Decimal('3').times(jumps.plus(new Decimal('1').log10()))));
        boxpointgain = (new Decimal('1.275').pow(level.minus(new Decimal('16')))).times(new Decimal('3').pow(level.minus('16').divideBy(10).floor()));
        if (boupgradelist[0] >= 1) {
            boxpointgain = (new Decimal('1.325').pow(level.minus(new Decimal('15')))).times(new Decimal('3.5').pow(level.minus('15').divideBy(10).floor()));
        }
        boxpointgain = boxpointgain
            .times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[0])))
            .times(new Decimal('1').plus(new Decimal('1').times(rupgradelist[2]).times(rotations.pow(new Decimal(0.5))).times(new Decimal('0.8'))))
            .times(new Decimal('1').plus(new Decimal('1.13').times(revolutions.pow(new Decimal('0.59'))).times(Number(revselectlist.includes(3))).times(irev.pow(new Decimal('1.25')))))
            .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))))
            .times(new Decimal('1').add(new Decimal('2').times(new Decimal(specialpegs.add(1).log10())).times(new Decimal(boupgradelist[19]))))
            .times(new Decimal('1').add(new Decimal('1.5').times(new Decimal(bounceresettime.add(1).log10())).times(new Decimal(boupgradelist[20]))))
            .times(new Decimal('1').plus(new Decimal('1.5').times(revupgradelist[2])))
            .times(new Decimal('2').pow(revupgradelist[2].divideBy(5).floor()));
        
        levelreq = new Decimal('1.3').pow(level).times(new Decimal('1.8').pow(level.divideBy(new Decimal('10')).floor()));
        if (level > 80) {
            levelreq = new Decimal('1.4').pow(level).times(new Decimal('3').pow(level.divideBy(new Decimal('10')).floor()));
            if (boupgradelist[4] >= 1) {
                levelreq = new Decimal('1.35').pow(level).times(new Decimal('2.75').pow(level.divideBy(new Decimal('10')).floor()));
            }
        }
        if (level > 200) {
            levelreq = new Decimal('1.5').pow(level).times(new Decimal('3.5').pow(level.divideBy(new Decimal('10')).floor()));
        }
        boxvalues = [new Decimal('1').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[1]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[4]))), new Decimal('1.5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[2]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[5]))), new Decimal('0.5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[0]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[3]))), new Decimal('5').times(new Decimal('1').plus(new Decimal('1').times(bupgradelist[3]))).times(new Decimal('1').plus(new Decimal('1').times(spupgradelist[6])))];
        for (m = 0; m < boxvalues.length; m = m + 1) {
            boxvalues[m] = boxvalues[m].times(new Decimal('1').plus(new Decimal('1.02').times(bupgradelist[7]).times(new Decimal(new Decimal('1').add(boxpoints).log10()).divideBy(new Decimal('3')))))
                .times(new Decimal('1').plus(rollpoints.divideBy(new Decimal('2')).times(bupgradelist[9])))
                .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))))
                .times(new Decimal('1.25').pow(tasks[1]));
        }
        rotationgain = new Decimal('0.01').times(rollpoints)
            .times(new Decimal('1').plus(new Decimal('1').times(rupgradelist[4])))
            .times(new Decimal('1').plus(rupgradelist[7].times(new Decimal('1.3').pow(rollpoints))))
            .times(new Decimal('1').plus(new Decimal('3').times(revolutions.pow(new Decimal('0.61'))).times(Number(revselectlist.includes(5))).times(irev.pow(new Decimal('1.25')))))
            .times(new Decimal('1').plus(new Decimal('2').times(spupgradelist[7])))
            .times(new Decimal('1').plus(new Decimal('1').times(boupgradelist[2])))
            .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))))
            .times(new Decimal('1').add(new Decimal('1.5').times(revolutions.pow(new Decimal('0.5'))).times(new Decimal(boupgradelist[16]))))
            .times(new Decimal('1').add(new Decimal('1.25').times(new Decimal(bounceresettime.add(1).log10())).times(new Decimal(boupgradelist[23]))))
            .times(new Decimal('1.5').pow(tasks[0]))
            .times(new Decimal('1').plus(new Decimal('2.25').times(revupgradelist[3])))
            .times(new Decimal('5').pow(revupgradelist[3].divideBy(5).floor()));
        specialpeggain = new Decimal('1')
            .add(bupgradelist[6])
            .times(new Decimal('1').plus(new Decimal('2').times(revolutions.pow(new Decimal('0.62'))).times(Number(revselectlist.includes(4))).times(irev.pow(new Decimal('1.25')))))
            .times(new Decimal('1').plus(new Decimal('2').times(spupgradelist[8])))
            .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))))
            .times(new Decimal('1').plus(new Decimal('1.25').times(revupgradelist[1])))
            .times(new Decimal('3').pow(revupgradelist[1].divideBy(10).floor()));
        specialpegchance = new Decimal('0.005')
            .times(new Decimal('2').pow(bupgradelist[6].divideBy(25).floor()));
        templist = boupgradelist.slice(5, 10);
        templist = templist.filter(function (a) {
            return a != 0;
        });
        rollpointreq = new Decimal(new Decimal('30')
                .times(new Decimal('1.12').pow(rollpoints))
                .floor())
            .minus(new Decimal(boxpoints.plus(new Decimal('1')).log10()).floor().times(bupgradelist[8]))
            .minus(new Decimal(templist.length).times(new Decimal('2'))
                .times(new Decimal('1').plus(new Decimal('0.5').times(new Decimal(boupgradelist[3]))))
                .times(new Decimal('1').plus(new Decimal('1').times(new Decimal(boupgradelist[4]))))
                .floor())
            .minus(new Decimal('0.25').times(new Decimal(ballpoints.plus(new Decimal('1')).log10())).times(new Decimal(boupgradelist[17]))).floor();
        if (rollpointreq.compare(0) <= 0) {
            rollpointreq = 1;
        }
        revgain = new Decimal('1')
            .times(new Decimal('1').plus(new Decimal('1').times(boupgradelist[2])))
            .times(new Decimal('1').add(new Decimal('4').times(new Decimal(boupgradelist[4]))))
            .times(new Decimal('1').add(new Decimal('0.2').times(level).times(new Decimal(boupgradelist[15]))))
            .times(new Decimal('1.5').pow(tasks[2]));
        maxrevselect = new Decimal('1');
        jumpgain = new Decimal('1').plus(new Decimal('1').times(new Decimal('1.25').pow(rollpoints.minus(new Decimal('10'))).times(rollpoints.minus(new Decimal('10')).pow(1.25).times(new Decimal('2')))));
        if (boupgradelist[11] >= 1) {
            jumpgain = new Decimal('1').plus(new Decimal('1').times(new Decimal('1.35').pow(rollpoints.minus(new Decimal('5'))).times(rollpoints.minus(new Decimal('10')).pow(1.35).times(new Decimal('2')))));
        }
        templist = boupgradelist;
        templist = templist.filter(function (a) {
            return a != 0;
        });
        jumpgain = jumpgain.times(new Decimal('1').plus(new Decimal('1.25').pow(new Decimal(jumps.times(new Decimal('2')).plus(new Decimal('1')).log10())).times(boupgradelist[10])))
            .times(new Decimal('1').plus(new Decimal('1.05').pow(new Decimal(templist.length)).times(boupgradelist[12])))
            .times(new Decimal('1').plus(new Decimal('1').times(revolutions.pow(new Decimal('0.5')).divideBy('10')).times(Number(revselectlist.includes(6))).times(irev.pow(new Decimal('1.25')))))
            .times(new Decimal('1').plus(new Decimal('1').times(new Decimal('2')).times(bounceresets.pow(new Decimal('0.5'))).times(new Decimal(boupgradelist[14]))));
        energygain = new Decimal('2').pow(new Decimal(rotations.plus(new Decimal('1')).log10())).times(new Decimal('1.2').times(new Decimal(rotations.plus(new Decimal('1')).log10())));
        irevreq = new Decimal('2.5').pow(irev);
        //2^log(x+1) * 1.2log(x+1)
    }

    function despawnpopuptext(a) {
        document.getElementById('pegs').removeChild(document.getElementById('popup' + a.toString()));
    }

    function spawnpopuptext(bpdisplay, xpdisplay, b) {
        popupid = popupid + 1;
        popup = document.createElement('p');
        document.getElementById('pegs').appendChild(popup);
        popup.setAttribute('id', 'popup' + popupid.toString());
        popup.setAttribute('class', 'popuptext');
        popup.style.left = b.toString() + '%';
        popup.style.top = (80 - (5 * Math.random())).toString() + '%';
        popup.innerHTML = '+' + decimalToString(bpdisplay) + ' BallPoints, +' + decimalToString(xpdisplay) + ' XP';
        setTimeout(despawnpopuptext, 1000, popupid);
    }
    //new save setup
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
    bupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    spupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    qolupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    rupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    rotations = new Decimal('0');
    rollpoints = new Decimal('0');
    rollresets = new Decimal('0');
    revolutions = new Decimal('0');
    revupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
    disableautodrop = new Decimal('1');
    disableautoplinko = new Decimal('1');
    disableautoboxify = new Decimal('1');
    bounceresets = new Decimal('0');
    bounceresettime = new Decimal('0');
    jumps = new Decimal('0');
    boupgradelist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    energy = new Decimal('0');
    tasks = [new Decimal('0'), new Decimal('0'), new Decimal('0')];
    taskprogress = [new Decimal('0'), new Decimal('0'), new Decimal('0')];
    irev = new Decimal('0');
    ballcap = 10;
    totaljumps = new Decimal('0');
    //save loading!!!
    if (localStorage.getItem('save') !== null) {
        savefile = JSON.parse(localStorage.getItem('save'));
        missingvar();
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
        bupgradelist = [new Decimal(savefile.bupgrade1), new Decimal(savefile.bupgrade2), new Decimal(savefile.bupgrade3), new Decimal(savefile.bupgrade4), new Decimal(savefile.bupgrade5), new Decimal(savefile.bupgrade6), new Decimal(savefile.bupgrade7), new Decimal(savefile.bupgrade8), new Decimal(savefile.bupgrade9), new Decimal(savefile.bupgrade10)];
        spupgradelist = [new Decimal(savefile.spupgrade1), new Decimal(savefile.spupgrade2), new Decimal(savefile.spupgrade3), new Decimal(savefile.spupgrade4), new Decimal(savefile.spupgrade5), new Decimal(savefile.spupgrade6), new Decimal(savefile.spupgrade7), new Decimal(savefile.spupgrade8), new Decimal(savefile.spupgrade9), new Decimal(savefile.spupgrade10)];
        qolupgradelist = [new Decimal(savefile.qolupgrade1), new Decimal(savefile.qolupgrade2), new Decimal(savefile.qolupgrade3), new Decimal(savefile.qolupgrade4)];
        rotations = new Decimal(savefile.rotations);
        rollpoints = new Decimal(savefile.rollpoints);
        rollresets = new Decimal(savefile.rollresets);
        revolutions = new Decimal(savefile.revolutions);
        rupgradelist = [new Decimal(savefile.rupgrade1), new Decimal(savefile.rupgrade2), new Decimal(savefile.rupgrade3), new Decimal(savefile.rupgrade4), new Decimal(savefile.rupgrade5), new Decimal(savefile.rupgrade6), new Decimal(savefile.rupgrade7), new Decimal(savefile.rupgrade8), new Decimal(savefile.rupgrade9)];
        revupgradelist = [new Decimal(savefile.revupgrade1)];
        disableautodrop = new Decimal(savefile.disableautodrop);
        disableautoplinko = new Decimal(savefile.disableautoplinko);
        ballcap = savefile.ballcap;
        bounceresets = new Decimal(savefile.bounceresets);
        bounceresettime = new Decimal(savefile.bounceresettime);
        jumps = new Decimal(savefile.jumps);
        energy = new Decimal(savefile.energy);
        boupgradelist = JSON.parse(savefile.boupgradelist);
        tasks = [new Decimal(savefile.task1), new Decimal(savefile.task2), new Decimal(savefile.task3)];
        taskprogress = [new Decimal(savefile.taskprogress1), new Decimal(savefile.taskprogress2), new Decimal(savefile.taskprogress3)];
        revupgradelist[1] = new Decimal(savefile.revupgrade2);
        revupgradelist[2] = new Decimal(savefile.revupgrade3);
        revupgradelist[3] = new Decimal(savefile.revupgrade4);
        revupgradelist[4] = new Decimal(savefile.revupgrade5);
        irev = new Decimal(savefile.irev);
        totaljumps = new Decimal(savefile.totaljumps);
        if ((qolupgradelist[0].compare(1) >= 0 || rollresets.compare(1) >= 0) && timelaston <= Math.floor(new Date().getTime() / 1000)) {
            //offline prog
            window.console.log('offline progress added!');
            timelaston = Math.floor(new Date().getTime() / 1000) - timelaston;
            timelaston = Math.floor(timelaston / 20);
            window.console.log('time: ' + timelaston.toString());
            gaincalc();
            ballpoints = ballpoints.add(ballpointgain.times(boxvalues[0].times(new Decimal('2')).add(boxvalues[1].times(new Decimal('2')).add((boxvalues[2].times(new Decimal('2')).add((boxvalues[3]))))).divideBy(new Decimal('7'))).times(new Decimal(timelaston)));
            xp = xp.add(xpgain.times(boxvalues[0].times(new Decimal('2')).add(boxvalues[1].times(new Decimal('2')).add((boxvalues[2].times(new Decimal('2')).add((boxvalues[3]))))).divideBy(new Decimal('7'))).times(new Decimal(timelaston)));
            rotations = rotations.add(rotationgain);
            if (bounceresets.compare(1) >= 0) {
                bounceresettime = bounceresettime.add(new Decimal(timelaston));
            }
            if (boupgradelist[5] >= 1) {
                boxpoints = boxpoints.add(boxpointgain.times(new Decimal('0.1')).times(new Decimal(timelaston)));
            }
            for (m = 0; m < tasks.length; m = m + 1) {
                if (taskprogress[m].compare(0) > 0) {
                    taskprogress[m] = taskprogress[m].minus(new Decimal(timelaston));
                    if (taskprogress[m].compare(0) <= 0) {
                        tasks[m] = tasks[m].add(1);
                        taskprice = [new Decimal('10').times(new Decimal('1.25').pow(tasks[0])), new Decimal('25').times(new Decimal('1.65').pow(tasks[1])), new Decimal('50').times(new Decimal('1.75').pow(tasks[2]))];
                        tasktime = [new Decimal('1.25').pow(tasks[0]), new Decimal('5').times(new Decimal('1.3').pow(tasks[1])), new Decimal('7.5').times(new Decimal('1.35').pow(tasks[2]))];
                    }
                }
            }
        }
    }
    save();
    if (JSON.stringify(savefile) !== '[object Object]') {
        localStorage.setItem('save', JSON.stringify(savefile));
    } else {
        alert('save failed!');
    }
    //price/cap setups
    //revolution things have placeholders atm
    pcaplist = [new Decimal('400'), new Decimal('400'), new Decimal('25'), new Decimal('4'), new Decimal('25')];
    spcaplist = [new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1.79e308')];
    bcaplist = [new Decimal('999'), new Decimal('999'), new Decimal('999'), new Decimal('999'), new Decimal('400'), new Decimal('400'), new Decimal('25'), new Decimal('50'), new Decimal('1'), new Decimal('1')];
    qolcaplist = [new Decimal('7'), new Decimal('1'), new Decimal('1'), new Decimal('1')];
    rcaplist = [new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1')];
    revcaplist = [new Decimal('1'), new Decimal('20'), new Decimal('25'), new Decimal('25'), new Decimal('1.79e308')];
    bocaplist = [new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1'), new Decimal('1')];
    pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
    bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7])), new Decimal('100'), new Decimal('150')];
    spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('25'), new Decimal('25'), new Decimal('25').times(new Decimal('1.1').pow(spupgradelist[9]))];
    qolupgradeprice = [new Decimal('50').times(new Decimal('5').pow(qolupgradelist[0])), new Decimal('1000'), new Decimal('5000'), new Decimal('10000')];
    rupgradeprice = [new Decimal('1'), new Decimal('5'), new Decimal('20'), new Decimal('100'), new Decimal('200'), new Decimal('250'), new Decimal('500'), new Decimal('1000'), new Decimal('3000')];
    revupgradeprice = [new Decimal('100'), new Decimal('200').times(new Decimal('3.16').pow(revupgradelist[1])), new Decimal('250').times(new Decimal('3.21').pow(revupgradelist[2])), new Decimal('350').times(new Decimal('3.36').pow(revupgradelist[3])), new Decimal('1000').times(new Decimal('2.25').pow(revupgradelist[4]))];
    boupgradeprice = [new Decimal('1'), new Decimal('2'), new Decimal('20'), new Decimal('200'), new Decimal('2000'), new Decimal('1'), new Decimal('2'), new Decimal('20'), new Decimal('200'), new Decimal('2000'), new Decimal('1'), new Decimal('2'), new Decimal('20'), new Decimal('200'), new Decimal('2000'), new Decimal('1'), new Decimal('2'), new Decimal('20'), new Decimal('200'), new Decimal('2000'), new Decimal('10'), new Decimal('100'), new Decimal('500'), new Decimal('10000'), new Decimal('1000000')];
    taskprice = [new Decimal('10').times(new Decimal('1.25').pow(tasks[0])), new Decimal('25').times(new Decimal('1.65').pow(tasks[1])), new Decimal('50').times(new Decimal('1.75').pow(tasks[2]))];
    tasktime = [new Decimal('1.25').pow(tasks[0]), new Decimal('5').times(new Decimal('1.3').pow(tasks[1])), new Decimal('7.5').times(new Decimal('1.35').pow(tasks[2]))];
    botitlelist = ['Progression', 'Qol', 'Jump', 'Synergy', 'Other', 'V', 'I', 'II', 'III', 'IV'];
    bodescriptionlist = ["Boxify's equation is better.", "Point Synergy’s equation is better. Also every automation upgrade lowers Roll requirement by 2.", 'Double Rotations and Revolutions gain. Also doubles the effect of “More Balls”.', "Level scaling is weaker. +50% Progression II’s second effect.", 'x5 everything below bounce (except for RP). This includes: Points, XP, BP, Boxes, SP, Rotations, and Revolutions. Post-80 Level scaling is weakened. +100% Progression II’s second effect.', "Gain 1% of BP per second.", 'Boxify upgrades spend nothing.', 'Boxify doesn’t reset point upgrades.', 'Automates BP Upgrades.', 'Rotation upgrades don’t spend Rotations. Keep all point upgrades on Roll.', 'Jumps boost Jumps.', 'Jump formula is better.', 'Bounce upgrades boost Jumps.', 'Unlock a new revolutions effect.', 'Jumps are boosted by number of Bounce resets.', 'Level boosts Revolution gain.', 'Revolutions boost Rotations.', 'BallPoints lower Roll requirement.', 'Jumps boost XP gain.', 'Special Pegs boost BP.', 'Boost BP gain based on time since bounce reset.', 'Unlock Imaginary Revolutions. They add to the revolution and streak effect.', 'Unlocks Energy.', 'Boost Rotation gain based on time since bounce reset.', 'nothing atm (if you buy this you won for now)'];
    //displays
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
    for (m = 1; m <= rupgradelist.length; m = m + 1) {
        document.getElementById('rupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(rupgradeprice[m - 1]) + ' Rotations';
        document.getElementById('rupgrade' + m.toString() + 'cap').innerHTML = decimalToString(rupgradelist[m - 1]) + '/' + decimalToString(rcaplist[m - 1]);
    }
    for (m = 1; m <= revupgradelist.length; m = m + 1) {
        document.getElementById('revupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(revupgradeprice[m - 1]) + ' Revolutions';
        document.getElementById('revupgrade' + m.toString() + 'cap').innerHTML = decimalToString(revupgradelist[m - 1]) + '/' + decimalToString(revcaplist[m - 1]);
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
    if (disableautodrop.compare(new Decimal('0')) === 0) {
        document.getElementById('disableautodrop').style.backgroundColor = '#b4f277';
    } else {
        document.getElementById('disableautodrop').style.backgroundColor = '#f27777';
    }
    if (disableautoplinko.compare(new Decimal('0')) === 0) {
        document.getElementById('disableplinkoauto').style.backgroundColor = '#b4f277';
    } else {
        document.getElementById('disableplinkoauto').style.backgroundColor = '#f27777';
    }
    if (disableautoboxify.compare(new Decimal('0')) === 0) {
        document.getElementById('disableboxifyauto').style.backgroundColor = '#b4f277';
    } else {
        document.getElementById('disableboxifyauto').style.backgroundColor = '#f27777';
    }
    if (boupgradelist[22] >= 1) {
        document.getElementById('energyreset').style.display = 'inline';
        document.getElementById('tasks').style.display = 'flex';
    }
    if (boupgradelist[21] >= 1) {
        document.getElementById('irevinfo').style.display = 'inline';
    }
    document.getElementById('ballcompdisplay').innerHTML = 'Ball Compaction Start: ' + ballcap.toString() + ' Balls';
    document.getElementById('ballcomp').value = ballcap;
    for (m = 1; m < 5; m = m + 1) {
        if (revselectlist.includes(m)) {
            document.getElementById('reveffect' + m.toString()).style.backgroundColor = 'yellowgreen';
        } else {
            document.getElementById('reveffect' + m.toString()).style.backgroundColor = 'salmon';
        }
    }
    
    //actual program time!!!
    fps1 = new Date();

    function tick() {
        gaincalc();
        //more displays...
        taskprice = [new Decimal('10').times(new Decimal('1.25').pow(tasks[0])), new Decimal('25').times(new Decimal('1.65').pow(tasks[1])), new Decimal('50').times(new Decimal('1.75').pow(tasks[2]))];
        tasktime = [new Decimal('1.25').pow(tasks[0]), new Decimal('5').times(new Decimal('1.3').pow(tasks[1])), new Decimal('7.5').times(new Decimal('1.35').pow(tasks[2]))];
        if (rupgradeprice[3].compare(new Decimal('1'))) {
            pcaplist[2] = new Decimal('35');
            for (m = 1; m <= pupgradelist.length; m = m + 1) {
                document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
            }
        }
        if (rupgradeprice[3].compare(new Decimal('1'))) {
            pcaplist[4] = new Decimal('35');
            for (m = 1; m <= pupgradelist.length; m = m + 1) {
                document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
            }
        }
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
            document.getElementById('newsticker').style.display = 'block';
            specialpegunlocked = 1;
        } else {
            specialpegunlocked = 0;
        }
        if (rollresets.compare(1) >= 0) {
            document.getElementById('rollupgradebuilding').style.display = 'inline';
        }
        if (rupgradelist[8].compare(1) === 0) {
            document.getElementById('revolutionsbuilding').style.display = 'inline';
            document.getElementById('revolutionstitle').innerHTML = 'Revolutions Building (you have ' + decimalToString(revolutions) + ' revolutions)';
            document.getElementById('revolutionsselect').style.display = 'flex';
            document.getElementById('reveffect1').innerHTML = 'BallPoints boost: +x' + decimalToString(new Decimal('1.38').times(revolutions.pow(new Decimal('0.58'))));
            document.getElementById('reveffect2').innerHTML = 'XP boost: +x' + decimalToString(new Decimal('1.25').times(revolutions.pow(new Decimal('0.64'))));
            document.getElementById('reveffect3').innerHTML = 'BoxPoints boost: +x' + decimalToString(new Decimal('1.13').times(revolutions.pow(new Decimal('0.59'))));
            document.getElementById('reveffect4').innerHTML = 'Special Peg boost: +x' + decimalToString(new Decimal('2').times(revolutions.pow(new Decimal('0.62'))));
            document.getElementById('reveffect5').innerHTML = 'Rotation boost: +x' + decimalToString(new Decimal('3').times(revolutions.pow(new Decimal('0.61'))));
            document.getElementById('reveffect6').innerHTML = 'Jumps boost: +x' + decimalToString(new Decimal('0.1').times(revolutions.pow(new Decimal('0.5'))));
            document.getElementById('revupgradebuilding').style.display = 'inline';
        }
        document.getElementById('bbuildingtitle').innerHTML = 'Boxify Upgrades ' + '(you have ' + decimalToString(boxpoints) + ' BoxPoints)';
        document.getElementById('spbuildingtitle').innerHTML = 'Special Peg Upgrades ' + '(you have ' + decimalToString(specialpegs) + ' Special Pegs)';
        document.getElementById('rbuildingtitle').innerHTML = 'Roll Upgrades ' + '(you have ' + decimalToString(rotations) + ' Rotations)';
        if (bounceresets.compare(new Decimal('1')) >= 0) {
            document.getElementById('bouncewall').style.display = 'inline';
            document.getElementById('bounceupgradebuilding').style.display = 'inline';
            document.getElementById('bouncebuildingtitle').innerHTML = 'Bounce Upgrade Viewer (you have ' + decimalToString(jumps) + ' jumps)';
        }
        document.getElementById('task1').innerHTML = 'Oil the Gear ~ boosting Rotation gain by x' + decimalToString(new Decimal('1.5').pow(tasks[0])) + '. Costs: ' + decimalToString(taskprice[0]) + ' Energy and ' + decimalToString(tasktime[0]) + ' seconds.';
        document.getElementById('task2').innerHTML = 'Fix the Boxes ~ boosting Boxes by x' + decimalToString(new Decimal('1.25').pow(tasks[1])) + '. Costs: ' + decimalToString(taskprice[1]) + ' Energy and ' + decimalToString(tasktime[1]) + ' seconds.';
        document.getElementById('task3').innerHTML = 'Spin the Circle Faster ~ boosting Revolution gain by x' + decimalToString(new Decimal('1.5').pow(tasks[2])) + '. Costs: ' + decimalToString(taskprice[2]) + ' Energy and ' + decimalToString(tasktime[2]) + ' seconds.';
        if (taskprogress[0].compare(0) > 0) {
            document.getElementById('task1').innerHTML = 'Time remaining: ' + decimalToString(taskprogress[0]) + ' seconds...';
        }
        if (taskprogress[1].compare(0) > 0) {
            document.getElementById('task2').innerHTML = 'Time remaining: ' + decimalToString(taskprogress[1]) + ' seconds...';
        }
        if (taskprogress[2].compare(0) > 0) {
            document.getElementById('task3').innerHTML = 'Time remaining: ' + decimalToString(taskprogress[2]) + ' seconds...';
        }
        //ball desapwn code
        if (despawn === 1) {
            xposdespawn = xposdespawn / 100;
            ballpointgaindisplay = ballpoints;
            xpgaindisplay = xp;
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
            ballpointgaindisplay = ballpoints.minus(ballpointgaindisplay);
            xpgaindisplay = xp.minus(xpgaindisplay);
            spawnpopuptext(ballpointgaindisplay, xpgaindisplay, xposdespawn * 100);
            despawn = 0;
            xposdespawn = 0;

        }
        //various features
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
        if (rotations.compare(irevreq) >= 0) {
            irev = irev.plus(1);
        }
        if (level.compare(new Decimal('16')) >= 0) {
            document.getElementById('boxifyresetbutton').innerHTML = 'Boxify!';
            document.getElementById('boxifyresettext').innerHTML = 'Boxify for ' + decimalToString(boxpointgain) + ' BoxPoints and reset Level, XP, BallPoints, and all Plinko Upgrades. You need level 16 to reset. Resetting for the first time unlocks 3 new features.';
        } else {
            document.getElementById('boxifyresetbutton').innerHTML = 'Locked...';
            document.getElementById('boxifyresettext').innerHTML = 'Reach level 16 to Boxify.';
        }
        if (level.compare(rollpointreq) >= 0) {
            document.getElementById('rollresetbutton').innerHTML = 'Roll!';
            document.getElementById('rollresettext').innerHTML = 'Roll for 1 RollPoint and reset all Boxify content and previous features. In return you get a RollPoint, which generates Rotations passively. Those rotations can be spent on upgrades. The requirement increases based on your current amount of RollPoints. Rolling for the first time unlocks offline progress if you have not unlocked it yet as well.';
        } else {
            document.getElementById('rollresetbutton').innerHTML = 'Locked...';
            document.getElementById('rollresettext').innerHTML = 'Reach level ' + decimalToString(rollpointreq) + ' to Roll. <br> You currently have ' + decimalToString(rollpoints) + ' RollPoints.';
        }
        if (rollpoints.compare(new Decimal('10')) >= 0) {
            document.getElementById('bounceresetbutton').innerHTML = 'Bounce!';
            document.getElementById('bounceresettext').innerHTML = 'Bounce for ' + decimalToString(jumpgain) + ' Jumps. Bouncing for the first time unlocks a massive upgrade board where upgrades scale based on the amount purchaced in each row. Reseting resets everything (except QoL upgrades, your welcome) up to this point, in exchange for jumps.';
        } else {
            document.getElementById('bounceresetbutton').innerHTML = 'Locked...';
            document.getElementById('bounceresettext').innerHTML = 'You need at least 10 RollPoints to Bounce.';
        }
        if (boupgradelist[13] >= 1) {
            document.getElementById('reveffect6').style.display = 'inline';
        }
        if (rollpoints.compare(new Decimal('1')) >= 0) {
            document.getElementById('energyresetbutton').innerHTML = 'Energize!';
            document.getElementById('energyresettext').innerHTML = '-- Energy --<br><br>Energize for ' + decimalToString(energygain) + ' Energy. Spend Energy and time on tasks to get buffs. Energizing resets Level, XP, BallPoints, Point Upgrades, Box Upgrades, Special Peg Upgrades, Special Pegs and BoxPoints. Currently you have: ' + decimalToString(energy) + ' Energy!';
        } else {
            document.getElementById('energyresetbutton').innerHTML = 'Locked...';
            document.getElementById('energyresettext').innerHTML = '-- Energy --<br><br>You need at least 1 RollPoint to Energize. Currently you have: ' + decimalToString(energy) + ' Energy!';
        }
        if (boupgradelist[21] >= 1) {
            document.getElementById('irevtext').innerHTML = 'You currently have ' + decimalToString(irev) + ' Imaginary Revolutions. Earn your next one at ' + decimalToString(irevreq) + ' Rotations. Currently boosting all revolution effects by x' + decimalToString(irev.pow(1.25)) + ', and boosting revolution streak bonus by x' + decimalToString(irev.pow(1.35)) + '.';
        } else {
            document.getElementById('irevtext').innerHTML = 'Locked...'  
        }
        gearangle = rotationgain.plus(1).log(10);
        if (gearangle >= 50) {
            gearangle = 50;
        }
        gearangletotal = gearangle + gearangletotal;
        document.getElementById('rotationgear').style.transform = 'rotate(' + gearangletotal.toString() + 'deg)';
        if (revrotationallow === 1) {
            revimgrotation = revimgrotation + 1.5 + (revstreak * 0.25);
            if (revimgrotation >= 360) {
                revimgrotation = revimgrotation - 360;
            }
            document.getElementById('revolutioncircle').style.transform = 'rotate(' + revimgrotation.toString() + 'deg)';
        }
        //fps cap
        fps2 = new Date();
        fps = fps2 - fps1;
        fps1 = fps2;
        if (fps <= 16.7) {
            fps = 16.7;
            window.setTimeout(tick, fps);
        } else {
            window.requestAnimationFrame(tick);
        }
    }
    window.requestAnimationFrame(tick);
    //reset related functions and buttons
    function boxifyreset() {
        boxpoints = boxpoints.plus(boxpointgain);
        boxifyresets = boxifyresets.plus(new Decimal('1'));
        ballpoints = new Decimal('0');
        xp = new Decimal('0');
        level = new Decimal('1');
        pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
        if (qolupgradelist[2].compare(1) === 0 && boupgradelist[7] < 1) {
            pupgradelist = [pupgradelist[0].divideBy(2).floor(), pupgradelist[1].divideBy(2).floor(), pupgradelist[2].divideBy(2).floor(), pupgradelist[3].divideBy(2).floor(), pupgradelist[4].divideBy(2).floor()];
            pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
            for (m = 1; m <= pupgradelist.length; m = m + 1) {
                document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
            }
        } else if (qolupgradelist[1].compare(1) === 0 && boupgradelist[7] < 1) {
            pupgradelist = [pupgradelist[0].divideBy(4).floor(), pupgradelist[1].divideBy(4).floor(), pupgradelist[2].divideBy(4).floor(), pupgradelist[3].divideBy(4).floor(), pupgradelist[4].divideBy(4).floor()];
            pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
            for (m = 1; m <= pupgradelist.length; m = m + 1) {
                document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
            }
        } else if (boupgradelist[7] < 1) {
            pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        }
        for (m = 1; m <= pupgradelist.length; m = m + 1) {
            document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
            document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
        }
        if (bounceresets.compare(1) < 0) {
            qolupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        }
    }

    function rollreset() {
        rollpoints = rollpoints.plus(new Decimal('1'));
        rollresets = rollresets.plus(new Decimal('1'));
        ballpoints = new Decimal('0');
        xp = new Decimal('0');
        level = new Decimal('1');
        boxpoints = new Decimal('0');
        specialpegs = new Decimal('0');
        pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        bupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        spupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
        bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7])), new Decimal('100'), new Decimal('150')];
        spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('25'), new Decimal('25'), new Decimal('25').times(new Decimal('1.1').pow(spupgradelist[9]))];
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
        if (bounceresets.compare(1) < 0) {
            qolupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
            qolupgradeprice = [new Decimal('50').times(new Decimal('5').pow(qolupgradelist[0])), new Decimal('1000'), new Decimal('5000'), new Decimal('10000')];
        }
        if (qolupgradelist[2].compare(1) === 0 && boupgradelist[9] < 1) {
            pupgradelist = [pupgradelist[0].divideBy(4).floor(), pupgradelist[1].divideBy(4).floor(), pupgradelist[2].divideBy(4).floor(), pupgradelist[3].divideBy(4).floor(), pupgradelist[4].divideBy(4).floor()];
            pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
            for (m = 1; m <= pupgradelist.length; m = m + 1) {
                document.getElementById('pupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(pupgradeprice[m - 1]) + ' BallPoints';
                document.getElementById('pupgrade' + m.toString() + 'cap').innerHTML = decimalToString(pupgradelist[m - 1]) + '/' + decimalToString(pcaplist[m - 1]);
            }
        } else if (boupgradelist[9] < 1) {
            pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        }
    }

    function bouncereset() {
        if (bounceresets.compare(1) < 0) {
            qolupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        }
        if (respec = 1) {
            bounceresets = rollpoints.plus(new Decimal('1'));
            bounceresettime = new Decimal('0');
            jumps = jumps.add(jumpgain);
            totaljumps = totaljumps.add(jumpgain);
            respec = 0;
        }
        ballpoints = new Decimal('0');
        xp = new Decimal('0');
        level = new Decimal('1');
        boxpoints = new Decimal('0');
        specialpegs = new Decimal('0');
        pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        bupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        spupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
        bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7])), new Decimal('100'), new Decimal('150')];
        spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('25'), new Decimal('25'), new Decimal('25').times(new Decimal('1.1').pow(spupgradelist[9]))];
        rupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        rupgradeprice = [new Decimal('1'), new Decimal('5'), new Decimal('20'), new Decimal('100'), new Decimal('200'), new Decimal('250'), new Decimal('500'), new Decimal('1000'), new Decimal('3000')];
        rotations = new Decimal('0');
        rollpoints = new Decimal('0');
        revolutions = new Decimal('0');
        revupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        revupgradeprice = [new Decimal('100'), new Decimal('200').times(new Decimal('3.16').pow(revupgradelist[1])), new Decimal('250').times(new Decimal('3.21').pow(revupgradelist[2])), new Decimal('350').times(new Decimal('3.36').pow(revupgradelist[3])), new Decimal('1000').times(new Decimal('2.25').pow(revupgradelist[4]))];
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
        for (m = 1; m <= rupgradelist.length; m = m + 1) {
            document.getElementById('rupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(rupgradeprice[m - 1]) + ' Rotations';
            document.getElementById('rupgrade' + m.toString() + 'cap').innerHTML = decimalToString(rupgradelist[m - 1]) + '/' + decimalToString(rcaplist[m - 1]);
        }
        for (m = 1; m <= revupgradelist.length; m = m + 1) {
            document.getElementById('revupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(revupgradeprice[m - 1]) + ' Revolutions';
            document.getElementById('revupgrade' + m.toString() + 'cap').innerHTML = decimalToString(revupgradelist[m - 1]) + '/' + decimalToString(revcaplist[m - 1]);
        }
    }
    function energyreset() {
        energy = energy.plus(energygain);
        ballpoints = new Decimal('0');
        xp = new Decimal('0');
        level = new Decimal('1');
        boxpoints = new Decimal('0');
        specialpegs = new Decimal('0');
        pupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        bupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        spupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0')];
        pupgradeprice = [new Decimal('5').times(new Decimal('1.95').pow(pupgradelist[0])), new Decimal('50').times(new Decimal('1.95').pow(pupgradelist[1])), new Decimal('1000').times(new Decimal('2.75').pow(pupgradelist[2])), new Decimal('1e4').times(new Decimal('10').pow(pupgradelist[3])), new Decimal('1e5').times(new Decimal('2.8').pow(pupgradelist[4]))];
        bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7])), new Decimal('100'), new Decimal('150')];
        spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('25'), new Decimal('25'), new Decimal('25').times(new Decimal('1.1').pow(spupgradelist[9]))];
        rupgradelist = [new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), new Decimal('0'), rupgradelist[8]];
        rupgradeprice = [new Decimal('1'), new Decimal('5'), new Decimal('20'), new Decimal('100'), new Decimal('200'), new Decimal('250'), new Decimal('500'), new Decimal('1000'), new Decimal('3000')];
        rotations = new Decimal('0');
        rollpoints = new Decimal('0');
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
        for (m = 1; m <= rupgradelist.length; m = m + 1) {
            document.getElementById('rupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(rupgradeprice[m - 1]) + ' Rotations';
            document.getElementById('rupgrade' + m.toString() + 'cap').innerHTML = decimalToString(rupgradelist[m - 1]) + '/' + decimalToString(rcaplist[m - 1]);
        }
    }
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
        save();
        if (JSON.stringify(savefile) !== '[object Object]') {
            navigator.clipboard.writeText(btoa(JSON.stringify(savefile))).then(function () {
                    alert('Copied to clipboard!');
                })
                .catch(function () {
                    alert('clipboard copying failed...');
                });
        } else {
            alert('Save failed... Try again!');
        }
    });
    document.getElementById('export').addEventListener('click', function () {
        savefile = window.prompt('Paste your save here:', 'save file entering box');
        try {
            window.atob(savefile);
        } catch (e) {
            alert('invalid save :(');
        }
        if (JSON.stringify(JSON.parse(atob(savefile))) !== '[object Object]') {
            savefile = JSON.parse(atob(savefile));
            missingvar();
            localStorage.setItem('save', JSON.stringify(savefile));
            alert('save file loaded!');
            location.reload();
        } else {
            alert('save failed!');
        }
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
        sscreen = 1;
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
        document.getElementById('screen' + sscreen.toString()).style.display = 'inline';
        if ((document.getElementById('peg2').getBoundingClientRect().left - document.getElementById('peg1').getBoundingClientRect().right <= 30) || (document.getElementsByClassName('pegrow')[3].getBoundingClientRect().bottom >= document.getElementById('boxes').getBoundingClientRect().top)) {
            alert('heyyyyy! hiiiiii! hellooo! your window size is too small and can cause various issues... please zoom out/resize the window thank you!11111');
        }
        if (document.getElementById('peg2').getBoundingClientRect().left - document.getElementById('peg1').getBoundingClientRect().right >= 45) {
            alert('heyyyy! hiiiiii! hellooo! your window size is TOO BIG and it would help a lot if you uh resize or zoom in a bit thank you (if you dont the game could act weird)');
        }
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
        if (level.compare(new Decimal('16')) >= 0) {
            boxifyreset();
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
        if (bupgrade < 8 || (bupgrade < 10 && rupgradelist[6].compare(new Decimal('1')) === 0)) {
            document.getElementById('bupgrade' + bupgrade.toString()).style.display = 'none';
            bupgrade = bupgrade + 1;
            document.getElementById('bupgrade' + bupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('bupgradebutton1').addEventListener('click', function () {
        price = bupgradeprice[bupgrade - 1];
        cap = bcaplist[bupgrade - 1];
        if (boxpoints.compare(price) >= 0 && bupgradelist[bupgrade - 1].compare(cap) < 0) {
            if (boupgradelist[6] < 1) {
                boxpoints = boxpoints.minus(price);
            }
            bupgradelist[bupgrade - 1] = bupgradelist[bupgrade - 1].add(new Decimal('1'));
            bupgradeprice = [new Decimal('1.5').pow(bupgradelist[0]), new Decimal('1.5').pow(bupgradelist[1]), new Decimal('1.5').pow(bupgradelist[2]), new Decimal('1.5').pow(bupgradelist[3]), new Decimal('20').times(new Decimal('1.75').pow(bupgradelist[4])), new Decimal('400').times(new Decimal('1.8').pow(bupgradelist[5])), new Decimal('1000').times(new Decimal('1.6').pow(bupgradelist[6])), new Decimal('1e4').times(new Decimal('1.975').pow(bupgradelist[7])), new Decimal('100'), new Decimal('150')];
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
        if (spupgrade < 7 || (spupgrade < 10 && revupgradelist[0].compare(1) === 0)) {
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
            spupgradeprice = [new Decimal('5'), new Decimal('5'), new Decimal('5'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('15'), new Decimal('25'), new Decimal('25'), new Decimal('25').times(new Decimal('1.1').pow(spupgradelist[9]))];
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
        if (qolupgrade < 2 || (qolupgrade < 4 && rupgradelist[5].compare(new Decimal('1')) === 0)) {
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
            qolupgradeprice = [new Decimal('50').times(new Decimal('5').pow(qolupgradelist[0])), new Decimal('1000'), new Decimal('5000'), new Decimal('10000')];
        }
        for (m = 1; m <= qolupgradelist.length; m = m + 1) {
            document.getElementById('qolupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(qolupgradeprice[m - 1]) + ' BoxPoints';
            document.getElementById('qolupgrade' + m.toString() + 'cap').innerHTML = decimalToString(qolupgradelist[m - 1]) + '/' + decimalToString(qolcaplist[m - 1]);
        }
    });
    document.getElementById('rollresetbutton').addEventListener('click', function () {
        if (level.compare(rollpointreq) >= 0) {
            rollreset();
        }
    });
    document.getElementById('rarrow1').addEventListener('click', function () {
        if (rupgrade > 1) {
            document.getElementById('rupgrade' + rupgrade.toString()).style.display = 'none';
            rupgrade = rupgrade - 1;
            document.getElementById('rupgrade' + rupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('rarrow2').addEventListener('click', function () {
        if (rupgrade < 9) {
            document.getElementById('rupgrade' + rupgrade.toString()).style.display = 'none';
            rupgrade = rupgrade + 1;
            document.getElementById('rupgrade' + rupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('rupgradebutton1').addEventListener('click', function () {
        price = rupgradeprice[rupgrade - 1];
        cap = rcaplist[rupgrade - 1];
        if (rotations.compare(price) >= 0 && rupgradelist[rupgrade - 1].compare(cap) < 0) {
            if (boupgradelist[9] < 1) {
                rotations = rotations.minus(price);
            }
            rupgradelist[rupgrade - 1] = rupgradelist[rupgrade - 1].add(new Decimal('1'));
            rupgradeprice = [new Decimal('1'), new Decimal('5'), new Decimal('20'), new Decimal('100'), new Decimal('200'), new Decimal('250'), new Decimal('500'), new Decimal('1000'), new Decimal('3000')];
        }
        for (m = 1; m <= rupgradelist.length; m = m + 1) {
            document.getElementById('rupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(rupgradeprice[m - 1]) + ' Rotations';
            document.getElementById('rupgrade' + m.toString() + 'cap').innerHTML = decimalToString(rupgradelist[m - 1]) + '/' + decimalToString(rcaplist[m - 1]);
        }
    });
    document.getElementById('disableplinkoauto').addEventListener('click', function () {
        disableautoplinko = new Decimal('1').minus(disableautoplinko);
        if (disableautoplinko.compare(new Decimal('0')) === 0) {
            document.getElementById('disableplinkoauto').style.backgroundColor = '#b4f277';
        } else {
            document.getElementById('disableplinkoauto').style.backgroundColor = '#f27777';
        }
    });
    document.getElementById('disableautodrop').addEventListener('click', function () {
        disableautodrop = new Decimal('1').minus(disableautodrop);
        if (disableautodrop.compare(new Decimal('0')) === 0) {
            document.getElementById('disableautodrop').style.backgroundColor = '#b4f277';
        } else {
            document.getElementById('disableautodrop').style.backgroundColor = '#f27777';
        }
    });
    document.getElementById('revbutton').addEventListener('click', function () {
        if (revrotationallow === 1) {
            revrotationallow = -4;
            if (revimgrotation >= 350 || revimgrotation <= 10) {
                document.getElementById('revolutionline').style.backgroundColor = 'green';
                document.getElementById('revbutton').innerHTML = 'You Won!';
                revolutions = revolutions.plus(revgain.times(new Decimal(revstreakeffect)));
                revstreak = revstreak + 1;
                revstreakeffect = (Math.pow(1.15, revstreak) * Math.pow(parseFloat(decimalToString(irev)), 1.35)).toFixed(2);
                if (revstreak >= 10) {
                    revstreakeffect = revstreakeffect = (Math.pow(1.15, 10) * Math.pow(parseFloat(decimalToString(irev)), 1.35)).toFixed(2);
                }
                document.getElementById('revpowertext').innerHTML = 'Streak: ' + revstreak.toString() + '<br> Boost: x' + revstreakeffect.toString();
                document.getElementById('revpowerbar2').style.height = (35 - (revstreak * 3.5)).toString() + '%';
            } else {
                document.getElementById('revolutionline').style.backgroundColor = 'red';
                document.getElementById('revbutton').innerHTML = 'You Missed...';
                revstreak = 0;
                revstreakeffect = Math.pow(1.15, revstreak);
                document.getElementById('revpowertext').innerHTML = 'Streak: ' + revstreak.toString() + '<br> Boost: x' + revstreakeffect.toString();
                document.getElementById('revpowerbar2').style.height = (35 - (revstreak * 3.5)).toString() + '%';
            }
        }
    });
    document.getElementById('reveffect1').addEventListener('click', function () {
        if (revselectlist.includes(1)) {
            document.getElementById('reveffect1').style.backgroundColor = 'salmon';
            for (m = 0; m < revselectlist.length; m = m + 1) {
                if (revselectlist[m] === 1) {
                    revselectlist.splice(m, 1);
                }
            }
        } else if (maxrevselect.compare(revselectlist.length)) {
            document.getElementById('reveffect1').style.backgroundColor = 'yellowgreen';
            revselectlist.push(1);
        }
    });
    document.getElementById('reveffect2').addEventListener('click', function () {
        if (revselectlist.includes(2)) {
            document.getElementById('reveffect2').style.backgroundColor = 'salmon';
            for (m = 0; m < revselectlist.length; m = m + 1) {
                if (revselectlist[m] === 2) {
                    revselectlist.splice(m, 1);
                }
            }
        } else if (maxrevselect.compare(revselectlist.length)) {
            document.getElementById('reveffect2').style.backgroundColor = 'yellowgreen';
            revselectlist.push(2);
        }
    });
    document.getElementById('reveffect3').addEventListener('click', function () {
        if (revselectlist.includes(3)) {
            document.getElementById('reveffect3').style.backgroundColor = 'salmon';
            for (m = 0; m < revselectlist.length; m = m + 1) {
                if (revselectlist[m] === 3) {
                    revselectlist.splice(m, 1);
                }
            }
        } else if (maxrevselect.compare(revselectlist.length)) {
            document.getElementById('reveffect3').style.backgroundColor = 'yellowgreen';
            revselectlist.push(3);
        }
    });
    document.getElementById('reveffect4').addEventListener('click', function () {
        if (revselectlist.includes(4)) {
            document.getElementById('reveffect4').style.backgroundColor = 'salmon';
            for (m = 0; m < revselectlist.length; m = m + 1) {
                if (revselectlist[m] === 4) {
                    revselectlist.splice(m, 1);
                }
            }
        } else if (maxrevselect.compare(revselectlist.length)) {
            document.getElementById('reveffect4').style.backgroundColor = 'yellowgreen';
            revselectlist.push(4);
        }
    });
    document.getElementById('reveffect5').addEventListener('click', function () {
        if (revselectlist.includes(5)) {
            document.getElementById('reveffect5').style.backgroundColor = 'salmon';
            for (m = 0; m < revselectlist.length; m = m + 1) {
                if (revselectlist[m] === 5) {
                    revselectlist.splice(m, 1);
                }
            }
        } else if (maxrevselect.compare(revselectlist.length)) {
            document.getElementById('reveffect5').style.backgroundColor = 'yellowgreen';
            revselectlist.push(5);
        }
    });
    document.getElementById('reveffect6').addEventListener('click', function () {
        if (revselectlist.includes(6)) {
            document.getElementById('reveffect6').style.backgroundColor = 'salmon';
            for (m = 0; m < revselectlist.length; m = m + 1) {
                if (revselectlist[m] === 6) {
                    revselectlist.splice(m, 1);
                }
            }
        } else if (maxrevselect.compare(revselectlist.length)) {
            document.getElementById('reveffect6').style.backgroundColor = 'yellowgreen';
            revselectlist.push(6);
        }
    });
    document.getElementById('revarrow1').addEventListener('click', function () {
        if (revupgrade > 1) {
            document.getElementById('revupgrade' + revupgrade.toString()).style.display = 'none';
            revupgrade = revupgrade - 1;
            document.getElementById('revupgrade' + revupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('revarrow2').addEventListener('click', function () {
        if (revupgrade < 1 || (boupgradelist[21] >= 0 && revupgrade < 5)) {
            document.getElementById('revupgrade' + revupgrade.toString()).style.display = 'none';
            revupgrade = revupgrade + 1;
            document.getElementById('revupgrade' + revupgrade.toString()).style.display = 'block';
        }
    });
    document.getElementById('revupgradebutton1').addEventListener('click', function () {
        price = revupgradeprice[revupgrade - 1];
        cap = revcaplist[revupgrade - 1];
        if (revolutions.compare(price) >= 0 && revupgradelist[revupgrade - 1].compare(cap) < 0) {
            revolutions = revolutions.minus(price);
            revupgradelist[revupgrade - 1] = revupgradelist[revupgrade - 1].add(new Decimal('1'));
            revupgradeprice = [new Decimal('100'), new Decimal('200').times(new Decimal('3.16').pow(revupgradelist[1])), new Decimal('250').times(new Decimal('3.21').pow(revupgradelist[2])), new Decimal('350').times(new Decimal('3.36').pow(revupgradelist[3])), new Decimal('1000').times(new Decimal('2.25').pow(revupgradelist[4]))];
        }
        for (m = 1; m <= revupgradelist.length; m = m + 1) {
            document.getElementById('revupgrade' + m.toString() + 'price').innerHTML = 'Cost: ' + decimalToString(revupgradeprice[m - 1]) + ' Revolutions';
            document.getElementById('revupgrade' + m.toString() + 'cap').innerHTML = decimalToString(revupgradelist[m - 1]) + '/' + decimalToString(revcaplist[m - 1]);
        }
    });
    document.getElementById('bounceresetbutton').addEventListener('click', function () {
        if (rollpoints.compare(new Decimal('10')) >= 0) {
            bouncereset();
        }
    });
    bobuttons = document.querySelectorAll(".boupgradeicon1, .boupgradeicon2, .boupgradeicon3, .boupgradeicon4, .boupgradeicon5");
    bobuttons.forEach(function (b) {
        b.addEventListener("click", function () {
            bobutton = b.id.slice(9, -4);
            bobutton = Number(bobutton);
            templist = boupgradelist.slice((Math.ceil(bobutton / 5) - 1) * 5, ((Math.ceil(bobutton / 5) - 1) * 5) + 5);
            templist = templist.filter(function (a) {
                return a != 0;
            });
            price = boupgradeprice[bobutton - 1].times(new Decimal('5').pow(new Decimal(templist.length)));
            document.getElementById('boupgradetitle').innerHTML = botitlelist[Math.ceil(bobutton / 5) - 1] + ' ' + botitlelist[(bobutton % 5) + 5];
            document.getElementsByClassName('boupgradeimage')[0].src = 'boupgrade' + bobutton.toString() + '.png';
            document.getElementById('boupgradecap').innerHTML = boupgradelist[bobutton - 1].toString() + '/' + decimalToString(bocaplist[bobutton - 1]);
            document.getElementById('boupgradeprice').innerHTML = 'Cost: ' + decimalToString(price) + ' Jumps';
            document.getElementById('boupgradedesc').innerHTML = bodescriptionlist[bobutton - 1];
        });
    });
    document.getElementById('boupgradebutton1').addEventListener('click', function () {
        templist = boupgradelist.slice((Math.ceil(bobutton / 5) - 1) * 5, ((Math.ceil(bobutton / 5) - 1) * 5) + 5);
        templist = templist.filter(function (a) {
            return a != 0;
        });
        price = boupgradeprice[bobutton - 1].times(new Decimal('5').pow(new Decimal(templist.length)));
        cap = decimalToString(bocaplist[bobutton - 1]);
        if (jumps.compare(price) >= 0 && boupgradelist[bobutton - 1] < cap) {
            jumps = jumps.minus(price);
            boupgradelist[bobutton - 1] = boupgradelist[bobutton - 1] + 1;
        }
        window.console.log(bobutton, boupgradelist[bobutton]);
        document.getElementById('boupgradecap').innerHTML = boupgradelist[bobutton - 1].toString() + '/' + decimalToString(bocaplist[bobutton - 1]);
        document.getElementById('boupgradeprice').innerHTML = 'Cost: ' + decimalToString(price) + ' Jumps';
    });
    document.getElementById('respecbutton').addEventListener('click', function () {
        boupgradelist.forEach(function (a, b, c) {
            jumps = totaljumps;
            boupgradelist[b] = 0;
        });
        respec = 1;
        bouncereset();
    });
    document.getElementById('energyresetbutton').addEventListener('click', function () {
        if (rollpoints.compare(new Decimal('1')) >= 0) {
            energyreset();
        }
    });
    document.querySelectorAll('.tasks').forEach(function (b) {
        b.addEventListener("click", function () {
            taskprice = [new Decimal('10').times(new Decimal('1.25').pow(tasks[0])), new Decimal('25').times(new Decimal('1.65').pow(tasks[1])), new Decimal('50').times(new Decimal('1.75').pow(tasks[2]))];
            tasktime = [new Decimal('1.25').pow(tasks[0]), new Decimal('5').times(new Decimal('1.3').pow(tasks[1])), new Decimal('7.5').times(new Decimal('1.35').pow(tasks[2]))];
            price = taskprice[Number(b.id.slice(4)) - 1];
            if (energy.compare(price) >= 0 && taskprogress[Number(b.id.slice(4)) - 1].compare(0) <= 0) {
                taskprogress[Number(b.id.slice(4)) - 1] = tasktime[Number(b.id.slice(4)) - 1].floor();
                energy = energy.minus(price);
            }
        });
    });
    document.getElementById('disableboxifyauto').addEventListener('click', function () {
        disableautoboxify = new Decimal('1').minus(disableautoboxify);
        if (disableautoboxify.compare(new Decimal('0')) === 0) {
            document.getElementById('disableboxifyauto').style.backgroundColor = '#b4f277';
        } else {
            document.getElementById('disableboxifyauto').style.backgroundColor = '#f27777';
        }
    });
    //hotkeys
    document.addEventListener('keydown', function (event) {
        //window.console.log(event.keyCode);
        //^^^ keycode testing ^^^
        if (event.keyCode === 83) {
            save();
            if (JSON.stringify(savefile) !== '[object Object]') {
                localStorage.setItem('save', JSON.stringify(savefile));
                window.console.log('saved!!');
            } else {
                alert('save failed!');
            }
        }
        if (event.keyCode === 39 && (sscreen < 3 || (sscreen < 5 && rollresets.compare(1) >= 0))) {
            for (l = 0; l < ballList.length; l = l + 1) {
                pegarea.removeChild(document.getElementById('ball' + ballList[l].index.toString()));
            }
            ballList = [];
            document.getElementById('balldrop').innerHTML = 'Drop Ball!';
            document.getElementById('balldrop').style.backgroundColor = '#c2c2c2';
            document.getElementById('screen' + sscreen.toString()).style.display = 'none';
            sscreen = sscreen + 1;
            document.getElementById('screen' + sscreen.toString()).style.display = 'inline';
        }
        if (event.keyCode === 37 && sscreen > 0) {
            for (l = 0; l < ballList.length; l = l + 1) {
                pegarea.removeChild(document.getElementById('ball' + ballList[l].index.toString()));
            }
            ballList = [];
            document.getElementById('balldrop').innerHTML = 'Drop Ball!';
            document.getElementById('balldrop').style.backgroundColor = '#c2c2c2';
            document.getElementById('screen' + sscreen.toString()).style.display = 'none';
            sscreen = sscreen - 1;
            document.getElementById('screen' + sscreen.toString()).style.display = 'inline';
            document.getElementById('screen' + sscreen.toString()).style.display = 'inline';
        }
        if (event.keyCode === 66 && level >= 16) {
            boxifyreset();
        }
        if (event.keyCode === 82 && level.compare(rollpointreq) >= 0) {
            rollreset();
        }
        if (event.keyCode === 86 && sscreen === 3) {
            if (revrotationallow === 1) {
                revrotationallow = -4;
                if (revimgrotation >= 350 || revimgrotation <= 10) {
                    document.getElementById('revolutionline').style.backgroundColor = 'green';
                    document.getElementById('revbutton').innerHTML = 'You Won!';
                    revolutions = revolutions.plus(revgain.times(new Decimal(revstreakeffect)));
                    revstreak = revstreak + 1;
                    revstreakeffect = (Math.pow(1.15, revstreak) * Math.pow(parseFloat(decimalToString(irev)), 1.35)).toFixed(2);
                    if (revstreak >= 10) {
                        revstreakeffect = revstreakeffect = (Math.pow(1.15, 10) * Math.pow(parseFloat(decimalToString(irev)), 1.35)).toFixed(2);
                    }
                    document.getElementById('revpowertext').innerHTML = 'Streak: ' + revstreak.toString() + '<br> Boost: x' + revstreakeffect.toString();
                    document.getElementById('revpowerbar2').style.height = (35 - (revstreak * 3.5)).toString() + '%';
                } else {
                    document.getElementById('revolutionline').style.backgroundColor = 'red';
                    document.getElementById('revbutton').innerHTML = 'You Missed...';
                    revstreak = 0;
                    revstreakeffect = Math.pow(1.15, revstreak);
                    document.getElementById('revpowertext').innerHTML = 'Streak: ' + revstreak.toString() + '<br> Boost: x' + revstreakeffect.toString();
                    document.getElementById('revpowerbar2').style.height = (35 - (revstreak * 3.5)).toString() + '%';
                }
            }
        }
        if (event.keyCode === 74 && rollpoints.compare(new Decimal('10')) >= 0) {
            bouncereset();
        }
        if (event.keyCode === 16) {
            for (m = 0; m < boupgradelist.length; m = m + 1) {
                if (boupgradelist[m] === 1) {
                    document.getElementById('boupgrade' + (m + 1).toString() + 'icon').setAttribute('class', 'green');
                } else {
                    document.getElementById('boupgrade' + (m + 1).toString() + 'icon').setAttribute('class', 'red');
                }
            }
        }
    });
    //slider :3
    document.getElementById('ballcomp').oninput = function () {
        document.getElementById('ballcompdisplay').innerHTML = 'Ball Compaction Start: ' + this.value.toString() + ' Balls';
        ballcap = this.value;
    };
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 16) {
            for (m = 0; m < boupgradelist.length; m = m + 1) {
                document.getElementById('boupgrade' + (m + 1).toString() + 'icon').setAttribute('class', 'boupgradeicon' + Math.ceil((m + 1) / 5).toString());
                document.getElementById('boupgrade' + (m + 1).toString() + 'icon').setAttribute('class', 'boupgradeicon' + Math.ceil((m + 1) / 5).toString());
            }
        }
    });
});
