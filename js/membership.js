let win_width = $(window).width();
let ind;

function change(){
    win_width = $(window).width();

    if(win_width>768){
        $('.membership-item:eq(0) img').attr('src','../images/sub4/1.jpg');
        $('.membership-item:eq(1) img').attr('src','../images/sub4/2.jpg');
        $('.membership-item:eq(2) img').attr('src','../images/sub4/3.jpg');
        $('.membership-item:eq(3) img').attr('src','../images/sub4/4.jpg');
    }else{
        $('.membership-item:eq(0) img').attr('src','../images/sub4/1_hover.jpg');
        $('.membership-item:eq(1) img').attr('src','../images/sub4/2_hover.jpg');
        $('.membership-item:eq(2) img').attr('src','../images/sub4/3_hover.jpg');
        $('.membership-item:eq(3) img').attr('src','../images/sub4/4_hover.jpg');
    }
}
change();


$('.membership-item img').hover(function(){
    win_width = $(window).width();
    if(win_width>768){
        ind = $(this).index('.membership-item img');
        $('.membership-item:eq('+ind+') img').attr('src','../images/sub4/'+(ind+1)+'_hover.jpg');
    }
},function(){
    win_width = $(window).width();
    if(win_width>768){
        ind = $(this).index('.membership-item img');
        $('.membership-item:eq('+ind+') img').attr('src','../images/sub4/'+(ind+1)+'.jpg');
    }
});

$(window).resize(function(){
    change();
});
 




// Script
// function updateHoverImages() {
//     const isSmallScreen = window.innerWidth <= 768;
//     document.querySelectorAll('.membership-item img').forEach(img => {
//         if (isSmallScreen) {
//             img.src = img.src.replace('.jpg', '-hover.png'); // 항상 호버 이미지 표시
//         } 
//         else {
//             img.src = img.src.replace('-hover.png', '.jpg'); // 기본 이미지로 복원
//         }
//         img.src = img.src.replace('.jpg', '-hover.png');
//     });
// }
// updateHoverImages();

// window.addEventListener('resize', updateHoverImages);

// document.querySelectorAll('.membership-item').forEach(item =>{
//     item.addEventListener('mouseenter', () => {
//         if (window.innerWidth > 768){
//             const img = item.querySelector('img');
//             img.src = img.src.replace('.jpg', '-hover.png');
//         }
//     });

//     item.addEventListener('mouseleave', () => {
//         if (window.innerWidth > 768){
//             const img = item.querySelector('img');
//             img.src = img.src.replace('-hover.png', '.jpg');
//         }
//     })
// })



// Jquery

    // // 화면 크기에 따라 이미지 업데이트
    // function updateHoverImages() {
    //     const isSmallScreen = $(window).width() <= 768;
    //     $('.membership-item img').each(function () {
    //         const img = $(this);
    //         if (isSmallScreen) {
    //             img.attr('src', img.attr('src').replace('.png', '-hover.jpg')); // 항상 호버 이미지 표시
    //         } else {
    //             img.attr('src', img.attr('src').replace('-hover.jpg', '.png')); // 기본 이미지로 복원
    //         }
    //     });
    // }

    // // 초기화
    // updateHoverImages();

    // // 브라우저 크기 변경 시 이벤트 추가
    // $(window).resize(updateHoverImages);

    // // Hover 이벤트
    // $('.membership-item').hover(
    //     function () {
    //         if ($(window).width() > 768) {
    //             const img = $(this).find('img');
    //             img.attr('src', img.attr('src').replace('.png', '-hover.jpg')); // 기본 이미지를 호버 이미지로 변경
    //         }
    //     },
    //     function () {
    //         if ($(window).width() > 768) {
    //             const img = $(this).find('img');
    //             img.attr('src', img.attr('src').replace('-hover.jpg', '.png')); // 호버 이미지를 기본 이미지로 변경
    //         }
    //     }
    // );