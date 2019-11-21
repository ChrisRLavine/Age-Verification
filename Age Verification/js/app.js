
var result = date;
function date(){
    event.preventDefault();
    //Get the current year
    let curDate = new Date();
    let currYear = curDate.getFullYear();
    let currMonth = curDate.getMonth() + 1;
    let currDate = curDate.getDate();
    
    //Get the DoB from the user
    var dob = document.getElementById('verify').value;
    console.log(dob);

    //Seperate the dob string
    let strYear = dob.slice(0, 4);
    let strMonth = dob.slice(5, 7);
    let strDate = dob.slice(8);
    console.log(strDate);
    
    //Convert the string into intergers
    let intYear = parseInt(strYear);
    let intMonth = parseInt(strMonth);
    let intDate = parseInt(strDate);
    //console.log(intYear, intMonth, intDate);

    //Calculate to get the age
    let curAge = currYear - intYear;
    let curAgeMonth = currMonth - intMonth;
    let curAgeDate = currDate - intDate;
    //console.log(curAge);

    //Output message to user
    let output = document.getElementById('output');
    let granted =  "A'ight! What you want";
    let denied = "You are too young! Go Ehwhey!!!";
    let ageOutput = "You're " + curAge + " years old.";

    //Run test to check age
    if (curAge > 21) {
        age.innerText = ageOutput;       
        output.innerText = granted;
    } else if (curAge === 21) {
        if (curAgeMonth > 0) {
            age.innerText = ageOutput;
            output.innerText = granted;
        } else if (curAgeMonth <= 0) {
            if (curAgeDate >= 0) {
                age.innerText = ageOutput;
                output.innerText = granted;
            } else {
                age.innerText = ageOutput;
                output.innerText = denied;
            }            
        } else {
            age.innerText = ageOutput;
            output.innerText = denied;
        }
    } else {
        age.innerText = ageOutput;
        output.innerText = denied;
    }
                      
}
    
    
    
 

//typeof!!!!!
//typeof document.getElementById('verify').value;
//innerHTML
//.innerHTML
