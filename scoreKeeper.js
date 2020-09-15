
let userNameOne = document.querySelector("#userName1");
let userNameTwo = document.querySelector("#userName2");

//define variable for score to play to
let scoreOne = document.querySelector("#p1s");
let scoreTwo = document.querySelector("#p2s");

//define display of score to play to variable
let winScore = document.querySelector("#winScore");

//define phrase when player 1 or 2 wins
let winPhrase = document.querySelector("#winPhrase");

//define the number input
let scoreToWin = document.querySelector(".score");
let scoreValue = scoreToWin.value; //take value of number input chosen by players

//define buttons
let playerOne = document.querySelector("#player1");
let playerTwo = document.querySelector("#player2");
let reset = document.querySelector("#reset");

//define starting score
let currentScore1 = 0;
let currentScore2 = 0;

//listener for number input to update score variables, winScore and scoreValue
scoreToWin.addEventListener("mouseout", function(){
		scoreValue = scoreToWin.value;
		winScore.textContent = scoreValue;
});

playerOne.addEventListener("click", function(){
	if (currentScore1 < scoreValue && currentScore2 < scoreValue){
		currentScore1 +=1;
		scoreOne.textContent = currentScore1.toString();
		if (currentScore1 == scoreValue){
			scoreOne.style.color = "green";
			userNameOne.style.color = "green";
			winPhrase.textContent = userNameOne.innerText + " WINS";
		}	
	}
});

playerTwo.addEventListener("click", function(){
	if (currentScore1 < scoreValue && currentScore2 < scoreValue){
		currentScore2 +=1;
		scoreTwo.textContent = currentScore2.toString();
		if (currentScore2 == scoreValue){
			scoreTwo.style.color = "green";
			userNameTwo.style.color = "green";
			winPhrase.textContent = userNameTwo.innerText + " WINS";
		}
		}	
});

scoreOne.addEventListener("click", function(){
	if (currentScore1 < scoreValue && currentScore2 < scoreValue){
		currentScore1 +=1;
		scoreOne.textContent = currentScore1.toString();
		if (currentScore1 == scoreValue){
			scoreOne.style.color = "green";
			winPhrase.textContent = "PLAYER 1 WINS";
		}	
	}
});

scoreTwo.addEventListener("click", function(){
	if (currentScore1 < scoreValue && currentScore2 < scoreValue){
		currentScore2 +=1;
		scoreTwo.textContent = currentScore2.toString();
		if (currentScore2 == scoreValue){
			scoreTwo.style.color = "green";
			winPhrase.textContent = "PLAYER 2 WINS";
		}
		}	
});

userNameOne.addEventListener("keyup", function(){
	playerOne.innerText = userNameOne.innerText;
});

userNameTwo.addEventListener("keyup", function(){
	playerTwo.innerText = userNameTwo.innerText;
});

reset.addEventListener("click", function(){
	scoreOne.textContent = "0";
	scoreTwo.textContent = "0";
	scoreOne.style.color = "black";
	scoreTwo.style.color = "black";
	userNameOne.style.color = "black";
	userNameTwo.style.color = "black";
	currentScore1 = 0;
	currentScore2 = 0;
	winPhrase.textContent = "";

});
