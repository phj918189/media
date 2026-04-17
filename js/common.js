$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var win_height =$(window).height();
    var header_height =$('header').height();
   
    if(scroll>win_height){ //300이상의 거리가 발생되면
        $('.topMove').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.topMove').fadeOut('fast');//top안보여라~~~~
    }

    if(scroll>win_height-header_height){ //300이상의 거리가 발생되면
        $('header').css('background','white').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.4)');  //top보여라~~~~
    }else{
        $('header').css('background','rgba(255,255,255,.4)').css('box-shadow','none'); //top안보여라~~~~
    }
});

$('.topMove').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});


$(document).ready(function() {

  $(".menuOpen").click(function (e) {
    e.preventDefault();
    $('.box').animate({
        opacity: 1
    }, 500).show();
    $("#gnb").animate({
        right: 0,
        opacity: 1
    }, 500);
});

$(".close, .box").click(function (e) {
    e.preventDefault();
    $('.box').animate({
        opacity: 0
    }, 500).hide();
    $("#gnb").animate({
        right: '-100%',
        opacity: 0
    }, 500);
});

var current = 0; //1(소형테블릿이상) , 0(모바일)
$(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    var screenSize = $(window).width();
    if (screenSize > 768) { //소형테블릿 이상
        $("#gnb").css({
            right: 0,
            opacity: 1
        });
        //   $("#gnb").height('auto');
        current = 1;
    }
    if (current == 1 && screenSize <= 768) {
        $("#gnb").css({
            right: '-100%',
            opacity: 0
        });
        // $("#gnb").height(documentHeight);
        current = 0;
    }
});
});

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $("#headerArea").addClass("scrolled");
    } else {
      $("#headerArea").removeClass("scrolled");
    }
  });

  $(window).trigger("scroll");