var audio=document.getElementById('main_audio');
var currnum = 1;  //현재 선택된 사운드 순서
var ps=false; //false(stop), true(play)
var track = ['All By Myself','MANIAC','운동하자','울끈불끈 사랑'];
var tit = ['Defconn','Stray Kids','건이','Gwanna'];

function changeSound(num){  // 1 2 3
    $('.playerImg img').attr('src','./images/music/plates_'+num+'.png');
    $('#main_audio').attr('src','./images/music/music'+num+'.mp3');
    audio.play();
    $('.playerImg img').addClass("current");
    $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');

    $('.playInfo li a').removeClass('curr');
    $('.playInfo li:eq('+(num-1)+') a').addClass('curr');
    currnum = num;
    ps=true;

    $('.playerWrap dt').text(track[num-1]);
    $('.playerWrap dd').text(tit[num-1]);
    
}

$('#controlPlay').click(function(e){
    e.preventDefault();

    if(ps==false){ //중지중이면
        audio.play();
        $('.playerImg img').addClass("current");
        $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');
        ps=true;
    }else{  //재생중이면
        audio.pause();
        $('.playerImg img').removeClass("current");
        $('#controlPlay i').removeClass().addClass('fa-solid fa-play');
        ps=false;
    }
});


function np_play(){
    $('.playerImg img').addClass("current");

    $('.playInfo li a').removeClass('curr');
    $('.playInfo li:eq('+(currnum-1)+') a').addClass('curr');

    $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');
    ps=true;

    $('#main_audio').attr('src','./images/music/music'+currnum+'.mp3');
    audio.play();

    $('.playerWrap dt').text(track[currnum-1]);
    $('.playerWrap dd').text(tit[currnum-1]);
}

$('#controlNext').click(function(e){  //다음버튼 클릭시
    e.preventDefault();

    currnum++; // 1 2 3 4
    if(currnum==4)currnum=1;
    $('.playerImg img').attr('src','./images/music/plates_'+currnum+'.png');
    np_play(); //재생한다
});


$('#controlPrev').click(function(e){ //이전버튼 클릭시
    e.preventDefault();

    currnum--; // 4 3 2 1
    if(currnum==0)currnum=3;
    $('.playerImg img').attr('src','./images/music/plates_'+currnum+'.png');
    np_play();//재생한다
});
