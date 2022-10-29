const button = document.querySelector(".toggle-dark-mode");
let currentTheme = localStorage.getItem("theme");

if (currentTheme == null) {
    const preferLightScheme = window.matchMedia("(prefers-color-scheme: light)");
    let theme = "dark";
    
    if (preferLightScheme.matches) {
        theme = "light";
        document.body.classList.add("light-mode");
    }

    localStorage.setItem("theme", theme);
}

if (currentTheme == "light") {
    document.body.classList.add("light-mode");
}

button.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    let theme = "dark";

    if (document.body.classList.contains("light-mode")) {
        theme = "light";
    }

    localStorage.setItem("theme", theme);
});