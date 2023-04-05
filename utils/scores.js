const player = document.querySelector(".player p");
const computer = document.querySelector(".computer p");

let pScore = 0;
let cScore = 0;


export const player_wins = () => {
    pScore++;
    player.textContent = pScore;
    return;
};

export const computer_wins = () => {
    cScore++;
    computer.textContent = cScore;
    return;
};

