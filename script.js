
function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        console.log(key);
        if(!audio) return;
        audio.currentTime = 0; //rewind to the start;
        audio.play();
        key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !=='transform') return;// skip it if is not a transform
    console.log(e);
    this.classList.remove('playing');

}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
