/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('class');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Programmer', 'Game Developer', 'Web Developer', 'Designer', 'YouTuber', 'Gamer', 'Violinist'],
    typeSpeed: 100,
    backSpeed: 125,
    backDelay: 1500,
    loop: true
});

/*==================== go top ====================*/
const goTopBtn = document.getElementById('GoTop');

window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) {
        goTopBtn.style.display = "block";
    }

    else {
        goTopBtn.style.display = "none";
    }
})

/*==================== loader ====================*/
var myVar;

function loader() {
    myVar = setTimeout(showPage, 3000);
    goTopBtn.style.display = "none";
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("All").style.display = "block";
    document.getElementById(window.location.href.split("#")[1]).scrollIntoView();

    /*==================== scroll reveal ====================*/
    ScrollReveal({
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .portfolio-box, .contact, .form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1', { origin: 'left' });
    ScrollReveal().reveal('.home-content p', { origin: 'right' });
}