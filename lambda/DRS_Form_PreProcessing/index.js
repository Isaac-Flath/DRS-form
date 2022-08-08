// Loads in the AWS SDK
const AWS = require('aws-sdk');


exports.handler = async (event, context, callback) => {


    if (
        event.admin && event.dateInput && event.email && event.firstName &&
        event.lastName && event.ethnicity && event.sex && event.age && event.legLength && event.company && event.rightSingleLegReleves &&
        event.leftSingleLegReleves && event.plank && event.rightSidePlank &&
        event.leftSidePlank && event.rightSingleLegBridges && event.leftSingleLegBridges &&
        event.rightHopTest1 && event.leftHopTest1 && event.rightHopTest2 &&
        event.leftHopTest2 && event.rightWallSit && event.leftWallSit && event.rightPasseReleveBalance && event.leftPasseReleveBalance &&
        event.rightPasseFlatFootBalance && event.leftPasseFlatFootBalance && event.ckcuest &&
        event.sitAndReach && event.RHTOF && event.LHTOF && event.RHTOD && event.LHTOD && event.workingLeg &&
        event.standingLeg && event.threeMonthInjury && event.fiveYearInjury
    ) {

        var obj = getData(event);
        callback(null, {
            statusCode: 201,

            DRSTotal: obj.DRSTotal,

            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });

        return obj;
    } else {
        callback(null, {
            statusCode: 400,
            body: 'Bad Request',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }


    // Function getData

    function getData(event) {

        var testadministrator = event.admin;
        var testingdate = event.date;
        var email = event.email;
        var firstName = event.firstName;
        var lastName = event.lastName;
        var ethnicity = event.ethnicity;
        var sex = event.sex;
        var age = parseFloat(event.age);
        var legLength = parseFloat(event.legLength);
        var company = event.company;
        var workingLeg = event.workingLeg.value;
        var standingLeg = event.standingLeg.value;
        var threeMonthInjury = event.threeMonthInjury.value;
        var fiveYearInjury = event.fiveYearInjury.value;
        //var consent = event.consent.checked;

        var righthtodVal = parseFloat(event.RHTOD);
        var lefthtodVal = parseFloat(event.LHTOD);

        var plank = get_front_plank_vals(parseFloat(event.plank));
        var rightSidePlank = get_plank_vals(parseFloat(event.rightSidePlank));
        var leftSidePlank = get_plank_vals(parseFloat(event.leftSidePlank));
        //var plankExtra = get_plank_avg_vals(plank.score, rightSidePlank.score, leftSidePlank.score);
        var rightSingleLegReleves = get_singleLegReleves_vals(parseFloat(event.rightSingleLegReleves));
        var leftSingleLegReleves = get_singleLegReleves_vals(parseFloat(event.leftSingleLegReleves));
        var rightSingleLegBridges = get_singleLegBridges_vals(parseFloat(event.rightSingleLegBridges));
        var leftSingleLegBridges = get_singleLegBridges_vals(parseFloat(event.leftSingleLegBridges));


        if (event.rightHopTest1 === "not applicable" &&
            event.leftHopTest1 === "not applicable" &&
            event.rightHopTest2 === "not applicable" &&
            event.leftHopTest2 === "not applicable") {

            var rightHopTest = get_hopTest_vals(0, 0, sex);
            var leftHopTest = get_hopTest_vals(0, 0, sex);

        } else {

            var rightHopTest = get_hopTest_vals(parseFloat(event.rightHopTest1), parseFloat(event.rightHopTest2), sex);
            var leftHopTest = get_hopTest_vals(parseFloat(event.leftHopTest1), parseFloat(event.leftHopTest2), sex);
        }

        var rightWallSitTest = get_wallSittTest_vals(parseFloat(event.rightWallSit));
        var leftWallSitTest = get_wallSittTest_vals(parseFloat(event.leftWallSit));
        //var legExtras = get_legAvg_vals(rightSingleLegReleves.score, leftSingleLegReleves.score, rightSingleLegBridges.score, leftSingleLegBridges.score, rightHopTest.score, leftHopTest.score);
        var rightPasseReleveBalance = get_passeReleveBalance_vals(parseFloat(event.rightPasseReleveBalance));
        var leftPasseReleveBalance = get_passeReleveBalance_vals(parseFloat(event.leftPasseReleveBalance));
        var rightPasseFlatFootBalance = get_passeFlatFootBalance_vals(parseFloat(event.rightPasseFlatFootBalance));
        var leftPasseFlatFootBalance = get_passeFlatFootBalance_vals(parseFloat(event.leftPasseFlatFootBalance));
        var passeExtra = get_passeAvg_vals(rightPasseReleveBalance.score, leftPasseReleveBalance.score, rightPasseFlatFootBalance.score, leftPasseFlatFootBalance.score);
        var ckcuestVar = get_ckcuestFunc_vals(parseFloat(event.ckcuest));
        //var bolt = get_bolts_vals(DRSForm.bolt.value);
        var sitAndReachTest = get_sitAndReach_vals(parseFloat(event.sitAndReach), sex, age);
        var rightHtod = get_htod_vals(righthtodVal);
        var leftHtod = get_htod_vals(lefthtodVal);
        var rightHtof = get_htof_vals(parseFloat(event.RHTOF), righthtodVal);
        var leftHtof = get_htof_vals(parseFloat(event.RHTOF), lefthtodVal);



        var DRSRight = DRSTotalScore(rightSingleLegReleves, rightSidePlank, rightSingleLegBridges, rightHopTest, rightPasseFlatFootBalance, rightHtod, rightHtof, rightWallSitTest,
            leftSingleLegReleves, leftSidePlank, leftSingleLegBridges, leftHopTest, leftPasseFlatFootBalance, leftHtod, leftHtof, leftWallSitTest, plank, sitAndReachTest, ckcuestVar).DRSRight.toFixed(2);
        var DRSLeft = DRSTotalScore(rightSingleLegReleves, rightSidePlank, rightSingleLegBridges, rightHopTest, rightPasseFlatFootBalance, rightHtod, rightHtof, rightWallSitTest,
            leftSingleLegReleves, leftSidePlank, leftSingleLegBridges, leftHopTest, leftPasseFlatFootBalance, leftHtod, leftHtof, leftWallSitTest, plank, sitAndReachTest, ckcuestVar).DRSLeft.toFixed(2);
        var DRSTotal = DRSTotalScore(rightSingleLegReleves, rightSidePlank, rightSingleLegBridges, rightHopTest, rightPasseFlatFootBalance, rightHtod, rightHtof, rightWallSitTest,
            leftSingleLegReleves, leftSidePlank, leftSingleLegBridges, leftHopTest, leftPasseFlatFootBalance, leftHtod, leftHtof, leftWallSitTest, plank, sitAndReachTest, ckcuestVar).DRSTotal.toFixed(2);




        let obj = {
            plank: plank,
            testadministrator: testadministrator,
            testingdate: testingdate,
            rightSidePlank: rightSidePlank,
            leftSidePlank: leftSidePlank,
            //plankExtra: plankExtra,
            rightSingleLegReleves: rightSingleLegReleves,
            leftSingleLegReleves: leftSingleLegReleves,
            rightSingleLegBridges: rightSingleLegBridges,
            leftSingleLegBridges: leftSingleLegBridges,
            sex: sex,
            age: age,
            legLength: legLength,
            rightHopTest: rightHopTest,
            leftHopTest: leftHopTest,
            rightWallSitTest: rightWallSitTest,
            leftWallSitTest: leftWallSitTest,
            //legExtras: legExtras,
            rightPasseReleveBalance: rightPasseReleveBalance,
            leftPasseReleveBalance: leftPasseReleveBalance,
            rightPasseFlatFootBalance: rightPasseFlatFootBalance,
            leftPasseFlatFootBalance: leftPasseFlatFootBalance,
            passeExtra: passeExtra,
            ckcuestVar: ckcuestVar,
            //bolt: bolt,
            sitAndReachTest: sitAndReachTest,
            rightHtod: rightHtod,
            leftHtod: leftHtod,
            rightHtof: rightHtof,
            leftHtof: leftHtof,
            email: email,
            firstName: firstName,
            lastName: lastName,
            ethnicity: ethnicity,
            company: company,
            workingLeg: workingLeg,
            standingLeg: standingLeg,
            threeMonthInjury: threeMonthInjury,
            fiveYearInjury: fiveYearInjury,
            //consent: consent,
            DRSRight: DRSRight,
            DRSLeft: DRSLeft,
            DRSTotal: DRSTotal
        }

        console.log(
            obj.firstName + '\n' +
            obj.lastName + '\n' +
            obj.rightHopTest.score + '\n' +
            obj.leftSingleLegBridges.comments + '\n' +
            obj.DRSLeft + '\n' +
            obj.DRSRight + '\n' +
            obj.DRSTotal

        )

        return obj
    }

    function DRSTotalScore(rightSingleLegReleves, rightSidePlank, rightSingleLegBridges, rightHopTest, rightPasseFlatFootBalance, rightHtod, rightHtof, rightWallSitTest,
        leftSingleLegReleves, leftSidePlank, leftSingleLegBridges, leftHopTest, leftPasseFlatFootBalance, leftHtod, leftHtof, leftWallSitTest,
        plank, sitAndReachTest, ckcuestVar) {

        var DRSRightWithHOP = (Number(rightSingleLegReleves.score) + Number(rightSidePlank.score) + Number(rightSingleLegBridges.score) + Number(rightHopTest.score) + Number(rightPasseFlatFootBalance.score) + Number(rightHtod.score) + Number(rightHtof.score) + Number(rightWallSitTest.score)) / 8;
        var DRSLeftWithHOP = (Number(leftSingleLegReleves.score) + Number(leftSidePlank.score) + Number(leftSingleLegBridges.score) + Number(leftHopTest.score) + Number(leftPasseFlatFootBalance.score) + Number(leftHtod.score) + Number(leftHtof.score) + Number(leftWallSitTest.score)) / 8;
        var DRSTotalWithHOP = (Number(DRSLeftWithHOP) + Number(DRSRightWithHOP) + Number(plank.score) + Number(sitAndReachTest.score) + Number(ckcuestVar.score)) / 5;

        var DRSRightWithoutHOP = (Number(rightSingleLegReleves.score) + Number(rightSidePlank.score) + Number(rightSingleLegBridges.score) + Number(rightPasseFlatFootBalance.score) + Number(rightHtod.score) + Number(rightHtof.score) + Number(rightWallSitTest.score)) / 7;
        var DRSLeftWithoutHOP = (Number(leftSingleLegReleves.score) + Number(leftSidePlank.score) + Number(leftSingleLegBridges.score) + Number(leftPasseFlatFootBalance.score) + Number(leftHtod.score) + Number(leftHtof.score) + Number(leftWallSitTest.score)) / 7;
        var DRSTotalWithoutHOP = (Number(DRSLeftWithoutHOP) + Number(DRSRightWithoutHOP) + Number(plank.score) + Number(sitAndReachTest.score) + Number(ckcuestVar.score)) / 5;

        let scoreWithHOPTest = { DRSRight: DRSRightWithHOP, DRSLeft: DRSLeftWithHOP, DRSTotal: DRSTotalWithHOP }
        let scoreWithoutHOPTest = { DRSRight: DRSRightWithoutHOP, DRSLeft: DRSLeftWithoutHOP, DRSTotal: DRSTotalWithoutHOP }

        function setHopTest() {
            rightHopTest.score = "N/A";
            leftHopTest.score = "N/A";
        }

        //var checkBox = document.getElementById("isHOPTestPreformed");
        if (event.rightHopTest1 != "not applicable") {
            return scoreWithHOPTest;
        } else {
            setHopTest();
            return scoreWithoutHOPTest
        }
    }

    function value_ranges(amount, groups) {
        for (let g in groups) {
            if ((amount >= groups[g]['min']) && (amount <= groups[g]['max'])) {
                var out = groups[g]
                out['amount'] = amount
            }
        }
        return out
    }

    function get_front_plank_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 240, max: Infinity, grade: "Excellent", score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore maintaining adequate strength and control in this area critcial to a healthy dance career." },
            g2: { min: 120, max: 239, grade: "Good", score: 80, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore maintaining adequate strength and control in this area critcial to a healthy dance career." },
            g3: { min: 60, max: 119, score: 60, grade: "Above average", comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore maintaining adequate strength and control in this area critcial to a healthy dance career." },
            g4: { min: 30, max: 59, score: 40, grade: "Average", comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore maintaining adequate strength and control in this area critcial to a healthy dance career." },
            g5: { min: 15, max: 29, score: 20, grade: "Poor", comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore maintaining adequate strength and control in this area critcial to a healthy dance career." },
            g6: { min: 0, max: 14, score: 0, grade: "Very Poor", comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore maintaining adequate strength and control in this area critcial to a healthy dance career." }
        }
        return value_ranges(roundToCeil, definition)
    }

    function get_plank_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 45, max: Infinity, score: 100, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
            g2: { min: 30, max: 44, score: 75, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
            g3: { min: 21, max: 29, score: 50, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
            g4: { min: 10, max: 20, score: 25, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
            g5: { min: 0, max: 9, score: 0, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        }
        return value_ranges(roundToCeil, definition)
    }
    function get_plank_avg_vals(amount1, amount2, amount3) {
        var definition = {
            g1: { min: 80, max: Infinity, grade: "Excellent", accommodations: "Continue your current training/fitness regimen." },
            g2: { min: 61, max: 79, grade: "Average", accommodations: "Be cautious with work that places moderate to high demand on the core. Keep legs below 90 deg if you have hip or back pain." },
            g3: { min: 0, max: 61, grade: "Not Optimal, Recommend PT consult", accommodations: "Be cautious with work that places moderate to high demand on the core. Keep legs below <60 deg if you have hip or back pain." }
        }
        return value_ranges((amount1, amount2, amount3) / 3, definition)
    }
    function get_singleLegReleves_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 35, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g2: { min: 25, max: 34, score: 80, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g3: { min: 16, max: 24, score: 60, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g4: { min: 11, max: 15, score: 40, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g5: { min: 6, max: 10, score: 20, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g6: { min: 0, max: 5, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        }
        return value_ranges(roundToCeil, definition)

    }
    function get_singleLegBridges_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 31, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g2: { min: 25, max: 30, score: 75, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g3: { min: 20, max: 24, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g4: { min: 10, max: 19, score: 25, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g5: { min: 0, max: 9, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
        }
        //console.log(roundToCeil);
        return value_ranges(roundToCeil, definition)
    }

    function get_hopTest_vals(amount1, amount2, sex) {
        var roundToCeil1 = Math.ceil(amount1);
        var roundToCeil2 = Math.ceil(amount2);
        var avgAmount = (Number(roundToCeil1) + Number(roundToCeil2)) / 2;
        var definition_male = {
            g1: { min: 203, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g2: { min: 182, max: 202, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g3: { min: 0, max: 182, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
        };
        var definition_female = {
            g1: { min: 160, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g2: { min: 139, max: 159, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
            g3: { min: 0, max: 138, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
        };

        if (sex == 'Male') { return value_ranges(avgAmount, definition_male) }
        else if (sex == 'Female') { return value_ranges(avgAmount, definition_female) }
    }

    function get_wallSittTest_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 60, max: Infinity, score: 100, grade: "Excellent", comments: "Calf, hamstring,  gluteal, and quadriceps strength and coordination are critical to all jumps, floor, and foot work. Strengthening these muscle grourps will improve your ability to perform these movements efficiently." },
            g2: { min: 50, max: 59, score: 75, grade: "Good", comments: "Calf, hamstring,  gluteal, and quadriceps strength and coordination are critical to all jumps, floor, and foot work. Strengthening these muscle grourps will improve your ability to perform these movements efficiently." },
            g3: { min: 40, max: 50, score: 50, grade: "Average", comments: "Calf, hamstring,  gluteal, and quadriceps strength and coordination are critical to all jumps, floor, and foot work. Strengthening these muscle grourps will improve your ability to perform these movements efficiently." },
            g4: { min: 36, max: 40, score: 25, grade: "Poor", comments: "Calf, hamstring,  gluteal, and quadriceps strength and coordination are critical to all jumps, floor, and foot work. Strengthening these muscle grourps will improve your ability to perform these movements efficiently." },
            g5: { min: 0, max: 35, score: 0, grade: "Very Poor", comments: "Calf, hamstring,  gluteal, and quadriceps strength and coordination are critical to all jumps, floor, and foot work. Strengthening these muscle grourps will improve your ability to perform these movements efficiently." }
        };

        return value_ranges(roundToCeil, definition)

    }

    function get_legAvg_vals(rightReleveScore, leftReleveScore, rightBridgeScore, leftBridgeScore, rightHopScore, leftHopScore) {
        var avg = (rightReleveScore + leftReleveScore + rightBridgeScore + leftBridgeScore + rightHopScore + leftHopScore) / 6;
        var definition = {
            g1: { min: 80, max: Infinity, grade: "Excellent", accommodations: "Continue your current training/fitness regimen." },
            g2: { min: 61, max: 79, grade: "Average", accommodations: "Be cautious with large jumps (saut de chat)." },
            g3: { min: 0, max: 60, grade: "Not optimal. Recommend PT consult", accommodations: "Be cautious with all jumps and pirouettes" }
        }
        return value_ranges(avg, definition)
    }

    function get_passeReleveBalance_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 10, max: Infinity, score: 100, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g2: { min: 6, max: 9, score: 50, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g3: { min: 0, max: 5, score: 0, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." }

        }
        return value_ranges(roundToCeil, definition)

    }
    function get_passeFlatFootBalance_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 70, max: Infinity, grade: "Excellent", score: 100, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g2: { min: 60, max: 69, score: 80, grade: "Good", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g3: { min: 50, max: 59, score: 60, grade: "Above Average", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g4: { min: 40, max: 49, score: 40, grade: "Average", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g5: { min: 30, max: 39, score: 20, grade: "Poor", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
            g6: { min: 0, max: 29, score: 0, grade: "Very Poor", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." }

        }
        return value_ranges(roundToCeil, definition)

    }
    function get_passeAvg_vals(rightReleve, leftReleve, rightFlatFoot, leftFlatFoot) {
        var avg = (rightReleve + leftReleve + rightFlatFoot + leftFlatFoot) / 4;
        var definition = {
            g1: { min: 80, max: Infinity, grade: "Excellent", accommodations: "Continue your current training/fitness regimen." },
            g2: { min: 61, max: 79, grade: "Average", accommodations: "Be cautious with pirouttes and single leg activities, especially jumps." },
            g3: { min: 0, max: 60, grade: "Not optimal. Recommend PT consult", accommodations: "Be cautious with pirouttes and single leg activities, especially jumps. Recommend consultation with DRP physical therapists for follow up." }
        }
        return value_ranges(avg, definition)

    }

    /**
     *  Accommodations for the future use. 
     *  accommodations: "Continue your current training/fitness regimen.",
     *  accommodations: "Be cautious with activities that require lifting or supporting your body weight with your arms (floor work, partnering, sommersault etc). Your strength needs to improve in order to do these movements safely.",
     *  accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.",
     */
    function get_ckcuestFunc_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 25, max: Infinity, grade: "Excellent", score: 100, comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
            g2: { min: 20, max: 24, grade: "Good", score: 80, comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
            g3: { min: 15, max: 19, grade: "Above Average", score: 60, comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
            g4: { min: 10, max: 14, grade: "Average", score: 40, comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
            g5: { min: 5, max: 9, grade: "Poor", score: 20, comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
            g6: { min: 0, max: 4, grade: "Very Poor", score: 0, comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        }
        return value_ranges(roundToCeil, definition)


    }
    /*
    function get_bolts_vals(amount) {
        var definition = {
            g1: { min: 40, max: Infinity, grade: "Excellent", score: 100, accommodations: "Good cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." },
            g2: { min: 20, max: 39, grade: "Average", score: 50, accommodations: "Average Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." },
            g3: { min: 0, max: 19, grade: "Not optimal. Recommend PT consult", score: 0, accommodations: "Poor Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." }
        }
        return value_ranges(amount, definition)
    
    
    }
    */
    function get_sitAndReach_vals(amount, sex, age) {
        var roundToCeil = Math.ceil(amount);
        var definition_male_0_5 = {
            g1: { min: 30, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 26, max: 29, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 23, max: 25, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 17, max: 22, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_6_9 = {
            g1: { min: 30, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 26, max: 29, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 23, max: 25, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 17, max: 22, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_10_12 = {
            g1: { min: 30, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 26, max: 29, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 22, max: 25, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 14, max: 21, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 13, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_13 = {
            g1: { min: 31, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 25, max: 30, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 22, max: 24, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 14, max: 21, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 13, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_14 = {
            g1: { min: 34, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 29, max: 33, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 24, max: 28, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 14, max: 23, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 13, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_15 = {
            g1: { min: 35, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 31, max: 34, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 25, max: 30, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 14, max: 24, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 13, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_16 = {
            g1: { min: 37, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 31, max: 36, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 26, max: 30, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 15, max: 25, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 14, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_17 = {
            g1: { min: 41, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 35, max: 40, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 29, max: 34, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 16, max: 28, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 15, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_0_5 = {
            g1: { min: 31, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 28, max: 30, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 24, max: 27, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 19, max: 23, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 18, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_6 = {
            g1: { min: 32, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 28, max: 31, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 24, max: 27, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 19, max: 23, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 18, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_7 = {
            g1: { min: 32, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 28, max: 31, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 24, max: 27, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 18, max: 23, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 17, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_8_9 = {
            g1: { min: 32, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 29, max: 31, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 24, max: 28, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 18, max: 23, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 17, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_10 = {
            g1: { min: 34, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 29, max: 31, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 25, max: 28, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 17, max: 24, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_11 = {
            g1: { min: 33, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 30, max: 32, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 25, max: 29, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 17, max: 24, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_12 = {
            g1: { min: 35, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 31, max: 34, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 26, max: 30, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 17, max: 25, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_13 = {
            g1: { min: 37, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 32, max: 36, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 27, max: 31, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 18, max: 26, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 17, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_14 = {
            g1: { min: 39, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 34, max: 38, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 29, max: 33, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 19, max: 28, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 18, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_15 = {
            g1: { min: 39, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 37, max: 41, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 32, max: 36, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 20, max: 31, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 19, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_16_17 = {
            g1: { min: 39, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 37, max: 40, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 32, max: 36, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 20, max: 31, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 19, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_18_25 = {
            g1: { min: 22, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 19, max: 20, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 17, max: 18, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 14, max: 16, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 13, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_26_35 = {
            g1: { min: 21, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 17, max: 20, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 15, max: 16, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 13, max: 14, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 12, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_36_45 = {
            g1: { min: 21, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 20, max: 17, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 15, max: 16, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 13, max: 14, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 11, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_46_55 = {
            g1: { min: 19, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 15, max: 18, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 13, max: 14, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 10, max: 12, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 9, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_56_64 = {
            g1: { min: 17, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 13, max: 16, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 11, max: 12, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 9, max: 10, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 8, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_male_65_more = {
            g1: { min: 17, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 13, max: 16, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 10, max: 12, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 8, max: 9, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 7, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_18_25 = {
            g1: { min: 24, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 21, max: 23, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 19, max: 20, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 17, max: 18, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_26_35 = {
            g1: { min: 23, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 20, max: 22, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 19, max: 19, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 16, max: 18, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 16, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_36_45 = {
            g1: { min: 22, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 19, max: 21, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 17, max: 18, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 15, max: 16, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 14, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_46_55 = {
            g1: { min: 21, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 18, max: 20, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 16, max: 17, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 14, max: 15, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 13, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_56_64 = {
            g1: { min: 20, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 17, max: 19, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 15, max: 16, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 13, max: 14, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 12, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        var definition_female_65_more = {
            g1: { min: 20, max: Infinity, score: 100, grade: "Excellent", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g2: { min: 17, max: 19, score: 75, grade: "Very good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g3: { min: 15, max: 16, score: 50, grade: "Good", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g4: { min: 13, max: 14, score: 25, grade: "Fair", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." },
            g5: { min: 0, max: 12, score: 0, grade: "Poor", comments: "Adequate extensibility of the hamstring musculature is also essential for the dancer's mobility.  Tight hamstrings can cause pelvis, back and knee problems." }
        };

        if (sex == 'Male' && age >= 0 && age <= 5) { return value_ranges(roundToCeil, definition_male_0_5) }
        else if (sex == 'Male' && age >= 6 && age <= 9) { return value_ranges(roundToCeil, definition_male_6_9) }
        else if (sex == 'Male' && age >= 10 && age <= 12) { return value_ranges(roundToCeil, definition_male_10_12) }
        else if (sex == 'Male' && age == 13) { return value_ranges(roundToCeil, definition_male_13) }
        else if (sex == 'Male' && age == 14) { return value_ranges(roundToCeil, definition_male_14) }
        else if (sex == 'Male' && age == 15) { return value_ranges(roundToCeil, definition_male_15) }
        else if (sex == 'Male' && age == 16) { return value_ranges(roundToCeil, definition_male_16) }
        else if (sex == 'Male' && age == 17) { return value_ranges(roundToCeil, definition_male_17) }
        else if (sex == 'Male' && age >= 18 && age <= 25) { return value_ranges(roundToCeil, definition_male_18_25) }
        else if (sex == 'Male' && age >= 26 && age <= 35) { return value_ranges(roundToCeil, definition_male_26_35) }
        else if (sex == 'Male' && age >= 36 && age <= 45) { return value_ranges(roundToCeil, definition_male_36_45) }
        else if (sex == 'Male' && age >= 46 && age <= 55) { return value_ranges(roundToCeil, definition_male_46_55) }
        else if (sex == 'Male' && age >= 56 && age <= 64) { return value_ranges(roundToCeil, definition_male_56_64) }
        else if (sex == 'Male' && age >= 65) { return value_ranges(roundToCeil, definition_male_65_more) }

        else if (sex == 'Female' && age >= 0 && age <= 5) { return value_ranges(roundToCeil, definition_female_0_5) }
        else if (sex == 'Female' && age == 6) { return value_ranges(roundToCeil, definition_female_6) }
        else if (sex == 'Female' && age == 7) { return value_ranges(roundToCeil, definition_female_7) }
        else if (sex == 'Female' && age >= 8 && age <= 9) { return value_ranges(roundToCeil, definition_female_8_9) }
        else if (sex == 'Female' && age == 10) { return value_ranges(roundToCeil, definition_female_10) }
        else if (sex == 'Female' && age == 11) { return value_ranges(roundToCeil, definition_female_11) }
        else if (sex == 'Female' && age == 12) { return value_ranges(roundToCeil, definition_female_12) }
        else if (sex == 'Female' && age == 13) { return value_ranges(roundToCeil, definition_female_13) }
        else if (sex == 'Female' && age == 14) { return value_ranges(roundToCeil, definition_female_14) }
        else if (sex == 'Female' && age == 15) { return value_ranges(roundToCeil, definition_female_15) }
        else if (sex == 'Female' && age >= 16 && age <= 17) { return value_ranges(roundToCeil, definition_female_16_17) }
        else if (sex == 'Female' && age >= 18 && age <= 25) { return value_ranges(roundToCeil, definition_female_18_25) }
        else if (sex == 'Female' && age >= 26 && age <= 35) { return value_ranges(roundToCeil, definition_female_26_35) }
        else if (sex == 'Female' && age >= 36 && age <= 45) { return value_ranges(roundToCeil, definition_female_36_45) }
        else if (sex == 'Female' && age >= 46 && age <= 55) { return value_ranges(roundToCeil, definition_female_46_55) }
        else if (sex == 'Female' && age >= 56 && age <= 64) { return value_ranges(roundToCeil, definition_female_56_64) }
        else if (sex == 'Female' && age >= 65) { return value_ranges(roundToCeil, definition_female_65_more) }
    }

    function get_htod_vals(amount) {
        var roundToCeil = Math.ceil(amount);
        var definition = {
            g1: { min: 60, max: Infinity, score: 100, grade: "Excellent", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
            g2: { min: 50, max: 59, score: 75, grade: "Good", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
            g3: { min: 45, max: 49, score: 50, grade: "Average", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
            g4: { min: 40, max: 45, score: 25, grade: "Poor", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
            g5: { min: 0, max: 40, score: 0, grade: "Very Poor", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
        }

        return value_ranges(roundToCeil, definition)

    }

    function get_htof_vals(htofAmount, htodAmount) {
        var roundToCeilHTOF = Math.ceil(htofAmount);
        var roundToCeilHTOD = Math.ceil(htodAmount);
        var difference = roundToCeilHTOF - roundToCeilHTOD;
        var g1 = { score: 100, grade: "Excellent", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
        var g2 = { score: 75, grade: "Good", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
        var g3 = { score: 50, grade: "Fair", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
        var g4 = { score: 25, grade: "Poor", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
        var g5 = { score: 0, grade: "Very Poor", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }

        if (roundToCeilHTOF === roundToCeilHTOD) {
            return g2;
        } else if (roundToCeilHTOF < roundToCeilHTOD) {
            return g3;
        } else if (difference >= 1 && difference <= 4) {
            return g3
        } else if (difference >= 5 && difference <= 9) {
            return g4;
        } else if (difference >= 10) {
            return g5;
        }
    }



};