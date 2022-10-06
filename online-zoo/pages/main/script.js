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


const cardsArr  = [
    {
    cardTitle: 'Giant Pandas',
    cardImg: '../../assets/images/pandas.png',
    altText: 'pandas',
    location: 'Native to Southwest China',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText: 'The giant panda is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.',  
    },
    {
    cardTitle: 'Eagles',
    cardImg: '../../assets/images/eagle.png',
    altText: 'eagle',
    location: 'Native to South America',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText: 'Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.Outside this area, just 14 species can be found—2 in North America, 9 in Central and South America, and 3 in Australia.', 
    },
    {
    cardTitle: 'Gorillas',
    cardImg: '../../assets/images/gorilla.png',
    altText: 'gorilla',
    location: 'Native to Congo',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText: 'Gorillas are herbivorous, predominantly ground-dwelling great apes that inhabit the tropical forests of equatorial Africa. The genus Gorilla is divided into two species: the eastern gorilla and the western gorilla, and either four or five subspecies.', 
    },
    {
    cardTitle: 'Two-toed Sloth',
    cardImg: '../../assets/images/two-toed-sloth.png',
    altText: 'two-toed-sloth',
    location: 'Mesoamerica, South America',
    cardIcon: '../../assets/icons/banana-bamboo_icon.svg',
    altIcon: 'banana-bamboo_icon',
    hiddenText: 'Sloths are a group of arboreal Neotropical xenarthran mammals constituting the suborder Folivora. Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. They are considered to be most closely related to anteaters, together making up the xenarthran order Pilosa.', 
    },
    {
    cardTitle: 'Cheetahs',
    cardImg: '../../assets/images/cheetahs.png',
    altText: 'cheetahs',
    location: 'Native to Africa',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText: 'The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h with the fastest reliably recorded speeds being 93 and 98 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail.', 
    },
    {
    cardTitle: 'Penguins',
    cardImg: '../../assets/images/penguins.png',
    altText: 'penguins',
    location: 'Native to Antarctica',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText: 'Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.', 
    },
    {
    cardTitle: 'Alligators',
    cardImg: '../../assets/images/aligator.png',
    altText: 'alligators',
    location: 'Native to Southeastern U. S.',
    cardIcon: '../../assets/icons/meet-fish_icon.svg',
    altIcon: 'meet-fish_icon',
    hiddenText: 'An alligator is a large reptile in the Crocodilia order in the genus Alligator of the family Alligatoridae. The two extant species are the American alligator and the Chinese alligator. Additionally, several extinct species of alligator are known from fossil remains.', 
    }
]

const parentElAnimalsGrid = document.querySelector('.animals-grid');
const animalsGridContainer = document.getElementById('animals-grid-section');

animalsGridContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('prev') || e.target.classList.contains('next')) {
        let shuffledArr = shuffleArr(cardsArr);
        parentElAnimalsGrid.innerHTML = '';
        const markup = render(shuffledArr.slice(0,6));
        parentElAnimalsGrid.insertAdjacentHTML('afterbegin', markup);
    }
});

function shuffleArr(arr) {
    return arr.sort(()=> Math.random() - 0.5);    
}

function render(data) {
    if(!data || (Array.isArray(data)) && data.length === 0 ) return;
    return data.map(obj => generateCard(obj)).join('');
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