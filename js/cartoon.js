$(function () {

    //헤더 메뉴 팝업 켜기
    $(".header .nav-btn").click(function () {
        $(".Popup-GNB").addClass("on");
        $("body").addClass("stop");
    });
    //헤더 메뉴 팝업 끄기
    $(".Popup-GNB .close_btn").click(function () {
        $(".Popup-GNB").removeClass("on");
        $("body").removeClass("stop");
    });
    // 상품정보 팝업 켜기
    $(".item-info .box-btn").click(function () {
        $(this).addClass("move");
        $(this).siblings(".box-wrap").addClass("show");
    });
    // 상품정보 팝업 끄기
    $(".item-info .box .close-btn").click(function () {
        $(".box-btn").removeClass("move");
        $(this).closest(".box-wrap").removeClass("show");
    });


    // 메인 카툰슬라이더
    const cartoonSlide = $(".cartoon-slider .main-slide");

    cartoonSlide.slick({
        dots: true,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        speed: 1000,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 9,
        focusOnSelect: true,
    });

    // 슬라이드 카툰내용변경
    let $current;
    let contentsTop = $(".contents").offset().top;

    cartoonSlide.on("init", function (event, slick) { // 초기화
        updateSlide_count(slick);
        $(".contents .toon").eq($current).addClass("on");
        $(".box-wrap .box").eq($current).addClass("block");
    });

    cartoonSlide.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        updateSlide_count(slick, nextSlide);
        $(".contents .toon").removeClass("on").eq(nextSlide).addClass("on");
        $(".box-wrap .box").removeClass("block").eq(nextSlide).addClass("block");
    });

    function updateSlide_count(event, next) {
        $current = event.currentSlide;
    }

    // move down
    $(".move-btn").click(function () {
        $("html, body").stop().animate({scrollTop: contentsTop}, 1200, "easeInOutQuart");
    });


    $(".footer img").click(function(){
        $('body,html').animate({scrollTop:0},500, "easeInOutQuart");
        return false;
    });

});