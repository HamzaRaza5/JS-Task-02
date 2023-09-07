//! QUESTION 01

//? ADDITION

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// result = num1 + num2;

// document.write("Sum of " + num1, " and " + num2, " is " + result);

//! QUESTION 02

//? SUBTRACTION

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var result = num1 - num2;

// document.write("Subtraction of " + num1, " and " + num2, " is " + result);

//? MULTIPLICATION

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var result = num1 * num2;

// document.write("Multiplication of " + num1, " and " + num2, " is " + result);

//? DIVISION

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var result = num1 / num2;

// document.write("Division of " + num1, " and " + num2, " is " + result);

//? MODULUS

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var result = num1 % num2;

// document.write("Modulus of " + num1, " and " + num2, " is " + result);

//! QUESTION 03

//? a
// var myVariable;

//? b
// document.write("Value after Variable declararion is " + myVariable, "<br>");

//? c
// myVariable = 5;

//? d
// document.write("Initial Value: " + myVariable, "<br>");

//? e
// myVariable++;

//? f
// document.write("Value After Increment is: " + myVariable, "<br>");

//? g
// myVariable += 7;

//? h
// document.write("Value After Addition is: " + myVariable, "<br>");

//? i
// myVariable--;

//? g
// document.write("Value After Decrement is: " + myVariable, "<br>");

//? k
// var remainder = myVariable % 3;

//? l
// document.write("The Remainder is: " + remainder);

//! QUESTION 04

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total Cost to Buy 5 Tickets to a Movie is " + totalCost, "PKR");

//! QUESTION 05

// var number = +prompt("Enter a Number ");

// document.write("Table of " + number + "<br>");

// for (var i = 1; i <= 10; i++) {
//   var result = number * i;

//   document.write(number + "  x  " + i + "  =  " + result, "<br>");
// }

//! QUESTION 06

//? a
// var celsiusTemp = 25;

//? b
// var fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br>");

//? c
// var fahrenheitTemp_1 = 70;

//? d
// var celsiusTemp_1 = ((fahrenheitTemp_1 - 32) * 5) / 9;
// document.write(fahrenheitTemp_1 + "°F is " + celsiusTemp_1 + "°C");

//! QUESTION 07

// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;

// var totalCostItems = priceItem1 * quantityItem1 + priceItem2 * quantityItem2;

// var totalCost = totalCostItems + shippingCharges;

// document.write("Price of Item 1 is: " + priceItem1 + "<br>");
// document.write("Quantity of Item 1 is: " + quantityItem1 + "<br>");

// document.write("Price of Item 2 is: " + priceItem2 + "<br>");
// document.write("Quantity of Item 2 is: " + quantityItem2 + "<br>");

// document.write("Shipping Charges: " + shippingCharges + "<br><br>");

// document.write("Total Cost of Your Order is: " + totalCost);

//! QUESTION 08

// var totalMarks = 980;
// var obtainedMarks = 850;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage);

//! QUESTION 09

// var usd = 308.1;
// var riyal = 82.14;

// var totalInPKR = usd * 10 + riyal * 25;

// document.write("Total Currency in PKR: " + totalInPKR);

//! QUESTION 10

// var number = 25;

// var result = ((number + 5) * 10) / 2;

// document.write("Result: " + result);

//! QUESTION 11

// var currentYear = 2023;
// var birthYear = 2001;

// var age = currentYear - birthYear;

// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age);

//! QUESTION 12

// var radius = 20;

// var circumference = 2 * 3.142 * radius;

// var area = 3.142 * radius * radius;

// document.write("Radius of a Circle: " + radius + "<br>");
// document.write("The Circumference is: " + circumference + "<br>");
// document.write("The Area is: " + area);

//! QUESTION 13

//? a
var favouriteSnaks = "Chocolate Chip";

//? b
var currentAge = 22;

//? c
var maximumAge = 65;

//? d
var amountPerDay = 3;

var yearsRemaining = maximumAge - currentAge;

//? e
var snaksRequired = yearsRemaining * 365 * amountPerDay;

document.write("Favourite Snaks: " + favouriteSnaks + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of Snaks Per Day: " + amountPerDay + "<br>");
document.write(
  "You Will Need " +
    snaksRequired +
    " " +
    favouriteSnaks +
    " to last You Until the ripe Old Age of " +
    maximumAge
);
