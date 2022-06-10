/**
     * Creates a variable for each excersice from the form. For each variable 
     * takes the score, accommodations, and comments and stores them in the 
     * corresponding html element for the results table. Also calculates the 
     * DRS score for the right side, left side, and total then stores them 
     * in the corresponding html element for the results table.
     */
function getData() {
    var plank = get_plank_vals(DRSForm.plank.value);
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
    var rightHopTest = get_hopTest_vals(DRSForm.rightHopTest1.value, DRSForm.rightHopTest2.value, sex);
    var leftHopTest = get_hopTest_vals(DRSForm.leftHopTest1.value, DRSForm.leftHopTest2.value, sex);

    var legExtras = get_legAvg_vals(rightSingleLegReleves.score, leftSingleLegReleves.score, rightSingleLegBridges.score, leftSingleLegBridges.score, rightHopTest.score, leftHopTest.score);
    var rightPasseReleveBalance = get_passeReleveBalance_vals(DRSForm.rightPasseReleveBalance.value);
    var leftPasseReleveBalance = get_passeReleveBalance_vals(DRSForm.leftPasseReleveBalance.value);
    var rightPasseFlatFootBalance = get_passeFlatFootBalance_vals(DRSForm.rightPasseFlatFootBalance.value);
    var leftPasseFlatFootBalance = get_passeFlatFootBalance_vals(DRSForm.leftPasseFlatFootBalance.value);
    var passeExtra = get_passeAvg_vals(rightPasseReleveBalance.score, leftPasseReleveBalance.score, rightPasseFlatFootBalance.score, leftPasseFlatFootBalance.score);
    var ckcuestVar = get_ckcuestFunc_vals(DRSForm.ckcuest.value);
    var bolt = get_bolts_vals(DRSForm.bolt.value);



    var DRSRight = (Number(rightSingleLegReleves.score) + Number(rightSidePlank.score) + Number(rightSingleLegBridges.score) + Number(rightHopTest.score) + Number(rightPasseReleveBalance.score) + Number(rightPasseFlatFootBalance.score)) / 6;
    var DRSLeft = (Number(leftSingleLegReleves.score) + Number(leftSidePlank.score + leftSingleLegBridges.score) + Number(leftHopTest.score) + Number(leftPasseReleveBalance.score) + Number(leftPasseFlatFootBalance.score)) / 6;
    var DRSTotal = (Number(DRSLeft) + Number(DRSRight) + Number(plank.score) + Number(bolt.score)) / 4;

    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var sex = document.getElementById("sex").value;
    var company = document.getElementById("company").value;
    var workingLeg = document.getElementById("workingLeg").value;
    var standingLeg = document.getElementById("standingLeg").value;
    var threeMonthInjury = document.getElementById("threeMonthInjury").value;
    var fiveYearInjury = document.getElementById("fiveYearInjury").value;
    var consent = document.getElementById("consent").checked;
    DRSRight = DRSRight.toFixed(2);
    DRSLeft = DRSLeft.toFixed(2);
    DRSTotal = DRSTotal.toFixed(2);

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
        rightHopTest: rightHopTest,
        leftHopTest: leftHopTest,
        legExtras: legExtras,
        rightPasseReleveBalance: rightPasseReleveBalance,
        leftPasseReleveBalance: leftPasseReleveBalance,
        rightPasseFlatFootBalance: rightPasseFlatFootBalance,
        leftPasseFlatFootBalance: leftPasseFlatFootBalance,
        passeExtra: passeExtra,
        ckcuestVar: ckcuestVar,
        bolt: bolt,
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


function get_plank_vals(amount) {
    var definition = {
        g1: { min: 45, max: Infinity, score: 100, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g2: { min: 30, max: 44, score: 75, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g3: { min: 21, max: 29, score: 50, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g4: { min: 10, max: 20, score: 25, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g5: { min: 0, max: 9, score: 0, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
    }
    return value_ranges(amount, definition)
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
    var definition = {
        g1: { min: 35, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g2: { min: 25, max: 34, score: 80, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g3: { min: 16, max: 24, score: 60, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g4: { min: 11, max: 15, score: 40, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g5: { min: 6, max: 10, score: 20, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g6: { min: 0, max: 5, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
    }
    return value_ranges(amount, definition)

}
function get_singleLegBridges_vals(amount) {
    var definition = {
        g1: { min: 31, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g2: { min: 25, max: 30, score: 75, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g3: { min: 20, max: 24, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g4: { min: 10, max: 19, score: 25, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g5: { min: 0, max: 9, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
    }
    return value_ranges(amount, definition)
}

function get_hopTest_vals(amount1, amount2, sex) {
    var avgAmount = (Number(amount1) + Number(amount2)) / 2;
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
    var definition = {
        g1: { min: 10, max: Infinity, score: 100, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g2: { min: 6, max: 9, score: 50, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g3: { min: 0, max: 5, score: 0, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." }

    }
    return value_ranges(amount, definition)

}
function get_passeFlatFootBalance_vals(amount) {
    var definition = {
        g1: { min: 61, max: Infinity, score: 100, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g2: { min: 30, max: 60, score: 50, accommodations: "No single leg pirouttes", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g3: { min: 0, max: 29, score: 0, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." }
    }
    return value_ranges(amount, definition)

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
function get_ckcuestFunc_vals(amount) {
    var definition = {
        g1: { min: 25, max: Infinity, grade: "Excellent", score: 100, accommodations: "Continue your current training/fitness regimen.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        g2: { min: 20, max: 24, grade: "Good", score: 75, accommodations: "Be cautious with activities that require lifting or supporting your body weight with your arms (floor work, partnering, sommersault etc). Your strength needs to improve in order to do these movements safely.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        g3: { min: 11, max: 19, grade: "Not optimal, Recommend PT consult", score: 25, accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        g4: { min: 0, max: 10, grade: "Not optimal, Recommend PT consult", score: 0, accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." }
    }
    return value_ranges(amount, definition)


}

function get_bolts_vals(amount) {
    var definition = {
        g1: { min: 40, max: Infinity, grade: "Excellent", score: 100, accommodations: "Good cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." },
        g2: { min: 20, max: 39, grade: "Average", score: 50, accommodations: "Average Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." },
        g3: { min: 0, max: 19, grade: "Not optimal. Recommend PT consult", score: 0, accommodations: "Poor Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." }
    }
    return value_ranges(amount, definition)


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

function validateBolt() {
    var bolt = DRSForm.bolt.value;
    if (bolt >= 0) {
        return (true);
    }

    alert("Invalid number, BOLT test score must be positive number!");
    return (false);
}

/**
 * This function checks weather input value is correct for all input fields. 
 * If the all input filds are true, it will create pdf, otherwise it will alert the user. 
 */
function validateForm() {

    var dateInput = document.getElementById("testingdate");
    console.log(dateInput.toString());
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
    if (!validateFirstName()) {
        return false;
    }
    var lastName = document.getElementById("lastName").value;
    if (lastName === "") {
        alert("Last name must be filled out");
        return false;
    };
    if (!validateLastName()) {
        return false;
    }
    var company = document.getElementById("company").value;
    if (company === "") {
        alert("Company must be filled out");
        return false;
    };
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
    var plank = document.getElementById("plank").value;
    if (plank === "") {
        alert("Plank must be filled out");
        return false;
    };
    if (!validatePlank()) {
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
    var rightHopTest1 = document.getElementById("rightHopTest1").value;
    if (rightHopTest1 === "") {
        alert("Right hop test 1 must be filled out");
        return false;
    };
    if (!validateRightHopTest1()) {
        return false;
    }
    var leftHopTest1 = document.getElementById("leftHopTest1").value;
    if (leftHopTest1 === "") {
        alert("Left hop test 1 must be filled out");
        return false;
    };
    if (!validateLeftHopTest1()) {
        return false;
    }
    var rightHopTest2 = document.getElementById("rightHopTest2").value;
    if (rightHopTest2 === "") {
        alert("Right hop test 2 must be filled out");
        return false;
    };
    if (!validateRightHopTest2()) {
        return false;
    }
    var leftHopTest2 = document.getElementById("leftHopTest2").value;
    if (leftHopTest2 === "") {
        alert("Left hop test 2 must be filled out");
        return false;
    };
    if (!validateLeftHopTest2()) {
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
    var bolt = document.getElementById("bolt").value;
    if (bolt === "") {
        alert("Bolt score must be filled out");
        return false;
    };
    if (!validateBolt()) {
        return false;
    }

    pdfMake.createPdf(create_pdf()).print();

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

            { text: '\\n\\nPatient Instructions\\n\\n', style: 'header', alignment: 'center' },
            { text: 'Read all information on this document\\n\\n', alignment: 'center', bold: true },
            { text: 'Ask your provider about any questions or concerns\\n\\n', alignment: 'center', bold: true },
            { text: 'Pay special attention to all recommendations\\n\\n\\n\\n', alignment: 'center', bold: true },

            { text: '\\n\\nRecommendations\\n\\n', style: 'header' },
            {
                ul: [d.plankExtra.accommodations,
                d.passeExtra.accommodations,
                d.ckcuestVar.accommodations,
                d.bolt.accommodations], pageBreak: 'after'

            }

            , { text: 'Test Results:\\n\\n', style: 'header', alignment: 'center' }
            , {
                style: 'headerTable',
                color: 'blue',
                fontSize: 12,
                table: {
                    alignment: 'center',
                    widths: [175, 175, 175],
                    body: [
                        ['Dance Ready Score = ' + d.DRSTotal, 'Left Side Score = ' + d.DRSLeft, 'Right Side Score = ' + d.DRSRight]
                    ]
                },
                layout: 'noBorders'
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
                        { rowSpan: 3, text: d.rightSingleLegBridges.comments }],



                        [{ text: "Single Leg Bridges" }, { text: "Hamstring & Gluteal Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegBridges.score, d.rightSingleLegBridges.score]] } }],


                        [{ text: "Hop Test" }, { text: "Quadriceps & Gluteal Function	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHopTest.score, d.rightHopTest.score]] } }],



                        [{ text: "Passe Releve Balance" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseReleveBalance.score, d.rightPasseReleveBalance.score]] } },
                        { rowSpan: 2, text: d.rightSingleLegBridges.comments }],


                        [{ text: "Passe Flat Foot Balance - Eyes Closed" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseFlatFootBalance.score, d.rightPasseFlatFootBalance.score]] } }],



                        [{ text: "CKCUEST" }, { text: "Shoulder Strength and Stability	" }, d.ckcuestVar.score, { text: d.ckcuestVar.comments }],
                        [{ text: "BOLT Test" }, { text: "Cardiovascular Fitness	" }, d.bolt.score, { text: d.bolt.comments }],
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
                        text: '\\nPrepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS\\n\\nDance Ready Project: www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', link: 'www.danceready.org'
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
                margin: [0, 5, 0, 15],
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
