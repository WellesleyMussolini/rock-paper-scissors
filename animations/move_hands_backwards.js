const hands = document.querySelector(".hands");

export const move_hands_backwards = () => {
    hands.classList.add("hands_backwards");
    setTimeout(() => {
        hands.classList.remove("hands_backwards");
    }, 2400);
};