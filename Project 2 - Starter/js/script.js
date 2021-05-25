const list = document.querySelectorAll(".cf");
const page = document.querySelector(".page");
let  item = "";

const elementPerPage = 10;
let index;
const numPagess = Math.ceil(list.length / elementPerPage);

function hideElements() {
  list.forEach(element => {
    element.style.display = "none";
  });
}

function createAtributs() {

  const divPagination = document.createElement("div");
  divPagination.setAttribute("class", "pagination")
  const elementUl = document.createElement("ul");
  elementUl.setAttribute("id", "numberPage");
  page.appendChild(divPagination)
  divPagination.appendChild(elementUl);

  for (var k = 1; k < numPagess + 1; k++) {
    var elementLi = document.createElement("li");
    var elementA = document.createElement("a");
    elementA.setAttribute("href", "#");
    elementLi.setAttribute("id", "list");
    var pagelist = document.getElementById("numberPage");
    pagelist.appendChild(elementLi);
    elementLi.appendChild(elementA);
    var pageNumbers = document.createTextNode(k);
    elementA.appendChild(pageNumbers);
      
      

    elementA.addEventListener("click", function  () {
      showElements(parseInt(this.innerText))
      item =  this.innerText
    });

  }

}

createAtributs();



function showElements(pag) {
  hideElements()


  for (var i = 0; i < elementPerPage; i++) {
  
    index = [pag] * elementPerPage - elementPerPage + i;

    if (list[index] !== undefined) {
      list[index].style.display = "block";
    }
  }
}

showElements(1)




