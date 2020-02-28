const triggers = document.querySelectorAll('a');
const highLight = document.createElement('span');
highLight.classList.add('highlight');
document.body.appendChild(highLight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highLight.style.width = `${coords.width}px`;
  highLight.style.height = `${coords.height}px`;
  highLight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}


triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));