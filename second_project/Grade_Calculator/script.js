const calculate = () => {
  let Java = document.querySelector("#java").value;
  let Net_security = document.querySelector("#netsec").value;
  let DSA = document.querySelector("#dsa").value;
  let OOPs = document.querySelector("#oops").value;
  let grades = "";

  let totalgrades =
    parseFloat(Java) +
    parseFloat(Net_security) +
    parseFloat(DSA) +
    parseFloat(OOPs);

  let percentage = (totalgrades / 400) * 100;
  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  if (Java == "" || Net_security == "" || DSA == "" || OOPs == "") {
    document.querySelector("#showdata").innerHTML =
      "Please enter all the fields";
  } else {
    if (percentage >= 39.5) {
      document.querySelector(
        "#showdata"
      ).innerHTML = ` Out of 400 your total is ${totalgrades} 
		and percentage is ${percentage}%. <br> 
		Your grade is ${grades}. You are Pass. `;
    } else {
      document.querySelector(
        "#showdata"
      ).innerHTML = ` Out of 400 your total is ${totalgrades} 
		and percentage is ${percentage}%. <br> 
		Your grade is ${grades}. You are Fail. `;
    }
  }
};
