/* const arrCategory = [
  {
    id: 0,
    nameItem: "MENU",
    imgItem: "img/background-main/gongcha_yakiimo_ogp_230904.jpg",
    title1: "ストレートティー",
    title2: `メーニュのおすすめ `,
    img: "img/buy-img/b7/img_main_other_230420.jpg",
    paragrap:
      "個性豊かなゴンチャのストレートティー。それぞれのおいしさを味わっていただくため、茶葉ごとに抽出時の湯温や抽出時間を変えてていねいに淹れています。香りや鮮度にこだわり、抽出後4時間以内のものだけをお客様に提供します。",
  },
  {
    id: 1,
    nameItem: "Straight Tea",
    imgItem: "img/buy-img/b1/img_main_original-tea-2.jpg",
    title1: "ストレートティー",
    title2: "個性豊かなストレートティー",
    paragrap:
      "個性豊かなゴンチャのストレートティー。それぞれのおいしさを味わっていただくため、茶葉ごとに抽出時の湯温や抽出時間を変えてていねいに淹れています。香りや鮮度にこだわり、抽出後4時間以内のものだけをお客様に提供します。",
  },
  {
    id: 2,
    nameItem: "Milk Tea",
    imgItem: "img/buy-img/b2/img_main_milk-tea-2.jpg",
    title1: "黒糖",
    title2: "黒糖のコクと深みのある味わい",
    paragrap:
      "ゴンチャオリジナルの黒糖シロップを加えたドリンクは、他では経験できないアジアンなおいしさ。深みのある甘味とのハーモニーをお楽しみください。",
  },
  {
    id: 3,
    nameItem: "Brown Sugar",
    imgItem: "img/buy-img/b3/img_main_kokutou-milk-tea-2.jpg",
    title1: "フルーツティー",
    title2: "フルーツとお茶のハーモニー",
    img: "img/buy-img/b4/gongcha_230919_3.jpg",
    paragrap:
      "ティーエードとは、ゴンチャのフルーツティー。台湾のお茶どころ阿里山（ありさん）産の上質な茶葉を使った、すっきりとしながらも華やかな香りと甘みを感じる「阿里山ウーロンティー」に、オリジナルのフルーツソースを合わせました。茶葉のコクや香りと、フルーツの豊かな風味のハーモニーをお楽しみください",
  },
  {
    id: 4,
    nameItem: "Fruit Tea",
    imgItem: "img/buy-img/b4/gongcha_230919_3.jpg",
    title1: "フルーツティー",
    title2: "フルーツとお茶のハーモニー",
    paragrap:
      "ティーエードとは、ゴンチャのフルーツティー。台湾のお茶どころ阿里山（ありさん）産の上質な茶葉を使った、すっきりとしながらも華やかな香りと甘みを感じる「阿里山ウーロンティー」に、オリジナルのフルーツソースを合わせました。茶葉のコクや香りと、フルーツの豊かな風味のハーモニーをお楽しみください",
  },
];
localStorage.setItem("arrCategory", JSON.stringify(arrCategory));
const newProduct = [
  {
    category: 0,
    id: 1,
    nameItem: "Straight Tea",
    imgItem: "img/buy-img/b1/img_main_original-tea-2.jpg",
  },
  {
    category: 0,
    id: 2,
    nameItem: "Milk Tea",
    imgItem: "img/buy-img/b2/img_main_milk-tea-2.jpg",
  },
  {
    category: 0,
    id: 3,
    nameItem: "Brown Sugar",
    imgItem: "img/buy-img/b3/img_main_kokutou-milk-tea-2.jpg",
  },
  {
    category: 0,
    id: 4,
    nameItem: "Fruit Tea",
    imgItem: "img/buy-img/b4/gongcha_230919_3.jpg",
  },
  {
    category: 0,
    id: 5,
    nameItem: "New Menu",
    imgItem: "img/buy-img/b4/gongcha_230919_3.jpg",
  },
  {
    category: 4,
    id: 6,
    nameItem: "パッションフルーツ阿里山 ティーエード",
    nameEnghlish: "Passion Fruit Alishan Tea Ade",
    imgItem: "img/buy-img/b4/gongcha_menu_mango-teaade.jpg",
    price: 32000,
    titleItem:
      "さわやかな酸味が特長の台湾産パッションフルーツと香り高い「阿里山ウーロンティー」を合わせたトロピカルな味わいのフルーツティー。フレッシュさのアクセントにパッションの果肉や種を合わせた、フルーツ本来の味わいを感じられる逸品です",
  },
  {
    category: 4,
    id: 7,
    nameItem: "ピーチ阿里山 ティーエード",
    nameEnghlish: "Peach Alishan Tea Ade",
    imgItem: "img/buy-img/b4/gongcha_menu_passionfruit-teaade.jpg",
    price: 31000,
    titleItem:
      "甘い香りとやさしい味わいのピーチソースと、フルーツや花を連想させる味わいの「阿里山ウーロンティー」は相性が抜群です。「ナタデココ」や「アロエ」のトッピングがおすすめです。",
  },
  {
    category: 4,
    id: 8,
    nameItem: "ブラックティー",
    nameEnghlish: "Black Tea",
    imgItem: "img/buy-img/b3/img_kokutou-milk-oolong-tea.png",
    price: 33000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 4,
    id: 9,
    nameItem: "マンゴー阿里山 ティーエード",
    nameEnghlish: "Mango Alishan Tea Ade",
    imgItem: "img/buy-img/b4/gongcha_menu_peach-teaade.jpg",
    price: 37000,
    titleItem:
      "やさしい甘みが特長の、マンゴー果肉入りの本格派フルーツティーです。「阿里山ウーロンティー」のすっきりとした香りや風味が感じられる、春先が特におすすめのドリンクです。「パール（タピオカ）」の他にも、「ナタデココ」や「アロエ」とのダブルトッピングがおすすめです",
  },
  {
    category: 3,
    id: 10,
    nameItem: "黒糖 烏龍ミルクティー",
    nameEnghlish: "Brown Sugar Oolong Milk Tea",
    imgItem: "img/buy-img/b3/img_kokutou-milk-cafe-au-lait.png",
    price: 31000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 3,
    id: 11,
    nameItem: "黒糖 アールグレイミルクティー",
    nameEnghlish: "Brown Sugar Earl Grey Milk Tea",
    imgItem: "img/buy-img/b3/img_kokutou-milk-oolong-tea.png",
    price: 39000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 3,
    id: 12,
    nameItem: "ブラックティー",
    nameEnghlish: "Black Tea",
    imgItem: "img/buy-img/b3/img_kokutou-milk-oolong-tea.png",
    price: 38000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 3,
    id: 13,
    nameItem: "黒糖ミルク",
    nameEnghlish: "Brown Sugar Milk",
    imgItem: "img/buy-img/b3/img_kokutou-milk-black-tea.png",
    price: 31000,
    titleItem:
      "ゴンチャオリジナルの黒糖シロップを加えたミルクは、ほかでは味わえないアジアンテイスト。深い甘みとミルクのハーモニーをお楽しみください",
  },
  {
    category: 2,
    id: 14,
    nameItem: "烏龍 ミルクティー",
    nameEnghlish: "Oolong Milk Tea",
    imgItem: "./img/buy-img/b2/img_oolong-milk-tea.png",
    price: 31000,
    titleItem:
      "ほのかな甘さが感じられる烏龍ティーを使用したミルクティーで、烏龍ティーの香ばしい香りとミルク感のバランスの良いお茶です。",
  },
  {
    category: 2,
    id: 15,
    nameItem: "ブラック ミルクティー",
    nameEnghlish: "Black Milk Tea",
    imgItem: "img/buy-img/b2/img_hojicha-milk-tea.png",
    price: 33000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 2,
    id: 16,
    nameItem: "ブラックティー",
    nameEnghlish: "Black Tea",
    imgItem: "img/buy-img/b2/img_matcha-milk-tea.png",
    price: 31000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 2,
    id: 17,
    nameItem: "阿里山ウーロンティー",
    nameEnghlish: "Alishan Oolong Tea",
    imgItem: "img/buy-img/b2/img_earl-grey-milk-tea.png",
    price: 36000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },

  {
    category: 1,
    id: 18,
    nameItem: "烏龍ティー",
    nameEnghlish: "Oolong Tea",
    imgItem: "./img/buy-img/b1/img_oolong-tea-1.png",
    price: 37000,

    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 1,
    id: 19,
    nameItem: "アールグレイティー",
    nameEnghlish: "Earl Grey Tea",
    imgItem: "./img/buy-img/b1/img_earl-grey-tea.png",
    price: 38000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 1,
    id: 20,
    nameItem: "ブラックティー",
    nameEnghlish: "Black Tea",
    imgItem: "./img/buy-img/b1/img_black-tea.png",
    price: 33000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
  {
    category: 1,
    id: 21,
    nameItem: "阿里山ウーロンティー",
    nameEnghlish: "Alishan Oolong Tea",
    imgItem: "./img/buy-img/b1/img_alishan-oolong-tea.png",
    price: 35000,
    titleItem:
      "台湾のお茶の定番、烏龍ティー。ほのかに甘く、香ばしい香り、そしてしっかりとしたコクとまろやかな口当たりをお楽しみいただけます。",
  },
];

localStorage.setItem("newProduct", JSON.stringify(newProduct));
*/
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let newProduct = JSON.parse(localStorage.getItem("newProduct")) || [];
let arrCategory = JSON.parse(localStorage.getItem("arrCategory")) || [];
function renderMenu() {
  let text = "";
  for (let i = 0; i < arrCategory.length; i++) {
    text += `
   <li class="category" onclick="renderProduct(${arrCategory[i].id})">
   ${arrCategory[i].nameItem}
   </li>
   `;
  }
  document.getElementById("list-menu").innerHTML = text;
  console.log();
}

