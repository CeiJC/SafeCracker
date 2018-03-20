/*Ayane Naito and Jacob Cedar*/
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

roundList = [];
merchList = [];

function buildRound(){
	var itemArray = roundData.split(";"); 
	for(i = 0; i < itemArray.length; i++){
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
	itemArray = items.split(";"); 
	for(i = 0; i < itemArray.length; i++){
		item = {};
		itemParts = itemArray[i].split(":");
		item.itemName = itemParts[NAME];
		item.itemInfo = itemParts[INFO];
		item.itemImage = itemParts[IMAGE];
		
		itemList.push(item);
	}
}
			
		