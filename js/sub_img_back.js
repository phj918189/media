$(document).ready(function () {
  var value = 1;

  function getPageNum() {
    var params = new URLSearchParams(window.location.search);
    var num = Number(params.get("num"));

    if (num >= 1 && num <= 5) {
      return num;
    }

    return 1;
  }

  value = getPageNum();

  function screenSize() {
    var width = $(window).width();
    var height = $(window).height();

    $("#content").css("margin-top", height);

    if (width > 768) {
      $("#imgBG").attr("src", "../images/sub" + value + "_big.jpg");
    } else {
      $("#imgBG").attr("src", "../images/sub" + value + "_small.jpg");
    }
  }

  screenSize();

  $(window).on("resize", screenSize);

  $(".down").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(window).height() }, 1000);
  });
});
