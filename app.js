const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display moblie menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu)

//to show active bar while scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    // adding the "highligh" class to menu items

    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return
  } else if (window.innerWidth > 960 && scrollPos < 1100) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return
  } else if (window.innerWidth > 960 && scrollPos < 1850) {
      servicesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
  }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//closing mobile menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 968 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// let menu = document.querySelector("#menu-bar");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//     menu.classList.toggle("fa-times");
//     navbar.classList.toggle("active");
// };

// window.onscroll = () => {
//     menu.classList.remove("fa-times");
//     navbar.classList.remove("active");

//     if (window.scrollY > 60) {
//         document.querySelector("#scroll-top").classList.add("active");
//     } else {
//         document.querySelector("#scroll-top").classList.remove("active");
//     }
// };;
