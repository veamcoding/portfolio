 $(function () {

     // 푸터 top btn 클릭
     // $(".footer img").click(function () {
     //     window.scrollTo({top: 0, left: 0, behavior: "smooth"});
     // });
     $(".footer img").click(function(){
         $('body,html').animate({scrollTop:0},900);
         return false;
     });

 });