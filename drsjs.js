/**
     * Creates a variable for each excersice from the form. For each variable 
     * takes the score, accommodations, and comments and stores them in the 
     * corresponding html element for the results table. Also calculates the 
     * DRS score for the right side, left side, and total then stores them 
     * in the corresponding html element for the results table.
     */
function getData() {
    var plank = get_front_plank_vals(DRSForm.plank.value);
    var rightSidePlank = get_plank_vals(DRSForm.rightSidePlank.value);
    var leftSidePlank = get_plank_vals(DRSForm.leftSidePlank.value);
    var plankExtra = get_plank_avg_vals(plank.score, rightSidePlank.score, leftSidePlank.score);
    var rightSingleLegReleves = get_singleLegReleves_vals(DRSForm.rightSingleLegReleves.value);
    var leftSingleLegReleves = get_singleLegReleves_vals(DRSForm.leftSingleLegReleves.value);
    var rightSingleLegBridges = get_singleLegBridges_vals(DRSForm.rightSingleLegBridges.value);


    var testadministrator = DRSForm.testadministrator.value;
    var testingdate = DRSForm.testingdate.value;


    var leftSingleLegBridges = get_singleLegBridges_vals(DRSForm.leftSingleLegBridges.value);

    var sex = DRSForm.sex.value
    var age = DRSForm.age.value
    var legLength = DRSForm.legLength.value
    var righthtodVal = DRSForm.rightHtod.value
    var lefthtodVal = DRSForm.leftHtod.value
    var rightHopTest = get_hopTest_vals(DRSForm.rightHopTest1.value, DRSForm.rightHopTest2.value, sex);
    var leftHopTest = get_hopTest_vals(DRSForm.leftHopTest1.value, DRSForm.leftHopTest2.value, sex);
    var rightWallSitTest = get_wallSittTest_vals(DRSForm.rightWallSit.value);
    var leftWallSitTest = get_wallSittTest_vals(DRSForm.leftWallSit.value);
    var legExtras = get_legAvg_vals(rightSingleLegReleves.score, leftSingleLegReleves.score, rightSingleLegBridges.score, leftSingleLegBridges.score, rightHopTest.score, leftHopTest.score);
    var rightPasseReleveBalance = get_passeReleveBalance_vals(DRSForm.rightPasseReleveBalance.value);
    var leftPasseReleveBalance = get_passeReleveBalance_vals(DRSForm.leftPasseReleveBalance.value);
    var rightPasseFlatFootBalance = get_passeFlatFootBalance_vals(DRSForm.rightPasseFlatFootBalance.value);
    var leftPasseFlatFootBalance = get_passeFlatFootBalance_vals(DRSForm.leftPasseFlatFootBalance.value);
    var passeExtra = get_passeAvg_vals(rightPasseReleveBalance.score, leftPasseReleveBalance.score, rightPasseFlatFootBalance.score, leftPasseFlatFootBalance.score);
    var ckcuestVar = get_ckcuestFunc_vals(DRSForm.ckcuest.value);
    //var bolt = get_bolts_vals(DRSForm.bolt.value);
    var sitAndReachTest = get_sitAndReach_vals(DRSForm.sitAndReachTest.value, sex, age);
    var rightHtod = get_htod_vals(righthtodVal);
    var leftHtod = get_htod_vals(lefthtodVal);
    var rightHtof = get_htof_vals(DRSForm.rightHtof.value, righthtodVal);
    var leftHtof = get_htof_vals(DRSForm.rightHtof.value, lefthtodVal);

    function DRSTotalScore() {

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

        var checkBox = document.getElementById("isHOPTestPreformed");
        if (checkBox.checked == true) {
            return scoreWithHOPTest;
        } else {
            setHopTest();
            return scoreWithoutHOPTest
        }
    }

    /*
    var DRSRight = (Number(rightSingleLegReleves.score) + Number(rightSidePlank.score) + Number(rightSingleLegBridges.score) + Number(rightHopTest.score) + Number(rightPasseFlatFootBalance.score) + Number(rightHtod.score) + Number(rightHtof.score) + Number(rightWallSitTest.score)) / 8;
    var DRSLeft = (Number(leftSingleLegReleves.score) + Number(leftSidePlank.score) + Number(leftSingleLegBridges.score) + Number(leftHopTest.score) + Number(leftPasseFlatFootBalance.score) + Number(leftHtod.score) + Number(leftHtof.score) + Number(leftWallSitTest.score)) / 8;
    var DRSTotal = (Number(DRSLeft) + Number(DRSRight) + Number(plank.score) + Number(sitAndReachTest.score) + Number(ckcuestVar.score)) / 5;
    */

    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var sex = document.getElementById("sex").value;
    var company = document.getElementById("company").value;
    var age = document.getElementById("age").value;
    var workingLeg = document.getElementById("workingLeg").value;
    var standingLeg = document.getElementById("standingLeg").value;
    var threeMonthInjury = document.getElementById("threeMonthInjury").value;
    var fiveYearInjury = document.getElementById("fiveYearInjury").value;
    var consent = document.getElementById("consent").checked;


    var DRSRight = DRSTotalScore().DRSRight.toFixed(2);
    var DRSLeft = DRSTotalScore().DRSLeft.toFixed(2);
    var DRSTotal = DRSTotalScore().DRSTotal.toFixed(2);




    obj = {
        plank: plank,
        testadministrator: testadministrator,
        testingdate: testingdate,
        rightSidePlank: rightSidePlank,
        leftSidePlank: leftSidePlank,
        plankExtra: plankExtra,
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
        legExtras: legExtras,
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
        DRSRight: DRSRight,
        DRSLeft: DRSLeft,
        DRSTotal: DRSTotal,
        email: email,
        firstName: firstName,
        lastName: lastName,
        ethnicity: ethnicity,
        company: company,
        workingLeg: workingLeg,
        standingLeg: standingLeg,
        threeMonthInjury: threeMonthInjury,
        fiveYearInjury: fiveYearInjury,
        consent: consent,
        DRSRight: DRSRight,
        DRSLeft: DRSLeft,
        DRSTotal: DRSTotal
    }

    return obj
}


