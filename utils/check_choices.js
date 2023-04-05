import { player_wins, computer_wins } from "./scores.js";
const title = document.querySelector(".title");

export const check_choices = (player, computer) => {
    if (player === computer) {
        title.textContent = "draw";
        return title.style.color = "#fff";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        title.textContent = "player wins";
        player_wins();
        return title.style.color = "rgb(123, 223, 123)";
    }
    title.textContent = "computer wins";
    computer_wins();
    title.style.color = "rgb(223, 93, 93)";
    return;
};