/* update the time each subject has take and TTS */

// TTS DOM
const TTS = document.querySelector(".tts");

// time input, subject input, add button DOM's
const timeInput = document.querySelector(".timeInput");
const subjectInput = document.querySelector(".subjectInput");
const addButton = document.querySelector(".addButton");

// span time, span subject DOM's
const spanTime = document.querySelector(".spanTime");
const spanSubject = document.querySelector(".spanSubject");

// get time spent on subject
function getTime() {
  return timeInput.value;
}

// get subject
function getSubject() {
  return subjectInput.value;
}

addButton.addEventListener("click", () => {
  spanTime.innerHTML = getTime();
  spanSubject.innerHTML = getSubject();
});