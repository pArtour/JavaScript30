  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', event => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    // console.log(transcript);
    p.textContent = transcript;
    if (event.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
    if (transcript.includes('бродяга') || transcript.includes('напряга')) {
      console.log('Базару нет');
    }
  });
  recognition.addEventListener('end', recognition.start)
  recognition.start();