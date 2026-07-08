

const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-form");
const closePopup = document.getElementById("close-popup");

const forms = {
  "free-trial": {
    title: "무료체험 신청",
    fields: `
      <label for="popup-name-free">이름</label>
      <input type="text" id="popup-name-free" name="name" required>
      <label for="popup-experience-free">경험</label>
      <select id="popup-experience-free" name="experience" required>
        <option value="yes">있음</option>
        <option value="no">없음</option>
      </select>
      <label for="popup-time-free">시간</label>
      <select id="popup-time-free" name="time" required>
        <option>오전 9:00</option>
        <option>오전 10:30</option>
        <option>오후 6:00</option>
        <option>오후 7:30</option>
        <option>오후 9:00</option>
      </select>
      <label for="popup-people-free">인원</label>
      <input type="number" id="popup-people-free" name="people" min="1" required>
    `
  },
  "drop-in": {
    title: "드랍인 문의 및 신청",
    fields: `
      <label for="popup-name-drop">이름</label>
      <input type="text" id="popup-name-drop" name="name" required>
      <label for="popup-people-drop">인원</label>
      <input type="number" id="popup-people-drop" name="people" min="1" required>
      <label for="popup-time-drop">시간</label>
      <select id="popup-time-drop" name="time" required>
        <option>오전 9:00</option>
        <option>오전 10:30</option>
        <option>오후 6:00</option>
        <option>오후 7:30</option>
        <option>오후 9:00</option>
        <option>Open Gym</option>
      </select>
    `
  },
  consult: {
    title: "상담 예약",
    fields: `
      <label for="popup-name-consult">이름</label>
      <input type="text" id="popup-name-consult" name="name" required>
      <label for="popup-experience-consult">경험</label>
      <select id="popup-experience-consult" name="experience" required>
        <option value="yes">있음</option>
        <option value="no">없음</option>
      </select>
      <label for="popup-visit-time">시간</label>
      <input type="datetime-local" id="popup-visit-time" name="visit-time" required>
    `
  }
};

function openPopup(formKey) {
  if (!popup || !popupContent || !forms[formKey]) {
    return;
  }

  var config = forms[formKey];
  popupContent.innerHTML =
    "<h3>" +
    config.title +
    '</h3><form class="popup-form" data-form-key="' +
    formKey +
    '">' +
    config.fields +
    '<button type="submit">신청하기</button></form>';

  popup.classList.remove("hidden");
  popup.setAttribute("aria-hidden", "false");

  var form = popupContent.querySelector("form");
  if (form) {
    form.addEventListener("submit", handlePopupSubmit);
  }
}

function handlePopupSubmit(event) {
  event.preventDefault();
  var form = event.currentTarget;
  var formKey = form.getAttribute("data-form-key");
  var title = forms[formKey] ? forms[formKey].title : "문의";
  window.alert(title + " 요청이 접수되었습니다.\n포트폴리오 데모 페이지이므로 실제 전송은 되지 않습니다.");
  closePopupHandler();
}

function closePopupHandler() {
  if (!popup || !popupContent) {
    return;
  }

  popup.classList.add("hidden");
  popup.setAttribute("aria-hidden", "true");
  popupContent.innerHTML = "";
}

if (document.getElementById("free-trial-btn")) {
  document.getElementById("free-trial-btn").addEventListener("click", function () {
    openPopup("free-trial");
  });
}

if (document.getElementById("drop-in-btn")) {
  document.getElementById("drop-in-btn").addEventListener("click", function () {
    openPopup("drop-in");
  });
}

if (document.getElementById("consult-btn")) {
  document.getElementById("consult-btn").addEventListener("click", function () {
    openPopup("consult");
  });
}

if (closePopup) {
  closePopup.addEventListener("click", closePopupHandler);
}

if (popup) {
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopupHandler();
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && popup && !popup.classList.contains("hidden")) {
    closePopupHandler();
  }
});
