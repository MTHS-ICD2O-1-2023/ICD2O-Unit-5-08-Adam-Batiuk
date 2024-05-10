// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html


function myButtonClicked() {
  // define numbers
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(document.getElementById("second-number").value)
  let biggerNumber = 0
  let smallerNumber = 0
  if (firstNumber > secondNumber) {
    biggerNumber = firstNumber
    smallerNumber = secondNumber
  } else {
    biggerNumber = secondNumber
    smallerNumber = firstNumber
  }
  let remainder = biggerNumber
  // divide
  let numberOfLoops = 0
  while (true) {
    remainder = remainder - smallerNumber
    numberOfLoops++
    if (remainder < smallerNumber) {
      break
    }
  }
  const answer = numberOfLoops
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + answer + " R " + remainder
}