function startRegister() {
  document.getElementById("wrapper").style.marginTop = "100px";
  document.getElementById("loginUser").style.display = "none";
  document.getElementById("registerUser").style.display = "block";
}

let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let userNameLogin = document.getElementById("userNameLogin");
let passWordLogin = document.getElementById("passWordLogin");
let newUserString;
let arrUser = JSON.parse(localStorage.getItem("userList")) || [];

function CheckPassword(passVal) {
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/;
  if (passVal.match(passw)) {
    return true;
  } else {
    alert("Mật khẩu không hợp  lệ");
    return false;
  }
}
function CheckUsername() {
  let passw = /^[a-zA-Z0-9]{7,100}$/;
  if (userName.value.match(passw)) {
    return true;
  } else {
    alert("Tên  đăng  nhập không hợp  lệ!");
    return false;
  }
}

function changeImage(element) {
  console.log("haha");
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log(reader);
    localStorage.setItem("image", reader.result);
    readerImage();
  };
  reader.readAsDataURL(file);
}
function readerImage() {
  let result = localStorage.getItem("image");
  document.getElementById("showImg").src = result;
}
// readerImage();
let idUser;
function id() {
  idUser = arrUser.length == 0 ? 1 : arrUser[arrUser.length - 1].id + 1;
}

function register(event) {
  event.preventDefault();
  let CheckUser = CheckUsername();
  let CheckPass = CheckPassword(passWord.value);

  //   CheckPhonenumber();

  if (CheckUser == true && CheckPass == true) {
    alert("dang ki thanh cong");
    document.getElementById("loginUser").style.display = "block";
    document.getElementById("registerUser").style.display = "none";
    let result = localStorage.getItem("image");
    id();
    let objUser = {
      id: idUser,
      username: userName.value,
      password: passWord.value,
      img: result,
      cart: [],
      role: 0,
      status: "normal",
    };
    arrUser.push(objUser);
    localStorage.setItem("userList", JSON.stringify(arrUser));
  } else {
    (userName.value = ""),
      (passWord.value = ""),
      (document.getElementById("showImg").src = "");
  }
}

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
// forgot password
function forgotPassword() {
  document.getElementById("forgotPassword").style.display = "block";
  document.getElementById("loginUser").style.display = "none";
}
let indexResset;
function searchUser() {
  let check = false;
  let userNameSearch = document.getElementById("userNameSearch");

  arrUser = JSON.parse(localStorage.getItem("userList"));

  for (let i = 0; i < arrUser.length; i++) {
    if (arrUser[i].username == userNameSearch.value) {
      check = true;
      indexResset = i;
      break;
    }
  }

  if (check) {
    alert("da tim thay");
    document.getElementById("forgotPassword").style.display = "none";
    document.getElementById("resetPassword").style.display = "block";
  } else {
    alert("ko  tim thay tai khoan");
  }
}
let resetPass = document.getElementById("resetPass");
let retypePass = document.getElementById("retypePass");
function savePassword() {
  CheckPassword(resetPass.value);
  arrUser = JSON.parse(localStorage.getItem("userList"));
  arrUser[indexResset].password = resetPass.value;
  localStorage.setItem("userList", JSON.stringify(arrUser));
  document.getElementById("resetPassword").style.display = "none";
  document.getElementById("loginUser").style.display = "block";
}
