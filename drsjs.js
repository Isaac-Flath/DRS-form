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
  /**
   * Combines the user's entered first and last name into one string. 
   * Then uses that string to display the full name on the results page.
   *  
   * @param        string firstName User's first name
   * @param        string lastName Usser's last name
   */
  function combineName(firstName, lastName){
  var fullName = firstName + " " + lastName;
  document.getElementById("fullName").innerHTML = fullName;
  }

  function ethnicityOther(){
      if(document.getElementById("ethnicity").value == "Other")
          document.getElementById("ethnicityOtherText").style.display = "block";
      else document.getElementById("ethnicityOtherText").style.display = "none";
  }
  
  /**
       * Creates a variable for each excersice from the form. For each variable 
       * takes the score, accommodations, and comments and stores them in the 
       * corresponding html element for the results table. Also calculates the 
       * DRS score for the right side, left side, and total then stores them 
       * in the corresponding html element for the results table.
       */
      function getData(){
          var plank = planks(DRSForm.plank.value);
          var rightSidePlank = planks(DRSForm.rightSidePlank.value);
          var leftSidePlank = planks(DRSForm.leftSidePlank.value);
          var plankExtra = plankAvg(plank.score, rightSidePlank.score, leftSidePlank);
          document.getElementById("plankScore").innerHTML = plank.score;
          document.getElementById("plankAccommodations").innerHTML = plankExtra.accommodations;
          document.getElementById("plankComments").innerHTML = plank.comments;
          document.getElementById("rightSidePlankScore").innerHTML = rightSidePlank.score;
          //document.getElementById("rightSidePlankAccommodations").innerHTML = plankExtra.accommodations;
          //document.getElementById("rightSidePlankComments").innerHTML = rightSidePlank.comments;
          document.getElementById("leftSidePlankScore").innerHTML = leftSidePlank.score;
          //document.getElementById("leftSidePlankAccommodations").innerHTML = plankExtra.accommodations;
          //document.getElementById("leftSidePlankComments").innerHTML = leftSidePlank.comments;
      
          var rightSingleLegReleves = singleLegReleves(DRSForm.rightSingleLegReleves.value);
          var leftSingleLegReleves = singleLegReleves(DRSForm.leftSingleLegReleves.value);
          var rightSingleLegBridges = singleLegBridges(DRSForm.rightSingleLegBridges.value);
          var leftSingleLegBridges = singleLegBridges(DRSForm.leftSingleLegBridges.value);
          var rightHopTest = hopTest(DRSForm.rightHopTest1.value, DRSForm.rightHopTest2.value, DRSForm.sex.value); 
          var leftHopTest = hopTest(DRSForm.leftHopTest1.value, DRSForm.leftHopTest2.value, DRSForm.sex.value); 
          var legExtras = legAvg(rightSingleLegReleves.score, leftSingleLegReleves.score, rightSingleLegBridges.score, leftSingleLegBridges.score, rightHopTest.score, leftHopTest.score);
          document.getElementById("rightSingleLegRelevesScore").innerHTML = rightSingleLegReleves.score;
          document.getElementById("rightSingleLegRelevesAccommodations").innerHTML = legExtras.accommodations;
          document.getElementById("rightSingleLegRelevesComments").innerHTML = rightSingleLegReleves.comments;
          document.getElementById("leftSingleLegRelevesScore").innerHTML = leftSingleLegReleves.score;
          //document.getElementById("leftSingleLegRelevesAccommodations").innerHTML = legExtras.accommodations;
          //document.getElementById("leftSingleLegRelevesComments").innerHTML = leftSingleLegReleves.comments;
          document.getElementById("rightSingleLegBridgesScore").innerHTML = rightSingleLegBridges.score;
          //document.getElementById("rightSingleLegBridgesAccommodations").innerHTML = legExtras.accommodations;
          //document.getElementById("rightSingleLegBridgesComments").innerHTML = rightSingleLegBridges.comments;
          document.getElementById("leftSingleLegBridgesScore").innerHTML = leftSingleLegBridges.score;
          //document.getElementById("leftSingleLegBridgesAccommodations").innerHTML = legExtras.accommodations;
          //document.getElementById("leftSingleLegBridgesComments").innerHTML = leftSingleLegBridges.comments;
          document.getElementById("rightHopTestScore").innerHTML = rightHopTest.score;
          //document.getElementById("rightHopTestAccommodations").innerHTML = legExtras.accommodations;
          //document.getElementById("rightHopTestComments").innerHTML = rightHopTest.comments;
          document.getElementById("leftHopTestScore").innerHTML = leftHopTest.score;
          //document.getElementById("leftHopTestAccommodations").innerHTML = legExtras.accommodations;
          //document.getElementById("leftHopTestComments").innerHTML = leftHopTest.comments;
          
          var rightPasseReleveBalance = passeReleveBalance(DRSForm.rightPasseReleveBalance.value);
          var leftPasseReleveBalance = passeReleveBalance(DRSForm.leftPasseReleveBalance.value);
          var rightPasseFlatFootBalance = passeFlatFootBalance(DRSForm.rightPasseFlatFootBalance.value);
          var leftPasseFlatFootBalance = passeFlatFootBalance(DRSForm.leftPasseFlatFootBalance.value);
          var passeExtra = passeAvg(rightPasseReleveBalance.score, leftPasseReleveBalance.score, rightPasseFlatFootBalance.score, leftPasseFlatFootBalance.score);
          document.getElementById("rightPasseReleveBalanceScore").innerHTML = rightPasseReleveBalance.score;
          document.getElementById("rightPasseReleveBalanceAccommodations").innerHTML = passeExtra.accommodations;
          document.getElementById("rightPasseReleveBalanceComments").innerHTML = rightPasseReleveBalance.comments;
          document.getElementById("leftPasseReleveBalanceScore").innerHTML = leftPasseReleveBalance.score;
          //document.getElementById("leftPasseReleveBalanceAccommodations").innerHTML = passeExtra.accommodations;
          //document.getElementById("leftPasseReleveBalanceComments").innerHTML = leftPasseReleveBalance.comments;
          document.getElementById("rightFlatFootBalanceScore").innerHTML = rightPasseFlatFootBalance.score;
          //document.getElementById("rightFlatFootBalanceAccommodations").innerHTML = passeExtra.accommodations;
          //document.getElementById("rightFlatFootBalanceComments").innerHTML = rightPasseFlatFootBalance.comments; 
          document.getElementById("leftFlatFootBalanceScore").innerHTML = leftPasseFlatFootBalance.score;
          //document.getElementById("leftFlatFootBalanceAccommodations").innerHTML = passeExtra.accommodations;
          //document.getElementById("leftFlatFootBalanceComments").innerHTML = leftPasseFlatFootBalance.comments;
          
          var ckcuestVar = ckcuestFunc(DRSForm.ckcuest.value);
          document.getElementById("ckcuestScore").innerHTML = ckcuestVar.score;
          document.getElementById("ckcuestAccommodations").innerHTML = ckcuestVar.accommodations;
          document.getElementById("ckcuestComments").innerHTML = ckcuestVar.comments;
          
          var bolt = bolts(DRSForm.bolt.value);
          document.getElementById("boltScore").innerHTML = bolt.score;
          document.getElementById("boltAccommodations").innerHTML = bolt.accommodations;
          document.getElementById("boltComments").innerHTML = bolt.comments;           
          var DRSRight = (Number(rightSingleLegReleves.score)+Number(rightSidePlank.score)+Number(rightSingleLegBridges.score)+Number(rightHopTest.score)+Number(rightPasseReleveBalance.score)+Number(rightPasseFlatFootBalance.score))/6;
          DRSRight = DRSRight.toFixed(2);
          document.getElementById("DRSRight").innerHTML = DRSRight;
          var DRSLeft = (Number(leftSingleLegReleves.score)+Number(leftSidePlank.score+leftSingleLegBridges.score)+Number(leftHopTest.score)+Number(leftPasseReleveBalance.score)+Number(leftPasseFlatFootBalance.score))/6;
          DRSLeft = DRSLeft.toFixed(2);
          document.getElementById("DRSLeft").innerHTML = DRSLeft;
          var DRSTotal = (Number(DRSLeft) + Number(DRSRight) + Number(plank.score) + Number(bolt.score))/4;
          DRSTotal = DRSTotal.toFixed(2);
          document.getElementById("DRSTotal").innerHTML = DRSTotal;
          
          var email = document.getElementById("email").value;
          var firstName = document.getElementById("firstName").value;
          var lastName = document.getElementById("lastName").value; 
          var ethnicity = document.getElementById("ethnicity").value;
          var sex = document.getElementById("sex").value;
          var company = document.getElementById("company").value;
          var rightSingleLegRelevesAmount = document.getElementById("rightSingleLegReleves").value;
          var leftSingleLegRelevesAmount = document.getElementById("leftSingleLegReleves").value;
          var plankAmount = document.getElementById("plank").value;
          var rightSidePlankAmount = document.getElementById("rightSidePlank").value;
          var leftSidePlankAmount = document.getElementById("leftSidePlank").value;
          var rightSingleLegBridgesAmount = document.getElementById("rightSingleLegBridges").value;
          var leftSingleLegBridgesAmount = document.getElementById("leftSingleLegBridges").value;
          var rightHopTestAmount = rightHopTest.amount;
          var leftHopTestAmount = leftHopTest.amount;
          var rightPasseReleveBalanceAmount = document.getElementById("rightPasseReleveBalance").value;
          var leftPasseReleveBalanceAmount = document.getElementById("leftPasseReleveBalance").value;
          var rightPasseFlatFootBalanceAmount = document.getElementById("rightPasseFlatFootBalance").value;
          var leftPasseFlatFootBalanceAmount = document.getElementById("leftPasseFlatFootBalance").value;
          var boltAmount = document.getElementById("bolt").value;
          var workingLeg = document.getElementById("workingLeg").value;
          var standingLeg = document.getElementById("standingLeg").value;
          var threeMonthInjury = document.getElementById("threeMonthInjury").value;
          var fiveYearInjury = document.getElementById("fiveYearInjury").value;
          var consent = document.getElementById("consent").checked;
          var ckcuestAmount = document.getElementById("ckcuest").value;

          var obj = {email: email, firstName: firstName, lastName: lastName, race: ethnicity, sex: sex, company: company,
              rightSingleLegReleves: Number(rightSingleLegRelevesAmount),rightSingleLegRelevesScore: rightSingleLegReleves.score, 
              leftSingleLegReleves: Number(leftSingleLegRelevesAmount),leftSingleLegRelevesScore: leftSingleLegReleves.score, 
              plank: Number(plankAmount),plankScore: plank.score, rightSidePlank: Number(rightSidePlankAmount), 
              rightSidePlankScore: rightSidePlank.score, leftSidePlank: Number(leftSidePlankAmount), 
              leftSidePlankScore: leftSidePlank.score, rightSingleLegBridges: Number(rightSingleLegBridgesAmount),
              rightSingleLegBridgesScore: rightSingleLegBridges.score, leftSingleLegBridges: Number(leftSingleLegBridgesAmount), 
              leftSingleLegBridgesScore: leftSingleLegBridges.score, rightHopTest: Number(rightHopTestAmount), 
              rightHopTestScore: rightHopTest.score, leftHopTest: Number(leftHopTestAmount), 
              leftHopTestScore: leftHopTest.score, rightPasseReleveBalance: Number(rightPasseReleveBalanceAmount), 
              rightPasseReleveBalanceScore: rightPasseReleveBalance.score, leftPasseReleveBalance: Number(leftPasseReleveBalanceAmount), 
              leftPasseReleveBalanceScore: leftPasseReleveBalance.score,  rightPasseFlatFootBalance: Number(rightPasseFlatFootBalanceAmount),
              rightPasseFlatFootBalanceScore: rightPasseFlatFootBalance.score, leftPasseFlatFootBalance: Number(leftPasseFlatFootBalanceAmount), 
              leftPasseFlatFootBalanceScore: leftPasseFlatFootBalance.score,  ckcuest: Number(ckcuestAmount), ckcuestScore: ckcuestVar.score, bolt: Number(boltAmount), boltScore: bolt.score, 
              workingLeg: workingLeg,  standingLeg: standingLeg,  threeMonthInjury: threeMonthInjury, fiveYearInjury: fiveYearInjury,  consent: consent};

          var jsonData = JSON.stringify(obj);
          console.log(typeof obj);
          const formURL = 'https://v0x94mgm28.execute-api.us-east-2.amazonaws.com/Prod/submitForm';

          var xhr = new XMLHttpRequest();
          xhr.open('options', formURL, true);
          // xhr.setRequestHeader('x-api-key', '7JGBaaB8fA99g4YDF1CTe5PFiPdlh2HE3oD8sYR4');

          xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
          xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
          console.log(typeof jsonData);
          // Send the collected data as JSON
          xhr.send(JSON.stringify(jsonData));
          console.log(JSON.stringify(jsonData));
          console.log(JSON.parse(JSON.stringify(jsonData)));
      }
      /**
       * Checks if each field is valid. Checks all fields are not empty and if so 
       * prints an alert of which field needs to be filled out. Also checks the that the 
       * first name, last name, and email are properly formatted. If any of those 
       * fail an alert is printed. Then calls combineName(), and getData(). Lastly
       * hides the form and unhides the results. 
       * 
       * @returns        {Boolean} true if the forms is valid otherwise false
       */
      
      function printFunction() {
        window.print();
      }
   
      function validateForm(){
          if(!validateEmail()){
              return false;
          }
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
          combineName(DRSForm.firstName.value, DRSForm.lastName.value);
          getData();
          document.getElementById("form-holder").style.visibility = "hidden";
          document.getElementById("results").style.visibility = "visible";
      }
      /**
       * Takes in the amount entered by the user. Compares the entered amount with each significant range.
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. Returns the 
       * object.
       * @return object Object with all the info regarding the grading system for this excercise 
       */
      function planks(amount) {
          var plank;

          if(amount>=45){
              plank = {
              score: 100,
              comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."};
          }
          else if(amount>=30 && amount<=44){
              plank = {
              score: 75,
              comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."};
          }
          else if(amount>=21 && amount<=29){
              plank = {
              score: 50,
              comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."};
          }
          else if(amount>=10 && amount<=20){
              plank = {
              score: 25,
              comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."};
          } 
          else{
              plank = {
              score: 0,
              comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."};
          }
          return plank;
      }
      
      function plankAvg(plankScore, rightPlankScore, leftPlankScore){
          var avg = (plankScore+rightPlankScore+leftPlankScore)/3;
          var plank;
          
          if(avg >= 80){
              plank = {
                  grade: "Excellent",
                  accommodations: "Continue your current training/fitness regimen."};
          }
          else if (avg >= 61 && avg <= 79){
              plank = {
                  grade: "Average",
                  accommodations: "Be cautious with work that places moderate to high demand on the core. Keep legs below 90 deg if you have hip or back pain.",
              }
          }
          else {
              plank = {
                  grade: "Not Optimal, Recommend PT consult",
                  accommodations: "Be cautious with work that places moderate to high demand on the core. Keep legs below <60 deg if you have hip or back pain."
              }
          }
          
          return plank;
      }    
  
      /**
       * Takes in the amount entered by the user. Compares the entered amount with each significant range.
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. Returns the 
       * object.
       * @return        object Object with all the info regarding the grading system for this excercise 
       */
      function singleLegReleves(amount){
          var singleLegReleves;

          if(amount>=35){
              singleLegReleves = {
              score: 100,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=25 && amount <=34){
              singleLegReleves = {
              score: 80,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=16 && amount<=24){
              singleLegReleves = {
              score: 60,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=11 && amount<=15){
              singleLegReleves = {
              score: 40,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=6 && amount<=10){
              singleLegReleves = {
              score: 20,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else {
              singleLegReleves = {
              score: 0,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          return singleLegReleves;
      }

      
      /**
       * Takes in the amount entered by the user. Compares the entered amount with each significant range.
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. Returns the 
       * object.
       * @return object Object with all the info regarding the grading system for this excercise 
       */
      function singleLegBridges(amount){
          var singleLegBridges;

          if(amount>30){
              singleLegBridges = {
              score: 100,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=25 && amount<=30){
              singleLegBridges = {
              score: 75,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=20 && amount<=24){
              singleLegBridges = {
              score: 50,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(amount>=10 && amount<=19){
              singleLegBridges = {
              score: 25,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else{
              singleLegBridges = {
              score: 0,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          return singleLegBridges;
      }
      /**
       * Takes in the amount entered by the user for both hop tests along with the users sex. 
       * Calculates the average of the 2 tests and uses that and the sex to compare with each significant range. 
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. 
       * Returns the object.
       * 
       * @return        object Object with all the info regarding the grading system for this excercise 
       */
      function hopTest(amount1, amount2, sex){
          var hopTest;
          var avgAmount = (Number(amount1)+Number(amount2))/2;

          if(sex == "Male" && avgAmount>202){
              hopTest = {
              amount: avgAmount,
              score: 100,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."}; 
          }
          else if(sex == "Male" && avgAmount>=182 && avgAmount<=202){
              hopTest = {
              amount: avgAmount,
              score: 50,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          } 
          else if(sex == "Male" && avgAmount<182){
              hopTest = {
              amount: avgAmount,    
              score: 0,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(sex == "Female" && avgAmount>159){
              hopTest = {
              amount: avgAmount,    
              score: 100,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(sex == "Female" && avgAmount>=139 && avgAmount<=159){
              hopTest = {
              amount: avgAmount,   
              score: 50,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          else if(sex == "Female" && avgAmount<139){
              hopTest = {
              amount: avgAmount,   
              score: 0,
              comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."};
          }
          return hopTest;
      }
      
      function legAvg(rightReleveScore, leftReleveScore, rightBridgeScore, leftBridgeScore, rightHopScore, leftHopScore){
          var avg = (rightReleveScore + leftReleveScore + rightBridgeScore + leftBridgeScore + rightHopScore + leftHopScore)/6;
          var legs; 
          
          if(avg >= 80){
              legs = {
                  grade: "Excellent",
                  accommodations: "Continue your current training/fitness regimen."
              };
          }
          else if (avg >= 61 && avg <= 79){
              legs = {
                  grade: "Average",
                  accommodations: "Be cautious with large jumps (saut de chat)."
              };
          }
          else {
              legs = {
                  grade: "Not optimal. Recommend PT consult",
                  accommodations: "Be cautious with all jumps and pirouettes"
              };
          }
          return legs;
      }
      /**
       * Takes in the amount entered by the user. Compares the entered amount with each significant range.
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. Returns the 
       * object.
       * @return        object Object with all the info regarding the grading system for this excercise 
       */
      function passeReleveBalance(amount){
          var passeReleveBalance;

          if(amount>=10){
              passeReleveBalance = {
              score: 100,
              comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."};
          }
          else if(amount>=6 && amount<=9){
              passeReleveBalance = {
              score: 50,
              comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."};
          }
          else{
              passeReleveBalance = {
              score: 0,
              comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."};
          }
          return passeReleveBalance;
      }
      /**
       * Takes in the amount entered by the user. Compares the entered amount with each significant range.
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. Returns the 
       * object.
       * @return        object Object with all the info regarding the grading system for this excercise 
       */
      function passeFlatFootBalance(amount){
          var passeFlatFootBalance;

          if(amount>60){
              passeFlatFootBalance = {
              score: 100,
              comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."};
          }    
          else if(amount>=30 && amount<=60){
              passeFlatFootBalance = {
              score: 50, accommodations: "No single leg pirouttes",
              comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."};
          }
          else{
              passeFlatFootBalance = {
              score: 0,
              comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."};
          }
          return passeFlatFootBalance;
      }
      
      function passeAvg( rightReleve, leftReleve, rightFlatFoot, leftFlatFoot){
          var avg = (rightReleve+leftReleve+rightFlatFoot+leftFlatFoot)/4;
          var passe;
          
          if(avg >= 80){
              passe = {
                  grade: "Excellent",
                  accommodations: "Continue your current training/fitness regimen."
              };
          }
          else if(avg >= 61 && avg <= 79){
              passe = {
                  grade: "Average",
                  accommodations: "Be cautious with pirouttes and single leg activities, especially jumps."
              };
          }
          else{
              passe = {
                  grade: "Not optimal. Recommend PT consult",
                  accommodations: "Be cautious with pirouttes and single leg activities, especially jumps. Recommend consultation with DRP physical therapists for follow up."
              };
          }
          return passe;
      }
      
      function ckcuestFunc(amount){
          var ckcuest;
          
          if(amount >= 25){
             ckcuest = {
                 grade: "Excellent",
                 score: 100,
                 accommodations: "Continue your current training/fitness regimen.",
                 comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."
             };
          }
          else if(amount >= 20 && amount <= 24){
              ckcuest = {
                  grade: "Good",
                  score: 75,
                  accommodations: "Be cautious with activities that require lifting or supporting your body weight with your arms (floor work, partnering, sommersault etc). Your strength needs to improve in order to do these movements safely.",
                  comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."
              };
          }
          else if(amount >= 11 && amount <= 15){
              ckcuest = {
                  grade: "Not optimal, Recommend PT consult",
                  score: 25,
                  accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.",
                  comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."
              };
          }
          else {
               ckcuest = {
                  grade: "Not optimal, Recommend PT consult",
                  score: 0,
                  accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.",
                  comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."
              };
          }
          return ckcuest;
      }
      /**
       * Takes in the amount entered by the user. Compares the entered amount with each significant range.
       * If it is within the corresponding range sets the grade,score,accommodations, and comments. Returns the 
       * object.
       * @return        object Object with all the info regarding the grading system for this excercise 
       */
      function bolts(amount){
          var bolt;

          if(amount>=40){
              bolt = {
              grade: "Excellent",
              score: 100,
              accommodations: "Good cardiovascular endurance",
              comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being."};
          }
          else if(amount>=20 && amount<=39){
              bolt = {
              grade: "Average",
              score: 50,
              accommodations: "Average Cardiovascular endurance", 
              comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being."};
          }
         else{
             bolt = {
              grade: "Not optimal. Recommend PT consult",
              score: 0,
              accommodations: "Poor Cardiovascular endurance",
              comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being."};
          }
          return bolt;
      }
