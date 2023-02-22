$(function () {

    // navigation 스크롤이동
    let flagTop = $("section.flagship").offset().top;
    let factTop = $("section.factory").offset().top;
    let mapTop = $("section.map").offset().top;
    $(".flagship_btn").click(function () { // 플래그쉽스토어
        $("html, body").stop().animate({scrollTop: flagTop - winH * 0.2}, 1500, "easeInOutQuart");
    });
    $(".factory_btn").click(function () { // 팩토리스토어
        $("html, body").stop().animate({scrollTop: factTop - winH * 0.05}, 1500, "easeInOutQuart");
    });
    $(".map_btn").click(function () { // 매장찾기
        $("html, body").stop().animate({scrollTop: mapTop}, 1800, "easeInOutQuart");
    });


    let scrollTop;
    let winH = $(window).height();
    // 스크롤 이벤트
    $(window).scroll(function () {
        scrollTop = $(this).scrollTop();

        let flagTop = $(".contents .flagship").offset().top;
        let flag_value = scrollTop - flagTop;

        if ( scrollTop + winH * 0.8 > flagTop  ) {

            $(".img1-1").css({
                transform : "translateY(" + (-flag_value * 0.8) + "px)",
            });
            $(".flagship .p1").css({
                transform : "translateY("+ (500 -flag_value * 0.6) + "px)",
            });
            $(".flagship .s1").css({
                transform : "translateY("+ (-flag_value * 0.2) + "px)",
            });
        }

        if ( scrollTop > ( flagTop + winH * 0.2 ) ) {
            $(".img1-2").css({
                top : 1500 + -flag_value + "px",
            });
            $(".flagship .p2").css({
                transform : "translateY("+ ( -flag_value * 0.6) +"px)",
            });
            $(".flagship .s2").css({
                transform : "translateY("+ ( -flag_value * 0.3) +"px)",
            });
        }

        if ( scrollTop > ( flagTop + winH * 0.4 ) && scrollTop < ( flagTop + winH * 1.41 ) ) {
            $(".flagship .c3").css({
                transform : "translateX("+ (-1200 + flag_value * 0.8) +"px)",
            });
        }
        if ( scrollTop > ( flagTop + winH * 1.41 ) ) {
            $(".img1-3").css({
                // transform : "translateY("+ (-200 + flag_value * 0.8) +"px)",
            });
        }

        if ( scrollTop > ( flagTop + winH * 0.9 ) && scrollTop < ( flagTop + winH * 1.41 ) ) {
            $(".img1-4").css({
                right : -900 + ( flag_value * 0.6) + "px",
            });
        }
        if ( scrollTop > ( flagTop + winH * 0.8 ) ) {
            $(".flagship .p4").css({
                transform : "translateY("+ ( -flag_value * 0.53) +"px)",
            });
            $(".flagship .s4").css({
                transform : "translateY("+ ( -flag_value * 0.3) +"px)",
            });
        }
        if ( scrollTop > ( flagTop + winH * 1 ) ) {
            $(".img1-5").css({
                transform : "translateY("+ ( -flag_value * 0.45) +"px)",
            });
            $(".flagship .s5").css({
                transform : "translateY("+ ( -flag_value * 0.62) +"px)",
            });
            $(".flagship .p5").css({
                transform : "translateY("+ ( 500 + (-flag_value * 0.8)) +"px)",
            });

        }

        let lineTop = $(".line_area").offset().top;
        let line_value =  lineTop - scrollTop ;
        if (scrollTop > lineTop) {
            $(".line-wrap").css("position","fixed");
            $(".line_area .line.leftUp").css({
                transform: "translateX(" + (  line_value) +"px)",
            });
            $(".line_area .line.rightUp").css({
                transform: "translateX(" + (  -line_value) +"px)",
            });
        } else {
            $(".line-wrap").css("position", "");
        }

        let factTop = $(".factory").offset().top;
        let fact_value =  factTop - scrollTop ;
        if ( scrollTop > ( factTop - winH) ) {
            $(".factory-title").css({
                transform : "translateY("+ ( fact_value * 0.3) +"px)",
            });
            $(".factory .img2-1").css({
                transform : "translateY("+ ( fact_value * 0.7) +"px)",
            });
            $(".factory .p1").css({
                transform : "translateY("+ ( fact_value * 0.1) +"px)",
            });
            $(".factory .s1-1").css({
                transform : "translateY("+ ( fact_value * 0.3) +"px)",
            });
            $(".factory .s1-2").css({
                transform : "translateY("+ ( fact_value * 0.6) +"px)",
            });
            $(".factory .s1-3").css({
                transform : "translateY("+ ( fact_value * 0.9) +"px)",
            });
        }

        let factC2Top = $(".factory .c2").offset().top;
        let fC2T_value = scrollTop - factC2Top;

        if ( scrollTop > ( factC2Top - winH * 1.2) ) {
            $(".factory .img2-2").css({
                transform : "translateY("+ ( -fC2T_value * 0.2) +"px)",
            });
            $(".factory .s2-1").css({
                transform : "translateY("+ ( -fC2T_value * 0.2) +"px)",
            });
            $(".factory .s2-2").css({
                transform : "translateY("+ ( -fC2T_value * 0.5) +"px)",
            });
            $(".factory .s2-3").css({
                transform : "translateY("+ ( -fC2T_value * 0.8) +"px)",
            });
        }

        if ( scrollTop > ( factC2Top ) && scrollTop < ( factC2Top + winH * 0.61) ) {
            $(".factory .img2-3").css({
                transform : "translateX("+ (-100 + fC2T_value * 0.15) +"%)",
            });
            $(".factory .img2-4").css({
                transform : "translateY("+ ( -fC2T_value * 0.5) +"px)",
            });
            $(".factory .p3").css({
                transform : "translateY("+ ( -fC2T_value * 0.3) +"px)",
            });
        }

        let factC4Top = $(".factory .c4").offset().top;
        let fC4T_value = scrollTop - factC4Top;
        if ( scrollTop + winH * 0.3  > ( factC2Top - winH * 0.5 ) ) {
            $(".factory .c4").css({
                transform : "translateY("+ ( - fC2T_value * 0.12) +"px)",
            });
        }
    });

    $(".footer").click(function () {
        $(this).css({
            background: "black",
        });
    });

    // footer top
    $(".footer img").click(function(){
        $('body,html').animate({scrollTop:0},2000);
        return false;
    });

});