/* update the time each subject has take and TTS */

// TTS DOM
const TTSElement = document.querySelector(".tts");

// time input, subject input, add button DOM's
const timeInput = document.querySelector(".timeInput");
const subjectInput = document.querySelector(".subjectInput");
const addButton = document.querySelector(".addButton");

// span time, span subject and sujects' list DOM's
const spanTime = document.querySelector(".spanTime");
const spanSubject = document.querySelector(".spanSubject");
const subjectsList = document.querySelector(".subjects");

// total time study variable
let tts = 0;

// get time spent on subject
function getTime() {
  return timeInput.value;
}

// get subject
function getSubject() {
  return subjectInput.value;
}

// create a subject and give a time and append it
function addSubject(time, subject) {
  const li = document.createElement("li");
  const spanTime = document.createElement("span");
  const spanSubject = document.createElement("span");

  spanTime.innerHTML = time + " ";
  spanSubject.innerHTML = subject;

  li.appendChild(spanTime);
  li.appendChild(spanSubject);

  tts += parseInt(time) + 5;
  return li;
}

// update TTS
function updateTTS(tts) {
  const hours = Math.trunc(tts / 60);
  const mins = tts % 60;

  TTSElement.innerHTML = hours + " hours " + mins + " minutes";
} 

addButton.addEventListener("click", () => {
  const time =  getTime();
  const subject = getSubject();

  const newList = addSubject(time, subject);
  subjectsList.appendChild(newList);

  updateTTS(tts);
});