const email = document.getElementById("email");
const pass = document.getElementById("password");
const btnLogin = document.getElementById("btn_login");

btnLogin.addEventListener("click", function () {
  if (email.value == "") {
    alert("Chưa nhập tài khoản!!!");
  } else if (pass.value == "") {
    alert("Chưa nhập password!!!");
  }
});
