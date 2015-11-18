var monopolyGame = {
	width: 10,
	height: 10,
	stepInterval: null,

createAndShowBoard: function () {
	var goltable = document.createElement("tbody");

	var tablehtml = '';
	//Initialize the entire board
	for (var h = 0; h<this.height; h++) {
		tablehtml += "<tr id = 'row+" + h + "'>";
		for (var w = 0; w<this.width; w++) {
			if (h === 0 || h === this.height) {
				tablehtml += "<td class='alive' id='" + w + "-" + h + "'></td>";
				console.log("first row");
			}
			if (w === 0 || w === this.width) {
			 	tablehtml += "<td class='alive' id='" + w + "-" + h + "'></td>";
			 	console.log("second row");
			 } else {
			 	tablehtml += "<td id='" + w + "-" + h + "'></td>";
			 }
		}
			tablehtml += "</tr>";
	}
	console.log(tablehtml);
},

 player: function () {
	this.name = name;
	this.money = someMoneyValue;
	this.avatar = someImagerepresentation;
	},

boardSquare: function (name, price) {
	this.name = name;
	this.players = [];
	this.setPlayer = function (player) {
		this.players.push(player);
	}
	this.rentalPrice = price;
},

 rollDice: function (player) {
	//Randomly generates a number between 1-6
	//Links itself to a roll dice button
	return num;
}



}


monopolyGame.createAndShowBoard();




//Each player will have a icon, a rendered small
//thumbnail size icon that appears on a get element ID



//Pixie - library for graphics, can register clicks and hovers


// Each board square has special properties, such as owner, rental price, name
// There's a square that's a shop
// The shop will contain 3 different items:





//Access each boardSquare, check if there is a player on there, and render them all??
function renderPlayers(board) {

}


//For extra functionality
/* var shop = function () {
-- Missle: Kills another player
-- Extra Dice: Can roll a 3rd dice
} */
