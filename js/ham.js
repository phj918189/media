

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