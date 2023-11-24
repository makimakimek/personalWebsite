function hoveringOverButtons() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener("mouseover", (event) => {
            event.target.style.opacity = "1";
        });
    
        button.addEventListener("mouseout", (event) => {
            event.target.style.opacity = "0.7";
        });
    });
}

hoveringOverButtons();