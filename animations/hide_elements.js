const buttons = document.querySelectorAll(".choices");
const title = document.querySelector(".title");

export const hide_elements = () => {
    buttons.forEach((choice) => {
        // hiding the title
        title.classList.add("hidden");
        title.classList.remove("visible");
        
        // hiding the buttons
        choice.classList.add("hidden");
        choice.classList.remove("visible");
        choice.disabled = true;

        setTimeout(() => {
            // unhiding the title
            title.classList.remove("hidden");
            title.classList.add("visible");

            // unhiding the buttons
            choice.classList.remove("hidden");
            choice.classList.add("visible");
            choice.disabled = false;
    }, 2400);
    });
};