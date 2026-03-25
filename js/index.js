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
let tts = parseInt(retrieveStudyTime()) || 0;
let studyDayList = retrieveDataList() || [
  {
    time: "25",
    subject: "web dev"
  }
];

updateTTS(tts);

// get time spent on subject
function getTime() {
  return timeInput.value;
}

// get subject
function getSubject() {
  return subjectInput.value;
}

// retrive subjects from localstorage if any exist
function retrieveDataList() {
  return JSON.parse(localStorage.getItem("studyDayList"));
}

function retrieveStudyTime() {
  return localStorage.getItem("studyTime");
}

// save data in localStorage
function saveData(dataList, studyTime) {
  localStorage.setItem("studyDayList", JSON.stringify(dataList));
  localStorage.setItem("studyTime", JSON.stringify(studyTime));
}

function createListElement(myTime, mySubject) {
  const li = document.createElement("li");
  const spanTime = document.createElement("span");
  const spanSubject = document.createElement("span");

  spanTime.innerHTML = myTime + " ";
  spanSubject.innerHTML = mySubject;

  li.appendChild(spanTime);
  li.appendChild(spanSubject);

  return li;
}

// add subjects retrieved from localstorage list
function addData(dataList) {
  for (const data of dataList) {
    const li = createListElement(data.time, data.subject);
    subjectsList.appendChild(li);
  }
}
addData(studyDayList);

// create a subject and give a time and append it
function addSubject(myTime, mySubject) {
  const li = createListElement(myTime, mySubject);

  tts += parseInt(myTime) + 5;

  // add time/subject pair to list
  studyDayList.push({
    time: myTime,
    subject: mySubject
  });
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

  const newList = addSubject(time, subject, studyDayList);
  subjectsList.appendChild(newList);
  saveData(studyDayList, tts);
  updateTTS(tts);
});