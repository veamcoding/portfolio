$(function () {

    // $(".character .lion-btn").click(function () {
        // $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        // let $items = $(".items .contents .con");
        // if ( $items.children("i").text() === "라이언" ) {
        //     $(this).addClass("off")
        // }
        // $(".items .contents .con:not(.lion)").css("display", "none");
    // });

    let navTop = $(".items .nav").offset().top;

    // 메인메뉴 - 카테메뉴 클릭 > 아래로이동 > 상품정렬
    let $items = $(".items .contents .con")
    $(".cate .all").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "block");
    });
    $(".cate .living").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.living").css("display", "block");
    });
    $(".cate .sta").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.sta").css("display", "block");
    });
    $(".cate .digital").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.tech").css("display", "block");
    });
    $(".cate .toy").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.toy").css("display", "block");
    });
    $(".cate .goods").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.goods").css("display", "block");
    });
    $(".cate .wear").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.clothes").css("display", "block");
    });
    $(".cate .travel").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeInOutQuart");
        $items.css("display", "none");
        $(".items .contents .con.travel").css("display", "block");
    });

    // 메인메뉴 - 테마 메뉴 클릭 > 아래로이동 > 상품정렬
    // $(".contents .menu ul:nth-child(2) li ul li").click(function () {
    //     $("html, body").stop().animate({scrollTop: navTop}, 1800, "easeOutBounce");
    //     let menuName = $(this).text();
    //     console.log(menuName);
    //     $( "em:contains(menuName)" ).parent().parent().css("display", "block");
    // });
    $(".letsSurf").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'em:contains("렛츠서프")' ).parent().parent().css("display", "block");
    });
    $(".oceanVibe").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'em:contains("오션바이브")' ).parent().parent().css("display", "block");
    });
    $(".packers").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'em:contains("백팩커스")' ).parent().parent().css("display", "block");
    });
    $(".paris").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'em:contains("파리에디션")' ).parent().parent().css("display", "block");
    });
    $(".kinto").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'em:contains("킨토")' ).parent().parent().css("display", "block");
    });

    // 메인메뉴 - 캐릭터 클릭 > 아래로이동 > 상품정렬
    $(".character .lion-btn").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'i:contains("라이언")' ).parent().parent().css("display", "block");
    });
    $(".character .ap-btn").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'i:contains("어피치")' ).parent().parent().css("display", "block");
    });
    $(".character .mz-btn").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'i:contains("무지")' ).parent().parent().css("display", "block");
    });
    $(".character .cs-btn").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'i:contains("춘식이")' ).parent().parent().css("display", "block");
    });
    $(".character .jordy-btn").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");
        $( 'i:contains("죠르디")' ).parent().parent().css("display", "block");
    });


    $(".price li:nth-child(1)").click(function () {
        $("html, body").stop().animate({scrollTop: navTop}, 1500, "easeInOutQuart");
        $items.css("display", "none");




        let itemPrice = $items.children("p").children("span").text()

        if (itemPrice <= 30000) {
            console.log(itemPrice);
          $(this).css("display", "block");
        }

    });





    // 필터아이콘 클릭 > 메뉴 슬라이드
    $(".filter_icon").click(function () {
       $(".slide-menu").slideToggle()
    });

});


