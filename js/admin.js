// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  // this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//
let userList = JSON.parse(localStorage.getItem("userList")) || [];

function renderUser1() {
  let text = "";
  for (let i = 0; i < userList.length; i++) {
    text += `
    <tr>
                <td>
                  <div class="imgBx">
                    <img src="${userList[i].img}" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    <span>${userList[i].username}</span>
                  </h4>
                </td>
              </tr>
    `;
  }
  document.getElementById("userLogin").innerHTML = text;
}
renderUser1();
let listPay = JSON.parse(localStorage.getItem("listPay")) || [];
let currentPage = 1; // Trang hiện tại
const productsPerPage = 8; // Số sản phẩm trên mỗi trang
const totalProducts = listPay.length; // Tổng số sản phẩm
const totalPages = Math.ceil(totalProducts / productsPerPage); // Tổng số trang
function renderPayUser(page) {
  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;
  let text = "";

  for (let i = startIndex; i < endIndex && i < totalProducts; i++) {
    text += `

   <tr>           <td>${listPay[i].idSearch}</td>
                  <td>${listPay[i].account}</td>
                  <td>${listPay[i].fullNameOrder}</td>
                  <td>${formatCash(listPay[i].pay)} đồng</td>
                  <td>${listPay[i].addressShip}</td>
                  <td>${listPay[i].dateOrder}</td>
                  <td><span class="status pending accept b1" >${
                    listPay[i].accept
                  }</span></td>
                  <td class="change" >
                  <span class="status delivered accept" onclick="ok(${
                    listPay[i].id
                  })">OK</span>
                  <span class="status delivered accept" onclick="cancel(${
                    listPay[i].id
                  })">Cancel</span>
                  <td>
                </tr>
   `;
  }

  document.getElementById("renderPayUser").innerHTML = text;
}

// Render list product
function renderPagination() {
  let pagination = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      pagination += `<li onclick="changePage(${i})" class="button-41">${i}</li>`;
    } else {
      pagination += `<li onclick="changePage(${i})" class="button-41">${i}</li>`;
    }
  }
  document.getElementById("pagination").innerHTML = pagination;
}
function changePage(page) {
  currentPage = page;
  renderPayUser(currentPage);
  renderPagination();
  check();
}
renderPagination();
renderPayUser(currentPage);

function ok(id) {
  for (let i = 0; i < listPay.length; i++) {
    if (listPay[i].id == +id) {
      if (listPay[i].accept == "Wait") {
        listPay[i].accept = "Accept";
        break;
      } else if (
        listPay[i].accept == "Cancel" ||
        listPay[i].accept == "Accept"
      ) {
        break;
      }
      break;
    }
  }
  renderPayUser();
  searchId();

  check();
  localStorage.setItem("listPay", JSON.stringify(listPay));
}
function cancel(id) {
  for (let i = 0; i < listPay.length; i++) {
    if (listPay[i].id == +id) {
      if (listPay[i].accept == "Wait") {
        listPay[i].accept = "Cancel";
        break;
      } else if (
        listPay[i].accept == "Cancel" ||
        listPay[i].accept == "Accept"
      ) {
        break;
      }
      break;
    }
  }

  localStorage.setItem("listPay", JSON.stringify(listPay));
  searchId();
  renderPayUser();
  check();
  renderInformation();
}

function renderInformation() {
  document.getElementById("renderAccOrder").innerHTML = listPay.length;
  let total = 0;
  let wait = 0;
  let accept = 0;
  for (let i = 0; i < listPay.length; i++) {
    if (listPay[i].accept == "Wait") {
      wait++;
    } else if (listPay[i].accept == "Accept") {
      total += listPay[i].pay;
      accept++;
    }
  }

  document.getElementById("renderMoneyOrder").innerHTML = formatCash(
    total
  ).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById("renderWaitOrder").innerHTML = wait;
  document.getElementById("renderAcceptOrder").innerHTML = accept;
}
renderInformation();

function check() {
  let status = document.getElementsByClassName("b1");
  let change = document.getElementsByClassName("change");

  for (let j = 0; j < status.length; j++) {
    if (status[j].innerHTML == "Cancel") {
      status[j].classList.remove("pending");
      status[j].classList.add("return");
      change[j].style.display = "none";
    } else if (status[j].innerHTML == "Accept") {
      status[j].classList.remove("pending");
      status[j].classList.add("inProgress");
      change[j].style.display = "none";
    }
  }
}
check();
function formatCash(str) {
  return str
    .toString()
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
function searchId() {
  let search = document.getElementById("search").value;
  let paySearch = listPay.filter((user) => user.idSearch.includes(search));

  console.log(listPay);

  let text = "";

  for (let i = 0; i < paySearch.length; i++) {
    text += `

   <tr>           <td>${paySearch[i].idSearch}</td>
                  <td>${paySearch[i].account}</td>
                  <td>${paySearch[i].fullNameOrder}</td>
                  <td>${formatCash(paySearch[i].pay)} đồng</td>
                  <td>${paySearch[i].addressShip}</td>
                  <td>${paySearch[i].dateOrder}</td>
                  <td><span class="status pending accept b1" >${
                    paySearch[i].accept
                  }</span></td>
                  <td class="change" >
                  <span class="status delivered accept" onclick="ok(${
                    paySearch[i].id
                  })">OK</span>
                  <span class="status delivered accept" onclick="cancel(${
                    paySearch[i].id
                  })">Cancel</span>
                  <td>
                </tr>
   `;
  }

  document.getElementById("renderPayUser").innerHTML = text;
  check();
}
