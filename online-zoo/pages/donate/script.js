// HAMBURGER MENU
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

// Variables
const maxNumbers = 4;
const inputAmout = document.querySelector('.input-amount');

const parentAmountsPicker = document.querySelector('.progress-bar-amounts');
const dotsContainer = document.querySelector('.progress-bar-amount-line');
const allAmounts = document.querySelectorAll('.progress-bar-amount-cash');
const allAmountsNumbers = Array.from(allAmounts).map(el => el.textContent.slice(1));


function removeActive() {
    // REMOVE active
    allAmounts.forEach(el => el.classList.contains('progress-bar-amount-cash-active') ? el.classList.remove('progress-bar-amount-cash-active') : '');

    Array.from(dotsContainer.children).forEach(dot => dot.firstElementChild.classList.contains('progress-bar-amount-dot-active') ? dot.firstElementChild.classList.remove('progress-bar-amount-dot-active') : '');
}

// INPUT TYPE NUMBER ONLY 4 DIGITS
inputAmout.addEventListener('keyup', function() {
    if(inputAmout.value.length > maxNumbers) {
        inputAmout.value = inputAmout.value.slice(0, maxNumbers);
    }
    else if(allAmountsNumbers.includes(inputAmout.value)) {
        let indexToActivate = allAmountsNumbers.indexOf(inputAmout.value);

        removeActive();

        allAmounts[indexToActivate].classList.add('progress-bar-amount-cash-active');
        dotsContainer.children[indexToActivate].firstElementChild.classList.add('progress-bar-amount-dot-active');
    }
})

// AMOUNTS PICKER 
parentAmountsPicker.addEventListener('click', function(e) {
    if (e.target.classList.contains('progress-bar-amount-cash')) {

        removeActive();
        
        // Find dot to activate
        let newDotIndex = Array.from(allAmounts).indexOf(e.target);

        // Put clicked value inside input 
        inputAmout.value = e.target.textContent.slice(1);

        // ADD Active
        e.target.classList.add('progress-bar-amount-cash-active');
        dotsContainer.children[newDotIndex].firstElementChild.classList.add('progress-bar-amount-dot-active');
    }
})  
