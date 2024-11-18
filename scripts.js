// Smooth Scroll on Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight Active Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.top < window.innerHeight * 0.5;

        if (isInViewport) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Toggle Mobile Navigation
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

// Lightbox Functionality
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightbox.style.display = 'block';
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Feedback Form Submission
function submitFeedback(event) {
    event.preventDefault();
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.textContent = "Terima kasih atas umpan balik Anda!";
    feedbackMessage.style.color = "green";
    document.getElementById('feedbackForm').reset();
}