function value_ranges(amount, groups) {
    for (g in groups) {
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

function renderHOPTest() {
    // Get the checkbox
    var checkBox = document.getElementById("isHOPTestPreformed");
    // Get the output text
    var text = document.getElementById("hopTest");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
/**
    * Validates the email address follows the proper format for an email address. Prints an alert if not correct
    * 
    * @returns        {Boolean} True if valid email else false
    */
function validateEmail() {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(DRSForm.email.value)) {
        return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
}
/**
 * Checks the entered name only contains alphabetical characters. Prints an alert if not allowed character is entered.
 * 
 * @returns        {Boolean} True if only alphabetical characters else false
 */
function validateFirstName() {
    if (/^[A-Za-z\s]+$/.test(DRSForm.firstName.value)) {
        return (true);
    }
    alert("Invalid Character, Please enter only letters!");
    return (false);
}
/**
 * Checks the entered name only contains alphabetical characters. Prints an alert if not allowed character is entered.
 * 
 * @returns        {Boolean} True if only alphabetical characters else false
 */
function validateLastName() {
    if (/^[A-Za-z\s]+$/.test(DRSForm.lastName.value)) {
        return (true);
    }

    alert("Invalid Character, Please enter only letters!");
    return (false);
}
/**  
 * Functions from validatetRightSingleLegReleves() to validateBolt() checks weather the input value is correct. 
 * If the input value positive it will return true. Otherwise it will alert the user and return false.  
 */

function validatetRightSingleLegReleves() {
    var rightSingleLegReleves = DRSForm.rightSingleLegReleves.value;
    if (rightSingleLegReleves >= 0) {
        return (true);
    }

    alert("Invalid number, Right Single Leg Releves must be positive number!");
    return (false);
}

function validateLeftSingleLegReleves() {
    var leftSingleLegReleves = DRSForm.leftSingleLegReleves.value;
    if (leftSingleLegReleves >= 0) {
        return (true);
    }

    alert("Invalid number, Left Single Leg Releves must be positive number!");
    return (false);
}

function validatePlank() {
    var plank = DRSForm.plank.value;
    if (plank >= 0) {
        return (true);
    }

    alert("Invalid number, Plank time must be positive number!");
    return (false);
}

function validateRightSidePlank() {
    var rightSidePlank = DRSForm.rightSidePlank.value;
    if (rightSidePlank >= 0) {
        return (true);
    }

    alert("Invalid number, Right Side Plank with Abduction(s) must be positive number!");
    return (false);
}

function validateLeftSidePlank() {
    var leftSidePlank = DRSForm.leftSidePlank.value;
    if (leftSidePlank >= 0) {
        return (true);
    }

    alert("Invalid number, Left Side Plank with Abduction(s) must be positive number!");
    return (false);
}

function validateRightSingleLegBridges() {
    var rightSingleLegBridges = DRSForm.rightSingleLegBridges.value;
    if (rightSingleLegBridges >= 0) {
        return (true);
    }

    alert("Invalid number, Right Single Leg Bridges must be positive number!");
    return (false);
}

function validateLeftSingleLegBridges() {
    var leftSingleLegBridges = DRSForm.leftSingleLegBridges.value;
    if (leftSingleLegBridges >= 0) {
        return (true);
    }

    alert("Invalid number, Left Single Leg Bridges must be positive positive!");
    return (false);
}

function validateRightHopTest1() {
    var rightHopTest1 = DRSForm.rightHopTest1.value;
    if (rightHopTest1 >= 0) {
        return (true);
    }

    alert("Invalid number, Right Side Hop Test1(cm) must be positive number!");
    return (false);
}

function validateLeftHopTest1() {
    var leftHopTest1 = DRSForm.leftHopTest1.value;
    if (leftHopTest1 >= 0) {
        return (true);
    }

    alert("Invalid number, Left Side Hop Test1(cm) must be positive number!");
    return (false);
}

function validateRightHopTest2() {
    var rightHopTest2 = DRSForm.rightHopTest2.value;
    if (rightHopTest2 >= 0) {
        return (true);
    }

    alert("Invalid number, Right Hop Test2(cm) must be positive number!");
    return (false);
}

function validateLeftHopTest2() {
    var leftHopTest2 = DRSForm.leftHopTest2.value;
    if (leftHopTest2 >= 0) {
        return (true);
    }

    alert("Invalid number, Left Hop Test2(cm) must be positive!");
    return (false);
}

function validateRightWallSit() {
    var rightWallSit = DRSForm.rightWallSit.value;
    if (rightWallSit >= 0) {
        return (true);
    }

    alert("Invalid number, Right Side Wall Sit Test must be positive!");
    return (false);
}

function validateLeftWallSit() {
    var leftWallSit = DRSForm.leftWallSit.value;
    if (leftWallSit >= 0) {
        return (true);
    }

    alert("Invalid number, Left Side Wall Sit Test must be positive!");
    return (false);
}

function validateRightPasseReleveBalance() {
    var rightPasseReleveBalance = DRSForm.rightPasseReleveBalance.value;
    if (rightPasseReleveBalance >= 0) {
        return (true);
    }

    alert("Invalid number, Right Passe Releve Balance time(s) must be positive number!");
    return (false);
}

function validateLeftPasseReleveBalance() {
    var leftPasseReleveBalance = DRSForm.leftPasseReleveBalance.value;
    if (leftPasseReleveBalance >= 0) {
        return (true);
    }

    alert("Invalid number, Left Passe Releve Balance time(s) must be positive number!");
    return (false);
}

function validateRightPasseFlatFootBalance() {
    var rightPasseFlatFootBalance = DRSForm.rightPasseFlatFootBalance.value;
    if (rightPasseFlatFootBalance >= 0) {
        return (true);
    }

    alert("Invalid number, Right Passe Flat Foot Balance time(s) must be positive number!");
    return (false);
}

function validateLeftPasseFlatFootBalance() {
    var leftPasseFlatFootBalance = DRSForm.leftPasseFlatFootBalance.value;
    if (leftPasseFlatFootBalance >= 0) {
        return (true);
    }

    alert("Invalid number, Left Passe Flat Foot Balance time(s) must be positive number!");
    return (false);
}

function validateCkcuest() {
    var ckcuest = DRSForm.ckcuest.value;
    if (ckcuest >= 0) {
        return (true);
    }

    alert("Invalid number, CKCUEST must be positive number!");
    return (false);
}
/*
function validateBolt() {
    var bolt = DRSForm.bolt.value;
    if (bolt >= 0) {
        return (true);
    }

    alert("Invalid number, BOLT test score must be positive number!");
    return (false);
}
*/
function validateSitAndReach() {
    var sitAndReach = DRSForm.sitAndReachTest.value;
    if (sitAndReach >= 0) {
        return (true);
    }

    alert("Invalid number, Sit and Reach test score must be positive number!");
    return (false);
}


function validateRHTOF() {
    var RHTOF = DRSForm.rightHtof.value;
    if (RHTOF >= 0) {
        return (true);
    }

    alert("Invalid number, Right Hip Turnout - Floor test score must be positive number!");
    return (false);
}

function validateLHTOF() {
    var LHTOF = DRSForm.leftHtof.value;
    if (LHTOF >= 0) {
        return (true);
    }

    alert("Invalid number, Left Hip Turnout - Floor test score must be positive number!");
    return (false);
}

function validateRHTOD() {
    var RHTOD = DRSForm.rightHtod.value;
    if (RHTOD >= 0) {
        return (true);
    }

    alert("Invalid number, Right Hip Turnout - Disc test score must be positive number!");
    return (false);
}

function validateLHTOD() {
    var LHTOD = DRSForm.leftHtod.value;
    if (LHTOD >= 0) {
        return (true);
    }

    alert("Invalid number, Left Hip Turnout - Disc test score must be positive number!");
    return (false);
}

/**
 * This function checks weather input value is correct for all input fields. 
 * If the all input filds are true, it will create pdf, otherwise it will alert the user. 
 */
function validateForm() {

    var dateInput = document.getElementById("testingdate");
    if (!dateInput.value) {
        alert("Date must be filled out");
        return false;
    };

    if (!validateEmail()) { return false; }
    var email = document.getElementById("email").value;
    if (email === "") {
        alert("Email must be filled out");
        return false;
    };
    var firstName = document.getElementById("firstName").value;
    if (firstName === "") {
        alert("First name must be filled out");
        return false;
    };

    var lastName = document.getElementById("lastName").value;
    if (lastName === "") {
        alert("Last name must be filled out");
        return false;
    };

    var company = document.getElementById("company").value;
    if (company === "") {
        alert("Company must be filled out");
        return false;
    };


    var RHTOF = document.getElementById("rightHtof").value;
    if (RHTOF === "") {
        alert("Right Hip Turnout - Floor (HTOF) test score must be filled out");
        return false;
    };
    if (!validateRHTOF()) {
        return false;
    }

    var LHTOF = document.getElementById("leftHtof").value;
    if (LHTOF === "") {
        alert("Left Hip Turnout - Floor (HTOF) test score must be filled out");
        return false;
    };
    if (!validateLHTOF()) {
        return false;
    }

    var RHTOD = document.getElementById("rightHtod").value;
    if (RHTOD === "") {
        alert("Right Hip Turnout - Disc (HTOD) test score must be filled out");
        return false;
    };
    if (!validateRHTOD()) {
        return false;
    }

    var LHTOD = document.getElementById("leftHtod").value;
    if (LHTOD === "") {
        alert("Left Hip Turnout - Disc (HTOD) test score must be filled out");
        return false;
    };
    if (!validateLHTOD()) {
        return false;
    }

    if (!validatetRightSingleLegReleves()) {
        return false;
    }
    var rightSingleLegReleves = document.getElementById("rightSingleLegReleves").value;
    if (rightSingleLegReleves === "") {
        alert("Right single leg releves must be filled out");
        return false;
    };
    var leftSingleLegReleves = document.getElementById("leftSingleLegReleves").value;
    if (leftSingleLegReleves === "") {
        alert("Left single leg releves must be filled out");
        return false;
    };
    if (!validateLeftSingleLegReleves()) {
        return false;
    }

    var rightPasseFlatFootBalance = document.getElementById("rightPasseFlatFootBalance").value;
    if (rightPasseFlatFootBalance === "") {
        alert("Right passe flat foot balance must be filled out");
        return false;
    };
    if (!validateRightPasseFlatFootBalance()) {
        return false;
    }

    var leftPasseFlatFootBalance = document.getElementById("leftPasseFlatFootBalance").value;
    if (leftPasseFlatFootBalance === "") {
        alert("Left passe flat foot balance must be filled out");
        return false;
    };
    if (!validateLeftPasseFlatFootBalance()) {
        return false;
    }

    var ckcuest = document.getElementById("ckcuest").value;
    if (ckcuest == "") {
        alert("CKCUEST must be filled out");
        return false;
    };
    if (!validateCkcuest) {
        return false;
    }

    var rightSidePlank = document.getElementById("rightSidePlank").value;
    if (rightSidePlank === "") {
        alert("Right side plank must be filled out");
        return false;
    };
    if (!validateRightSidePlank()) {
        return false;
    }
    var leftSidePlank = document.getElementById("leftSidePlank").value;
    if (leftSidePlank === "") {
        alert("Left side plank must be filled out");
        return false;
    };
    if (!validateLeftSidePlank()) {
        return false;
    }

    var sitAndReach = document.getElementById("sitAndReachTest").value;
    if (sitAndReach === "") {
        alert("Sit and Reach test score must be filled out");
        return false;
    };
    if (!validateSitAndReach()) {
        return false;
    }

    var rightPasseReleveBalance = document.getElementById("rightPasseReleveBalance").value;
    if (rightPasseReleveBalance === "") {
        alert("Right passe releve balance must be filled out");
        return false;
    };
    if (!validateRightPasseReleveBalance()) {
        return false;
    }
    var leftPasseReleveBalance = document.getElementById("leftPasseReleveBalance").value;
    if (leftPasseReleveBalance === "") {
        alert("Left passe releve balance must be filled out");
        return false;
    };
    if (!validateLeftPasseReleveBalance()) {
        return false;
    }

    var plank = document.getElementById("plank").value;
    if (plank === "") {
        alert("Plank must be filled out");
        return false;
    };
    if (!validatePlank()) {
        return false;
    }

    var rightSingleLegBridges = document.getElementById("rightSingleLegBridges").value;
    if (rightSingleLegBridges === "") {
        alert("Right single leg bridges must be filled out");
        return false;
    };
    if (!validateRightSingleLegBridges()) {
        return false;
    }
    var leftSingleLegBridges = document.getElementById("leftSingleLegBridges").value;
    if (leftSingleLegBridges === "") {
        alert("Left single leg bridges must be filled out");
        return false;
    };
    if (!validateLeftSingleLegBridges()) {
        return false;
    }

    var rightWallSit = document.getElementById("rightWallSit").value;
    if (rightWallSit === "") {
        alert("Right Side Wall Sit test must be filled out");
        return false;
    };
    if (!validateRightWallSit()) {
        return false;
    }

    var leftWallSit = document.getElementById("leftWallSit").value;
    if (leftWallSit === "") {
        alert("Left Side Wall Sit test must be filled out");
        return false;
    };
    if (!validateLeftWallSit()) {
        return false;
    }

    var checkBox = document.getElementById("isHOPTestPreformed");
    var rightHopTest1 = document.getElementById("rightHopTest1").value;
    if (rightHopTest1 === "" && checkBox.checked === true) {
        alert("Right hop test 1 must be filled out");
        return false;
    };
    if (!validateRightHopTest1()) {
        return false;
    }
    var leftHopTest1 = document.getElementById("leftHopTest1").value;
    if (leftHopTest1 === "" && checkBox.checked === true) {
        alert("Left hop test 1 must be filled out");
        return false;
    };
    if (!validateLeftHopTest1()) {
        return false;
    }
    var rightHopTest2 = document.getElementById("rightHopTest2").value;
    if (rightHopTest2 === "" && checkBox.checked === true) {
        alert("Right hop test 2 must be filled out");
        return false;
    };
    if (!validateRightHopTest2()) {
        return false;
    }
    var leftHopTest2 = document.getElementById("leftHopTest2").value;
    if (leftHopTest2 === "" && checkBox.checked === true) {
        alert("Left hop test 2 must be filled out");
        return false;
    };
    if (!validateLeftHopTest2()) {
        return false;
    }


    submitMessage();

    pdfMake.createPdf(create_pdf()).print();

}
/*
submitMessage is async function which grap values of all elements from the DRSform 
and fetch it into AWS API gateway by POST method. 
if POST succeed Return:
                    statusCode: 201,
                    body: '',
                    headers: {
                    'Access-Control-Allow-Origin' : '*'
otherwise:                     
                    statusCode: 400,
                    body: 'Bad Request',
                    headers: {
                    'Access-Control-Allow-Origin' : '*'
*/

async function submitMessage() {
    var admin = document.getElementById("testadministrator").value.toString();
    if (admin.length === 0) {
        admin = "not applicable";
        console.log(admin);
    }
    var dateInput = document.getElementById("testingdate").value.toString();
    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ethnicityStr = document.getElementById("ethnicity").value.toString();
    var sexStr = document.getElementById("sex").value.toString();
    var age = document.getElementById("age").value.toString();
    var legLength = document.getElementById("legLength").value.toString();
    var company = document.getElementById("company").value;
    var rightSingleLegReleves = document.getElementById("rightSingleLegReleves").value;
    var leftSingleLegReleves = document.getElementById("leftSingleLegReleves").value;
    var plank = document.getElementById("plank").value;
    var rightSidePlank = document.getElementById("rightSidePlank").value;
    var leftSidePlank = document.getElementById("leftSidePlank").value;
    var rightSingleLegBridges = document.getElementById("rightSingleLegBridges").value;
    var leftSingleLegBridges = document.getElementById("leftSingleLegBridges").value;

    var checkBox = document.getElementById("isHOPTestPreformed");
    var rightHopTest1 = document.getElementById("rightHopTest1").value;
    var leftHopTest1 = document.getElementById("leftHopTest1").value;
    var rightHopTest2 = document.getElementById("rightHopTest2").value;
    var leftHopTest2 = document.getElementById("leftHopTest2").value;

    if (checkBox.checked !== true) {

        var rightHopTest1 = "not applicable";
        var leftHopTest1 = "not applicable";
        var rightHopTest2 = "not applicable";
        var leftHopTest2 = "not applicable";

    }

    var rightWallSit = document.getElementById("rightWallSit").value;
    var leftWallSit = document.getElementById("leftWallSit").value;
    var rightPasseReleveBalance = document.getElementById("rightPasseReleveBalance").value;
    var leftPasseReleveBalance = document.getElementById("leftPasseReleveBalance").value;
    var rightPasseFlatFootBalance = document.getElementById("rightPasseFlatFootBalance").value;
    var leftPasseFlatFootBalance = document.getElementById("leftPasseFlatFootBalance").value;
    var ckcuest = document.getElementById("ckcuest").value;
    //var bolt = document.getElementById("bolt").value;
    var sitAndReach = document.getElementById("sitAndReachTest").value;
    var RHTOF = document.getElementById("rightHtof").value;
    var LHTOF = document.getElementById("leftHtof").value;
    var RHTOD = document.getElementById("rightHtod").value;
    var LHTOD = document.getElementById("leftHtod").value;
    var workingLegStr = document.getElementById("workingLeg").value.toString();
    var standingLegStr = document.getElementById("standingLeg").value.toString();
    var threeMonthInjuryStr = document.getElementById("threeMonthInjury").value.toString();
    var fiveYearInjuryStr = document.getElementById("fiveYearInjury").value.toString();
    var d = getData()
    fetch('https://kuj8xxyl3g.execute-api.us-east-1.amazonaws.com/prod/drsform', {
        method: 'POST',
        body: JSON.stringify({
            "admin": admin,
            "dateInput": dateInput,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "ethnicity": ethnicityStr,
            "sex": sexStr,
            "age": age,
            "legLength": legLength,
            "company": company,
            "rightSingleLegReleves": rightSingleLegReleves,
            "leftSingleLegReleves": leftSingleLegReleves,
            "plank": plank,
            "rightSidePlank": rightSidePlank,
            "leftSidePlank": leftSidePlank,
            "rightSingleLegBridges": rightSingleLegBridges,
            "leftSingleLegBridges": leftSingleLegBridges,
            "rightHopTest1": rightHopTest1,
            "leftHopTest1": leftHopTest1,
            "rightHopTest2": rightHopTest2,
            "leftHopTest2": leftHopTest2,
            "rightWallSit": rightWallSit,
            "leftWallSit": leftWallSit,
            "rightPasseReleveBalance": rightPasseReleveBalance,
            "leftPasseReleveBalance": leftPasseReleveBalance,
            "rightPasseFlatFootBalance": rightPasseFlatFootBalance,
            "leftPasseFlatFootBalance": leftPasseFlatFootBalance,
            "ckcuest": ckcuest,
            // "bolt": bolt,
            "sitAndReach": sitAndReach,
            "RHTOF": RHTOF,
            "LHTOF": LHTOF,
            "RHTOD": RHTOD,
            "LHTOD": LHTOD,
            "workingLeg": workingLegStr,
            "standingLeg": standingLegStr,
            "threeMonthInjury": threeMonthInjuryStr,
            "fiveYearInjury": fiveYearInjuryStr


        })
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            // Add new message to message list
        });
}

function create_pdf() {


    var d = getData()

    var dd = {


        footer: function (currentPage, pageCount) {
            return {
                text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                italics: true, color: 'grey', fontSize: 10, margin: [15, 10], alignment: 'right'
            }
        },

        header: function (currentPage, pageCount, pageSize) {
            // you can apply any logic and return any valid pdfmake element



            return { image: 'logo', alignment: 'right', width: 100 }
        },

        // background: function (currentPage, pageSize) {
        //     return {
        //         table: {
        //             widths: [pageSize.width - 30],
        //             heights: [pageSize.height - 30],
        //             body: [['']]
        //         },
        //         margin: 10
        //     };
        // },
        content: [
            {
                style: 'headerTable',
                table: {
                    widths: [150, 150],
                    body: [
                        [{ text: d.firstName + ' ' + d.lastName }, { text: d.email }],
                        [{ text: 'Standing Leg: ' + d.standingLeg }, { text: 'Working Leg: ' + d.workingLeg }],
                        [{ text: 'Sex: ' + d.sex }, { text: 'Ethnicity: ' + d.ethnicity }],
                        [{ text: 'Test Date: ' + d.testingdate }, { text: 'Test Administrator: ' + d.testadministrator }],
                        [{ text: '3 Month Injury: ' + d.threeMonthInjury }, { text: '5 Year Injury: ' + d.fiveYearInjury }],

                    ]
                },
                layout: 'noBorders'
            },





            {
                image: 'getReady', width: 500, alignment: 'center'
            },

            { text: 'Patient Instructions', style: 'header', alignment: 'center' },
            { text: '\n' },
            //{ text: 'Patient Instructions', style: 'header', alignment: 'center' },
            { text: 'Read all information on this document', alignment: 'center', bold: true },
            { text: 'Ask your provider about any questions or concerns', alignment: 'center', bold: true },
            { text: 'Pay special attention to all recommendations', alignment: 'center', bold: true },

            { text: 'Recommendations', style: 'header' },
            { text: '\n' },
            {
                ul: [d.plankExtra.accommodations,
                d.passeExtra.accommodations,
                d.ckcuestVar.accommodations,
                    //.accommodations
                ],

            }

            //, { text: 'Test Results:', style: 'header', alignment: 'center' }
            , { text: '\n' }
            , { text: 'Test Results:', style: 'header', alignment: 'left' }
            , { text: '\n' }
            , {
                style: 'headerTable',
                color: 'blue',
                fontSize: 12,
                table: {
                    alignment: 'center',
                    widths: [175, 175, 175],
                    body: [
                        //['Dance Ready Score = ' + d.DRSTotal, 'Left Side Score = ' + d.DRSLeft, 'Right Side Score = ' + d.DRSRight]
                        ['Dance Ready Score = ' + d.DRSTotal],
                        ['Left Side Score = ' + d.DRSLeft],
                        ['Right Side Score = ' + d.DRSRight]
                    ]
                },
                layout: 'noBorders',
                pageBreak: 'after'
            },

            {
                style: 'resultTable',
                table: {

                    alignment: 'center',
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Test', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Measure', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Score', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Comments', style: 'tableHeader', bold: true, decoration: 'underline' }],
                        [{ text: "Plank" }, { text: "Core Strength" }, d.plank.score, { rowSpan: 2, text: d.rightSingleLegBridges.comments }],
                        [{ text: "Side Plank with Abduction" }, { text: "Hip & Core Strength" }, { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSidePlank.score, d.rightSidePlank.score]] } }],

                        [{ text: "Single Leg Releves" }, { text: "Calf Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegReleves.score, d.rightSingleLegReleves.score]] } },
                        // { rowSpan: 3, text: d.rightSingleLegBridges.comments }],
                        { rowSpan: 4, text: d.leftWallSitTest.comments }],



                        [{ text: "Single Leg Bridges" }, { text: "Hamstring & Gluteal Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegBridges.score, d.rightSingleLegBridges.score]] } }],


                        [{ text: "Hop Test" }, { text: "Quadriceps & Gluteal Function	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHopTest.score, d.rightHopTest.score]] } }],

                        //[{ text: "Hop Test" }, { text: "Quadriceps & Gluteal Function	" },
                        //{ style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHopTest.score, d.rightHopTest.score]] } }],

                        [{ text: "Wall Sit" }, { text: "Lower Body Muscular Endurance	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftWallSitTest.score, d.rightWallSitTest.score]] } }],



                        [{ text: "Passe Releve Balance" }, { text: "Balance & Priopriception	" },// [d.leftPasseReleveBalance.score, d.rightPasseReleveBalance.score]
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'],] } },
                        { rowSpan: 2, text: d.rightPasseFlatFootBalance.comments }],


                        [{ text: "Passe Flat Foot Balance - Eyes Closed" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseFlatFootBalance.score, d.rightPasseFlatFootBalance.score]] } }],



                        [{ text: "CKCUEST" }, { text: "Shoulder Strength and Stability	" }, d.ckcuestVar.score, { text: d.ckcuestVar.comments }],
                        //[{ text: "BOLT Test" }, { text: "Cardiovascular Fitness	" }, d.bolt.score, { text: d.bolt.comments }],
                        [{ text: "Sit and Reach" }, { text: "Flexibility " }, d.sitAndReachTest.score, { text: d.sitAndReachTest.comments }],
                        //[{ text: "Hip Turnout - disc (HTOD)" }, { text: "Range of Motion " }, d.htod.score, { text: d.htod.comments }],
                        [{ text: "Hip Turnout - Disc (HTOD)" }, { text: "Range of Motion	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHtod.score, d.rightHtod.score]] } },
                        { rowSpan: 2, text: d.leftHtod.comments }],
                        [{ text: "Hip Turnout - Floor (HTOF)" }, { text: "Range of Motion	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHtof.score, d.rightHtof.score]] } }],



                    ]

                }
            },
            {
                columns: [
                    {
                        width: '*',
                        image: 'logo2',
                        width: 100
                    },


                    {
                        width: 'auto',
                        text: ' \n Prepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS Dance Ready Project: www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', link: 'www.danceready.org'

                    },


                ]
            }
            // {

            //     table: {
            //         alignment: 'center',
            //         body: [
            //             [{ text: 'Prepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS}:\n\n', alignment: 'left', fontSize: 10, color: 'grey' }],
            //             [{ text: 'Dance Ready Project: www.danceready.org', link: 'www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', }]

            //             ,
            //         ]
            //     },
            //     style: 'headerTable',
            //     layout: 'noBorders'

            // }
            ,],

        styles: {
            resultTable: {
                margin: [0, 20, 0, 15],
                fontSize: 10
            }, headerTable: {
                margin: [0, 5, 0, 15],
                fontSize: 10,
                color: 'grey',

            },
            header: {
                bold: true,
                fontSize: 15,
                decoration: 'underline'
            }
        }
        ,
        defaultStyle: {
            fontSize: 12,
        },

        images: {
            logo2: 'https://drs-form-image-hosting.s3.amazonaws.com/Logo2.png',
            getReady: 'https://drs-form-image-hosting.s3.amazonaws.com/getReady.png',
            logo: 'https://drs-form-image-hosting.s3.amazonaws.com/logo.png'

        }
    }



    return dd
    // pdfMake.createPdf(d).print();

}
    // pdfMake.createPdf(dd).open();



