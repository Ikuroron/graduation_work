

// トップ動画再生、停止
let movie = document.getElementById('movie');
movie.addEventListener('click', function () {

  const video = document.querySelector("#movie");       // <audio>
  if( ! video.paused ){
    video.pause();
  }
  else{
    video.play();
  }

})