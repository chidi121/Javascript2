// Request name of the user and storing it in the variable called "first-question" 
let first_question = prompt("What is your name?");

// Concantenating strings with the value of the variable "first_question"
// And also making the user specify the type of operation they want to perform

let operation_type = prompt("Hello "+ first_question + "," + " What basic operation do you want to perform? \n type '+' for addition,  \n type '-' for subtraction, \n type '*' for multiplication, \n type '/' for division");

// Taking operands from the user
let first_value =parseFloat(prompt("Enter your first number"));
let second_value=parseFloat(prompt("Enter your second number"));

//Variable called 'answer'  created for storing of result from various operations
let answer;

// CONDITIONAL STATEMENT DEPENDING ON INPUT FROM LINE 7
if(operation_type == "+"){
    answer = first_value + second_value;
}

else if(operation_type == "-"){
    answer = first_value - second_value;
}

else if(operation_type == "*"){
    answer = first_value * second_value;

}

else if(operation_type == "/"){
    answer = first_value / second_value;
}

// DISPLAYING THE ANSWER
alert( first_value + '' + operation_type + ''+ second_value + '' + " = " + '' + answer);
