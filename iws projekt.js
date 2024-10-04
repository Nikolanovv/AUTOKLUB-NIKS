// Auto galerija
const images = [
    "slike/audi r8.avif",
    "slike/audi rs6.avif",
    "slike/audi ttrs.avif",
    "slike/bmw m4.avif",
    "slike/ford mustang.avif",
    "slike/hyundai i30 n.avif",
    "slike/suzuki swift sport.avif",
    "slike/porshe panamera.avif",
    "slike/nissan gtr.avif",
    "slike/lamborghini.avif"
];

let currentIndex = 0;

function showImage(index) {
    const img = document.getElementById('currentImage');
    if (img) {
        img.src = images[index];
    } else {
        console.error("Element s ID-om 'currentImage' nije pronađen.");
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


showImage(currentIndex);

// Kalkulator
let displayValue = '';
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        alert('Dogodila se greška!');
        clearDisplay();
    }
}

// Tajmer
let timer = null;
let minutes = 0;
let seconds = 0;

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('minutes').textContent = minutesStr;
    document.getElementById('seconds').textContent = secondsStr;
}

var links = [
    "https://www.hak.hr", // Hrvatski autoklub
    "https://webshop.tokic.hr/", // Tokić autodijelovi
    "https://www.autokreso.hr", // Auto Krešo
    "https://www.autozubak.hr", // AutoZubak
    "https://www.honda.hr", // Honda Hrvatska
    "https://www.renault.hr", // Renault Hrvatska
    "https://www.mazda.hr", // Mazda Hrvatska
    "https://www.autohrvatska.hr", // Auto Hrvatska
    "https://www.citroen.hr", // Citroën Hrvatska
    "https://www.opel.hr" // Opel Hrvatska
];


linkElement.href = links[randomIndex];
var contactForm = document.getElementById('contactForm');
var randomIndex = Math.floor(Math.random() * links.length);
var linkElement = document.getElementById('randomLink');

contactForm.addEventListener('submit', function(event) {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    var gender = document.querySelector('input[name="gender"]:checked');
    var consent = document.getElementById('consent').checked;

   
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Molimo popunite sva potrebna polja.');
        event.preventDefault(); 
        return;
    }

    
    if (!gender) {
        alert('Molimo odaberite spol.');
        event.preventDefault();
        return;
    }

    
    if (!consent) {
        alert('Molimo potvrdite pristanak za davanje informacija.');
        event.preventDefault();
        return;
    }
});
