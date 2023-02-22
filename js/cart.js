$(function () {
    // 배송지변경 클릭 팝업
    $(".address-payment .address button").click(function () {
        $(".popUp .changeAddress").addClass("on");
        $("body").addClass("stop");
    });
    // 배송지변경 엑스 클릭
    $(".popUp .changeAddress .close_btn").click(function () {
        $(".popUp .changeAddress").removeClass("on");
        $("body").removeClass("stop");
    });

    // 장바구니
    $(".list input[type=button]").click(function () {
        const $this = $(this);
        const $obj = $(this).siblings("input[type=text]");
        let $value = $obj.val();
        if (  $this.val() === "-" ) {
            if ($value > 1) $obj.val( --$value );
        } else {
            if ($value < 10) $obj.val( ++$value );
        }
        amountPrice_Func();
    });
    amountPrice_Func();

    function amountPrice_Func() {
        // 리스트1번의 am-price 출력코드
        const $list_1 = $(".list1");
        const $price_1 = $list_1.find(".price").text().replace(/[^0-9]/g, "");
        const $val_1 = $list_1.find("input[type=text]").val();
        const $am_1 = parseInt($price_1) * parseInt($val_1);
        $list_1.find(".am-price").text(   $am_1.toLocaleString()  ); // 1번 장바구니의 합계

        // 리스트2번의 am-price 출력코드
        const $list_2 = $(".list2");
        const $price_2 = $list_2.find(".price").text().replace(/[^0-9]/g, "");
        const $val_2 = $list_2.find("input[type=text]").val();
        const $am_2 = parseInt($price_2) * parseInt($val_2);
        $list_2.find(".am-price").text( $am_2.toLocaleString() ); // 2번 장바구니의 합계

        // 리스트3번의 am-price 출력코드
        const $list_3 = $(".list3");
        const $price_3 = $list_3.find(".price").text().replace(/[^0-9]/g, "");
        const $val_3 = $list_3.find("input[type=text]").val();
        const $am_3 = parseInt($price_3) * parseInt($val_3);
        $list_3.find(".am-price").text( $am_3.toLocaleString() ); // 3번 장바구니의 합계

        // 리스트4번의 am-price 출력코드
        const $list_4 = $(".list4");
        const $price_4 = $list_4.find(".price").text().replace(/[^0-9]/g, "");
        const $val_4 = $list_4.find("input[type=text]").val();
        const $am_4 = parseInt($price_4) * parseInt($val_4);
        $list_4.find(".am-price").text( $am_4.toLocaleString() ); // 4번 장바구니의 합계

        // 리스트5번의 am-price 출력코드
        const $list_5 = $(".list5");
        const $price_5 = $list_5.find(".price").text().replace(/[^0-9]/g, "");
        const $val_5 = $list_5.find("input[type=text]").val();
        const $am_5 = parseInt($price_5) * parseInt($val_5);
        $list_5.find(".am-price").text( $am_5.toLocaleString() ); // 5번 장바구니의 합계

        // 리스트6번의 am-price 출력코드
        const $list_6 = $(".list6");
        const $price_6 = $list_6.find(".price").text().replace(/[^0-9]/g, "");
        const $val_6 = $list_6.find("input[type=text]").val();
        const $am_6 = parseInt($price_6) * parseInt($val_6);
        $list_6.find(".am-price").text( $am_6.toLocaleString() ); // 6번 장바구니의 합계


        totalPay_Func($am_1, $am_2, $am_3, $am_4, $am_5, $am_6,);
    }

    function totalPay_Func(a, b, c, d, e, f) {
        const $am_sum = a + b + c + d + e + f;
        const $total = $(".totalPrice-items");
        const $sale = $total.find(".salePrice").text().replace(/[^0-9]/g, "");
        const $delivery = $total.find(".deliveryPrice").text().replace(/[^0-9]/g, "");
        const $calc = $am_sum - parseInt($sale) + parseInt($delivery);

        $total.find(".amPrice-sum").text(  $am_sum.toLocaleString()  );
        $total.find(".totalPrice").text(  $calc.toLocaleString() );
    } // 장바구니 끝

    // 전체선택
    $("#selectAll").click(function() {
        if ($("#selectAll").prop("checked")) {
            $("input[name=chk]").prop("checked", true)
        } else {
            $("input[name=chk]").prop("checked", false)
        }
    });

    // 전체삭제
    $(".removeAll").click(function () {
        $(".cartList").children("li").addClass("off");
    });

    // 선택삭제


    // 리스트 휴지통
    $(".trash-btn").click(function () {
        $(this).closest(".list").addClass("off");
        // $(this).siblings(".quantity-box").children("input[type=checkbox]").val("0");
        // $(this).siblings(".itemAmount-price").children(".am-price").text("0");
        amountPrice_Func();
    });


});