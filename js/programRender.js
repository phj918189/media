(function () {
  "use strict";

  function textWithBr(text) {
    return String(text)
      .split("\n")
      .map(function (line) {
        return line;
      })
      .join("<br>");
  }

  function createProgramSection(data) {
    var rootList = document.createElement("ul");

    var infoItem = document.createElement("li");
    var infoInnerList = document.createElement("ul");

    var wodItem = document.createElement("li");
    var wodTitle = document.createElement("strong");
    wodTitle.textContent = data.wod.date + " WOD";
    var wodBreak = document.createElement("br");
    var wodName = document.createElement("span");
    wodName.textContent = data.wod.title;
    var wodDesc = document.createElement("p");
    wodDesc.innerHTML = textWithBr(data.wod.description.join("\n")) + "<br>";

    wodItem.appendChild(wodTitle);
    wodItem.appendChild(wodBreak);
    wodItem.appendChild(wodName);
    wodItem.appendChild(wodDesc);

    var weightItem = document.createElement("li");
    var weightTitle = document.createElement("strong");
    weightTitle.textContent = "Weightlifting";
    var weightList = document.createElement("dl");

    data.weightlifting.forEach(function (entry) {
      var term = document.createElement("dt");
      term.textContent = entry.name;
      var detail = document.createElement("dd");
      detail.textContent = entry.value;
      weightList.appendChild(term);
      weightList.appendChild(detail);
    });

    weightItem.appendChild(weightTitle);
    weightItem.appendChild(weightList);

    infoInnerList.appendChild(wodItem);
    infoInnerList.appendChild(weightItem);
    infoItem.appendChild(infoInnerList);
    rootList.appendChild(infoItem);

    var aosAnimations = [
      "fade-down-right",
      "fade-down-left",
      "fade-up-right",
      "fade-up-left"
    ];

    data.programs.forEach(function (program, index) {
      var item = document.createElement("li");
      item.setAttribute("data-aos", aosAnimations[index] || "fade-up");

      var image = document.createElement("img");
      image.src = program.img;
      image.alt = "";

      var text = document.createElement("span");
      text.className = "heroTxt";
      text.innerHTML = textWithBr(program.text) + "<br>";

      item.appendChild(image);
      item.appendChild(text);
      rootList.appendChild(item);
    });

    return rootList;
  }

  function renderProgram() {
    var container = document.getElementById("programRenderRoot");

    if (!container || typeof programData === "undefined") {
      return;
    }

    container.innerHTML = "";
    container.appendChild(createProgramSection(programData));

    if (window.AOS && typeof window.AOS.refreshHard === "function") {
      window.AOS.refreshHard();
    } else if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }

  document.addEventListener("DOMContentLoaded", renderProgram);
})();
