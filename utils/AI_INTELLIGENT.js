const computer_choices = ["rock", "paper", "scissors"];
const memorized_choices = {};
const MAX_REPEATS = 5;

export const AI_choices = (player_choice) => {
  let computer_choice;

  // Obter a escolha do jogador a partir do histórico de jogadas memorizadas
  const player_repeats = memorized_choices[player_choice] || 0;

  // Se o jogador escolheu a mesma opção muitas vezes, escolha a opção que faça ele perder
  if (player_repeats >= MAX_REPEATS) {
    if (player_choice === "rock") {
      computer_choice = "paper";
    } else if (player_choice === "paper") {
      computer_choice = "scissors";
    } else {
      computer_choice = "rock";
    }
  } else {
    // Escolha uma opção aleatória que não seja a mesma do jogador
    do {
      const random_number = Math.floor(Math.random() * computer_choices.length);
      computer_choice = computer_choices[random_number];
    } while (computer_choice === player_choice || computer_choice === memorized_choices.last_computer_choice); // alteração aqui
  }

  // Memorizar a escolha do jogador e a última escolha do computador
  if (memorized_choices[player_choice]) {
    memorized_choices[player_choice]++;
  } else {
    memorized_choices[player_choice] = 1;
  }

  memorized_choices.last_computer_choice = computer_choice; // alteração aqui

  // Retornar a escolha do computador
  return computer_choice;
};
