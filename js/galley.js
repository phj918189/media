var grid = document.querySelector('.grid');

    var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
    });

    imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
    });


// 768이하에서 이미지 체인지

// document.addEventListener("DOMContentLoaded", function(){
//     function updateImagesForMobile(){
//         const images = document.querySelectorAll(".grid-item img");
//         images.forEach((img) => {
//             const originalSrc = img.getAttribute("src");
//             const mobileSrc = originalSrc.replace(".jpg", "-mobile.jpg");
//             if(window.innerWidth <= 768){
//                 img.setAttribute("src", mobileSrc);
//             }else{
//                 img.setAttribute("src", originalSrc)
//             }
//         });
//     }
//     updateImagesForMobile();

//     window.addEventListener("resize", updateImagesForMobile);

// });