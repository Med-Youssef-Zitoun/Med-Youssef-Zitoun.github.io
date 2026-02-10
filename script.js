function loader() {
    document.body.classList.add("loading");
    document.body.style.overflow = "hidden";
    myVar = setTimeout(showPage, 800);
    goTopBtn.style.display = "none";
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.visibility = "visible";
    });
    document.body.style.overflow = "auto";
    window.location.href = 'index.html#header11-1';
    document.body.classList.remove("loading");

    const id = window.location.href.split("#")[1];
    if (id) {
        document.getElementById(id).scrollIntoView();
    }
}
