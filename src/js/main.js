const mySong = document.querySelector('#mySong');
const btnPlay = document.querySelector('#iconPlay');

btnPlay.onclick = () => {
  if(mySong.paused) {
    mySong.play();
    btnPlay.src ='/src/assets/img/pause.png';
  } else {
    mySong.pause();
    btnPlay.src ='/src/assets/img/play.png';
  }


};