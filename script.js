$(window).ready(runPostLoadFunctions);

function sizeSelector() {
	var height = window.innerHeight - window.innerWidth;
	var cardSelector = $("#cardSelector");
	cardSelector.css('height', height+"px");
    if (window.innerWidth/window.innerHeight >= 17500/10000) {
    	var width = window.innerWidth - window.innerHeight;
		cardSelector.css('width', width+"px");
		cardSelector.css('height', "100vh");
    } else if (window.innerWidth/window.innerHeight >= 7000/10000){
    } else {
		var height = window.innerHeight - window.innerWidth;
		cardSelector.css('height', height+"px");
		cardSelector.css('width', "100vw");
	}
	$('#snapchatCard a .handle p')[0].textContent = window.innerWidth + '/' + window.innerHeight;
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
	window.addEventListener("orientationchange", sizeSelector);
}

function runPostLoadFunctions(){
	sizeSelector();
	addEventListeners();
}