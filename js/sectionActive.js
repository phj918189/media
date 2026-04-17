(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var sections = Array.from(document.querySelectorAll("#content > section"));
    var navLinks = Array.from(document.querySelectorAll("#gnb ul li h3 a")).slice(0, sections.length);
    var header = document.getElementById("headerArea");

    if (!sections.length || !navLinks.length) {
      return;
    }

    var sectionOffsets = [];
    var ticking = false;

    function setActive(index) {
      navLinks.forEach(function (link, linkIndex) {
        link.classList.toggle("active", linkIndex === index);
      });
    }

    function calculateOffsets() {
      sectionOffsets = sections.map(function (section) {
        return section.offsetTop;
      });
      updateActiveByScroll();
    }

    function updateActiveByScroll() {
      var headerHeight = header ? header.offsetHeight : 0;
      var position = window.scrollY + headerHeight + window.innerHeight * 0.25;
      var activeIndex = 0;

      for (var i = 0; i < sectionOffsets.length; i += 1) {
        if (position >= sectionOffsets[i]) {
          activeIndex = i;
        } else {
          break;
        }
      }

      setActive(activeIndex);
    }

    function onScroll() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(function () {
        updateActiveByScroll();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calculateOffsets);
    window.addEventListener("load", calculateOffsets);

    calculateOffsets();
  });
})();
