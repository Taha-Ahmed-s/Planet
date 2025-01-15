// Visitor count
let visitorCount = 0;
document.getElementById("visitorcount").innerText = ++visitorCount;

// Geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("location").innerText = `Lat: ${lat}, Lon: ${lon}`;
    });
}

// planet //yopu can write only on description
const planets = [
    { name: 'Sun', description: 'The Sun is the star at the center of our solar system, providing light and heat to the planets.', id: 'sun' },
    { name: 'Mercury', description: 'Mercury is the closest planet to the Sun and the smallest planet in our solar system.', id: 'mercury' },
    { name: 'Venus', description: 'Venus is the second planet from the Sun and is the hottest planet due to its thick atmosphere.', id: 'venus' },
    { name: 'Earth', description: 'Earth is the third planet from the Sun and the only known planet to support life.', id: 'earth' },
    { name: 'Mars', description: 'Mars, the fourth planet, is known as the Red Planet due to its reddish appearance.', id: 'mars' },
    { name: 'Jupiter', description: 'Jupiter is the largest planet in the solar system and is known for its Great Red Spot.', id: 'jupiter' },
    { name: 'Saturn', description: 'Saturn is the second-largest planet, famous for its spectacular ring system.', id: 'saturn' },
    { name: 'Uranus', description: 'Uranus is a gas giant with a unique tilted axis, causing it to rotate on its side.', id: 'uranus' },
    { name: 'Neptune', description: 'Neptune is the eighth planet from the Sun and has the strongest winds in the solar system.', id: 'neptune' },
    { name: 'Pluto', description: 'Pluto, once considered the ninth planet, is now classified as a dwarf planet.', id: 'pluto' },
];




setInterval(function() {
    const activeCard = document.querySelector('.slick-current .card');
    if (activeCard) {
        const activePlanetId = activeCard.id;
        const planetDescription = document.getElementById('planetDescription');

        // Find the corresponding planet object
        const activePlanet = planets.find(planet => planet.id === activePlanetId);
        
        if (activePlanet) {
            planetDescription.innerHTML = `<h3>${activePlanet.name}</h3><p>${activePlanet.description}</p>`;
        }
    }
}, 1000);

 // Initialize Slick with the afterChange event
$('.planet_container').slick({
    centerMode: true,
    centerPadding: '100px',
    autoplay:'true',

    slidesToShow: 3,
   
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ],

    
});


// Display current date, time, 
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

// Load Google Maps API
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.body.appendChild(script);

