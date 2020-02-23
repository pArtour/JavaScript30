const playSound = event => {
  const button = document.querySelector(`.key[data-key="${event.keyCode}"]`),
        audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');

  //garanty that class playing will be removed
  setTimeout(() => {
    button.classList.remove('playing');
  }, 2500);
}

function removeTransition (event){
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(item => {
  item.addEventListener('transitionend', removeTransition);
});

document.documentElement.addEventListener('keydown', playSound);
//made it myself :)