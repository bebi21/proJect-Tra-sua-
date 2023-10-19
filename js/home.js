var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// slide
const images = document.querySelectorAll(".slideshow div");
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
// Hiển thị ảnh đầu tiên
showImage(currentIndex);

// Chuyển đổi ảnh sau mỗi khoảng thời gian
setInterval(nextImage, 3000);
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
function showImageUser() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("showImg").src = currentUser.img;
}

function check() {
  if (currentUser == null) {
    alert("dang  ki  tai  khoan  de mua hang");
    document.getElementById("loginUser").style.display = "block";
    document.getElementById("inforUser").style.display = "none";
  } else {
    showImageUser();
    document.getElementById("loginUser").style.display = "none";
    document.getElementById("inforUser").style.display = "block";
  }
}
check();
function logout() {
  
  myFunction()
  document.getElementById("loginUser").style.display = "block";
  document.getElementById("inforUser").style.display = "none";
  localStorage.removeItem("currentUser");
  localStorage.removeItem("payUser");
}
function changeUser() {
  window.location.href = "inforUser.html";
}
let x = 0;
let isVisible = false;
console.log(isVisible);
function handleScroll() {
  if (window.scrollY > 100) {
    isVisible = true;
    console.log(x);
    x++;
  } else {
    isVisible = false;
    x--;
    console.log(x);
    console.log(isVisible);
  }
}

function addScrollListener() {
  window.addEventListener("scroll", handleScroll);
}
addScrollListener();
function removeScrollListener() {
  window.removeEventListener("scroll", handleScroll);
}
function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
