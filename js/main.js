$(function () {

    // 헤더 모바일 아이콘 768이하 해상도, 나타남
    if ($(window).width() <= 768) {
        $(".mobile-menu").removeClass("off");
    }

    // 헤더 모바일 아이콘 768이하 해상도, 나타남
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $(".mobile-menu").removeClass("off");
        } else {
            $(".mobile-menu").addClass("off");
        }
    });

    // 헤더 유저아이콘 클릭 로그인팝업
    $(".header .sub_gnb li:nth-child(3)").click(function () {
        $(".popUp.logIn").addClass("on");
        $("body").addClass("stop");
    });
    // 로그인팝업 엑스 클릭
    $(".popUp.logIn .logIn .close_btn").click(function () {
        $(".popUp.logIn").removeClass("on");
        $("body").removeClass("stop");
    });
    // 모바일 햄버거메뉴 클릭 메뉴팝업
    $(".mobile-menu").click(function () {
        $(".popUp.m_GNB").stop().slideToggle(400);
        $("body").addClass("stop");
    });
    // 모바일 햄버거메뉴 엑스 클릭
    $(".popUp.m_GNB .m_GNB .close_btn").click(function () {
        $(".popUp.m_GNB").stop().slideToggle(400);
        $("body").removeClass("stop");
    });

    // ---------- main icon ---------- //
    let newTop = $("section.new").offset().top;
    $(".visual .iconGNB li:nth-child(4) img").click(function () {
        $("html, body").stop().animate({scrollTop: newTop - winH * 0.3 }, 1800, "easeInOutQuart");
    });
    console.log(newTop);

    // ---------- rank ---------- //
    // rank item 좋아요
    $(".ranking .contents .items .wrap .icon li:nth-child(1)").click(function () {
        $(this).toggleClass("active");
    });

    // rank
    if ( $(window).width() > 590) {
        // rank 애니메이션 2초동안 순서대로 active
        let a = 0;
        const rank = $(".ranking .contents .rank li");
        let test = setInterval(function () {
            rank.removeClass("active");
            rank.eq(a++).addClass("active");
            if (a >= 6) {
                a = 0
            }
        }, 2000)
        // rank mouseenter,leave
        rank.on("mouseenter", function () {
            clearInterval(test);
            rank.removeClass("active");
            let $index = $(this).index(); // rank items 연결
            $(".ranking .contents .items .wrap .desc, .ranking .contents .items .wrap .icon").removeClass("on");
            $(".ranking .contents .items .wrap").eq($index).children(".desc").addClass("on");
            $(".ranking .contents .items .wrap").eq($index).children(".icon").addClass("on");
        }).on("mouseleave", function () {
            rank.removeClass("active");
            test = setInterval(function () {
                rank.removeClass("active");
                rank.eq(a++).addClass("active");
                if (a >= 6) {a = 0}
            }, 2000);
            let $index = $(this).index(); // rank items 해제
            $(".ranking .contents .items .wrap .desc, .ranking .contents .items .wrap .icon").removeClass("on");
        });
        // item mouseenter,leave
        $(".ranking .contents .items .wrap").on("mouseenter", function () {
            clearInterval(test);
            rank.removeClass("active");
            let $index = $(this).index(); // rank items 연결
            $(".ranking .contents .rank li").removeClass("active");
            $(".ranking .contents .rank li").eq($index).addClass("active");
        }).on("mouseleave", function () {
            rank.removeClass("active");
            test = setInterval(function () {
                rank.removeClass("active");
                rank.eq(a++).addClass("active");
                if (a >= 6) {a = 0}
            }, 2000);
            let $index = $(this).index(); // rank items 해제
            $(".ranking .contents .rank li").removeClass("active");
        });
    }
    else if ($(window).width() <= 590) {
        // rank 애니메이션 2초동안 순서대로 active
        let a = 0;
        const rank = $(".ranking .contents .rank li");
        let test = setInterval(function () {
            rank.removeClass("active");
            rank.eq(a++).addClass("active");
            if (a >= 6) {
                a = 0
            }
        }, 2000)
        // item 애니메이션 2초동안 순서대로 show
        let b = 0;
        const items = $(".ranking .contents .items .wrap");
        let test2 = setInterval(function () {
            items.removeClass("show");
            items.eq(b++).addClass("show");
            if (b >= 6) {
                b = 0
            }
        }, 2000)
        // rank mouseenter,leave
        $(".ranking .contents .rank li").on("mouseenter", function () {
            clearInterval(test);
            clearInterval(test2);
            rank.removeClass("active");
            items.removeClass("show");
            let $index = $(this).index(); // rank items 연결
            $(".ranking .contents .items .wrap").eq($index).addClass("show");
        }).on("mouseleave", function () {
            rank.removeClass("active");
            test = setInterval(function () {
                rank.removeClass("active");
                rank.eq(a++).addClass("active");
                if (a >= 6) {a = 0}
            }, 2000);
            test2 = setInterval(function () {
                items.removeClass("show");
                items.eq(b++).addClass("show");
                if (b >= 6) {
                    b = 0
                }
            }, 2000)
        });
        // item mouseenter,leave
        $(".ranking .contents .items .wrap").on("mouseenter", function () {
            clearInterval(test);
            clearInterval(test2);
        }).on("mouseleave", function () {
            rank.removeClass("active");
            test = setInterval(function () {
                rank.removeClass("active");
                rank.eq(a++).addClass("active");
                if (a >= 6) {a = 0}
            }, 2000);
            test2 = setInterval(function () {
                items.removeClass("show");
                items.eq(b++).addClass("show");
                if (b >= 6) {
                    b = 0
                }
            }, 2000)
        });
    }

    // rank 윈도우 리사이즈
    $(window).resize(function () {
        if ($(window).width() > 590) {
            // rank 애니메이션 2초동안 순서대로 active
            let a = 0;
            const rank = $(".ranking .contents .rank li");
            let test = setInterval(function () {
                rank.removeClass("active");
                rank.eq(a++).addClass("active");
                if (a >= 6) {
                    a = 0
                }
            }, 2000)
            // rank mouseenter,leave
            rank.on("mouseenter", function () {
                clearInterval(test);
                rank.removeClass("active");
                let $index = $(this).index(); // rank items 연결
                $(".ranking .contents .items .wrap .desc, .ranking .contents .items .wrap .icon").removeClass("on");
                $(".ranking .contents .items .wrap").eq($index).children(".desc").addClass("on");
                $(".ranking .contents .items .wrap").eq($index).children(".icon").addClass("on");
            }).on("mouseleave", function () {
                rank.removeClass("active");
                test = setInterval(function () {
                    rank.removeClass("active");
                    rank.eq(a++).addClass("active");
                    if (a >= 6) {a = 0}
                }, 2000);
                let $index = $(this).index(); // rank items 해제
                $(".ranking .contents .items .wrap .desc, .ranking .contents .items .wrap .icon").removeClass("on");
            });
            // item mouseenter,leave
            $(".ranking .contents .items .wrap").on("mouseenter", function () {
                clearInterval(test);
                rank.removeClass("active");
                let $index = $(this).index(); // rank items 연결
                $(".ranking .contents .rank li").removeClass("active");
                $(".ranking .contents .rank li").eq($index).addClass("active");
            }).on("mouseleave", function () {
                rank.removeClass("active");
                test = setInterval(function () {
                    rank.removeClass("active");
                    rank.eq(a++).addClass("active");
                    if (a >= 6) {a = 0}
                }, 2000);
                let $index = $(this).index(); // rank items 해제
                $(".ranking .contents .rank li").removeClass("active");
            });
        } else if ($(window).width() <= 590) {
            // rank 애니메이션 2초동안 순서대로 active
            let a = 0;
            const rank = $(".ranking .contents .rank li");
            let test = setInterval(function () {
                rank.removeClass("active");
                rank.eq(a++).addClass("active");
                if (a >= 6) {
                    a = 0
                }
            }, 2000)
            // item 애니메이션 2초동안 순서대로 show
            let b = 0;
            const items = $(".ranking .contents .items .wrap");
            let test2 = setInterval(function () {
                items.removeClass("show");
                items.eq(b++).addClass("show");
                if (b >= 6) {
                    b = 0
                }
            }, 2000)
            // rank mouseenter,leave
            $(".ranking .contents .rank li").on("mouseenter", function () {
                clearInterval(test);
                clearInterval(test2);
                rank.removeClass("active");
                items.removeClass("show");
                let $index = $(this).index(); // rank items 연결
                $(".ranking .contents .items .wrap").eq($index).addClass("show");
            }).on("mouseleave", function () {
                rank.removeClass("active");
                test = setInterval(function () {
                    rank.removeClass("active");
                    rank.eq(a++).addClass("active");
                    if (a >= 6) {a = 0}
                }, 2000);
                test2 = setInterval(function () {
                    items.removeClass("show");
                    items.eq(b++).addClass("show");
                    if (b >= 6) {
                        b = 0
                    }
                }, 2000)
            });
            // item mouseenter,leave
            $(".ranking .contents .items .wrap").on("mouseenter", function () {
                clearInterval(test);
                clearInterval(test2);
            }).on("mouseleave", function () {
                rank.removeClass("active");
                test = setInterval(function () {
                    rank.removeClass("active");
                    rank.eq(a++).addClass("active");
                    if (a >= 6) {a = 0}
                }, 2000);
                test2 = setInterval(function () {
                    items.removeClass("show");
                    items.eq(b++).addClass("show");
                    if (b >= 6) {
                        b = 0
                    }
                }, 2000)
            });
        }
    });


    // ---------- NEW ---------- // 슬라이드
    const itemSlider = $(".new .contents .item-slider");
    let $current;
    let $totalCount;
    let $firstBar;

    itemSlider.on("init", function (event, slick) {
        updateSlide_count(slick);
        $(".progress").css({width: ( $firstBar * 100 ) + "%",});
    });

    itemSlider.on("beforeChange", function (event, slick, nextSlide) {
        updateSlide_count(slick, nextSlide);
        $(".progress").css({width: ( nextSlide / ($totalCount - 1) * 100 ) + "%",});
    });

    function updateSlide_count(event, next) {
        $current = event.currentSlide;
        $totalCount = event.slideCount;
        $firstBar = $current / ( $totalCount - 1 );
    }

    $(itemSlider).slick({
        arrows: false,
        autoplay: true,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    focusOnSelect: false,
                }
            }]
    });

    // ---------- THEME ---------- // video control
    $(".videoBtn button").click(function () {
        if ( $(this).hasClass("videoPlay") ) {
            $("#themeVideo").get(0).play();
            $(this).css({ display : "none",});
            $(this).siblings("button").css({ display : "block",});
        } else {
            $("#themeVideo").get(0).pause();
            $(this).css({ display : "none",});
            $(this).siblings("button").css({ display : "block",});
        }
    });

    // 비디오 재생중일때 일시정지버튼이 계속있지않고 화면에 마우스오버했을때 나타나게
    // $("#themeVideo").get(0).played(function () {
    //     if ( $(this).mouseenter() ) {
    //         $(this).siblings().children("button.videoPause").css({ display : "block",});
    //     }
    // });

    // main visual 슬라이드
    const visualSlide = $(".visual .visual-slider");
    const visualText = $(".visual .visual-text .title");
    visualSlide.on("init", function (event, slick) { // 초기화
        $(visualText).eq(slick.currentSlide).addClass("active");
    });
    visualSlide.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(visualText).removeClass("active").eq(nextSlide).addClass("active");
    });

    $(visualSlide).slick({
        dots: true,
        arrows: true,
        prevArrow: $(".visual .left-btn"),
        nextArrow: $(".visual .right-btn"),
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 900,
        slidesToShow: 1,
        initialSlide: 0,
    });

    // life scroll event
    let scrollTop;
    let lifeTop = $("section.life").offset().top;
    let winH = $(window).height();
    let winW = $(window).width();

    if ($(window).width() > 1180) {
        $(window).scroll(function () {
            scrollTop = $(this).scrollTop();
            let lifeValue = scrollTop - lifeTop;

            if ( scrollTop > ( lifeTop - winH * 0.8) && scrollTop < $("section.theme").offset().top ) {

                if ( scrollTop > ( lifeTop - winH * 0.8) ) {

                    $(".life .s1").css({
                        top : 500 + -lifeValue * 0.6 + "px",
                    });

                    $(".life .con.first").css({
                        transform : "translateY(" + (-lifeValue * 0.2) + "px)",
                    });
                }
                if ( scrollTop > ( lifeTop ) ) {

                    $(".life .s2").css({
                        top : 1550 + -lifeValue * 0.5 + "px",
                    });
                    $(".life .con.second").css({
                        transform : "translateY("  + ( -lifeValue * 0.1) + "px)",
                    });
                }
                if ( scrollTop > ( lifeTop + winH * 0.4 ) ) {

                    $(".life .s3").css({
                        top : 2450 + -lifeValue * 0.5 + "px",
                    });
                    $(".life .con.third").css({
                        transform : "translateY("  + ( 400 -lifeValue * 0.25) + "px)",
                    });
                }
            }
        });
    }
    else if ($(window).width() < 1180 && $(window).width() > 768) {
        $(window).scroll(function () {
            scrollTop = $(this).scrollTop();
            let lifeValue = scrollTop - lifeTop;

            if ( scrollTop > ( lifeTop - winH * 0.8) && scrollTop < $("section.theme").offset().top ) {

                if ( scrollTop > ( lifeTop - winH * 0.8) ) {

                    $(".life .s1").css({
                        top : 350 + -lifeValue * 1.1 + "px",
                    });

                    $(".life .con.first").css({
                        transform : "translateY(" + (-lifeValue * 0.2) + "px)",
                    });
                }
                if ( scrollTop > ( lifeTop ) ) {

                    $(".life .s2").css({
                        top : 1100 + -lifeValue * 0.8 + "px",
                    });
                    $(".life .con.second").css({
                        transform : "translateY("  + ( -lifeValue * 0.1) + "px)",
                    });
                }
                if ( scrollTop > ( lifeTop + winH * 0.4 ) ) {

                    $(".life .s3").css({
                        top : 1700 + -lifeValue * 0.4 + "px",
                    });
                    $(".life .con.third").css({
                        transform : "translateY("  + ( 300 -lifeValue * 0.2) + "px)",
                    });
                }
            }
        });
    }

    $(window).resize(function(){
        if ($(window).width() > 1180) {
            $(window).scroll(function () {
                scrollTop = $(this).scrollTop();
                let lifeValue = scrollTop - lifeTop;

                if ( scrollTop > ( lifeTop - winH * 0.8) && scrollTop < $("section.theme").offset().top ) {

                    if ( scrollTop > ( lifeTop - winH * 0.8) ) {

                        $(".life .s1").css({
                            top : 500 + -lifeValue * 0.6 + "px",
                        });

                        $(".life .con.first").css({
                            transform : "translateY(" + (-lifeValue * 0.2) + "px)",
                        });
                    }
                    if ( scrollTop > ( lifeTop ) ) {

                        $(".life .s2").css({
                            top : 1550 + -lifeValue * 0.5 + "px",
                        });
                        $(".life .con.second").css({
                            transform : "translateY("  + ( -lifeValue * 0.1) + "px)",
                        });
                    }
                    if ( scrollTop > ( lifeTop + winH * 0.4 ) ) {

                        $(".life .s3").css({
                            top : 2450 + -lifeValue * 0.5 + "px",
                        });
                        $(".life .con.third").css({
                            transform : "translateY("  + ( 400 -lifeValue * 0.25) + "px)",
                        });
                    }
                }
            });
        } else if ($(window).width() < 1180 && $(window).width() > 768) {
            $(window).scroll(function () {
                scrollTop = $(this).scrollTop();
                let lifeValue = scrollTop - lifeTop;

                if ( scrollTop > ( lifeTop - winH * 0.8) && scrollTop < $("section.theme").offset().top ) {

                    if ( scrollTop > ( lifeTop - winH * 0.8) ) {

                        $(".life .s1").css({
                            top : 350 + -lifeValue * 1.1 + "px",
                        });

                        $(".life .con.first").css({
                            transform : "translateY(" + (-lifeValue * 0.2) + "px)",
                        });
                    }
                    if ( scrollTop > ( lifeTop ) ) {

                        $(".life .s2").css({
                            top : 1100 + -lifeValue * 0.8 + "px",
                        });
                        $(".life .con.second").css({
                            transform : "translateY("  + ( -lifeValue * 0.1) + "px)",
                        });
                    }
                    if ( scrollTop > ( lifeTop + winH * 0.4 ) ) {

                        $(".life .s3").css({
                            top : 1700 + -lifeValue * 0.4 + "px",
                        });
                        $(".life .con.third").css({
                            transform : "translateY("  + ( 300 -lifeValue * 0.2) + "px)",
                        });
                    }
                }
            });
        }
    });

});