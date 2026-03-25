# Time Taker
This web app registers study time by taking subject name and time spent on it from the user.

[Time Taker](https://firsthandsonproject.netlify.app/)

## How it's made
Tech used: HTML, CSS, and vanilla JavaScript

HTML was to make the structure of the web app by dividing the web page
into two parts, a header and a middle section referred to as timeTaker.
the header was also divided into left and right section, with the left section containing the title of the web app and a reset button used to reset into default values (which are in this case empty list).
the right section of the header contains the a counter called TTS (Total Time Studying), it calculation the total time spent on studying so far by taking from each subject's individual time and combining them together.

the middle section contains the timeTaker interface itself, containing two inputs, one numeric (in minutes) for the time spent on the subject and another textual for the subject name itself, and of course an add button on the right to add the subject and its time.

when a subject is a added, an Unordered List (ul) which was previously hidden is displayed and the subject is added in the form (time + mins + subject) on the screen. the list can only expands downwards as the timeTaker div is fixed to the center.

## lessons learned
Truth be told, I had this program's idea for 6 months now and wanted to make one but was too averse to go out the safe zone of tutoriols where everything is predefined and a solution already exists (yeah, I'm talking about tutoriol hell). But at the same time I was getting fed up with learning so much theory without enough practice so I went there and started anyways, not with the goal of succeeding but the goal of trying, of getting my hands dirty (so to speak). Now, and only after two days I came far beyond what I expected, and learned that the only real way of being a better programmer is by building. Trial and error and error and trial.