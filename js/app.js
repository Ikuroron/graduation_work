

// ハンバーガーメニュー
$(function () {
  $('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });
});

// トップ動画再生、停止
let movie = document.getElementById('click');
movie.addEventListener('click', function () {

  const video = document.querySelector("#movie");       // <audio>
  if( ! video.paused ){
    video.pause();
  }
  else{
    video.play();
  }

})