// function toggleMenu() {
//   var menuIcon = document.querySelector(".menu-icon");
//   var navList = document.getElementById("nav-list");
//   menuIcon.classList.toggle("change");
//   navList.classList.toggle("show");
// }
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let clickcontainer = document.querySelector(".scroll-imgs");

let firstbtn = document.getElementById("firstbtn");
let lastbtn = document.getElementById("lastbtn");
firstbtn.addEventListener("click",()=>{
  clickcontainer.scrollLeft+=1000;
});
lastbtn.addEventListener("click", ()=>{
  clickcontainer.scrollLeft -=1000;
});
