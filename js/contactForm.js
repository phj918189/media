document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.querySelector("#content form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.alert("문의가 접수되었습니다.\n포트폴리오 데모 페이지이므로 실제 전송은 되지 않습니다.");
      contactForm.reset();
    });
  }
});
