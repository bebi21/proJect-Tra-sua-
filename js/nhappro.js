const tabBtn = document.querySelectorAll(".nav ul li");
const tab = document.querySelectorAll(".tab");

function tabs(panelIndex) {
  tab.forEach(function (node) {
    node.style.display = "none";
  });
  tab[panelIndex].style.display = "block";
}
tabs(0);
/*
let bio = document.querySelector(".bio");
const bioMore = document.querySelector("#see-more-bio");
const bioLength = bio.innerText.length;
 */
// function bioText() {
//   bio.oldText = bio.innerText;

//   bio.innerText = bio.innerText.substring(0, 100) + "...";
//   bio.innerHTML += `<span onclick='addLength()' id='see-more-bio'>See More</span>`;
// }
// //        console.log(bio.innerText)

// bioText();

/* function addLength() {
  bio.innerText = bio.oldText;
  bio.innerHTML +=
    "&nbsp;" + `<span onclick='bioText()' id='see-less-bio'>See Less</span>`;
  document.getElementById("see-less-bio").addEventListener("click", () => {
    document.getElementById("see-less-bio").style.display = "none";
  });
}
 */
// begin
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let payUser = JSON.parse(localStorage.getItem("payUser"));

function renderUser() {
  document.getElementById("profile-user").innerHTML = `
  <div class="profile-img">
          <img src="${payUser.img}" width="200" alt="Profile Image"  />
        </div>
        <div class="profile-nav-info">
          <h3 class="user-name">${payUser.username}</h3>
          <div class="address">
            <p id="state" class="state"></p>
            <span id="country" class="country"></span>
          </div>
        </div>
  `;
}
renderUser();
