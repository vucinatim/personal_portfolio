// Select DOM items
const menuBtnOut = document.querySelector(".menu-btn-outline");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const main = document.querySelector("main");

const navItems = document.querySelectorAll(".nav-item");

const btnText = document.querySelector(".btn-text");

const blurables = document.querySelectorAll(".blurable");

const readMore = document.querySelector(".read-more");

const toggleContactBtn = document.querySelector("#toggleContact");
const contactForm = document.querySelector(".contact-me");
const contactBtnImage = document.querySelector(".contact-btn-image");

// Set Initial State Of Menu
let showMenu = false;
let showContact = false;

navItems.forEach(item =>
  item.addEventListener(
    "mouseover",
    function() {
      btnText.innerHTML = item.id;
      btnText.classList.add("show");
      btnText.id = item.id;
    },
    item.addEventListener("mouseout", function() {
      btnText.classList.remove("show");
      btnText.removeAttribute("id");
    })
  )
);

menuBtnOut.addEventListener("click", function() {
  toggleMenu(function() {
    resetMenu();
  });
});

function toggleMenu(callback) {
  if (!showMenu) {
    // main.classList.add("hide");
    blurables.forEach(item => item.classList.add("blur"));
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBtnOut.classList.add("hide");
    navItems.forEach(item => item.classList.add("show"));
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBtnOut.classList.remove("hide");
    navItems.forEach(item => item.classList.remove("show"));
    // main.classList.remove("hide");
    blurables.forEach(item => item.classList.remove("blur"));

    // Set Menu State
    showMenu = false;
    callback();
  }
}

function resetMenu() {
  setTimeout(function() {
    contactForm.classList.remove("show");
    menuNav.classList.remove("aside");
    contactBtnImage.className = "fas fa-envelope fa-2x contact-btn-image";
    showContact = false;
  }, 250);
}

toggleContactBtn.addEventListener("click", toggleContact);

function toggleContact() {
  if (!showContact) {
    contactForm.classList.add("show");
    menuNav.classList.add("aside");
    contactBtnImage.className = "fas fa-envelope-open fa-2x contact-btn-image";
    showContact = true;
  } else {
    contactForm.classList.remove("show");
    menuNav.classList.remove("aside");
    contactBtnImage.className = "fas fa-envelope fa-2x contact-btn-image";
    showContact = false;
  }
}

function displayBtnText(item) {
  btnText.innerHTML = "hovering";
}

const windowEl = $(window);
const bgImage = $(".bg-image");

scrollBg();

windowEl.scroll(scrollBg);

function scrollBg() {
  var scrollPosition = windowEl.scrollTop() / -2;
  bgImage.css({
    "background-position-y": +scrollPosition + "px"
  });
}
