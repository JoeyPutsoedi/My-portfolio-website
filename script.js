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
    menuList.style.pointerEvents = "none";
  }
}

/*-----------------------------tools scroll-----------------------*/
var position = 0;
setInterval(() => {
  // If at the last position, reset back to 0 smoothly
  if (window.innerWidth <= 1024) {
    if (position >= 6) {
      position = -1; // -1 so next iteration becomes 0
    }
  } else {
    if (position >= 5) {
      position = -1;
    }
  }

  moveCarousel("forward");
}, 3000);

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
      info1.style.display = "block";
      break;

    case `two`:
      info2.style.display = "block";
      break;

    case `three`:
      info3.style.display = "block";
      break;

    case `four`:
      info4.style.display = "block";
      break;

    case `five`:
      info5.style.display = "block";
      break;
  }
}

/*-------------------About Section-----------------------------*/
const faqs = document.querySelectorAll(".faqItem");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

/*-------------------Dark Mode-------------------------------- */
let darkmode = localStorage.getItem("darkmode");
const switcher = document.querySelector("#theme-switcher");
const mobileSwitcher = document.querySelectorAll(".mobile");
const darkText = document.querySelector("#dark-text");
const lightText = document.querySelector("#light-text");

const enableDarkMode = () => {
  document.body.style.transition = "0.7s ease";
  document.body.classList.add("darkMode");
  localStorage.setItem("darkmode", "active");
  darkText.innerText = "On";
  lightText.innerText = "Off";
};

const disableDarkMode = () => {
  document.body.style.transition = "0.7s ease";
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkmode", null);
  darkText.innerText = "Off";
  lightText.innerText = "On";
};

if (darkmode === "active") enableDarkMode();

switcher.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");

  darkmode !== "active" ? enableDarkMode() : disableDarkMode();

  console.log("darkmode:", darkmode);
});

mobileSwitcher.forEach((m) => {
  m.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");

    darkmode !== "active" ? enableDarkMode() : disableDarkMode();

    console.log("darkmode:", darkmode);
  });
});
