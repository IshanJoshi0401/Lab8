//Q1
let num1 = 10;
let num2= 5;
document.getElementById("sum").innerHTML = "The sum of variable: " + (num1 + num2);
document.getElementById("subtract").innerHTML = "The subtract value of variable: " + (num1 - num2);
document.getElementById("multiply").innerHTML = "The multiplication of variable: " + (num1 * num2);
document.getElementById("divide").innerHTML = "The divide value of variable: " + (num1 / num2);

//Q2
let firstName = "Ishan ";
let lastName = "Joshi";
document.getElementById("full_name").innerHTML = "My full name " + firstName + lastName;

//Q3
let x = 5;
var y = 10;
document.getElementById("x").innerHTML = "x (before reassign): " + x;
document.getElementById("y").innerHTML = "y (before reassign): " + y;
x=15;
y=20;
document.getElementById("x_reassign").innerHTML = "x (after reassign): " + x;
document.getElementById("y_reassign").innerHTML = "y (after reassign): " + y;


//Q4
let counter = 0
while(counter < 5){
    counter++;
}
document.getElementById("counter").innerHTML = "counter :  " + counter;



//Q5 A
function calculateSum() {
    // Get the input values
    let number1_str = document.getElementById("number1").value;
    let number2_str = document.getElementById("number2").value;
  
    // Convert the strings to numbers
    let number1 = parseFloat(number1_str);
    let number2 = parseFloat(number2_str);
  
    // Calculate the sum of the numbers
    let sum = number1 + number2;
  
    // Print the result
    document.getElementById("result").textContent = "The sum of " + number1_str + " and " + number2_str + " is: " + sum;
}