
$(document).ready(function() {

    $(".menuOpen").click(function (e) {
      e.preventDefault();
      $("body").css("overflow", "hidden");
  
      $('.box').show().animate({
          opacity: 1
      }, 500);
  
      $("#gnb").animate({
          right: 0,
          opacity: 1
      }, 500);
    });
  
    $(".close, .box").click(function (e) {
      e.preventDefault();
      $("body").css("overflow", "");
  
      $('.box').animate({
          opacity: 0
      }, 500, function () {
          $(this).hide();
      });
  
      $("#gnb").animate({
          right: '-100%',
          opacity: 0
      }, 500);
    });
  
    var current = 0;
  
    $(window).resize(function () {
      var screenSize = $(window).width();
  
      if (screenSize > 768) {
        $("#gnb").css({
            right: 0,
            opacity: 1
        });
        $('.box').hide().css({ opacity: 0 });
        $("body").css("overflow", "");
        current = 1;
      }
  
      if (current == 1 && screenSize <= 768) {
        $("#gnb").css({
            right: '-100%',
            opacity: 0
        });
        $('.box').hide().css({ opacity: 0 });
        $("body").css("overflow", "");
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


//   const header = document.getElementById("headerArea");

//   function handleHeaderScroll() {
//     if (window.scrollY > 40) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   }

//   window.addEventListener("scroll", handleHeaderScroll);
//   handleHeaderScroll();
