const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const record = document.querySelector('.record');

playBtn.addEventListener('click',function(){
    audio.play();
    record.classList.add('rotate');
});

pauseBtn.addEventListener('click',function(){
    audio.pause();
    record.classList.remove('rotate');
});