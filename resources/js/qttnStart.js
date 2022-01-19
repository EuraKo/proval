   var swiper = new Swiper(".qttn_swiper", {
       autoHeight: true,
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
   });
   var swqttrCheck_swiper = new Swiper(".qttrCheck_swiper", {
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
   });
   swiper.on('slideChangeTransitionEnd', function() {
       $(".swiper_btn_box .sub_title").text($(".swiper-slide-active").attr("data-title"))

   });
   swqttrCheck_swiper.on('slideChangeTransitionEnd', function() {
       $(".swiper_btn_box .sub_title").text($(".swiper-slide-active").attr("data-title"))

   });