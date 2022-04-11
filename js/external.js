"use strict";
(function() {
    console.log("Hello from external Javascript")

    alert("Welcome to my Website!")

    var favColor = prompt("What is your favorite color?")

    alert('Great, ' + favColor + ' is my favorite color too!')

    var daysRented = parseFloat(prompt("How many days did you rent the movie for?"))
    var rentCost = 3
    var calculateCost = daysRented * rentCost

    alert("Your total cost will be $" + calculateCost)

    var googlePay = parseFloat(prompt("What was the hourly pay from google?"))
    var googleHours = parseFloat(prompt("How many hours did you work for google?"))
    var amazonPay = parseFloat(prompt("What was the hourly pay from amazon?"))
    var amazonHours = parseFloat(prompt("How many hours did you work for amazon?"))
    var facebookPay = parseFloat(prompt("What was the hourly pay from facebook?"))
    var facebookHours = parseFloat(prompt("How many hours did you work for facebook?"))
    var calculateTotalPay = (googlePay * googleHours) * (amazonPay * amazonHours) * (facebookPay * facebookHours)

    alert("Your total pay will be $" + calculateTotalPay)

    var fullClass = confirm("Is the class not full?")
    var conflictingSchedule = confirm("Does this class not conflict with your schedule?")
    var confirmedEnrollment = !!fullClass && !!conflictingSchedule

    if (confirmedEnrollment){
        alert("You are in the class")
    }

}())