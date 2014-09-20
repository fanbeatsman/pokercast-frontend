//insert a <img> to the end of body
var playerNum = 6;
var $cardElement = "<div class=\"item\"><div class=\"flip-container big\" ontouchstart=\"this.classList.toggle('hover');\"><div class=\"flipper big\"><div class=\"front big\"><!-- front content --></div><div class=\"back big\"><img src=\"/static/cards/cardback.png\" /></div></div></div></div></div>";

function addPokerPlayer(card1, card2){

	classNum = '.' + String(playerNum);
	$(classNum).append($cardElement);	
	playerNum=playerNum + 1;
}


$(function(){

	addPokerPlayer();
	$('.front').append(Poker.getCardImage(500,'hearts','q'));
	$('#test').click(function(){$('.flip-container').toggleClass('hover');});
	//$('.1').append()

});

//insert a <canvas> to the end of body
//document.body.appendChild(Poker.getCardCanvas(60,'hearts','q'));
//get image data and store in variable pokerHQ
//var pokerHQ = Poker.getCardData(60,'hearts','q');