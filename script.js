let myVar;

function loader() {
    document.body.classList.add("loading");
    document.body.style.overflow = "hidden";

    window.scrollTo(0, 0);

    myVar = setTimeout(showPage, 800);

    if (typeof goTopBtn !== "undefined") {
        goTopBtn.style.display = "none";
    }
}

function showPage() {
    const loaderEl = document.getElementById("loader");
    if (loaderEl) loaderEl.style.display = "none";

    document.querySelectorAll("section").forEach(section => {
        section.style.visibility = "visible";
    });

    document.body.style.overflow = "auto";
    document.body.classList.remove("loading");

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        if (window.EmblaCarousel) {
            window.dispatchEvent(new Event("resize"));
        }
    }, 50);
}
