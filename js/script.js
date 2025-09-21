// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Active Nav Highlight (remove active on click for mobile too)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Close mobile menu if open
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});

// Scroll Animations with Intersection Observer
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Gallery Filter (only if on gallery page)
const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            const filterValue = btn.dataset.filter;
            items.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Form Validation (only if on contact page)
const form = document.getElementById('inquiry-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you! Your inquiry has been submitted. I\'ll get back to you soon. (This is a simulation.)');
        form.reset();
    });
}