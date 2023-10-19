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

let userList = JSON.parse(localStorage.getItem("userList")) || [];

function renderUser() {
  let text = "";
  for (let i = 0; i < userList.length; i++) {
    text += `
    <tr >
        <td class="avatar-user">
                    <div class="imgBx">
                      <img src="${userList[i].img}" alt="" />
                    </div>
                  </td>
                  <td>${userList[i].fullname}</td>
                  <td>${userList[i].username}</td>
                  <td>${userList[i].email}</td>
                  <td>
                    <button class="status delivered btn" onclick="ban(${userList[i].id})">${userList[i].status}</button>
                  </td>
        
                  </tr>`;
  }
  document.getElementById("listUser").innerHTML = text;
}
renderUser();

function ban(id) {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === id) {
      if (userList[i].status === "ban") {
        userList[i].status = "normal";
        break;
      } else {
        userList[i].status = "ban";
        break;
      }
    }
  }

  localStorage.setItem("userList", JSON.stringify(userList));
  renderUser();
}
