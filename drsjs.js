
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


    submitDRS_Form_Write_DB();
    submitDRS_Form_PreProcessing();

    //pdfMake.createPdf(create_pdf()).print();

}
/*
submitDRS_Form_Write_DB is async function which grap values of all elements from the DRSform 
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

async function submitDRS_Form_Write_DB() {
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
    //var d = getData() https://6ju99e49cc.execute-api.us-east-1.amazonaws.com/prod
    fetch('https://7say0alryi.execute-api.us-east-1.amazonaws.com/prod', {
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

async function submitDRS_Form_PreProcessing() {
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
    //var d = getData() https://6ju99e49cc.execute-api.us-east-1.amazonaws.com/prod
    fetch('https://6ju99e49cc.execute-api.us-east-1.amazonaws.com/prod', {
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




