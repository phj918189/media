(function () {
  "use strict";

  function toBrText(lines) {
    return lines.join("<br>");
  }

  function renderAbout() {
    var root = document.getElementById("about-root");
    var section = document.querySelector("#content .sec1");

    if (!root || !section || typeof aboutData === "undefined") {
      return;
    }

    var sectionTitle = section.querySelector("h3");
    if (sectionTitle) {
      sectionTitle.textContent = aboutData.coach.sectionTitle;
    }

    root.innerHTML = "";

    var coachTitle = document.createElement("h4");
    coachTitle.setAttribute("data-aos", "fade-right");
    coachTitle.textContent = aboutData.coach.title;

    var speech = document.createElement("div");
    speech.className = "speech";
    speech.setAttribute("data-aos", "fade-right");

    var speechText = document.createElement("p");
    speechText.innerHTML = toBrText(aboutData.coach.description);

    var imageWrap = document.createElement("div");
    imageWrap.setAttribute("data-aos", "fade-left");

    var coachImage = document.createElement("img");
    coachImage.src = aboutData.coach.image;
    coachImage.alt = "";
    coachImage.setAttribute("data-aos", "fade-left");

    imageWrap.appendChild(coachImage);
    speech.appendChild(speechText);
    speech.appendChild(imageWrap);

    var licenseList = document.createElement("ul");
    licenseList.className = "license";

    aboutData.licenses.forEach(function (licenseImage, index) {
      var item = document.createElement("li");
      item.setAttribute("data-aos", index % 2 === 0 ? "fade-up" : "fade-down");

      var image = document.createElement("img");
      image.src = licenseImage;
      image.alt = "";

      item.appendChild(image);
      licenseList.appendChild(item);
    });

    root.appendChild(coachTitle);
    root.appendChild(speech);
    root.appendChild(licenseList);

    if (window.AOS && typeof window.AOS.refreshHard === "function") {
      window.AOS.refreshHard();
    } else if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }

  document.addEventListener("DOMContentLoaded", renderAbout);
})();
