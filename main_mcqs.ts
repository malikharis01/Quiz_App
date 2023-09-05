#! /usr/bin/env node
 import { answers } from "./questions.js"



let counter = 0;

if (answers.Q1 == "Islamabad") {

    console.log("Correct Answer")
counter++;
}
else {

    console.log("Incorrect Answer and the correct answer is Islamabad")
}
if (answers.Q2 == "Karakoram Range") {

    console.log("Correct Answer")
counter++;
}
else {

    console.log("Incorrect Answer and the correct answer is Karakoram Range")
}
if (answers.Q3 == "India") {
    counter++;
    console.log("Correct Answer")

}
else {
    console.log("Incorrect Answer and the correct answer is India")
}
if (answers.Q4 == "Indus River") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is Indus River" )
}
if (answers.Q5 == "Sindh") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is Sindh")
}
if (answers.Q6 == "Lahore") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is Lahore")
}
if (answers.Q7 == "India") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is India")
}
if (answers.Q8 == "Allama Iqbal") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is Allama Iqbal")
}
if (answers.Q9 == "Dhol") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is Dhol")
}
if (answers.Q10 == "Karakoram Range") {

    console.log("Correct Answer")
counter++;
}
else {
    console.log("Incorrect Answer and the correct answer is Karakoram Range")
}
console.log(`${counter} Correct`);
let percentage = ((counter /10)*100);
console.log(`Your score is ${percentage} %`);
if(percentage > 40){
    console.log("Congrats you have passed the quiz!")
}else{
    console.log("You are fail");
}

