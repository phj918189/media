$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  
  
});

jQuery(window).on('scroll', function() {
	// stop telling people to scroll when they're scrolled
	var window_offset = jQuery(window).scrollTop() - jQuery('body').offset().top;

	if (window_offset > 10) {

		jQuery('.scroll-indicator').addClass('off');

	} else {

		jQuery('.scroll-indicator').removeClass('off');

	}

});

$('#content .sec3 .container .image11').mouseenter(function(){
     $('#content .sec3 .container .image11').find('img').css('filter','sepia(70%) brightness(50%) contrast(100%)');
     $(this).find('img').css('filter','sepia(0) brightness(100%) contrast(130%)');
});

$('#content .sec3 .container').mouseleave(function(){
  $('#content .sec3 .container .image11').find('img').css('filter','sepia(0) brightness(100%) contrast(100%)');
});