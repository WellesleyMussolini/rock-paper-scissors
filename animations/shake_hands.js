const hands = document.querySelector(".hands");

export const shake_hands = () => {
    setTimeout(() => {
        hands.addEventListener("animationend", function () {
            return this.style.animation = "";
        });
        return hands.style.animation = "move_up_down 1s ease";
    }, 1000);
};

console.log("/ᐠ･_･ᐟ| hello");