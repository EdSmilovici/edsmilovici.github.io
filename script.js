function showCard(){
	var currentlyVisibleCard = document.getElementsByClassName('card selectedCard');
	var newlyVisibleCard = document.getElementById(this.id + 'Card');
	Array.prototype.forEach.call(currentlyVisibleCard, function(card){
		card.classList.remove('selectedCard');
	});
	newlyVisibleCard.classList.add('selectedCard');
}

function addEventListeners() {
	var selectors = document.getElementsByClassName('selector');
	Array.prototype.forEach.call(selectors, function(selector){
		selector.addEventListener("click", showCard);
	});
}

function runPostLoadFunctions(){
	addEventListeners();
}