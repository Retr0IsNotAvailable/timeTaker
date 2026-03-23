/* update the time each subject has take and TTS */

// TTS DOM
const TTS = document.querySelector(".tts");

// time input, subject input, add button DOM's
const timeInput = document.querySelector(".timeInput");
const subjectInput = document.querySelector(".subjectInput");
const addButton = document.querySelector(".addButton");

// span time, span subject and sujects' list DOM's
const spanTime = document.querySelector(".spanTime");
const spanSubject = document.querySelector(".spanSubject");
const subjectsList = document.querySelector(".subjects");

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

  return li;
}

addButton.addEventListener("click", () => {
  const time =  getTime();
  const subject = getSubject();

  const newList = addSubject(time, subject);
  subjectsList.appendChild(newList);
});