// Copyright (c) Conor All rights reserved
//
// Created by: conor-otoole
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01/sw.js", {
    scope: "/ICS2O-Unit5-01/",
  })
}

/**
 * This function generates a random number between 1 and 6
 */
const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  // process
  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " + randomNumber + " you got it!"
  }

  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML = "Wrong answer. Try again"
  }
}
