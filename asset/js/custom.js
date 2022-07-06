$(function () {
  var swiper = new Swiper(".top-slide", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    direction: "vertical",
  });


  var swiper = new Swiper(".main-slide", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });


  //
  $(window).scroll(function () {
    const curr = $(window).scrollTop();
    const target = $('.swiper-pagination').offset().top;
    if (curr >= target) {
      $('.menu-area').addClass('fixed')
    } else {
      $('.menu-area').removeClass('fixed')
    }

  })

  //예약팝업

  $('.btn-reserve').click(function (e) {
    e.preventDefault();
    $('.reserve-pop, .dimmed').addClass('active');
    $('body').addClass('hidden');

  })
  $('.btn-close, .dimmed').click(function (e) {
    e.preventDefault();
    $('.reserve-pop, .dimmed').removeClass('active');
    $('body').removeClass('hidden');
  })

  //메뉴팝업

  $('.btn-menu').click(function (e) {
    e.preventDefault();
    // $('.gnb-pop').toggleClass('active');

    //body에 hidden클래스가 있다면 제거,없다면 추가(스크롤 없앰)
    if ( $('body').hasClass('hidden')) {
      $('body').removeClass('hidden');
    } else {
      $('body').addClass('hidden');
    }
    //메뉴 구역
    if ($('.menu-area').hasClass('fixed')) {
      $('.menu-area').removeClass('fixed')
    }
    // $('.btn-menu').toggleClass('close');
    //gnb-pop이 active클래스 있다면 삭제, 없다면 추가
    if ($('.gnb-pop').hasClass('active')) {
      $('.gnb-pop').removeClass('active')
      menu.reverse()
    } else {
      $('.gnb-pop').addClass('active')
      menu.play()
    }
  })

  menu = gsap.to('.header .gnb-pop', {
    opacity:1,
    y:-800,
    display: 'block',
    paused: true
  })

  //메뉴오퍼시티

  $('.gnb-list').hover(function(){
    $(this).css('opacity','1');
    $(this).siblings().css('opacity','0.5');
  })





//푸터 패밀리사이트마우스 올리면 메뉴
$('.family-wrap').hover(function () {
$('.family-list').toggleClass('active');

})





doctorsgroup =gsap.timeline({
  scrollTrigger:{
      trigger:'.sc-doctors-group',
      start:"0% 80%",//트리거기준 0%위치, 윈도우기준0%
      end:"100% 80%",
      markers:true,
      scrub:1,
  }
})

doctorsgroup.addLabel('motion1')

.fromTo('.doctors-group-wrap.g01',{
  y:-100
},{
  y:50
},'motion1')

.fromTo('.doctors-group-wrap.g02',{
  y:-50,
},{
  y:100
},'motion1')





brand =gsap.timeline({
  scrollTrigger:{
      trigger:'.sc-brand-story',
      start:"0% 80%",//트리거기준 0%위치, 윈도우기준0%
      end:"70% 80%",
      markers:true,
      scrub:1,
  }
})

brand.from('.video-area',{
  x:-1000
})



signature =gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-signature',
      start:"0% 80%",//트리거기준 0%위치, 윈도우기준0%
      end:"100% 80%",
      markers:true,
      scrub:1,
  }
})

signature.addLabel('motion2')

.from('.signature-area',{
  opacity:0
})


footer =gsap.timeline({
  scrollTrigger:{
    trigger:'.footer',
      start:"0% 70%",//트리거기준 0%위치, 윈도우기준0%
      end:"60% 70%",
      markers:true,
      scrub:1,
  }
})

footer.addLabel('motion3',{
  stagger:0.5
})

.from('.corp',{
  opacity:0,
  y:-100
},'motion3')

.from('.reserve-form',{
  opacity:0,
  x:10
},'motion3')

.from('.contact-box.c01',{
  opacity:0,
  y:30,
  stagger:0.3
})
.from('.contact-box.c02',{
  opacity:0,
  y:30,
  stagger:0.3
})
.from('.contact-box.c03',{
  opacity:0,
  y:30,
  stagger:0.3
})





})