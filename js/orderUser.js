let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let cartUser = currentUser.cart;
function renderUser() {
  document.getElementById("inforUser").innerHTML = `
   <div class="avatar">
   <img
     src="${currentUser.img}"
     alt=""
     class="rounded-circle p-1 bg-warning"
    
   /></div>
   <div class="mt-5">
   <h4>${currentUser.username}</h4>
   <p class="text-secondary mb-1"></p>
   <p class="text-muted font-size-sm">
     Bay Area, San Francisco, CA
   </p>
  </div>               
                 
    `;
}
renderUser();
function renderProduct() {
  let text = "";
  for (let i = 0; i < cartUser.length; i++) {
    text += `
    <tr>
                        <th>
                          <img
                            src="${cartUser[i].imgItem}"
                            alt="product"
                            class=""
                            width="80"
                            
                          />
                        </th>
                        <td>
                          ${cartUser[i].titleItem}
                        </td>
                        <td>${cartUser[i].price}X ${cartUser[i].quantity}</td>
                        <td><strong>${
                          cartUser[i].price * cartUser[i].quantity
                        }</strong></td>
                        <td>
                          <span class="badge badge-warning">PENDING</span>
                        </td>
                      </tr>
    
    `;
  }
  document.getElementById("renderProduct").innerHTML = text;
}
renderProduct();
function renderPrice() {
  document.getElementById("renderPrice").innerHTML=`
  `
}
