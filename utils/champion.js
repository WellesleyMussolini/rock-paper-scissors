import {restart} from "./restart.js";

const player = document.querySelector(".player p");
const computer = document.querySelector(".computer p");

let pScore = 0;
let cScore = 0;

player.textContent = pScore;
computer.textContent = cScore;

export const champion = () => {
    if (pScore === 10 || pScore >= 10) {
        alert("player is the champion");
        restart();
        return;
    };
    if (cScore === 10 || cScore >= 10) {
        alert("computer is the champion");
        restart();
        return;
    };
};