let timer;
let hour = 0;
let minute = 0;
let second = 0;

const display = document.querySelector('.display');
const startButton = document.querySelector('.start-btn');
const stopButton = document.querySelector('.stop-btn');
const resetButton = document.querySelector('.reset-btn');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function updateTimer() {
  second++;
  if (second === 60) {
    second = 0;
    minute++;
  } if (minute === 60) {
    minute = 0;
    hour++;
  }
  display.innerHTML = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

function startTimer() {
 timer = setInterval(updateTimer, 1000)
}

function stopTimer() {
  clearInterval(timer)
}

function resetTimer() {
  clearInterval(timer);
  hour = 0;
  minute = 0;
  second = 0;
  display.innerText = '00:00:00'
}