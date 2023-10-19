let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let cartUser = currentUser.cart;
let userList = JSON.parse(localStorage.getItem("userList"));
let sale = 0;
let check = true;

let pay;
var d = new Date();

d.getDate();
d.getDay();
console.log();
d.getYear();
d.getHours();

d.getMinutes();

d.getTime();

function renderProduct() {
  let text = "";
  let total = 0;
  for (let i = 0; i < cartUser.length; i++) {
    total += cartUser[i].quantity * cartUser[i].price;
    text += `<li class="row" v-for="(product, index) in products">
 
 <div class="col left">
    <div class="thumbnail">
    <img src="${cartUser[i].imgItem}" alt="" />
  </div>
  <div class="detail">
    <div class="name"><a href="#">${cartUser[i].nameEnghlish}</a></div>
    <div class="description">2</div>
    <div class="price">${cartUser[i].price}</div>
  </div> 
</div>


             <div class="col right " style="margin-top:-30px">
                <div class="quantity" style="display: flex; justify-content: space-evenly">
               
                <span class="btn button-29" onclick="increase(${
                  cartUser[i].id
                })"  >+</span>
                <input
                style=""
                type="number"
                class="quantity"
                step="1"
                value="${cartUser[i].quantity}" />
                <span class="btn button-29" onclick="reduce(${
                  cartUser[i].id
                })" >-</span>
              
              </div>
             
             
                <div class="remove">
               
                  <svg onclick="removeProduct(${cartUser[i].id})">
                    <polygon
                      points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
                    ></polygon>
                  </svg> 
                 
                </div>
                <div class="total-product"
                
                >${+(cartUser[i].quantity * cartUser[i].price)}</div>
              </div>
             
              </li>
   `;
  }
  let tax = (total * 5) / 100;
  document.getElementById("total-price").innerHTML = total;
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("discount").innerHTML = sale;
  document.getElementById("total-all").innerHTML = total - sale + tax;
  pay = total - sale + tax;
  checkCart();
  document.getElementById("img-product").innerHTML = text;
}
renderProduct();
console.log(pay);

function checkCart() {
  if (cartUser.length === 0) {
    document.getElementById("empty-product").style.display = "block";
  } else {
    document.getElementById("empty-product").style.display = "none";
  }
}

function removeProduct(id) {
  for (let i = 0; i < cartUser.length; i++) {
    if (cartUser[i].id == id) {
      cartUser.splice(i, 1);
      break;
    }
  }
  currentUser.cart = cartUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  renderProduct();
}

function increase(id) {
  for (let i = 0; i < cartUser.length; i++) {
    if (cartUser[i].id === +id) {
      cartUser[i].quantity++;
      break;
    }
  }
  currentUser.cart = cartUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  renderProduct();
}
function reduce(id) {
  for (let i = 0; i < cartUser.length; i++) {
    if (cartUser[i].id === +id) {
      cartUser[i].quantity--;
      if (cartUser[i].quantity == 0) {
        cartUser.splice(i, 1);
        break;
      }
      break;
    }
  }

  currentUser.cart = cartUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  renderProduct();
}
let codeSale = document.getElementById("promo-code");
function code() {
  if (codeSale.value == "locdeptrai") {
    sale = 5000;
  } else {
    alert("code ban nhap sai ");
  }
  document.getElementById("promo-code").value = "";
  renderProduct();
}
function checkOut() {
  document.getElementById("pay").style.display = "flex";
}
function out() {
  document.getElementById("pay").style.display = "none";
}
let listPay = JSON.parse(localStorage.getItem("listPay")) || [];
let idOrder;
function id() {
  idNumber = listPay.length == 0 ? 1 : listPay[listPay.length - 1].id + 1;
}
let idSearch;
function idS() {
  let str = new Date();
  let year = str.getFullYear();
  let month = str.getMonth();
  let day = str.getDay();
  let hours = str.getHours();
  let minutes = str.getMinutes();
  let milliseconds = str.getMilliseconds();
  idSearch = `${year}${month}${day}${hours}${minutes}${milliseconds}`;
}

function payCheck(event) {
  event.preventDefault();

  alert("doi  chu  gian hang xac nhan");
  id();
  idS();
  let order = {
    idSearch: idSearch,
    id: idNumber,
    account: currentUser.username,
    idAcount: currentUser.id,
    fullNameOrder: document.getElementById("full-name").value,
    zip: document.getElementById("zip").value,
    phoneNumberOrder: document.getElementById("phone-number").value,
    addressShip: document.getElementById("Address").value,
    dateOrder: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} `,
    accept: "Wait",
    pay: pay,
    cart: currentUser.cart,
  };

  listPay.push(order);

  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === currentUser.id) {
      userList[i].order.push(order);
      break;
    }
  }
  localStorage.setItem("listPay", JSON.stringify(listPay));
  localStorage.setItem("userList", JSON.stringify(userList));
  currentUser.cart.length = 0;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  window.location.href = "nhap.html";
}
