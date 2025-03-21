const electrons = document.querySelectorAll('.electron');
const closeCircuitButton = document.getElementById('closeCircuit');
const openCircuitButton = document.getElementById('openCircuit');

// Function to start the electron animation
function startAnimation() {
    electrons.forEach(electron => {
        electron.style.animationPlayState = 'running';
    });
}

// Function to stop the electron animation
function stopAnimation() {
    electrons.forEach(electron => {
        electron.style.animationPlayState = 'paused';
    });
}

// Event listeners for buttons
closeCircuitButton.addEventListener('click', startAnimation);
openCircuitButton.addEventListener('click', stopAnimation);


const eelectrons = document.querySelectorAll('.cap_electron');
const eelectronsright = document.querySelectorAll('.cap_electronr');
const chargeButton = document.getElementById('cap_charge');
const dischargeButton = document.getElementById('cap_discharge');

// Function to charge the capacitor
function chargeCapacitor() {
    eelectrons.forEach((electron, index) => {
        setTimeout(() => {
            electron.classList.add('charged');
        }, index * 300); // Staggered delay for each electron
    });

    eelectronsright.forEach((electron, index) => {
        setTimeout(() => {
            electron.classList.add('chargedr');
        }, index * 300);
    });
}

// Function to discharge the capacitor
function dischargeCapacitor() {
    eelectrons.forEach((electron, index) => {
        setTimeout(() => {
            electron.classList.remove('charged');
        }, index * 100);
    });

    eelectronsright.forEach((electron, index) => {
        setTimeout(() => {
            electron.classList.remove('chargedr');
        }, index * 100);
    });

    // Reset electrons after discharge
// Match the duration of the discharge animation
}

const acButton = document.getElementById('acButton');
const dcButton = document.getElementById('dcButton');
const acSection = document.getElementById('acSection');
const dcSection = document.getElementById('dcSection');

// Function to switch to AC
function showAC() {
    acSection.classList.add('active');
    dcSection.classList.remove('active');
    acButton.classList.add('active');
    dcButton.classList.remove('active');
}

// Function to switch to DC
function showDC() {
    dcSection.classList.add('active');
    acSection.classList.remove('active');
    dcButton.classList.add('active');
    acButton.classList.remove('active');
}

// Event listeners for buttons
acButton.addEventListener('click', showAC);
dcButton.addEventListener('click', showDC);

// Event listeners for buttons
chargeButton.addEventListener('click', chargeCapacitor);
dischargeButton.addEventListener('click', dischargeCapacitor);

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Handle initial load
window.addEventListener('load', () => {
    if (window.location.hash) {
        showSection(window.location.hash.substring(1));
    }
});

// Handle browser navigation
window.addEventListener('hashchange', () => {
    showSection(window.location.hash.substring(1));
});