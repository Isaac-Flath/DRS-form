/**
    * Validates the email address follows the proper format for an email address. Prints an alert if not correct
    * 
    * @returns        {Boolean} True if valid email else false
    */
 function validateEmail() 
 {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(DRSForm.email.value))
   {
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
 function validateFirstName(){
    if(/^[A-Za-z\s]+$/.test(DRSForm.firstName.value)){
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
  function validateLastName(){
     if(/^[A-Za-z\s]+$/.test(DRSForm.lastName.value)){
         return (true);
     }

     alert("Invalid Character, Please enter only letters!");
     return (false);
  }     
  
  
  function validateForm(){
    if(!validateEmail()){return false;}
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
    if(!validateFirstName()){
        return false;
    }
    var lastName = document.getElementById("lastName").value;
    if (lastName === "") {
        alert("Last name must be filled out");
        return false;
    };
    if(!validateLastName()){
        return false;
    }
    var company = document.getElementById("company").value;
    if (company === "") {
        alert("Company must be filled out");
        return false;
    };
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
    var plank = document.getElementById("plank").value;
    if (plank === "") {
        alert("Plank must be filled out");
        return false;
    };
    var rightSidePlank = document.getElementById("rightSidePlank").value;
    if (rightSidePlank === "") {
        alert("Right side plank must be filled out");
        return false;
    };
    var leftSidePlank = document.getElementById("leftSidePlank").value;
    if (leftSidePlank === "") {
        alert("Left side plank must be filled out");
        return false;
    };
    var rightSingleLegBridges = document.getElementById("rightSingleLegBridges").value;
    if (rightSingleLegBridges === "") {
        alert("Right single leg bridges must be filled out");
        return false;
    };
    var leftSingleLegBridges = document.getElementById("leftSingleLegBridges").value;
    if (leftSingleLegBridges === "") {
        alert("Left single leg bridges must be filled out");
        return false;
    };
    var rightHopTest1 = document.getElementById("rightHopTest1").value;
    if (rightHopTest1 === "") {
        alert("Right hop test 1 must be filled out");
        return false;
    };
    var leftHopTest1 = document.getElementById("leftHopTest1").value;
    if (leftHopTest1 === "") {
        alert("Left hop test 1 must be filled out");
        return false;
    };
    var rightHopTest2 = document.getElementById("rightHopTest2").value;
    if (rightHopTest2 === "") {
        alert("Right hop test 2 must be filled out");
        return false;
    };
    var leftHopTest2 = document.getElementById("leftHopTest2").value;
    if (leftHopTest2 === "") {
        alert("Left hop test 2 must be filled out");
        return false;
    };
    var rightPasseReleveBalance = document.getElementById("rightPasseReleveBalance").value;
    if (rightPasseReleveBalance === "") {
        alert("Right passe releve balance must be filled out");
        return false;
    };
    var leftPasseReleveBalance = document.getElementById("leftPasseReleveBalance").value;
    if (leftPasseReleveBalance === "") {
        alert("Left passe releve balance must be filled out");
        return false;
    };
    var rightPasseFlatFootBalance = document.getElementById("rightPasseFlatFootBalance").value;
    if (rightPasseFlatFootBalance === "") {
        alert("Right passe flat foot balance must be filled out");
        return false;
    };
    var leftPasseFlatFootBalance = document.getElementById("leftPasseFlatFootBalance").value;
    if (leftPasseFlatFootBalance === "") {
        alert("Left passe flat foot balance must be filled out");
        return false;
    };
    var ckcuest = document.getElementById("ckcuest").value;
    if(ckcuest == ""){
        alert("CKCUEST must be filled out");
        return false;
    }
    var bolt = document.getElementById("bolt").value;
    if (bolt === "") {
        alert("Bolt score must be filled out");
        return false;
    };

}