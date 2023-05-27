/* ------------------------------------------------------------------ */
/* Navbar Observer
/* ------------------------------------------------------------------ */

// variables for keeping track of navbar
const home = document.getElementById("home");
const navbar = document.getElementById("main-nav");

const navbarOptions = {
    threshold: 0.8,
};

var navbarObserver = new IntersectionObserver(entries => {
    navbar.classList.toggle('active', !entries[0].isIntersecting);
}, navbarOptions);

// this is for the intersection observer keeping track of elements
navbarObserver.observe(home)
navbarObserver.observe(navbar);


/* ------------------------------------------------------------------ */
/* General Observer
/* ------------------------------------------------------------------ */

const generalOptions = {};

const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('faded');
            generalObserver.unobserve(entry.target);
        }
    });
}, generalOptions);

// observe all required elements at once
document.querySelectorAll('.fade-up').forEach(element => {
    generalObserver.observe(element);
});


/* ------------------------------------------------------------------ */
/* Side fade Observer
/* ------------------------------------------------------------------ */

const sideOptions = {};

const sideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('faded-horizontal');
            generalObserver.unobserve(entry.target);
        }
    });
}, generalOptions);

// observe elements
document.querySelectorAll('.fade-right').forEach(element => {
    sideObserver.observe(element);
});

document.querySelectorAll('.fade-left').forEach(element => {
    sideObserver.observe(element);
});