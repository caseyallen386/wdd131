
const planets = [
    {
        name: "The Sun",
        excerpt: "The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything — from the biggest planets to the smallest bits of debris — in its orbit.",
        img: {
            src : 'images/planets/the-sun.webp',
            alt: 'The Sun'
        }
    },
    {
        name: "Mercury",
        excerpt : "Mercury is the closest planet to the Sun, and the smallest planet in our solar system. It's only slightly larger than Earth's Moon.",
        img: {
            src : 'images/planets/mercury.webp',
            alt : 'The Planet Mercury'
        }
    },
    {
        name: "Venus",
        excerpt: "Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.",
        img: {
            src: 'images/planets/venus.webp',
            alt : 'The Planet Venus'
        }
    },
    {
        name: "Earth",
        excerpt: "Earth is the third planet from the Sun and the only known planet to support life. It has liquid water, a protective atmosphere, and a diverse range of plants and animals.",
        img: {
            src: 'images/planets/the-earth.webp',
            alt: 'Home Sweet Home'
        }
    },
    {
        name: "Mars",
        excerpt: "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.",
        img: {
            src : 'images/planets/mars.webp',
            alt: 'The Planet Mars'
        }
    },
    {
        name: "Jupiter",
        excerpt: "Jupiter is the fifth planet from the Sun, and the largest in the solar system, by far — more than twice as massive as the other planets combined.",
        img: {
            src : 'images/planets/jupiter.webp',
            alt : 'The Planet Jupiter'
        }
    },
    {
        name: "Saturn",
        excerpt: "Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.",
        img: {
            src : 'images/planets/saturn.webp',
            alt : 'The Planet Saturn'
        }
    },
    {
        name: "Uranus",
        excerpt: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.",
        img: {
            src : 'images/planets/uranus.webp',
            alt : 'The Planet Uranus'
        }
    },
    {
        name: "Neptune",
        excerpt: "Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.",
        img: {
            src : 'images/planets/neptune.webp',
            alt : 'The Planet Neptune'
        }
    },
    {
        name: "Pluto",
        excerpt: "Pluto is by far the most famous dwarf planet. Discovered by Clyde Tombaugh in 1930, Pluto was long considered our solar system's ninth planet. But after other astronomers found similar intriguing worlds deeper in the distant Kuiper Belt – the IAU reclassified Pluto as a dwarf planet in 2006. ",
        img: {
            src : 'images/planets/pluto.webp',
            alt: 'The Dwarf Planet Pluto'
        }
    },
];

const page = window.location.href.split('/').at(-1),
      date = new Date();


/**
 * this function is used to randomly pick a planet from the given array and display it inside the specified container
 * @param {object[]} planetsArray
 * @param {string} planetsArray.name
 * @param {string} planetsArray.excerpt
 * @param {object} planetsArray.img
 * 
 * @param {Element} container
 * @return {none}
 * 
 * 
 */

function planetSpotlight(planetsArray, container) {
    const planet = planetsArray[Math.floor( Math.random() * planetsArray.length)];

    container.innerHTML = 

    `<div class="planet-img">
        <img src="${planet.img.src}" alt="${planet.img.alt}" loading="lazy">
    </div>
    

    <div class="spotlight-text">
        <h3>${planet.name}</h3>

        <p>${planet.excerpt}</p>
    </div>`;

    
}

/**
 * this function is used to randomly pick a planet from the given array and display it inside the specified container
 * @param {object[]} planetsArray
 * @param {string} planetsArray.name
 * @param {string} planetsArray.excerpt
 * @param {object} planetsArray.img
 * 
 * @param {Element} container
 * @return {none}
 * 
 * 
 */
function planetsGallery(planetsArray, container){
    planetsArray.forEach(planet => {

        let figure =  document.createElement('figure'); 
    
        figure.classList.add('card');

        figure.innerHTML = `
            <h3 class="card-heading">${planet.name}</h3>
            <img src="${planet.img.src}" alt="${planet.img.alt}" loading="lazy">
            <figcaption class="card-excerpt">
                <p>${planet.excerpt}</p>
            </figcaption>
        `

        container.appendChild(figure);
    })
    
    
}
/**
 * 
 * @param {Element} container 
 */
function outPutNewsLetterSignUpForm(container){
    container.innerHTML = `
    <h3>Get the Newsletter!</h3>
    <form action="" method="get" id="newsletter-signup">

        <div class="inputs">
            <div class="li-group">
                <label for="full-name">Name</label>
                <input type="text" name="full-name" id="full-name" required>
            </div>
            <div class="li-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required>
            </div>

        </div>
        <div class="button">
            <button type="submit">Sign up!</button>
        </div>
    </form>
    `
}



switch(page) {
    case 'index.html':
        planetSpotlight(planets, document.getElementById('spotlight'));

        const welcomeDiv = document.getElementById('welcome');
    
        if (localStorage.getItem('ns-signup')) {

            date.setDate(date.getDate() + 7);


            welcomeDiv.innerHTML = `
            <h3>Welcome Back, ${localStorage.getItem('name')}!</h3>

            <p>The next Newsletter is set to arrive on ${date.toDateString()}. Look forward to it!</p>
            `
            document.getElementById('newsletter-section').remove();
        } else {
            const newsLetter =document.getElementById('newsletter-signup');

            welcomeDiv.classList.add('hidden');

            newsLetter.addEventListener('submit', (event) => {
                event.preventDefault();
                
                const formData = new FormData(newsLetter);

                let name = formData.get('full-name'), 
                    email = formData.get('email');

                localStorage.setItem('name', name);
                localStorage.setItem('ns-signup', 'true')


                document.getElementById('newsletter-section').innerHTML = `
                <h3>Thanks for Signing up, ${name}!</h3>

                <p>Check your ${email} inbox and please confirm your email!</p>
                `
            });
    }

    case 'planets.html':
        planetsGallery(planets, document.getElementById('planets-container'));
}



