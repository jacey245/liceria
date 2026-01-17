// ===== Liceria Kids Playground - JavaScript ===== //

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'var(--white)';
    }
});

// Modal Functions
const modal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');
const modalButton = document.getElementById('modalButton');

function showModal(message) {
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modalButton.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Log booking data (In production, this would be sent to a server)
    console.log('Booking Data:', data);
    
    // Show success message
    showModal('Thank you for your booking! We will send you a confirmation email shortly.');
    
    // Reset form
    bookingForm.reset();
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Log contact data (In production, this would be sent to a server)
    console.log('Contact Data:', data);
    
    // Show success message
    showModal('Thank you for reaching out! We will get back to you within 24 hours.');
    
    // Reset form
    contactForm.reset();
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get email from form
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Log newsletter subscription (In production, this would be sent to a server)
    console.log('Newsletter Subscription:', email);
    
    // Show success message
    showModal('Successfully subscribed to our newsletter!');
    
    // Reset form
    newsletterForm.reset();
});

// Set minimum date for booking (today)
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Scroll Animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations except hero
document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('hero')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    }
});

// Hero section should be visible immediately (no animation delay)
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// Log to console when website loads
console.log('Liceria Kids Playground Website Loaded Successfully!');
console.log('All interactive features are ready.');

// Add click animation to all buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Gallery image click handler (optional - for future lightbox feature)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        console.log('Gallery item clicked:', this);
        // You can add lightbox functionality here in the future
    });
});

// Activity card hover effect enhancement
document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature card animation on hover
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.feature-icon');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.feature-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// IMAGE LOADING DEBUG - Check console for errors
window.addEventListener('DOMContentLoaded', function() {
    console.log('=== IMAGE LOADING DEBUG ===');
    
    // Check all images
    const allImages = document.querySelectorAll('img');
    console.log('Total images on page:', allImages.length);
    
    // Check activity images specifically
    const activityImages = document.querySelectorAll('.activity-image img');
    console.log('Activity images found:', activityImages.length);
    
    activityImages.forEach((img, index) => {
        img.addEventListener('load', function() {
            console.log(`✓ Activity image ${index + 1} loaded:`, this.src);
        });
        
        img.addEventListener('error', function() {
            console.error(`✗ Activity image ${index + 1} FAILED to load:`, this.src);
            console.error('Full path attempted:', this.currentSrc || this.src);
            // Add red border to failed images for visual identification
            this.style.border = '3px solid red';
            this.style.backgroundColor = '#ffcccc';
        });
    });
    
    // List all image sources being attempted
    console.log('Image sources being requested:');
    activityImages.forEach((img, index) => {
        console.log(`${index + 1}. ${img.src}`);
    });
});