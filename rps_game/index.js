const buttons = document.querySelectorAll(".choices button");
const computerChoiceEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const score = {
	player: 0,
	tie: 0,
	computer: 0
};

function getComputerChoice() {
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