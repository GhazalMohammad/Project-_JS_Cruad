// Cireat
var bookNameInput = document.getElementById("bookmarkName");
var bookUrlInput = document.getElementById("bookmarkURL");
var tableBody = document.getElementById("tableBody");

var bookContainer;

if (localStorage.getItem("myBook") != null) {
  bookContainer = JSON.parse(localStorage.getItem("myBook"));
  displayForm(bookContainer);
} else {
  bookContainer = [];
}
function bookmark() {
  var bookName = bookNameInput.value;
  var bookUrl = bookUrlInput.value;

  // Validate URL
  if (!isValidURL(bookUrl)) {
    alert("Please enter a valid URL.");
    return;
  }

  var bookNU = {
    bookName: bookName,
    bookUrl: bookUrl,
  };
  bookContainer.push(bookNU);
  localStorage.setItem("myBook", JSON.stringify(bookContainer));
  console.log(bookContainer);
  clrForm();
  displayForm(bookContainer);
}
// -----------------------------
// validtion
function isValidURL(url) {
  var urlPattern =  /^www./;
  return urlPattern.test(url);
}
//----------------------------------
// clr
function clrForm() {
  bookNameInput.value = "";
  bookUrlInput.value = "";
}
// ------------------------------
// display
function displayForm(bookContainer) {
  var carto = ``;
  for (var i = 0; i < bookContainer.length; i++) {
    carto += `
    <tr>
        <td>${i + 1}</td>
        <td>${bookContainer[i].bookName}</td>
        <td><button class="p-1" id="visit">
        <i class="fa-solid fa-eye pe-2"></i>
        Visit</button>
        </td>
        <td><button class="p-1" onclick="deleteBook(${i})" id="delete">
        <i class="fa-solid fa-trash-can"></i>
        delete</button>
        </td>
  </tr>
`;
  }
  tableBody.innerHTML = carto;
}
// --------------------------------------------
// delete
function deleteBook(deketIndex){
  bookContainer.splice(deketIndex,1)
  localStorage.setItem("myBook", JSON.stringify(bookContainer));
  displayForm(bookContainer);
}
// -----------------------------------------------------------------
