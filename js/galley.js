document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".grid");

  if (!grid || typeof Masonry === "undefined" || typeof imagesLoaded === "undefined") {
    return;
  }

  var msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true
  });

  imagesLoaded(grid).on("progress", function () {
    msnry.layout();
  });
});
