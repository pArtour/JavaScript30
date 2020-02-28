let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then)

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countDown);
    }

    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const remainderSec = seconds % 60;
  const display = `${min}:${remainderSec < 10 ? '0' : ''}${remainderSec}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const mins = end.getMinutes();
  endTime.textContent = `Be back At ${hour}: ${mins < 10 ? '0' : ''}${mins}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);

}


buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const min = this.minutes.value;
  timer(min * 60);
  this.reset();
})