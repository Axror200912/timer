"use strict";

//Constants
const time_el = document.querySelector(".watch .time");
const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");
const modal_btn = document.querySelector('.number');
const popup = document.querySelector('.popup')
const input = document.querySelector('input')
const ok_btn = document.querySelector('#ok')
const cancel_btn = document.querySelector('#cancel')


// Global Variable
let seconds = 0;
let interval = null;

// Event Listener
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);
modal_btn.addEventListener("click", modal);
ok_btn.addEventListener("click", ok);

// Function Controls

function timer() {
  seconds++;

  let hor = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hor * 3600) / 60);
  let sec = seconds % 60;

  if (sec < 10) sec = "0" + sec;
  if (min < 10) min = "0" + min;
  if (hor < 10) hor = "0" + hor;

  time_el.innerText = `${hor}:${min}:${sec}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_el.innerText = "00:00:00";
}


// Modal function
function modal() {
  popup.classList.remove('hide');
}

function ok() {
  seconds = input.value;
}