

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


// 矢印スクロール
$(function(){
    
    
  // 矢印がクリックされたら、スムーススクロール
  $('.arrow-up').click(() => {
      $('body, html').animate({ scrollTop: 0,}, 600);
  })

  
  // 画面がスクロールされたら
  $(window).scroll(function () {
      
      // 画面のスクロールされた量を取得
      let scrollTop = $(document).scrollTop();
      // スクロールの量が300以上なら表示、それ以外は非表示
      if (scrollTop >= 300) {
          $('.arrow-up').fadeIn();
      } else {
          $('.arrow-up').fadeOut();
      }


  });
})