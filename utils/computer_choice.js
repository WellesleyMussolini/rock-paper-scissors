export const computer_choices = () => {
    const computer_choices = ["rock", "paper", "scissors"];
    const random_number = Math.floor(Math.random() * computer_choices.length);
    const computer_choice = computer_choices[random_number];
    return computer_choice;
};