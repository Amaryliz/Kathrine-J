function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); 
    let darkModeButtonElement = document.getElementById("dark-mode-btn");

    if (bodyElement.style.background ==="black") {
        bodyElement.style.background = '#f9eae1' ;
        darkModeButtonElement.innerHTML = "Change to Dark Mode"
    }

    else {
        bodyElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Change to Light Mode"
    }

}
