let currentTeemoTile;
let currentShaco1Tile;
let currentShaco2Tile;
let score = 0;
let gameOver = false;
let teemoClicked = false;
let difficulty = "medium";
let teemoTimer = 620;
let shaco1Timer = 1000;
let shaco2Timer = 1400;

window.onload = function () {
	setGame();
	document.getElementById("container2").style.display = "flex";
}

function setGame() {
	for (let i = 0; i < 9; i++) {
		let tile = document.createElement("div");
		tile.id = i.toString();
		tile.addEventListener("click", selectTile);
		document.getElementById("board").appendChild(tile);
	}
	document.getElementById("medium").style.backgroundColor = "grey";
	document.getElementById("easy").addEventListener("click", easyGame)
	document.getElementById("medium").addEventListener("click", mediumGame)
	document.getElementById("hard").addEventListener("click", hardGame)


}

function buttonStart() {
	document.getElementById("container2").style.display = "none";
	startGame(difficulty);

}

function startGame(difficulty) {

	refreshID1 = setInterval(setTeemo, teemoTimer);
	refreshID2 = setInterval(setShaco1, shaco1Timer);
	refreshID3 = setInterval(setShaco2, shaco2Timer);

	//difficulty.onchange = resetGame();

}

function resetGame() {
	return;
}

function easyGame() {

	let difficulty = "easy";
	teemoTimer = 900;
	shaco1Timer = 1300;
	shaco2Timer = 1800;
	clearInterval(refreshID1);
	clearInterval(refreshID2);
	clearInterval(refreshID3);
	startGame(difficulty);
}

function mediumGame() {

	let difficulty = "medium";
	teemoTimer = 620;
	shaco1Timer = 1000;
	shaco2Timer = 1400;
	clearInterval(refreshID1);
	clearInterval(refreshID2);
	clearInterval(refreshID3);
	startGame(difficulty);
}

function hardGame() {

	let difficulty = "hard";
	teemoTimer = 510;
	shaco1Timer = 800;
	shaco2Timer = 700;
	clearInterval(refreshID1);
	clearInterval(refreshID2);
	clearInterval(refreshID3);
	startGame(difficulty);
}

function getRandomTile() {

	let num = Math.floor(Math.random() * 9);
	return num.toString();

}

function setTeemo() {

	if (gameOver) {
		return;
	}

	if (currentTeemoTile) {
		currentTeemoTile.innerHTML = "";
	}

	let teemo = document.createElement("img");
	teemo.src = "/assets/enemies/toppng.com-ersonagens-de-lol-png-teemo-transparent-601x575.png";

	let num = getRandomTile();

	if ((currentShaco1Tile && currentShaco1Tile.id == num) || (currentShaco2Tile && currentShaco2Tile.id == num)) { return; }

	currentTeemoTile = document.getElementById(num);
	currentTeemoTile.appendChild(teemo);
	teemoClicked = true;
}

function buttonColor(id) {
	switch (id) {
		case "easy":
			document.getElementById("medium").style.backgroundColor = "white";
			document.getElementById("hard").style.backgroundColor = "white";
			document.getElementById("easy").style.backgroundColor = "grey";
			break;
		case "medium":
			document.getElementById("medium").style.backgroundColor = "grey";
			document.getElementById("hard").style.backgroundColor = "white";
			document.getElementById("easy").style.backgroundColor = "white";
			break;
		case "hard":
			document.getElementById("medium").style.backgroundColor = "white";
			document.getElementById("hard").style.backgroundColor = "grey";
			document.getElementById("easy").style.backgroundColor = "white";
			break;
	}
}

function setShaco1() {

	if (gameOver) {
		return;
	}

	if (currentShaco1Tile) {
		currentShaco1Tile.innerHTML = "";
	}

	let shaco1 = document.createElement("img");
	shaco1.src = "/assets/enemies/Springteufel_Render.webp";

	let num = getRandomTile();

	if ((currentTeemoTile && currentTeemoTile.id == num) || (currentShaco2Tile && currentShaco2Tile.id == num)) { return; }


	currentShaco1Tile = document.getElementById(num);
	currentShaco1Tile.appendChild(shaco1);
}

function setShaco2() {

	if (gameOver) {
		return;
	}

	if (currentShaco2Tile) {
		currentShaco2Tile.innerHTML = "";
	}

	let shaco2 = document.createElement("img");
	shaco2.src = "/assets/enemies/Springteufel_Render.webp";

	let num = getRandomTile();

	if ((currentTeemoTile && currentTeemoTile.id == num) || (currentShaco1Tile && currentShaco1Tile.id == num)) { return; }


	currentShaco2Tile = document.getElementById(num);
	currentShaco2Tile.appendChild(shaco2);
}

function selectTile() {

	if (gameOver) {
		return;
	}

	if (this == currentTeemoTile) {

		if (teemoClicked) {
			score += 10;
		}
		teemoClicked = false;
		document.getElementById("score").innerText = score.toString();

		currentTeemoTile.innerHTML = "";


	} else if (this == currentShaco1Tile || this == currentShaco2Tile) {
		document.getElementById("score").innerText = "Score: " + score.toString();
		document.getElementById("scoretext").innerText = "GAME OVER!";
		gameOver = true;
		document.getElementById("container1").style.display = "flex";
		/*let restartButton = document.createElement("button");
		document.getElementById("board").appendChild(restartButton);
		restartButton.innerHTML = "Restart";
		restartButton.setAttribute("id", "restart");
		restartButton.style.display = "block";*/
	}
}

function restart() {
	document.getElementById("container1").style.display = "none";
	gameOver = false;
	score = 0;
	document.getElementById("scoretext").innerText = "Score:";
	document.getElementById("score").innerText = score.toString();
}