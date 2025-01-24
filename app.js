const hours = document.getElementById("hours");
const hText = document.getElementById("hText");

const minutes = document.getElementById("minutes");
const mText = document.getElementById("mText");

const seconds = document.getElementById("seconds");
const sText = document.getElementById("sText");

const amPmElem = document.getElementById("amPm");

const date = document.getElementById("date");
const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
date.textContent = today;

function runClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");

  //determine whether it is PM or AM
  const amPm = h >= 12 ? "PM" : "AM";

  // change in 12 hours-format clock
  h = h % 12 || 12; //

  if(h <= 1) {
    hText.textContent = 'Hour';
  } else {
    hText.textContent = 'Hours';
  }

  if(m <= 1) {
    mText.textContent = 'Minute';
  } else {
    mText.textContent = 'Minutes';
  }

  if(s <= 1) {
    sText.textContent = 'Second';
  } else {
    sText.textContent = 'Seconds'
  }

  amPmElem.textContent = amPm;
  hours.textContent = h.toString().padStart(2, '0');
  minutes.textContent = m;
  seconds.textContent = s;
}

runClock();

setInterval(runClock, 1000);
