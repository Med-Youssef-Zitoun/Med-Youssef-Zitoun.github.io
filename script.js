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
