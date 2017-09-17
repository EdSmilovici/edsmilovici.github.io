$(window).ready(runPostLoadFunctions);

function sizeSelector() {
	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();
	var height = viewportWidth - viewportWidth;
	var cardSelector = $("#cardSelector");
	cardSelector.css('height', height+"px");
    if (viewportWidth/viewportHeight >= 17500/10000) {
    	var width = viewportWidth - viewportHeight;
		cardSelector.css('width', width+"px");
		cardSelector.css('height', "100vh");
    } else if (viewportWidth/viewportHeight >= 7000/10000){
    } else {
		var height = viewportHeight - viewportWidth;
		cardSelector.css('height', height+"px");
		cardSelector.css('width', "100vw");
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
	window.addEventListener("orientationchange", sizeSelector);
}

function runPostLoadFunctions(){
	sizeSelector();
	addEventListeners();
}