renderMenu();
renderProduct(0);
function renderProduct(id) {
  let banner = arrCategory.find((category) => category.id === id);
  let filter = newProduct.filter((product) => product.category === id);

  if (banner.id == 0) {
    let text = "";
    for (let i = 0; i < filter.length; i++) {
      text += `
         <div class="card" style="width: 18rem">
                  <img
                    src="${filter[i].imgItem}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">  ${filter[i].nameItem}</h5>
                  </div>
                </div>
    `;
    }
    document.getElementById("item").innerHTML = text;
    document.getElementById("title-item").innerHTML = `
    <div class="img-banner_item">
    <img src="${banner.imgItem}" alt="" />
   </div>
  <div class="col-5 title">
    <span>${banner.title1}</span>
    <h1>${banner.nameItem}</h1>
    <span class="tittle-2" style="color: #eea777; font-size: 2rem"
      >${banner.title2}</span
    >
    <p>
    ${banner.paragrap}
    </p>
  </div>
     `;
  } else {
    // let filter = newProduct.filter((product) => product.category === id);

    let text = "";
    for (let i = 0; i < filter.length; i++) {
      text += `
    <div class="card" style="width: 18rem">
                  <img
                    src="${filter[i].imgItem}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">${filter[i].nameEnghlish}</h5>
                    <p class="card-text">
                    ${filter[i].titleItem}
                    </p>
                    <a class="btn btn-primary text-white" style="color:white" onclick="addProduct(${
                      filter[i].id
                    })">Add to card</a>
                 
                    <span style="float:right">  ${formatCash(
                      filter[i].price
                    ).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}</span>
                  </div>
                </div>

    
    `;
    }

    document.getElementById("item").innerHTML = text;
    document.getElementById("title-item").innerHTML = `
    <div class="img-banner_item">
    <img src="${banner.imgItem}" alt="" />
   </div>
  <div class="col-5 title">
    <span >${banner.title1}</span>
    <h1>${banner.nameItem}</h1>
    <span class="tittle-2" style="color: #eea777; font-size: 2rem"
      >${banner.title2}</span
    >
    <p>
    ${banner.paragrap}
    </p>
  </div>
     `;
  }
  count();
}
function formatCash(str) {
  return str
    .toString()
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}

