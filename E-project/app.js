

$(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
  
    var setView = function(view) { universe.removeClass().addClass(view); };
  
    $("#toggle-data").click(function(e) {
      body.toggleClass("data-open data-close");
      e.preventDefault();
    });
  
    $("#toggle-controls").click(function(e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });
  
    $("#data a").click(function(e) {
      var ref = $(this).attr("class");
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });
  
    init();
  
  });


  $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });





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

function updatePlanetDescription(planetId) {
    // Find the planet object based on the ID
    const planet = planets.find(p => p.id === planetId);
    
    // Get the paragraph element where the description will be shown
    const planetDescription = document.getElementById('planetDescription');
    
    // Update the innerHTML with the planet's name and description
    if (planet) {
        planetDescription.innerHTML = `<h3>${planet.name}</h3><p>${planet.description}</p>`;
    } else {
        planetDescription.innerHTML = '<p>Select a planet to see the description.</p>';
    }
}

// Add an event listener to each card to detect clicks
document.querySelectorAll('.card  ').forEach(card => {
    card.addEventListener('click', function () {
        // Get the ID of the clicked card
        const planetId = this.id;

        // Update the planet description based on the card clicked
        updatePlanetDescription(planetId);
    });
});
 // Initialize Slick with the afterChange event
$('.planet_container').slick({
    centerMode: true,
    centerPadding: '100px',
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
    // afterChange event to detect active (center) card
    afterChange: function(event, slick, currentSlide) {
        // Get the current active (center) slide
        const centerCard = slick.$slides[currentSlide];

        // Get the ID of the center card
        const planetId = $(centerCard).attr('id');

        // Update the planet description based on the active card
        updatePlanetDescription(planetId);
    }
});

// Initial description update for the first active slide on page load
$(document).ready(function() {
    const initialCenterCard = $('.planet_container .slick-center').attr('id');
    updatePlanetDescription(initialCenterCard);
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is registered or not
    const isRegistered = true; // Change this based on user status

    if (isRegistered) {
        const downloadButtons = document.querySelectorAll(".registered-only");
        downloadButtons.forEach(button => {
            button.style.display = "inline-block";
        });
    }
});


// Display current date, time, 
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);