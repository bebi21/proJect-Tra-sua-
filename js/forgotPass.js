let arrUser = JSON.parse(localStorage.getItem("userList")) || [];
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
    alert("Tài khoản không tồn tại");
  }
}
function CheckPassword(checkPass) {
  let passw = /^(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
  /* ít nhất 6 ký tự, bao gồm ít 
    nhất một chữ hoa, chỉ được sử dụng
     số và chữ, và không có ký tự đặc biệt */

  if (checkPass.match(passw)) {
    return true;
  } else {
    return false;
  }
}
let resetPass = document.getElementById("resetPass");
let confirmPassword = document.getElementById("confirmPassword");
function savePassword() {
  if (resetPass.value !== confirmPassword.value) {
    alert("mật khẩu nhập  lại không khớp");
    document.getElementById("resetPass").value = "";
    document.getElementById("confirmPassword").value = "";
    return;
  }
  let check = CheckPassword(resetPass.value);
  if (check === true) {
    arrUser = JSON.parse(localStorage.getItem("userList"));
    arrUser[indexResset].password = resetPass.value;
    localStorage.setItem("userList", JSON.stringify(arrUser));

    window.location.href = "login.html";
  } else {
    alert("mật  khẩu không hợp lệ");
    document.getElementById("resetPass").value = "";
    document.getElementById("confirmPassword").value = "";
  }
}
