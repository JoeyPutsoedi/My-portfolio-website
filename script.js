let aboutBttn = document.querySelector(".aboutBtn");
let aboutGrids = document.querySelectorAll("#mePhoto");
let menuList = document.querySelector("#menuList");
const text = document.querySelector(".textBadge p");
let ikon = document.querySelector(".fa-bars");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 6.5}deg)">${char}</span>`
  )
  .join("");

function toggleMenu() {
  if (menuList.style.opacity == "0") {
    menuList.style.transition = "0.3s";
    menuList.style.opacity = "1";
    menuList.style.pointerEvents = "auto";
    ikon.style.transform = "rotate(90deg)";
    ikon.style.transition = "0.4s";
  } else {
    menuList.style.transition = "0.3s";
    menuList.style.opacity = "0";
    ikon.style.transform = "rotate(0deg)";
    ikon.style.transition = "0.4s";
  }
}

aboutBttn.onmouseover = () => {
  aboutGrids.forEach((items) => {
    items.style.transition = "3.5s";
    items.src = "images/10-O.jpg";
  });
};
aboutBttn.onmouseout = () => {
  aboutGrids.forEach((items) => {
    items.style.transition = "1.5s";
    items.src = "images/10.jpg";
  });
};
