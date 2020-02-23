const setDate = () => {
  const secondHand = document.querySelector('.second-hand'),
        minHand = document.querySelector('.min-hand'),
        hoursHand = document.querySelector('.hour-hand');

  const now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

  const secDeg = ((seconds / 60) * 360) + 90,
        minDeg = ((minutes / 60) * 360) + 90,
        hourDeg = ((hours / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hoursHand.style.transform = `rotate(${hourDeg}deg)`;

}
setInterval(setDate, 1000);

