
console.log("Up and running!");


var cards = ["Queen" , "Queen" , "King" , "King"];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	if (cardsInPlay.length === 2);
	console.log("User Flipped" + cards[cardId])
	cardsInPlay.push(cards[cardId]);
	checkForMatch();


}

flipCard(0);
flipCard(2);
cardsInPlay.push(cards[0]);



















