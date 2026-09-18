const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: new Date("Aug 7 2005"),
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah",
    dedicated: new Date("May 21 1888"),
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah",
    dedicated: new Date("June 7 2015"),
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: new Date("May 2 2020"),
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland",
    dedicated: new Date("Nov 19 1974"),
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: new Date("Jan 10 1986"),
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: new Date("Dec 2 1983"),
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  // these need to be changed
  {
    templeName: "Ogden Utah Temple",
    location: "Ogden, Utah",
    dedicated: new Date("Jan 20 1972"),
    area: 112232,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
  },
  {
    templeName: "San Diego California Temple",
    location: "San Diego, CA",
    dedicated: new Date("April 30 1993"),
    area: 58005,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Palmyra New York Temple",
    location: "Palmyra, New York",
    dedicated: new Date("April 6 2000"),
    area: 10900,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-temple-761300-wallpaper.jpg"
  },
];

const albumContainer =  document.getElementById('album-container');
const menuButton = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');

menuButton.addEventListener('click', () => {
    // Need to compare the string value of the attribute
    // instead of the literal true of false values
    let isOpen = menuButton.getAttribute('aria-expanded') == "true";

    if (isOpen) {
        
        requestAnimationFrame(() => {
            mainMenu.style.height = '0px';
        });

        menuButton.setAttribute('aria-expanded', 'false');
    
    } else {        
        mainMenu.style.height = `${mainMenu.scrollHeight}px`;
        menuButton.setAttribute('aria-expanded', 'true');

    }

});

window.addEventListener('resize', () =>{

    


    if (window.innerWidth >= 700) {
        mainMenu.removeAttribute('style');
    }    
    

});

//<figure class="card">
  //          <img src="images/ogden_temple_exterior_lds.jpeg" alt="Ogden Temple exterior" fetchpriority="high">
    //        <figcaption>
    //        </figcaption>
      //  </figure>

// Loop the the temples array and create cards for each.

// The name of the temple.
// The location of the temple.
// The date the temple was dedicated.
// The total area of the temple in square feet.
// The provided image of the temple (an absolute address), making sure to include an appropriate alt value such as the name of the temple.
// Use native lazy loading for each temple image.



let filtered = temples.filter((temple) => {

    // Old – temples built before 1900
    // New – temples built after 2000
    // Large – temples larger than 90,000 square feet
    // Small – temples smaller than 10,000 square feet
    // Home – displays all the temples stored in the array.

    
    

    switch (window.location.search) {
      case '?old' : 
        
        return temple.dedicated.getFullYear() < 1900 ;

      case '?new': 

        return temple.dedicated.getFullYear() > 2000;

      case '?large':

        return temple.area > 90000;

      case '?small':

        return temple.area < 10000;

      default: 
        return temple;

    }

});



filtered.forEach(temple => {

    let card = document.createElement('figure');

    card.classList.add('card');

    card.innerHTML = 
    
    `<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" fetchpriority="high">
    <h3>${temple.templeName}</h3>    
    <figcaption>
            
      <span class="label">Location:</span><span class="value">${temple.location}</span>
      <span class="label">Dedication Date:</span><span class="value">${temple.dedicated.toDateString()}</span>
      <span class="label">Area:</span><span class="value">${temple.area.toLocaleString()} Sq Ft</span>
                
    </figcaption>`;
               
    albumContainer.appendChild(card);
});

