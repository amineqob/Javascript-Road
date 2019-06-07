/* this javascript script is for saying a certain greetings based on the current time of the day */

var today = new Date(); // create a new date object
quantity = true;
amine = 3;
qobaiche = "hey my name is amine";
var hourNow = today.getHours(); // get the current hour in my pc
var greetingsDaily;
// display the right greetings based on the current hour 
if(hourNow > 18) {

    greetingsDaily = "Good AfterNoon";

} 

else if(hourNow >12) {

    greetingsDaily = "Good Evening";
} 

else if(hourNow > 0) {

    greetingsDaily = "Good Night";
}

else {

    greetingsDaily = "Have A Nice Day";
}

document.write("<h2>" + greetingsDaily + "</h2>");