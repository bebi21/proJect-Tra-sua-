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
let arrCategory = JSON.parse(localStorage.getItem("arrCategory"));
let newProduct = JSON.parse(localStorage.getItem("newProduct"));
function renderMenu() {
  let text = "";
  for (let i = 0; i < arrCategory.length; i++) {
    if (arrCategory[i].id == 0) {
      continue;
    } else {
      text += `
    <option value="${arrCategory[i].id}" >${arrCategory[i].nameItem}</option>
    `;
    }
  }
  document.getElementById("listItem").innerHTML = text;
}
renderMenu();

function up() {
  let newArray = [...showProduct];
  let render = newArray.sort((a, b) => -a.price + b.price);

  chooseProduct(render);
  console.log(111);
}
function down() {
  let newArray = [...showProduct];
  let render = newArray.sort((a, b) => a.price - b.price);

  chooseProduct(render);
  console.log(222);
}
function chooseId() {
  let id = document.getElementById("listItem").value;
  let showProduct1 = newProduct.filter((product) => product.category === +id);
  chooseProduct(showProduct1);
}
chooseId();

let id = document.getElementById("listItem").value;
let showProduct = newProduct.filter((product) => product.category === +id);

function chooseProduct(product) {
  let text = "";
  for (let i = 0; i < product.length; i++) {
    text += `
    <tr>
     <td id ="name-product">${product[i].nameItem}</td>
     <td > <img src="${product[i].imgItem}" alt="Ảnh sản phẩm" id ="img-product" class="products-img" /></td>
     <td id ="price-product">${product[i].price}</td>
     <td>20</td>
     <td>12</td>
     <td>stock</td>
     <td class="edit">
      <button class="status delivered btn" onclick="edit(${product[i].id})">Edit</button>
      <button class="status delivered btn" onclick="removeProduct(${product[i].id})">Deleted</button>
     </td>
   </tr>      
    `;
  }

  document.getElementById("show-product").innerHTML = text;
}

let imgProduct;

function changeImage(element) {
  document.getElementById("products-img").style.display = "inline-block";
  var file = element.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    localStorage.setItem("image", reader.result);
    readerImage();
  };
  reader.readAsDataURL(file);
}
function readerImage() {
  let result = localStorage.getItem("image");
  document.getElementById("products-img").src = result;
}
function addProduct() {
  let id = document.getElementById("listItem").value;
  let showProducts = newProduct.find((product) => product.category === +id);
  let idProduct = newProduct.length + 1;
  let plusProduct = {
    category: showProducts.category,
    id: idProduct,
    nameItem: document.getElementById("nameItem").value,
    nameEnghlish: document.getElementById("nameItem").value,
    imgItem: localStorage.getItem("image"),
    price: document.getElementById("priceItem").value,
    stock: document.getElementById("stockItem").value,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  };
  newProduct.unshift(plusProduct);
  localStorage.setItem("newProduct", JSON.stringify(newProduct));
  document.getElementById("nameItem").value = "";
  document.getElementById("priceItem").value = "";
  document.getElementById("stockItem").value = "";
  localStorage.removeItem("image");
  document.getElementById("products-img").src = "";
  chooseProduct();
}
function removeProduct(id) {
  for (let i = 0; i < newProduct.length; i++) {
    if (newProduct[i].id == id) {
      newProduct.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("newProduct", JSON.stringify(newProduct));
  chooseProduct();
}
let idProduct;
function edit(id) {
  document.getElementById("products-img").style.display = "inline-block";
  idProduct = id;
  let editProduct = newProduct.find((product) => product.id === +id);
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "inline-block";
  document.getElementById("nameItem").value = editProduct.nameItem;
  document.getElementById("products-img").src = editProduct.imgItem;
  document.getElementById("priceItem").value = editProduct.price;
}
function saveProduct() {
  document.getElementById("products-img").style.display = "none";
  document.getElementById("add").style.display = "inline-block";
  document.getElementById("save").style.display = "none";
  for (let i = 0; i < newProduct.length; i++) {
    if (newProduct[i].id == idProduct) {
      newProduct[i].nameItem = document.getElementById("nameItem").value;
      newProduct[i].imgItem = document.getElementById("products-img").src;
      newProduct[i].price = document.getElementById("priceItem").value;
      break;
    }
  }
  localStorage.setItem("newProduct", JSON.stringify(newProduct));
  document.getElementById("nameItem").value = "";
  localStorage.removeItem("image");
  document.getElementById("products-img").src = "";
  document.getElementById("priceItem").value = "";
  chooseProduct();
}

function showAdd() {
  document.getElementsByClassName("addProductPlus").classList.toggle("show");
}
