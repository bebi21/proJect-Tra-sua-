// Render list product
let currentPage = 1; // Trang hiện tại
const productsPerPage = 4; // Số sản phẩm trên mỗi trang
const totalProducts = listProduct.length; // Tổng số sản phẩm
const totalPages = Math.ceil(totalProducts / productsPerPage); // Tổng số trang
function renderProduct(page) {
  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;
  let total = `
    <tr class="tr1">
      <td class="td1">ID</td>
      <td class="td1">Ảnh</td>
      <td class="td1">Tên</td>
      <td class="td1">Loại sản phẩm</td>
      <td class="td1">Giá</td>
      <td class="td1">Số lượng</td>
      <td class="td1" colspan="2">Tính năng</td>
    </tr>
`;
  for (let i = startIndex; i < endIndex && i < totalProducts; i++) {
    total += `
    <tr class="tr1">
      <td class="td1">${listProduct[i].ID}</td>
      <td class="td1"><img src="${listProduct[i].img}" alt="${listProduct[i].ten}" width="100px" height="100px" /></td>
      <td class="td1">${listProduct[i].ten}</td>
      <td class="td1">${listProduct[i].category}</td>
      <td class="td1">${listProduct[i].gia}</td>
      <td class="td1">${listProduct[i].soluong}</td>
      <td class="td1"><button class="buttonNe" onclick="editButton(${i})">Edit</button></td>
      <td class="td1"><button class="buttonNe" onclick="deleteButton(${i})">Delete</button></td>
    </tr>
`;
  }
  document.getElementById("tableAdded").innerHTML = total;
}
function renderPagination() {
  let pagination = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      pagination += `<button onclick="changePage(${i})">${i}</button>`;
    } else {
      pagination += `<button onclick="changePage(${i})">${i}</button>`;
    }
  }
  document.getElementById("pagination").innerHTML = pagination;
}
function changePage(page) {
  currentPage = page;
  renderProduct(currentPage);
  renderPagination();
}
renderPagination();
renderProduct(currentPage);
