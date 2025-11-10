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
/*-----------------------------tools scroll-----------------------*/
var position = 0;

function moveCarousel(direction) {
  if (direction == `backward`) {
    if (position == 0) {
      return false;
    }
    position--;
  }
  if (direction == `forward`) {
    if (window.innerWidth <= 1024) {
      if (position == 6) {
        return false;
      }
    } else {
      if (position == 5) {
        return false;
      }
    }

    position++;
  }

  const offset = 115 * position;
  const items = document.querySelectorAll(".tIcons");

  items.forEach((item) => {
    item.style.transform = `translateX(-${offset}px)`;
  });
}

/*---------------------Infomatic section---------------------- */
const info1 = document.querySelector(".info-1");
const info2 = document.querySelector(".info-2");
const info3 = document.querySelector(".info-3");
const info4 = document.querySelector(".info-4");
const info5 = document.querySelector(".info-5");

function closeButton(prop) {
  switch (prop) {
    case `one`:
      info1.style.display = "none";
      break;

    case `two`:
      info2.style.display = "none";
      break;

    case `three`:
      info3.style.display = "none";
      break;

    case `four`:
      info4.style.display = "none";
      break;

    case `five`:
      info5.style.display = "none";
      break;
  }
}

function renderContent(prop) {
  switch (prop) {
    case `one`:
      info1.style.transition = "0.4s";
      info1.style.display = "block";
      break;

    case `two`:
      info2.style.transition = "0.4s";
      info2.style.display = "block";
      break;

    case `three`:
      info3.style.transition = "0.4s";
      info3.style.display = "block";
      break;

    case `four`:
      info4.style.transition = "0.4s";
      info4.style.display = "block";
      break;

    case `five`:
      info5.style.transition = "0.4s";
      info5.style.display = "block";
      break;
  }
}
