let listPay = JSON.parse(localStorage.getItem("listPay"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let userList = JSON.parse(localStorage.getItem("userList"));
function renderUser() {
  document.getElementById("renderUser").innerHTML = `
   
                  <img
                    src="${currentUser.img}"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style=" width: 150px !important;
                    height: 150px !important;"
                  />
                  <h5 class="my-3">${currentUser.username}</h5>
                  <p class="text-muted mb-1">${currentUser.fullname}</p>
                  <p class="text-muted mb-4">${currentUser.address}</p>
                  <div class="d-flex justify-content-center mb-2">
                    <label for="upload-user" class="btn btn-primary">
                      Edit Avatar
                    </label>
                    <input
                        type="file"
                         id="upload-user"
                         onchange="changeImage(this)"
                         style="visibility: hidden; position: absolute; bottom: 0; left: 0"
                         />
                  </div>
              `;
}
renderUser();
function changeImage(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    currentUser.img = reader.result;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id == currentUser.id) {
        userList[i] = currentUser;
        localStorage.setItem("userList", JSON.stringify(userList));
        myFunction();
        break;
      }
    }
    renderUser();
  };
  reader.readAsDataURL(file);
}

function renderProfileUser() {
  document.getElementById("profile-user").innerHTML = `
  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-7" >
                      <input type="text" id ="full-name" class="text-muted mb-0" value="${currentUser.fullname}">
                    </div>
                    <div class ="col-sm-2 ">
                  
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-7">
                      <input class="text-muted mb-0"  id="email" value="${currentUser.email}">
                    </div>
                    <div class ="col-sm-2">
                  
                    </div>
                  </div>
                  <hr />
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-7">
                    <input class="text-muted mb-0"  id="phoneNumber" value="${currentUser.phoneNumber}">
                    </div>
                    <div class ="col-sm-2">
                   
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-7">
                    <input class="text-muted mb-0"  id="address" value="${currentUser.address}">
                    </div>
                    <div class ="col-sm-2">
                    
                    </div>
                  </div>
  
  `;
}
renderProfileUser();
function historyOrder() {
  let orderUser = listPay.filter(
    (product) => product.idAcount == currentUser.id
  );

  let text = "";
  for (let i = 0; i < orderUser.length; i++) {
    text += `
  <tr>

    <td>${i + 1}</td>
      <td>${orderUser[i].fullNameOrder}</td>
      <td>${orderUser[i].pay}</td>
      <td>${orderUser[i].phoneNumberOrder}</td>
      <td>${orderUser[i].dateOrder}</td>
      <td><span  class="status delivered b1 ">${orderUser[i].accept}</span>
    </td>
    <td>  
      <span  class="status delivered change" onclick="cancel(${i})" >Cancel
      
      </span>
    </td>
  </tr>
  `;
  }

  document.getElementById("renderPayUser").innerHTML = text;
}

historyOrder();
let change = document.getElementsByClassName("change");
function cancel(index) {
  let orderUser = listPay.filter(
    (product) => product.idAcount == currentUser.id
  );

  if (orderUser[index].accept == "Wait") {
    orderUser[index].accept = "Cancel";
  } else if (orderUser[index].accept == "Accept") {
    orderUser[index].accept = "Accept";
  }
  for (let i = 0; i < listPay.length; i++) {
    if (orderUser[index].id == listPay[i].id) {
      listPay[i].accept = orderUser[index].accept;
      break;
    }
  }

  historyOrder();
  check();
  localStorage.setItem("listPay", JSON.stringify(listPay));
}

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
function Save() {
  currentUser.fullname = document.getElementById("full-name").value;
  currentUser.email = document.getElementById("email").value;
  currentUser.phoneNumber = document.getElementById("phoneNumber").value;
  currentUser.address = document.getElementById("address").value;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == currentUser.id) {
      userList[i] = currentUser;
      localStorage.setItem("userList", JSON.stringify(userList));
      break;
    }
  }
  myFunction();
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
