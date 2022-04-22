  /**
       * Creates a variable for each excersice from the form. For each variable 
       * takes the score, accommodations, and comments and stores them in the 
       * corresponding html element for the results table. Also calculates the 
       * DRS score for the right side, left side, and total then stores them 
       * in the corresponding html element for the results table.
       */
      function getData(){
        var plank = get_plank_vals(DRSForm.plank.value);
        var rightSidePlank = get_plank_vals(DRSForm.rightSidePlank.value);
        var leftSidePlank = get_plank_vals(DRSForm.leftSidePlank.value);
        var plankExtra = get_plank_avg_vals(plank.score, rightSidePlank.score, leftSidePlank.score);
      var rightSingleLegReleves = get_singleLegReleves_vals(DRSForm.rightSingleLegReleves.value);
      var leftSingleLegReleves = get_singleLegReleves_vals(DRSForm.leftSingleLegReleves.value);
      var rightSingleLegBridges = get_singleLegBridges_vals(DRSForm.rightSingleLegBridges.value);


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



      var DRSRight = (Number(rightSingleLegReleves.score)+Number(rightSidePlank.score)+Number(rightSingleLegBridges.score)+Number(rightHopTest.score)+Number(rightPasseReleveBalance.score)+Number(rightPasseFlatFootBalance.score))/6;
      var DRSLeft = (Number(leftSingleLegReleves.score)+Number(leftSidePlank.score+leftSingleLegBridges.score)+Number(leftHopTest.score)+Number(leftPasseReleveBalance.score)+Number(leftPasseFlatFootBalance.score))/6;
      var DRSTotal = (Number(DRSLeft) + Number(DRSRight) + Number(plank.score) + Number(bolt.score))/4;

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

      obj = {plank:plank,
                rightSidePlank:rightSidePlank,
                leftSidePlank:leftSidePlank,
                plankExtra:plankExtra,
                rightSingleLegReleves:rightSingleLegReleves,
                leftSingleLegReleves:leftSingleLegReleves,
                rightSingleLegBridges:rightSingleLegBridges,
                leftSingleLegBridges:leftSingleLegBridges,
                sex:sex,
                rightHopTest:rightHopTest,
                leftHopTest:leftHopTest,
                legExtras:legExtras,
                rightPasseReleveBalance:rightPasseReleveBalance,
                leftPasseReleveBalance:leftPasseReleveBalance,
                rightPasseFlatFootBalance:rightPasseFlatFootBalance,
                leftPasseFlatFootBalance:leftPasseFlatFootBalance,
                passeExtra:passeExtra,
                ckcuestVar:ckcuestVar,
                bolt:bolt,
                DRSRight:DRSRight,
                DRSLeft:DRSLeft,
                DRSTotal:DRSTotal,
                email:email,
                firstName:firstName,
                lastName:lastName,
                ethnicity:ethnicity,
                sex:sex,
                company:company,
                workingLeg:workingLeg,
                standingLeg:standingLeg,
                threeMonthInjury:threeMonthInjury,
                fiveYearInjury:fiveYearInjury,
                consent:consent,
                DRSRight:DRSRight,
                DRSLeft:DRSLeft,
                DRSTotal:DRSTotal}

          return obj
      }

      
      function value_ranges(amount,groups){
        for(g in groups){
            if(amount >= groups[g]['min'] && amount <= groups[g]['max']){
                var out = groups[g]
                out['amount'] = amount
            }
            }
        return out}

       
        function get_plank_vals(amount){
            var definition = {g1:{min:45,max:Infinity,score:100,comments:"Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."},
            g2:{min:30,max:44,score:75,comments:"Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."},
            g3:{min:21,max:29,score:50,comments:"Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."},
            g3:{min:10,max:20,score:25,comments:"Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."},
            g3:{min:0,max:9,score:0,comments:"Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently."},
            }
            return value_ranges(amount,definition)
        }
        function get_plank_avg_vals(amount1,amount2,amount3){
            var definition = {g1:{min:80,max:Infinity,grade:"Excellent",accommodations:"Continue your current training/fitness regimen."},
                        g2:{min:61,max:79,grade:"Average",accommodations:"Be cautious with work that places moderate to high demand on the core. Keep legs below 90 deg if you have hip or back pain."},
                        g3:{min:0,max:61,grade:"Not Optimal, Recommend PT consult",accommodations:"Be cautious with work that places moderate to high demand on the core. Keep legs below <60 deg if you have hip or back pain."}
                    }
                    return value_ranges((amount1,amount2,amount3)/3,definition)
                }
      function get_singleLegReleves_vals(amount){
          var definition = {
              g1:{min:35,max:Infinity,score: 100,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g2:{min:25,max:34,score: 80,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g3:{min:16,max:24,score: 60,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g4:{min:11,max:15,score: 40,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g5:{min:6,max:10,score: 20,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g6:{min:0,max:5,score: 0,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
          }
          return value_ranges(amount,definition)

      }
      function get_singleLegBridges_vals(amount){
          var definition = {
              g1:{min:31,max:Infinity,score: 100,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g2:{min:25,max:30,score: 75,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g3:{min:20,max:24,score: 50,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g4:{min:10,max:19,score: 25,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g5:{min:0,max:9,score: 0,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."}
            }
            return value_ranges(amount,definition)
        }

      function get_hopTest_vals(amount1,amount2, sex){
          var avgAmount = (Number(amount1)+Number(amount2))/2;
          var definition_male = {
            g1:{min:203,max:Infinity,score: 100,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g2:{min:182,max:202,score: 50,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g3:{min:0,max:182,score: 0,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."}
          };
          var definition_female = {
              g1:{min:160,max:Infinity,score: 100,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g2:{min:139,max:159,score: 50,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."},
              g3:{min:0,max:138,score: 0,comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career."}
          };

          if(sex=='Male'){return value_ranges(avgAmount,definition_male)}
          else if(sex=='Female'){return value_ranges(avgAmount,definition_female)}
      }

      function get_legAvg_vals(rightReleveScore, leftReleveScore, rightBridgeScore, leftBridgeScore, rightHopScore, leftHopScore){
          var avg = (rightReleveScore + leftReleveScore + rightBridgeScore + leftBridgeScore + rightHopScore + leftHopScore)/6;
          var definition = {
              g1: {min:80,max:Infinity,grade: "Excellent",accommodations: "Continue your current training/fitness regimen."},
              g2: {min:61,max:79,grade: "Average",accommodations: "Be cautious with large jumps (saut de chat)."},
              g3: {min:0,max:60,grade: "Not optimal. Recommend PT consult",accommodations: "Be cautious with all jumps and pirouettes"}
          }
          return value_ranges(avg,definition)
        }
     
      function get_passeReleveBalance_vals(amount){
          var definition = { 
              g1:{min:10,max:Infinity,score: 100,comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."},
              g2:{min:6,max:9,score: 50,comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."},
              g3:{min:0,max:5,score: 0,comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."}

          }
          return value_ranges(amount,definition)

        }
      function get_passeFlatFootBalance_vals(amount){
          var definition = {
              g1: {min:61,max:Infinity,score: 100,comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."},
              g2: {min:30,max:60,score: 50, accommodations: "No single leg pirouttes",comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."},
              g3: {min:0,max:29,score: 0,comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance."} 
          }
          return value_ranges(amount,definition)

        }
      function get_passeAvg_vals( rightReleve, leftReleve, rightFlatFoot, leftFlatFoot){
          var avg = (rightReleve+leftReleve+rightFlatFoot+leftFlatFoot)/4;
          var definition = {
              g1:{min:80,max:Infinity,grade: "Excellent",accommodations: "Continue your current training/fitness regimen."},
              g2:{min:61,max:79,grade: "Average",accommodations: "Be cautious with pirouttes and single leg activities, especially jumps."},
              g3:{min:0,max:60,grade: "Not optimal. Recommend PT consult",accommodations: "Be cautious with pirouttes and single leg activities, especially jumps. Recommend consultation with DRP physical therapists for follow up."}
            }
            return value_ranges(avg,definition)

        }              
      function get_ckcuestFunc_vals(amount){
          var definition = {g1:{min:25,max:Infinity,grade: "Excellent",score: 100,accommodations: "Continue your current training/fitness regimen.",comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."},
              g2:{min:20,max:24,grade: "Good",score: 75,accommodations: "Be cautious with activities that require lifting or supporting your body weight with your arms (floor work, partnering, sommersault etc). Your strength needs to improve in order to do these movements safely.",comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."},
              g3:{min:11,max:19,grade: "Not optimal, Recommend PT consult",score: 25,accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.",comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."},
               g4:{min:0,max:10,grade: "Not optimal, Recommend PT consult",score: 0,accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.",comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance."}
      }
      return value_ranges(amount,definition)


    }
      
    function get_bolts_vals(amount){
          var definition = {
              g1:{min:40,max:Infinity,grade: "Excellent",score: 100,accommodations: "Good cardiovascular endurance",comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being."},
              g2:{min:20,max:39,grade: "Average",score: 50,accommodations: "Average Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being."},
             g3:{min:0,max:19,grade: "Not optimal. Recommend PT consult",score: 0,accommodations: "Poor Cardiovascular endurance",comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being."}
      }
      return value_ranges(amount,definition)


    }