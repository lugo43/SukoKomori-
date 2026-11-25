
/* ==============================
   SUKOKOMORI - JAVASCRIPT
============================== */

// MOBILE MENU

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        const isOpen = navLinks.classList.contains('open');

        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu after clicking a link

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// EXTERNAL LINKS

document.querySelectorAll('[data-external]').forEach(link => {
    link.addEventListener('click', () => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// ACTIVE NAV LINK

const sections = document.querySelectorAll('section[id]');
const navigationLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

});

// ==============================
// SUKOKOMORI - SOCIAL LINKS
// ==============================

const socialLinks = [
    {
        name: "♡ Twitch",
        url: "https://www.twitch.tv/sukokomori"
    },
    {
        name: "♡ X (Twitter)",
        url: "https://x.com/SukoKomori"
    }
];

const socialContainer = document.getElementById("social-links");

if (socialContainer) {

    socialLinks.forEach(social => {

        const link = document.createElement("a");

        link.classList.add("social-link");
        link.textContent = social.name;
        link.href = social.url;

        link.target = "_blank";
        link.rel = "noopener noreferrer";

        socialContainer.appendChild(link);

    });

}
 