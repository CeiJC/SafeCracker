/*Ayane Naito and Jacob Cedar*/
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

roundList = [];
merchList = [];

function buildRound(){
	var itemArray = roundData.split(";");
	for(var i = 0; i < itemArray.length; i++){
		round = {};
		var itemParts = itemArray[i].split(":");
		round.itemRound = itemParts[ROUNDS];
		round.itemDigit = itemParts[DIGITS];
		round.itemRange = itemParts[RANGES];
		round.itemTime = itemParts[TIMES];
		round.itemVariation = getRandomNumber(1, itemParts[VARIATIONS]);

		roundList.push(round);
	}
}

function buildMerch(){
	var itemArray = merchData.split(";");
	for(var i = 0; i < itemArray.length; i++){
		item = {};
		var itemParts = itemArray[i].split(":");
		item.itemName = itemParts[NAMES];
		item.itemCost = itemParts[COSTS];
		item.itemUse = itemParts[USES];
		item.itemDescription = itemParts[DESCRIPTIONS];

		merchList.push(item);
	}
}
function createCombo(r){
	finalCombo = "";
	for(var i = 0; i < roundList[r].itemDigit; i++){
		num = getRandomNumber(1,9);
		tempNum = String(num);
		finalCombo = finalCombo + tempNum;
	}
}
