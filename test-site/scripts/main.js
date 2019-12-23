//function multiply(num1, num2) {
//    "use strict";
//    var result = (num1 * num2);
//    return result;
//}
//
//multiply(4, 7);

//document.querySelector('img').onclick = function() {
//    alert(multiply (4, 7));
//}

//let myImage = document.querySelector('img');
//
//myImage.onclick = function() {
//    let mySrc = myImage.getAttribute('src');
//    if(mySrc === 'images/paper-image.jpg') {
//        myImage.setAttribute ('src','images/thumbs-up.jpg');
//    } else {
//        myImage.setAttribute ('src','images/paper-image.jpg');
//    }
//}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' is AWESOME!!!';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' is Awesome!!!';
}

myButton.onclick = function() {
    setUserName();
}

//let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');
//
//function setUserName() {
//  let myName = prompt('Please enter your name.');
//  localStorage.setItem('name', myName);
//  myHeading.textContent = myName + ' is AWESOME!!!!';
//}
//
//if(!localStorage.getItem('name')) {
//  setUserName();
//} else {
//  let storedName = localStorage.getItem('name');
//  myHeading.textContent = storedName + ' is AWESOME!!!!';
//}
//
//myButton.onclick = function() {
//  setUserName();
//}

