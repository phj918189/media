$(function () {
  var winHeight = $(window).height();
  var headerHeight = $("header").height();
  var menuBreakpoint = 768;
  var desktopNav = 1;

  function updateTopButton() {
    var scroll = $(window).scrollTop();
    if (scroll > winHeight) {
      $(".topMove").fadeIn("slow");
    } else {
      $(".topMove").fadeOut("fast");
    }
  }

  function updateHeaderState() {
    $("#headerArea").toggleClass("scrolled", $(window).scrollTop() > 40);
  }

  function openMenu() {
    $("body").css("overflow", "hidden");
    $(".box").show().animate({ opacity: 1 }, 500);
    $("#gnb").animate({ right: 0, opacity: 1 }, 500);
  }

  function closeMenu() {
    $("body").css("overflow", "");
    $(".box").animate({ opacity: 0 }, 500, function () {
      $(this).hide();
    });
    $("#gnb").animate({ right: "-100%", opacity: 0 }, 500);
  }

  function resetNavForViewport() {
    var screenSize = $(window).width();

    if (screenSize > menuBreakpoint) {
      $("#gnb").css({ right: 0, opacity: 1 });
      $(".box").hide().css({ opacity: 0 });
      $("body").css("overflow", "");
      desktopNav = 1;
      return;
    }

    if (desktopNav === 1) {
      $("#gnb").css({ right: "-100%", opacity: 0 });
      $(".box").hide().css({ opacity: 0 });
      $("body").css("overflow", "");
      desktopNav = 0;
    }
  }

  function setActiveNavLink() {
    var params = new URLSearchParams(window.location.search);
    var num = params.get("num");
    var links = $("#gnb ul li h3 a");

    if (!links.length) {
      return;
    }

    links.removeClass("active");

    if (num) {
      links.filter('[href*="num=' + num + '"]').addClass("active");
      return;
    }

    if (/\/index\.html?$/.test(window.location.pathname) || window.location.pathname.endsWith("/")) {
      return;
    }
  }

  $(window).on("scroll", function () {
    updateTopButton();
    updateHeaderState();
  });

  $(window).on("resize", function () {
    winHeight = $(window).height();
    headerHeight = $("header").height();
    resetNavForViewport();
  });

  $(".topMove").on("click", function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 1000);
  });

  $(".menuOpen").on("click", function (e) {
    e.preventDefault();
    openMenu();
  });

  $(".close, .box").on("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  resetNavForViewport();
  setActiveNavLink();
  updateTopButton();
  updateHeaderState();
});
