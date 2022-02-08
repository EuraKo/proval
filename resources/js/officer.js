var officer_swiper = new Swiper(".officer_swiper", {
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    observer: true, // 추가
    observeParents: true, // 추가
});
officer_swiper.on('slideChangeTransitionEnd', function() {
    $(".swiper_btn_box .sub_title").text($(".swiper-slide-active").attr("data-title"))

});