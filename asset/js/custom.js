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
  delay: 4000,
},
effect: 'fade',
pagination: {
  el: ".swiper-pagination",
  clickable: true
},
});


/**
 * 슬라이드 나타나면 글자도 나타나게
 *
 * @version 1.0.0
 * @since 2022-07-06
 * @author jy
 */

//   $('.swiper-slide.swiper-slide-visible.swiper-slide-active').click(function () {
//     idx = $(this).index();
//     item = $('.desc-wrap').eq(idx).find('.hide-el')
//     const all=gsap.to('.desc-wrap .hide-el', {y:'-100%',paused: true,opacity:0})
//     const motion = gsap.to(item, {delay:0.5, y: 0,stagger: 0.5,paused: true,opacity:1})
//     all.play()
//     motion.play()
// })
// $('.swiper-slide.swiper-slide-visible.swiper-slide-active').eq(0).trigger('click')





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
$('.btn-close, .dimmed').click(function (e) {
e.preventDefault();
$('.reserve-pop, .dimmed').removeClass('active');
$('body').removeClass('hidden');
})

  /**
 * 메뉴
 *
 * @version 1.0.0
 * @since 2022-07-06
 * @author jy
 */
   $(window).scroll(function () {
   const po = $(window).scrollTop();
   const circle = $('.main-slide').offset().top;
   if (circle >= po) {
     $('.btn-reserve').addClass('circle')
   } else {
     $('.btn-reserve').removeClass('circle')
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
  //첫클릭
  menu.restart();
  $('.header .btn-reserve').removeClass('circle')
}else{
  //닫기눌렀을때
  $('.header .btn-reserve').addClass('circle')
}




  $('body').toggleClass('hidden');
  $('.btn-menu').toggleClass('close');
  $('.gnb-pop').toggleClass('active')
  // $('.header').toggleClass('menu-active');



})




// menu = gsap.to('.header .gnb-pop', {
//   opacity:1,
//   y:-800,
//   display: 'block',
//   paused: true
// })

  /**
 * 메뉴 마우스 올리면 오퍼시티변경
 *
 * @version 1.0.0
 * @since 2022-07-06
 * @author jy
 */

$('.gnb-item').hover(function(){
$(this).addClass('active');
$(this).siblings().removeClass('active');
})
$('.gnb-item').eq(0).trigger('hover')


  /**
 *동의 체크하면 체크,해제
 *
 * @version 1.0.0
 * @since 2022-07-06
 * @author jy
 */
$('.agr-label').click(function(){
$('.agr-label').toggleClass('active')
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
  markers:true,
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






// askBg = gsap.from('.sc-ask .bg',10,{
//   scale:1.2,
// })

// ScrollTrigger.create({
//   trigger:".sc-ask",
//   start:"top 90%",
//   end:"bottom top",
//   markers:true,
//   animation:askBg
// })


ScrollTrigger.create({
trigger:".sc-ask",
start:"top 90%",
end:"bottom top",
// markers:true,
toggleClass: "active"
// toggleClass: {targets: ".reserve-form", className: "active"}
})






// footer =gsap.timeline({
//   scrollTrigger:{
//     trigger:'.footer',
//       start:"0% 70%",//트리거기준 0%위치, 윈도우기준0%
//       end:"60% 70%",
//       markers:true,
//       scrub:1,
//   }
// })

// footer.addLabel('motion3',{
//   stagger:0.5
// })

// .from('.corp',{
//   opacity:0,
//   y:-100
// },'motion3')

// .from('.reserve-form',{
//   opacity:0,
//   x:10
// },'motion3')

// .from('.contact-box.c01',{
//   opacity:0,
//   y:30,
//   stagger:0.3
// })
// .from('.contact-box.c02',{
//   opacity:0,
//   y:30,
//   stagger:0.3
// })
// .from('.contact-box.c03',{
//   opacity:0,
//   y:30,
//   stagger:0.3
// })





})

function scrollRotate() {
let image = document.getElementById("btn-scroll");
image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

window.addEventListener('scroll',scrollRotate);