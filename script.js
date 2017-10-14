function showCard(pushState = true){
	var currentlyVisibleCard = document.getElementsByClassName('card selectedCard');
	var newlyVisibleCard = document.getElementById(this.id + 'Card');
	Array.prototype.forEach.call(currentlyVisibleCard, function(card){
		card.classList.remove('selectedCard');
	});
	newlyVisibleCard.classList.add('selectedCard');
	if (pushState){
		history.pushState({}, '', '?card='+this.id);
	}
}

function showNextCard(){
	var cards = document.getElementsByClassName('card');
	var currentlyVisibleCard = document.getElementsByClassName('card selectedCard');
	var currentlyVisibleCardIndex = 0;
	var newlyVisibleCardIndex = 0;
	var indexFound = {};
	try {
		Array.prototype.forEach.call(cards, function(card){
			if (card.id === currentlyVisibleCard[0].id){
				throw indexFound;
			} else {
				currentlyVisibleCardIndex ++;
			}
		});
	} catch (e) {
		if (e !== indexFound) throw e;
	}
	Array.prototype.forEach.call(currentlyVisibleCard, function(card){
		card.classList.remove('selectedCard');
	});
	newlyVisibleCardIndex = currentlyVisibleCardIndex + (this.id === 'leftSideBar' ? -1 : 1);
	if (newlyVisibleCardIndex >= cards.length) {
		newlyVisibleCardIndex = 0;
	} else if (newlyVisibleCardIndex < 0) {
		newlyVisibleCardIndex = cards.length - 1;
	}
	cards[newlyVisibleCardIndex].classList.add('selectedCard');
	history.pushState({}, '', '?card='+cards[newlyVisibleCardIndex].id.slice(0, -4));
}

function selectCardBasedOnUrl(pushState = true) {
    var url = window.location.href;
    name = "card";
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results || !results[2]) return null;
	var selectedCard = decodeURIComponent(results[2].replace(/\+/g, " "));
	showCard.call({id : selectedCard}, pushState);
}

function addEventListeners() {
	var selectors = document.getElementsByClassName('selector');
	var sideBars = document.getElementsByClassName('sideBar');
	Array.prototype.forEach.call(selectors, function(selector){
		selector.addEventListener("click", showCard);
	});
	Array.prototype.forEach.call(sideBars, function(sideBar){
		sideBar.addEventListener("click", showNextCard);
	});
	window.onpopstate = function(e) {
		selectCardBasedOnUrl(false);
	}
}

function runPostLoadFunctions(){
	addEventListeners();
	selectCardBasedOnUrl();
}