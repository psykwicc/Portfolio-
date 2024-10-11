


window.onload = function () {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
};

function updateActiveNav() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
document.addEventListener('DOMContentLoaded', updateActiveNav);

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('cursor__highlight');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

const hoverText = document.querySelector('.spot');
const popupImage = document.getElementById('spot');

hoverText.addEventListener('mousemove', (e) => {
    // Show the image
    popupImage.style.display = 'block';

    popupImage.style.left = `${e.pageX - popupImage.offsetWidth / 2}px`;
    popupImage.style.top = `${e.pageY - popupImage.offsetHeight}px`;
});

hoverText.addEventListener('mouseleave', () => {
    // Hide the image when the cursor leaves the text
    popupImage.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress__fill');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav__link');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add event listener to the "ABOUT" nav link
    const aboutNavLink = document.querySelector('a[href="#about"]');
    if (aboutNavLink) {
        aboutNavLink.addEventListener('click', function (event) {
            // Prevent default anchor behavior
            event.preventDefault();
            scrollToTop();

            // Optionally, you can manually navigate to the "ABOUT" section after scrolling to the top
            // Uncomment the following line if you want to scroll to the "ABOUT" section smoothly after scrolling to the top
            // setTimeout(() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }), 300);
        });
    }

    // Add event listener to the "header__name"
    const headerName = document.querySelector('.header__name');
    if (headerName) {
        headerName.addEventListener('click', function () {
            scrollToTop();
        });
    }
});

const toggleLink = document.getElementById('light__mode');
toggleLink.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent the link from navigating
    document.body.classList.toggle('light-mode');
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.nrD5c');

    window.addEventListener('scroll', () => {
        // Get the scroll position
        const scrollPosition = window.scrollY;

        // Get the height of the document
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Check if scrolled to the bottom
        if (scrollPosition + windowHeight >= documentHeight - 10) {
            content.classList.add('unblur'); // Remove blur if at the bottom
        } else {
            content.classList.remove('unblur'); // Apply blur again when scrolling up
        }
    });
});



ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1800,
    delay: 185
});

ScrollReveal().reveal('', { origin: 'top' });

ScrollReveal().reveal('.navBarContainer, .about, .skills, .education, .project, .experience, .skills__tit, .p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .skills-box, .skills__icon, .skills__desc, .project__item', { origin: 'bottom' });

ScrollReveal().reveal('.header__name, .header__program, .header__bio, .nav__links, .social__icons', { origin: 'left' });

ScrollReveal().reveal('', { origin: 'right' });
