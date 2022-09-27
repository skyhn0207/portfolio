/* 마우스커서 */
document.addEventListener('mousemove', function(e){
  const dot = document.querySelector('.dot');
  dot.style.left = e.pageX + 'px';
  dot.style.top = e.pageY + 'px';
});

/* toggle_btn */
let navigation = document.querySelector('.header_nav');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
  this.classList.toggle('active')
  navigation.classList.toggle('noshow')
}

/* portfolio */
let plus = document.querySelector('.plus')
let portfolio_menu = document.querySelector('.portfolio_menu')
plus.onclick = function(){
  portfolio_menu.classList.toggle('active')
};

/* 모바일ver swiper */
var swiper = new Swiper(".mobile", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* 마우스 스크롤 이벤트 */
$(function(){
  var $menu = $('.list');
  var $content = $('main > section');
  $menu.click(function(x){
    x.preventDefault();
    /* $(this).addClass('on').siblings().removeClass('on'); */
    var idx = $(this).index();
    var section = $content.eq(idx)
    var sectionDistance = section.offset().top;
    $('html,body').stop().animate({scrollTop:sectionDistance})
  });

  $(window).scroll(function(){
    $content.each(function(){
      if($(this).offset().top <= $(window).scrollTop()+10){
        var idx = $(this).index();
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
    })
  })

  /* 팝업창 */
  $('.pop_close').click(function(){
    $('.popup').hide();
    $('.popup_cover').hide();
  })
});

/* AOS 라이브러리 */
AOS.init();