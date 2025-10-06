const buttons = document.querySelectorAll(".choices button");
const compChoiceEl = document.getElementById("comp-choice");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
let score = {
	player: 0,
	tie: 0,
	comp: 0
};

function CompChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

function findWinner(p, c) {
	if (p === c) return "tie";
	if ((p === "rock" && c === "scissors") || (p === "paper" && c === "rock") || (p === "scissors" && c === "paper")) {
		return "win";
	}
	return "lose";
}

function updateScore(player = 0, tie = 0, comp = 0) {
	scoreEl.textContent = `Player: ${player} | Tie: ${tie} | Computer: ${comp}`;
	score = { player, tie, comp };
}
updateScore();
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const playerChoice = button.id;
		const compChoice = CompChoice();
		const winner = findWinner(playerChoice, compChoice);

		compChoiceEl.textContent = compChoice;
		if (winner === "win") {
			resultEl.textContent = "You win!";
			score.player += 1;
		} else if (winner === "lose") {
			resultEl.textContent = "You lose!";
			score.comp += 1;
		} else {
			resultEl.textContent = "It's a tie!";
			score.tie += 1;
		}
		updateScore(score.player, score.tie, score.comp);
	});
});