function count() {
  let result = 0;
  let cart = currentUser.cart;
  if (cart.length == 0) {
    document.getElementById("count").style.display = "none";
  } else {
    document.getElementById("count").style.display = "flex";
    for (let i = 0; i < cart.length; i++) {
      result += cart[i].quantity;
    }

    document.getElementById("count").innerHTML = result;
  }
}
function showImageUser() {
  document.getElementById("showImg").src = currentUser.img;
}
function check() {
  if (currentUser == null) {
    alert("dang  ki  tai  khoan  de mua hang");
    document.getElementById("user-order").style.display = "none";
    document.getElementById("loginUser").style.display = "block";
    document.getElementById("inforUser").style.display = "none";
  } else {
    showImageUser();
    document.getElementById("user-order").style.display = "block";
    document.getElementById("loginUser").style.display = "none";
    document.getElementById("inforUser").style.display = "block";
  }
}
check();
function logout() {
  alert("dang  ki  tai  khoan  de mua hang");
  document.getElementById("loginUser").style.display = "block";
  document.getElementById("inforUser").style.display = "none";
  localStorage.removeItem("currentUser");
  document.getElementById("count").style.display = "none";
}
function addProduct(id) {
  let productOrder = newProduct.find((product) => product.id === +id);
  let productAddToCart = {
    ...productOrder,
    quantity: 1,
  };
  let userCart = currentUser.cart;
  let check = userCart.find((item) => item.id === +id);
  if (check) {
    check.quantity++;
  } else {
    userCart.push(productAddToCart);
  }
  currentUser.cart = userCart;

  count();
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}
function orderUser() {
  window.location.href = "cart.html";
}
function inforUser() {
  window.location.href = "inforUser.html";
}
