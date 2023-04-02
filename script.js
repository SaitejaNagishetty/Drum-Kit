// Map keys to audio elements
const audioMap = {
    'a': document.querySelector('#a1'),
    's': document.querySelector('#a2'),
    'd': document.querySelector('#a3'),
    'f': document.querySelector('#a4'),
    'g': document.querySelector('#a5'),
    'h': document.querySelector('#a6'),
    'j': document.querySelector('#a7'),
    'k': document.querySelector('#a8'),
    'l': document.querySelector('#a9')
  };
  
  let currentAudio = null;

  document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (audioMap[event.key]) {
        if(currentAudio){
            currentAudio.pause();
        }
        audioMap[event.key].currentTime = 0;
        audioMap[event.key].play();
        currentAudio = audioMap[event.key];
    }
    else if(event.key === ' '){
        if(currentAudio){
            if(currentAudio.paused){
                currentAudio.play();
            }
            else{
                currentAudio.pause();
            }
        }
    }
  });
  
  