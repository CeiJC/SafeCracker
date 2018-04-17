/*Ayane Naito and Jacob Cedar*/
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function subtractRandomNumber(num, min, max){
	var temp = getRandomNumber(min, max);
	return num - temp;
}
function initialize() {
	currentRound = 0;
	buildRound();
	createCombo(currentRound);
	createTime(currentRound);

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
function createTime(r){
	
	maxVariation = parseInt(roundList[r].itemVariation);
	variationTime = getRandomNumber(0, maxVariation);

	baseTime = parseInt(roundList[r].itemTime);
	roundTime = baseTime + variationTime;
	if(roundTime < 0){
		roundTIme = 0;
	}else{
		return;
	}
	}
function flow(){
	totalGuesses = 5;
	roundTime = subtractRandomNumber(roundTime, 0, totalGuesses);

	if(roundTime <= 0 && "combo not correct"){

	}
}
