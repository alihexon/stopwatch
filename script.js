let timer;
let isTimerActive = false;

const display = document.querySelector('.display');
const startButton = document.querySelector('.start-btn');
const stopButton = document.querySelector('.stop-btn');
const resetButton = document.querySelector('.reset-btn');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

const time = (JSON.parse(localStorage.getItem('time'))) || { hour: 0, minute: 0, second: 0 };
display.innerHTML = `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}:${time.second.toString().padStart(2, '0')}`;

function updateTimer() {
  time.second++;

  if (time.second === 60) {
    time.second = 0;
    time.minute++;
  } if (time.minute === 60) {
    time.minute = 0;
    time.hour++;
  }
  display.innerHTML = `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}:${time.second.toString().padStart(2, '0')}`;
  localStorage.setItem('time', JSON.stringify(time));
}

function startTimer() {
  if  (isTimerActive === true) {
    alert("The stopwatch is already active.");
    return
  };

  isTimerActive = true;
  timer = setInterval(updateTimer, 1000)
}

function stopTimer() {
  isTimerActive = false;
  clearInterval(timer)
}

function resetTimer() {
  clearInterval(timer);
  time.hour = 0;
  time.minute = 0;
  time.second = 0;
  display.innerText = '00:00:00'
}