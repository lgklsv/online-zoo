// HAMBURGER MENU
const hamburgerElement = document.querySelector('.hamburger-menu-container');
const dropDownMenu = document.querySelector('.hamburger-navbar');
const overlay = document.querySelector('.overlay-hidden');

const hamburgerControl = function () {
  dropDownMenu.classList.toggle('hamburger-navbar-change');
  hamburgerElement.classList.toggle('change');
  overlay.classList.toggle('overlay');
};

hamburgerElement.addEventListener('click', hamburgerControl);
overlay.addEventListener('click', hamburgerControl);

// RANDOM PET CARDS
const cardsArr = [
  {
    cardTitle: 'Giant Pandas',
    cardImg: '../../assets/images/pandas.png',
    altText: 'pandas',
    location: 'Native to Southwest China',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'The giant panda is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.',
  },
  {
    cardTitle: 'Eagles',
    cardImg: '../../assets/images/eagle.png',
    altText: 'eagle',
    location: 'Native to South America',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText:
      'Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.Outside this area, just 14 species can be found—2 in North America, 9 in Central and South America, and 3 in Australia.',
  },
  {
    cardTitle: 'Gorillas',
    cardImg: '../../assets/images/gorilla.png',
    altText: 'gorilla',
    location: 'Native to Congo',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'Gorillas are herbivorous, predominantly ground-dwelling great apes that inhabit the tropical forests of equatorial Africa. The genus Gorilla is divided into two species: the eastern gorilla and the western gorilla, and either four or five subspecies.',
  },
  {
    cardTitle: 'Two-toed Sloth',
    cardImg: '../../assets/images/two-toed-sloth.png',
    altText: 'two-toed-sloth',
    location: 'Mesoamerica, South America',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'Sloths are a group of arboreal Neotropical xenarthran mammals constituting the suborder Folivora. Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. They are considered to be most closely related to anteaters, together making up the xenarthran order Pilosa.',
  },
  {
    cardTitle: 'Cheetahs',
    cardImg: '../../assets/images/cheetahs.png',
    altText: 'cheetahs',
    location: 'Native to Africa',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText:
      'The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h with the fastest reliably recorded speeds being 93 and 98 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail.',
  },
  {
    cardTitle: 'Penguins',
    cardImg: '../../assets/images/penguins.png',
    altText: 'penguins',
    location: 'Native to Antarctica',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText:
      'Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
  },
  {
    cardTitle: 'Alligators',
    cardImg: '../../assets/images/aligator.png',
    altText: 'alligators',
    location: 'Native to Southeastern U. S.',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText:
      'An alligator is a large reptile in the Crocodilia order in the genus Alligator of the family Alligatoridae. The two extant species are the American alligator and the Chinese alligator. Additionally, several extinct species of alligator are known from fossil remains.',
  },
  {
    cardTitle: 'Lion',
    cardImg: '../../assets/images/lion.jpg',
    altText: 'lion',
    location: 'Native to Africa and India',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText:
      'The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.',
  },
  {
    cardTitle: 'Giraffe',
    cardImg: '../../assets/images/giraffe.jpg',
    altText: 'giraffe',
    location: 'Native to sub-Saharan Africa',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies.',
  },
  {
    cardTitle: 'Camel',
    cardImg: '../../assets/images/Camel.jpg',
    altText: 'camel',
    location: 'Native to deserts and steppes',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as "humps" on its back. Camels have long been domesticated and, as livestock, they provide food and textiles.',
  },
  {
    cardTitle: 'Elephant',
    cardImg: '../../assets/images/elephant.jpg',
    altText: 'elephant',
    location: 'Native to Africa and Asia',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea.',
  },
  {
    cardTitle: 'Dolphin',
    cardImg: '../../assets/images/dolphin.jpg',
    altText: 'dolphin',
    location: 'Native to tropical waters',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText:
      'A dolphin is an aquatic mammal within the infraorder Cetacea. Dolphin species belong to the families Delphinidae, Platanistidae, Iniidae, Pontoporiidae, and the extinct Lipotidae. There are 40 extant species named as dolphins.',
  },
];

const parentElAnimalsGrid = document.querySelector('.animals-grid');
const parentParentElAnimalsGrid = document.querySelector('.animals-grid-container');
const animalsGridContainer = document.getElementById('animals-grid-section');
const elementAnimated = document.querySelector('.card-item');
let flag = true;

animalsGridContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('prev') && flag) {
    flag = false;
    document.querySelector('.animals-grid').classList.add('slideLeftAnimation');
    let shuffledArr = shuffleArr(cardsArr);
    setTimeout(() => {
      parentParentElAnimalsGrid.innerHTML = '';
      const markup = render(shuffledArr.slice(0, 6), 'slideFromRightAnimation');
      parentParentElAnimalsGrid.insertAdjacentHTML('afterbegin', markup);
    }, 400);
    setTimeout(() => {
      document.querySelector('.animals-grid').classList.remove('slideLeftAnimation');
      document.querySelector('.animals-grid').classList.remove('slideFromRightAnimation');
      flag = true;
    }, 1200);
  } else if (e.target.classList.contains('next') && flag) {
    flag = false;
    document.querySelector('.animals-grid').classList.add('slideRightAnimation');
    let shuffledArr = shuffleArr(cardsArr);
    setTimeout(() => {
      parentParentElAnimalsGrid.innerHTML = '';
      const markup = render(shuffledArr.slice(0, 6), 'slideFromLeftAnimation');
      parentParentElAnimalsGrid.insertAdjacentHTML('afterbegin', markup);
    }, 400);
    setTimeout(() => {
      document.querySelector('.animals-grid').classList.remove('slideRightAnimation');
      document.querySelector('.animals-grid').classList.remove('slideFromLeftAnimation');
      flag = true;
    }, 1200);
  }
});

function shuffleArr(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function render(data, animation) {
  if (!data || (Array.isArray(data) && data.length === 0)) return;
  return `
        <div class="animals-grid ${animation}">
        ${data.map((obj) => generateCard(obj)).join('')}
        </div>
    `;
}

function generateCard(el) {
  return `
    <div class="card-item">
        <p class="card-amination-text">${el.hiddenText}</p>
        <img class="card-img" src="${el.cardImg}" alt="${el.altText}">
        <div class="card-item-bottom">
            <div class="card-item-title">
                <h4 class="animal-name">
                    ${el.cardTitle}
                </h4>
                <p class="animal-subtitle">${el.location}</p>
            </div>
            <div class="card-item-icons">
                <img class="card-item-icon" src="${el.cardIcon}" alt="${el.altIcon}">
            </div>
        </div>
    </div>
`;
}

// TESTIMONIALS SLIDER
const sliderInput = document.getElementById('slider');
const slides = document.querySelectorAll('.testimonials-card');

sliderInput.addEventListener('change', function () {
  let change = sliderInput.value;
  let index = (change * 8) / 100;
  let userWidth = window.innerWidth <= 1375 && window.innerWidth >= 980 ? 110 : 111;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * userWidth}%)`;
  });
});

// TESTIMONIALS 640px 320px
const parentTestimonials = document.querySelector('.testimonials-container');
const testimonialsOverlay = document.querySelector('.testOverlay');
const cardCover = document.querySelector('.popover-cover-hidden');
const testimonialsCross = document.querySelector('.popover-cover__cross');

parentTestimonials.addEventListener('click', function (e) {
  if (e.target.classList == 'testimonials-card') {
    e.target.classList.toggle('popover');
    cardCover.classList.toggle('popover-cover');
    testimonialsOverlay.classList.toggle('overlay');
  }
});

function closeTesimonialsCard() {
  const allCards = document.querySelectorAll('.testimonials-card');
  allCards.forEach((card) => (card.classList.contains('popover') ? card.classList.remove('popover') : ''));
  cardCover.classList.toggle('popover-cover');
  testimonialsOverlay.classList.toggle('overlay');
}

testimonialsOverlay.addEventListener('click', closeTesimonialsCard);
testimonialsCross.addEventListener('click', closeTesimonialsCard);

const testimonialsCards = document.querySelectorAll('.testimonials-card');
window.addEventListener('resize', function () {
  if (
    this.window.innerWidth == 840 ||
    this.window.innerWidth == 640 ||
    this.window.innerWidth == 320 ||
    this.window.innerWidth == 375 ||
    this.window.innerWidth == 390 ||
    this.window.innerWidth == 414
  ) {
    testimonialsCards.forEach((card) => card.style.removeProperty('transform'));
    console.log('done');
  }
});
