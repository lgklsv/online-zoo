const hamburgerElement = document.querySelector('.hamburger-menu-container');
const dropDownMenu = document.querySelector('.hamburger-navbar');
const overlay = document.querySelector('.overlay-hidden');


const hamburgerControl = function() {
    dropDownMenu.classList.toggle('hamburger-navbar-change');
    hamburgerElement.classList.toggle('change');
    overlay.classList.toggle('overlay');
}

hamburgerElement.addEventListener('click', hamburgerControl);
overlay.addEventListener('click', hamburgerControl);