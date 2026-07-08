(function () {
  "use strict";

  function showMessage(title, message) {
    var messageBox = document.getElementById("auth-message");

    if (!messageBox) {
      window.alert(title + "\n" + message);
      return;
    }

    messageBox.hidden = false;
    messageBox.innerHTML = "<strong>" + title + "</strong><p>" + message + "</p>";
  }

  window.submitLogin = function () {
    var username = document.getElementById("login-username");
    var password = document.getElementById("login-password");

    if (!username || !password || !username.value.trim() || !password.value.trim()) {
      showMessage("입력 확인", "아이디와 비밀번호를 모두 입력해 주세요.");
      return;
    }

    showMessage(
      "데모 로그인 완료",
      username.value.trim() + "님, 환영합니다. 포트폴리오 데모 페이지이므로 실제 인증은 수행되지 않습니다."
    );
  };

  window.submitSignup = function () {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (!username || !email || !password) {
      return;
    }

    if (!username.value.trim() || !email.value.trim() || !password.value.trim()) {
      showMessage("입력 확인", "모든 항목을 입력해 주세요.");
      return;
    }

    showMessage(
      "데모 회원가입 완료",
      username.value.trim() + " (" + email.value.trim() + ") 계정이 데모로 등록되었습니다."
    );
  };
})();
