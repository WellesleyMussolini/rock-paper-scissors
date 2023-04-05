import { check_choices } from "./utils/check_choices.js";
import { move_hands_backwards } from "./animations/move_hands_backwards.js";
import { hide_elements } from "./animations/hide_elements.js";
import { shake_hands } from "./animations/shake_hands.js";
import { computer_choices } from "./utils/computer_choice.js";
import { champion } from "./utils/champion.js";

const player_hand = document.querySelector(".player-hand");
const computer_hand = document.querySelector(".computer-hand");
const buttons = document.querySelectorAll(".choices button");

player_hand.ondragstart = () => false;
computer_hand.ondragstart = () => false;

buttons.forEach((choice) => {
  choice.addEventListener("click", () => {
    const computer_choice = computer_choices(); // alteração aqui

    player_hand.src = "assets/rock.png";
    computer_hand.src = "assets/rock.png";

    // animations
    hide_elements();
    move_hands_backwards();
    shake_hands();

    setTimeout(() => {
      check_choices(choice.textContent, computer_choice);
      player_hand.src = `./assets/${choice.textContent}.png`;
      computer_hand.src = `./assets/${computer_choice}.png`;
      return champion();

    }, 1900);
  });
});

// import { check_choices } from "./utils/check_choices.js";
// import { move_hands_backwards } from "./animations/move_hands_backwards.js";
// import { hide_elements } from "./animations/hide_elements.js";
// import { shake_hands } from "./animations/shake_hands.js";
// import { champion } from "./utils/scores.js";
// import { computer_choices } from "./utils/computer_choice.js";

// const player_hand = document.querySelector(".player-hand");
// const computer_hand = document.querySelector(".computer-hand");
// const buttons = document.querySelectorAll(".choices button");

// player_hand.ondragstart = () => false;
// computer_hand.ondragstart = () => false;

// buttons.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const computer_choice = computer_choices(); // alteração aqui

//         player_hand.src = "assets/rock.png";
//         computer_hand.src = "assets/rock.png";

//         // animations
//         hide_elements();
//         move_hands_backwards();
//         shake_hands();

//         setTimeout(() => {
//             check_choices(choice.textContent, computer_choice);
//             player_hand.src = `./assets/${choice.textContent}.png`;
//             computer_hand.src = `./assets/${computer_choice}.png`;
//             return champion();
//         }, 1900);
//     });
// });

// import { check_choices } from "./utils/check_choices.js";
// import { move_hands_backwards } from "./animations/move_hands_backwards.js";
// import { hide_elements } from "./animations/hide_elements.js";
// import { shake_hands } from "./animations/shake_hands.js";
// import { champion } from "./utils/scores.js";
// import { computer_choices } from "./utils/computer_choice.js";
// import { AI_choices } from "./utils/AI_INTELLIGENT.js";

// const player_hand = document.querySelector(".player-hand");
// const computer_hand = document.querySelector(".computer-hand");
// const buttons = document.querySelectorAll(".choices button");

// player_hand.ondragstart = () => false;
// computer_hand.ondragstart = () => false;

// buttons.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const computer_choice = AI_choices(choice.textContent); // alteração aqui

//     player_hand.src = "assets/rock.png";
//     computer_hand.src = "assets/rock.png";

//     // animations
//     hide_elements();
//     move_hands_backwards();
//     shake_hands();

//     setTimeout(() => {
//       check_choices(choice.textContent, computer_choice);
//       player_hand.src = `./assets/${choice.textContent}.png`;
//       computer_hand.src = `./assets/${computer_choice}.png`;
//       return champion();
//     }, 1900);
//   });
// });
