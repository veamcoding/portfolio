$(function () {

    // 스크롤이벤트
    let scrollTop;
    let winH = $(window).height();
    $(window).scroll(function () {
        scrollTop = $(this).scrollTop();

        let brandTop = $(".brand .title").offset().top;
        if ( scrollTop + winH * 0.8 > brandTop ) {
            $(".brand .title").css({
                opacity : " 1 ",
            });
            $(".brand .title h3").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
        }
        let brand_desc_1T = $(".brand .desc .story_start").offset().top;

        if ( scrollTop + winH * 0.8 > brand_desc_1T ) {
            $(".brand .desc .story_start span").css({
                transform: "scale( 1 )",
                opacity : " 1 ",
            });
            $(".brand .desc .story_start img").css({
                transform : "translateX( 0 )",
                opacity : " 1 ",
            });
            $(".brand .desc .story_start p").css({
                transform : "translateX( 0 )",
                opacity : " 1 ",
            });
        }
        if ( scrollTop > brand_desc_1T - winH * 0.2  ) {
            $(".brand .desc .story_now span.circle").css({
                transform: "scale( 1 )",
                opacity : " 1 ",
            });
            $(".brand .desc .story_now p").css({
                transform : "translateX( 0 )",
                opacity : " 1 ",
            });
            $(".brand .desc .story_now span.circle2").css({
                transform: "scale( 1 )",
                opacity : " 1 ",
            });
            $(".brand .desc .story_now .obj img:last-child").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".brand .desc .story_now .obj img:first-child").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
        }
        let kakaoTop = $("section.kakao").offset().top;
        if ( scrollTop > kakaoTop - winH * 0.5 ) {
            $(".kakao .title h3").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".kakao .character .slider").css({
                opacity : " 1 ",
            });
            $(".kakao .character .text-con").css({
                // transform : "translateX( 0 )",
                opacity : " 1 ",
            });
        }
        let choonsikTop = $("section.choonsik").offset().top;
        if ( scrollTop > choonsikTop - winH * 0.5 ) {
            $(".choonsik .visual img").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".choonsik .desc h4").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".choonsik .desc p").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".choonsik .desc img").css({
                transform: "translateY( 0 ) scale( 1 )",
                opacity : " 1 ",
            });
            $(".choonsik .desc button").css({
                transform: "translateX( 0 )",
                opacity : " 1 ",
            });
        }
        let ninizTop = $("section.niniz").offset().top;
        if ( scrollTop > ninizTop - winH * 0.5 ) {
            $(".niniz .title").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".niniz .title h3").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".niniz .title p").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".niniz .title p strong").css({
                transform : "translateY( 0 )",
                opacity : " 1 ",
            });
            $(".niniz .choice").css({
                opacity : " 1 ",
            });
            $(".niniz .wanted").css({
                opacity : " 1 ",
            });
        }
    });

    // navigation 스크롤이동
    let brandTop = $("section.brand").offset().top;
    let kakaoTop = $("section.kakao").offset().top;
    let ninizTop = $("section.niniz").offset().top;
    $(".brand_btn").click(function () { // 브랜드소개
        $("html, body").stop().animate({scrollTop: brandTop + winH * 0.2}, 1500, "easeInOutQuart");
    });
    $(".kakao_btn").click(function () { // 캐릭터소개 - 카카오프렌즈
        $("html, body").stop().animate({scrollTop: kakaoTop}, 1500, "easeInOutQuart");
    });
    $(".niniz_btn").click(function () { // 캐릭터소개 - 니니즈
        $("html, body").stop().animate({scrollTop: ninizTop}, 1800, "easeInOutQuart");
    });

    // 니니즈 버튼 내용 연결
    $(".hover-box div").on("mouseenter", function () {
        $(".niniz .choice img.arrow").hide();
    }).on("mouseleave", function () {
        $(".niniz .choice img.arrow").show();
    }).on("click", function () {
        let $index = $(this).index();
        $(".wanted div").removeClass("move");
        $(".wanted div").eq($index).addClass("move");
    });
    $(".wanted button").click(function () { // 원티드 캐릭터상품보러가기 이동
        window.open('../html/ProductSelection.html');
    });


    // 카카오프렌즈 슬라이드 내용연결
    const kakaoSlider = $(".kakao .character .slider");
    const kakaoCon = $(".kakao .character .text-con .con");

    kakaoSlider.on("init", function (event, slick) {
        kakaoCon.eq(slick.currentSlide).addClass("active");
    }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        kakaoCon.removeClass("active").eq(nextSlide).addClass("active");
    });
    // 카카오프렌즈 슬라이드
    kakaoSlider.slick({
        dots: true,
        fade: true,
        arrows: false,
        speed: 800,
        focusOnSelect: true,
        initialSlide: 0,
        customPaging: function (slider, index) {
            let imgSrc = slider.$slides.eq(index).find("img").attr("src");
            return '<img src="' + imgSrc  + '">'
        }
    });

});