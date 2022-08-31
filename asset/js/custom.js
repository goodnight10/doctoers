$(function () {
  /**
 * 헤더 슬라이드
 *
 * @version 1.0.0
 * @since 2022-07-04
 * @author jy
 */
var swiper = new Swiper(".top-slide", {
slidesPerView: 1,
loop: true,
autoplay: {
  delay: 2000,
},
direction: "vertical",
});

  /**
 * 메인 슬라이드
 *
 * @version 1.0.0
 * @since 2022-07-04
 * @author jy
 */
var swiper = new Swiper(".main-slide", {
slidesPerView: 1,
loop: true,
autoplay: {
  delay: 5000,
},
effect: 'fade',
pagination: {
  el: ".swiper-pagination",
  clickable: true
},
});


  /**
 * 헤더 색상변환, 고정
 *
 * @version 1.0.0
 * @since 2022-07-05
 * @author jy
 */
$(window).scroll(function () {
const curr = $(window).scrollTop();
const target = $('.swiper-pagination').offset().top;
if (curr >= target) {
  $('.menu-area').addClass('fixed')
} else {
  $('.menu-area').removeClass('fixed')
}
})

  /**
 * 예약버튼 누르면 예약모달팝업
 *
 * @version 1.0.0
 * @since 2022-07-05
 * @author jy
 */
$('.btn-reserve').click(function (e) {
e.preventDefault();
$('.reserve-pop, .dimmed').addClass('active');
$('body').addClass('hidden');

})
$('.reserve-pop .btn-close, .dimmed').click(function (e) {
e.preventDefault();

$('.reserve-pop, .dimmed').removeClass('active');
$('body').removeClass('hidden');
 if($('.gnb-pop').hasClass('active')){
  $('body').addClass('hidden');
 }
})

$('.header .btn-agr').click(function(e){
  e.preventDefault();
  if ($('.header .pv-pop').hasClass('active')) {
    $('.header .pv-pop').removeClass('active')
  } else {
    $('.header .pv-pop').addClass('active')
  }
  
})
$('.header .pv-pop .btn-close, .dimmed').click(function(e){
  e.preventDefault();
  if ($('.header .pv-pop').hasClass('active')) {
    $('.header .pv-pop').removeClass('active')
  }
  
})


//하단 예약메뉴
$('.sc-ask .btn-agr').click(function(e){
  e.preventDefault();
  if ($('.sc-ask .pv-pop').hasClass('active')) {
    $('.sc-ask .pv-pop').removeClass('active')
  } else {
    $('.sc-ask .pv-pop').addClass('active')
  }
  
})

$('.sc-ask .pv-pop .btn-close').click(function(e){
  e.preventDefault();
  if ($('.sc-ask .pv-pop').hasClass('active')) {
    $('.sc-ask .pv-pop').removeClass('active')
  }
})








menu = gsap.fromTo('.header .gnb-pop .gnb-item',{
opacity:0,
yPercent:10
},{
opacity:1,
stagger:0.2,
yPercent:0
})
menu.paused();


$('.btn-menu').click(function (e) {
e.preventDefault();
if(!$(this).hasClass('close')){
  //첫클릭. 
  menu.restart();
  $('.menu-area').removeClass('fixed')
  
}else{
  //닫기눌렀을때
  $(window).scroll(function () {
    const curr1 = $(window).scrollTop();
    const target1 = $('.swiper-pagination').offset().top;
    if (curr1 >= target1) {
      $('.menu-area').addClass('fixed')
    } else {
      $('.menu-area').removeClass('fixed')
    }
    });
  
}
  $('body').toggleClass('hidden');
  $('.btn-menu').toggleClass('close');
  $('.gnb-pop').toggleClass('active');
})



  /**
 *동의 체크하면 체크,해제
 *
 * @version 1.0.0
 * @since 2022-07-06
 * @author jy
 */
$('.header .agr-label').click(function(){
$('.header .agr-label').toggleClass('active')
})
$('.sc-ask .agr-label').click(function(){
$('.sc-ask .agr-label').toggleClass('active')
})


/**
 * 패일리사이트에 마우스 올리면 메뉴나타나기
 *
 * @version 1.0.0
 * @since 2022-07-06
 * @author jy
 */
$('.family-wrap').hover(function () {
$('.family-list').toggleClass('active');

})



/**
 *동의 체크, 해제
 * @version 1.0.0
 * @since 2022-08-15
 * @author jy
 */
//=============================================
//메뉴active와 전체선택
$('.header .btn-pv').click(function (e) {
  e.preventDefault();
  $('input:checkbox[name="agr"]').prop('checked', true);
  $('.header .pv-wrap').addClass('active');
})
$('.sc-ask .btn-pv').click(function (e) {
  e.preventDefault();
  $('input:checkbox[name="agr-f"]').prop('checked', true);
  $('.sc-ask .pv-wrap').addClass('active');
})


$('.header .pv-wrap').click(function () {
  if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');

  } else {
      $(this).removeClass('active');

  }
});
$('.sc-ask .pv-wrap').click(function () {
  if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');

  } else {
      $(this).removeClass('active');

  }
});


doctorsgroup =gsap.timeline({
scrollTrigger:{
  trigger:'.sc-doctors-group',
  start:"0% 80%",//트리거기준 0%위치, 윈도우기준0%
  end:"100% 80%",
  // markers:true,
  scrub:1,
}
})

doctorsgroup.addLabel('motion1')

.fromTo('.doctors-group-wrap.g01',{
y:-100,
opacity:0,
},{
y:50,
opacity:1,
},'motion1')

.fromTo('.doctors-group-wrap .desc-img',{
scale:1.3,

},{
scale:1
})
.fromTo('.doctors-group-wrap.g02',{
y:-50,
opacity:0
},{
y:100,
opacity:1
},'motion1')




gsap.from('.video-area',{
scrollTrigger:{
  trigger:'.sc-brand-story',
  start:"0% 60%",//트리거기준 0%위치, 윈도우기준0%
  end:"70% 80%",
  toggleActions:"play pause pause reset"
},
x:-1000
})



signature =gsap.timeline({
scrollTrigger:{
trigger:'.sc-signature',
  start:"30% 80%",//트리거기준 0%위치, 윈도우기준0%
  end:"100% 80%",
  // markers:true,
  scrub:1,
}
})

signature.addLabel('motion2')

.fromTo('.sg-bg',{
opacity:0,
scale:0.3,
},{
opacity:1,
scale:1,
},'motion2')

.fromTo('.sc-signature .signature-area::after',{
width:0,

},{
width:1000,
},'motion2')








ScrollTrigger.create({
trigger:".sc-ask",
start:"top 90%",
end:"bottom top",
toggleClass: "active"
})












})