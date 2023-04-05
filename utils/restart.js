const title = document.querySelector(".title");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");

const player = document.querySelector(".player p");
const computer = document.querySelector(".computer p");

let pScore = 0;
let cScore = 0;

player.textContent = pScore;
computer.textContent = cScore;

export const restart = () => {
    pScore = 0;
    cScore = 0;
    player.textContent = pScore;
    computer.textContent = cScore;
    title.textContent = "play again ?";
    title.style.color = "#fff";
    playerHand.src = "assets/rock.png";
    computerHand.src = "assets/rock.png";
    return;
};