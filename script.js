function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Animate items on load
document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll('.animate-up, .animate-fade');
    animatedItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
});

// Popup functionality
const orderBtn = document.getElementById("orderBtn");
const orderPopup = document.getElementById("orderPopup");
const closePopup = document.getElementById("closePopup");

orderBtn.addEventListener("click", () => {
    orderPopup.style.display = "flex";
});
closePopup.addEventListener("click", () => {
    orderPopup.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === orderPopup) {
        orderPopup.style.display = "none";
    }
});

// WhatsApp Popup
function openWhatsAppPopup() {
    document.getElementById("whatsapp-popup").style.display = "flex";
}

function closeWhatsAppPopup() {
    document.getElementById("whatsapp-popup").style.display = "none";
}