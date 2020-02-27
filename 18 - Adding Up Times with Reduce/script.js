const timeNodes = document.querySelectorAll('[data-time]');

const timeArr = [...timeNodes];

const seconds =  timeArr.map(item => {
  let [mins, secs] = item.dataset.time.split(':').map(parseFloat)
  return (mins * 60) + secs;
}).reduce((total, sec) => total + sec);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

// console.log(timeArr);
