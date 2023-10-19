let userName = document.getElementById("userName");
let passWord = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let email = document.getElementById("email");
let phoneNumber = document.getElementById("phonenumber");
let zip = document.getElementById("zip");

let arrUser = JSON.parse(localStorage.getItem("userList")) || [];
function CheckPassword(checkPass) {
  let passw = /^(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
  /* ít nhất 6 ký tự, bao gồm ít 
  nhất một chữ hoa, chỉ được sử dụng
   số và chữ, và không có ký tự đặc biệt */

  if (checkPass.match(passw)) {
    return true;
  } else {
    alert("Mật khẩu không hợp  lệ");
    return false;
  }
}
function CheckUsername(checkUser) {
  let passw = /^[a-zA-Z0-9]{3,}$/;

  /* ít nhất 3 ký tự chỉ chứa số và chữ t
   */
  if (checkUser.match(passw)) {
    return true;
  } else {
    alert("Tên  đăng  nhập không hợp  lệ!");
    return false;
  }
}
function checkEmail() {
  let passw = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.match(passw)) {
    return true;
  } else {
    document.getElementById("email").value = "";
    return false;
  }
}
function checkPhoneNumber() {
  let passw = /^0\d{9,}$/;
  if (phoneNumber.value.match(passw)) {
    return true;
  } else {
    console.log(1111);
    document.getElementById("phonenumber").value = "";

    return false;
  }
}
function checkZip() {
  let passw = /^\d{6}$/;
  if (zip.value.match(passw)) {
    return true;
  } else {
    document.getElementById("zip").value = "";
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

  if (userName.value == "") {
    document.getElementById("danger").style.display = "inline";
  } else {
    document.getElementById("danger").style.display = "none";
  }
  if (passWord.value == "") {
    document.getElementById("danger1").style.display = "inline";
  } else {
    document.getElementById("danger1").style.display = "none";
  }
  if (confirmPassword.value == "") {
    document.getElementById("danger2").style.display = "inline";
    return;
  } else {
    document.getElementById("danger2").style.display = "none";
  }

  let CheckUser = CheckUsername(userName.value);
  let CheckPass = CheckPassword(passWord.value);
  let checkPhoneUser = checkEmail();
  let checkEmailUser = checkPhoneNumber();
  let checkZipUser = checkZip();
  if (passWord.value !== confirmPassword.value) {
    alert("mật khẩu nhập  lại không khớp");
    document.getElementById("confirmPassword").value = "";
    document.getElementById("password").value = "";
    return;
  }
  if (CheckUser == true && CheckPass == true) {
    let checkUser = arrUser.find((user) => user.username === userName.value);
    if (checkUser === undefined) {
      alert("dang ki thanh cong");
      let result = localStorage.getItem("image");
      id();
      let objUser = {
        id: idUser,
        username: userName.value,
        password: passWord.value,
        img: result,
        cart: [],
        role: 0,
        fullname: document.getElementById("fullname").value,
        phoneNumber: document.getElementById("phonenumber").value,
        address: document.getElementById("address").value,
        zip: document.getElementById("zip").value,
        email: email.value,
        order: [],
        status: "normal",
      };
      arrUser.push(objUser);
      localStorage.setItem("userList", JSON.stringify(arrUser));
      window.location.href = "login.html";
    } else {
      alert("tai khaon  bi trung");
      location.reload();

      /* for (let i = 0; i < arrUser.length; i++) {
      if (userName.value === arrUser[i].username) {
        alert("ten  dang nhap  bi  trung")
        return;
      } else {
        alert("dang ki thanh cong");
        let result = localStorage.getItem("image");
        id();
        let objUser = {
          id: idUser,
          username: userName.value,
          password: passWord.value,
          img: result,
          cart: [],
          role: 0,
          fullname: document.getElementById("fullname").value,
          phoneNumber: document.getElementById("phonenumber").value,
          address: document.getElementById("address").value,
          zip: document.getElementById("zip").value,
          status: "normal",
        };
        arrUser.push(objUser);
        localStorage.setItem("userList", JSON.stringify(arrUser));
        window.location.href = "login.html";
      }
    } */
    }
  } else {
    (userName.value = ""),
      (passWord.value = ""),
      (document.getElementById("showImg").src = "img/userAdmin/anh .jpeg");
  }
}
