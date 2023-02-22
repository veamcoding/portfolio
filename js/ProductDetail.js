$(function () {
    // 세부정보, 배송반품 아코디언 슬라이드
    $(".main .info .title").click(function () {
        $(this).next().stop().slideDown();
        $(this).next().siblings(".desc").stop().slideUp();
    });
    // 메뉴버튼 팝업메뉴 열기
    $(".header .nav-btn").click(function () {
        $(".Popup-GNB").addClass("on");
        $("body").addClass("stop");
    });
    // 메뉴버튼 팝업메뉴 닫기
    $(".Popup-GNB .close_btn").click(function () {
        $(".Popup-GNB").removeClass("on");
        $("body").removeClass("stop");
    });
    // 좋아요
    $(".price_icon .icon li:nth-child(1), .recommend .items .wrap .icon li:nth-child(1) ").click(function () {
       $(this).toggleClass("active");
    });

    // 상품개수 버튼 + -
    $(".calc_price .calc input[type=button]").click(function () {
        const inputText = $(this).siblings("input[type=text]");
        let $value = inputText.val();
        if ( $(this).val() === "-" ) {
            if ($value > 1) inputText.val( --$value );
        } else {
            if ($value < 10) inputText.val( ++$value );
        }
        amountPrice_Func();
    });
    amountPrice_Func();

    // 가격 * 상품개수 = 구매가격
    function amountPrice_Func() {
        const $price = $(".purchase").find(".price").text().replace(/[^0-9]/g, "");
        const $val = $(".purchase").find("input[type=text]").val();
        const $am = parseInt($price) * parseInt($val);
        $(".purchase").find(".am-price").text(   $am.toLocaleString()  );
    }

    // 상품 슬라이드 페이징넘버
    const slider = $(".main .item .slider");
    slider.on("init", function (event, slick) {
        updateSlide_count(slick);
        $(".pageNum").text( ($current + 1) + "/" + $totalCount );
    });
    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        updateSlide_count(slick, nextSlide);
        $(".pageNum").text( (nextSlide + 1) + "/" + $totalCount );
    });
    function updateSlide_count(event, next) {
        $current = event.currentSlide;
        $totalCount = event.slideCount;
    }

    // 구매 fixed 하단에서 멈춤
    $(window).scroll(function () {
        scrollTop = $(this).scrollTop();
        let winH = $(window).height();
        let recommendTop = $(".recommend").offset().top;

        if ( scrollTop > ( recommendTop - winH) ) {
            $(".purchase .box").css({
                position : "absolute",
                bottom : "200px",
            });
        } else {
            $(".purchase .box").css({
                position : "",
                bottom : "",
            });
        }
    });

    // 상품 슬라이드
    $(".main .item .slider").slick({
        dots: true,
        autoPlay: false,
        arrows: true,
        prevArrow: $(".main .item .slide-btn .left"),
        nextArrow: $(".main .item .slide-btn .right"),
        customPaging: function (a, b) {
            console.log( b+1, a.slideCount  );
            return b+1 + "/" + a.slideCount;
        }
    });

    // footer Top
    $(".footer img").click(function(){
        $('body,html').animate({scrollTop:0},1500);
        return false;
    });
});