window.addEventListener('keydown', function (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div [data-key="${event.keyCode}"]`)
    if (!audio) {
      return;
    }
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()

  })

  const keys = document.querySelectorAll('.key')
        
  keys.forEach(key => {
    key.addEventListener('transitionend', function(event){
      if(event.propertyName !== 'transform') return;
      key.classList.remove('playing') 
    })
  });
     