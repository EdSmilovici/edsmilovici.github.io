function sizeSelector() {
	var height = window.innerHeight - window.innerWidth;
	document.getElementById("cardSelector").style.height = height+"px";
	var cardSelector = document.getElementById("cardSelector");
    if (window.innerWidth/window.innerHeight >= 17500/10000) {
    	var width = window.innerWidth - window.innerHeight;
		cardSelector.style.width = width+"px";
		cardSelector.style.height = "";
    } else if (window.innerWidth/window.innerHeight >= 5700/10000){
    } else {
		var height = window.innerHeight - window.innerWidth;
		cardSelector.style.height = height+"px";
		cardSelector.style.width = "";
	}
}

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
	sizeSelector();
	addEventListeners();
}