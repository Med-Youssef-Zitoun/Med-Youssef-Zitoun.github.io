function loader() {
    document.body.classList.add("loading");
    myVar = setTimeout(showPage, 2000);
    goTopBtn.style.display = "none";
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("All").style.display = "block";
    document.body.classList.remove("loading");

    const id = window.location.href.split("#")[1];
    if (id) {
        document.getElementById(id).scrollIntoView();
    }
}
