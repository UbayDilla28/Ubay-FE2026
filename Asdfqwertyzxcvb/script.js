const modeToggle = document.querySelector("#modetoggle");

modeToggle.addEventListener("click", function() {
    document.body.classList.toggle("body-light");

    if (document.body.classList.contains("body-light")) {
        modeToggle.textContent = "Mode Terang";
    } else {
        modeToggle.textContent = "Mode Gelap";
    }
});