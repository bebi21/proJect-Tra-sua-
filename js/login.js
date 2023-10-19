let userNameLogin = document.getElementById("userNameLogin");
let passWordLogin = document.getElementById("passWordLogin");
let newUserString;
let arrUser = JSON.parse(localStorage.getItem("userList")) || [];
function login() {
  let check = false;
  let index;

  if (userNameLogin.value == "admin" && passWordLogin.value == "admin") {
    console.log("admin");
    window.location.href = "../admin.html";
    return;
  }

  for (let i = 0; i < arrUser.length; i++) {
    if (
      arrUser[i].username == userNameLogin.value &&
      arrUser[i].password == passWordLogin.value
    ) {
      check = true;
      index = i;
      break;
    }
  }

  if (check) {
    if (arrUser[index].status != "normal") {
      alert("tài khoản của bạn  đã bị BAN");
    } else {
      alert("dang nhap thanh  cong");
      localStorage.setItem("currentUser", JSON.stringify(arrUser[index]));
      window.location.href = "../logoLoading.html";
    }
  } else {
    alert("tai khoan  mat khau sai");
    userNameLogin.value = "";
    passWordLogin.value = "";
  }
}
