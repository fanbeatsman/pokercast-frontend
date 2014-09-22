var playerNum = 1;
var totalPlayers = 2;
var cardElement1 = "<div class=\"item\"><div class=\"flip-container \" ontouchstart=\"this.classList.toggle('hover');\"><div class=\"flipper \"><div class=\"front1\"><!-- front content --></div><div class=\"back \"><img src=\"cards/cardback.png\" /></div></div></div></div></div>";
var cardElement2 = "<div class=\"item\"><div class=\"flip-container \" ontouchstart=\"this.classList.toggle('hover');\"><div class=\"flipper \"><div class=\"front2\"><!-- front content --></div><div class=\"back \"><img src=\"cards/cardback.png\" /></div></div></div></div></div>";

function addPokerPlayer(card1, card2){

	var suit;
	var value;
	var classNum1 = '.' + String(playerNum) + '-1';
	var classNum2 = '.' + String(playerNum) + '-2';
	$(classNum1).append(cardElement1);
	$(classNum2).append(cardElement2);
	card1 = card1.toLowerCase().split('');
//	console.log(card1[0]);
	if(card1[0] == "t"){
		value = "10";
	}
	else{
		value=card1[0];
	}
	suit=card1[1];

	card2 = card2.toLowerCase().split('');
//	console.log(card2[0]);
	var value2=card2[0];
	var suit2=card2[1];

	//console.log(suit);
	//console.log(value);
	
	$(classNum1).find(".front1").append(Poker.getCardImage(500,suit,value));
	$(classNum2).find(".front2").append(Poker.getCardImage(500,suit2,value2));
	playerNum=playerNum + 1;
}

function setTable(c1,c2,c3,c4,c5){
	c1 = typeof c1 !== 'undefined' ? c1 : "XX";
	c2 = typeof c2 !== 'undefined' ? c2 : "XX";
	c3 = typeof c3 !== 'undefined' ? c3 : "XX";
	c4 = typeof c4 !== 'undefined' ? c4 : "XX";
	c5 = typeof c5 !== 'undefined' ? c5 : "XX";
	var valuec1;
	var valuec2;
	var valuec3;
	var valuec4;
	var valuec5;
	if (c1.toLowerCase().split('')[0] == "t"){
		valuec1 = 10;
	}
	else{
		valuec1 = c1.toLowerCase().split('')[0];
	}
	if (c2.toLowerCase().split('')[0] == "t"){
		valuec2 = 10;
	}
	else{
		valuec2 = c2.toLowerCase().split('')[0];
	}
	if (c3.toLowerCase().split('')[0] == "t"){
		valuec3 = 10;
	}
	else{
		valuec3 = c3.toLowerCase().split('')[0];
	}
	if (c4.toLowerCase().split('')[0] == "t"){
		valuec4 = 10;
	}
	else{
		valuec4 = c4.toLowerCase().split('')[0];
	}
	if (c5.toLowerCase().split('')[0] == "t"){
		valuec5 = 10;
	}
	else{
		valuec5 = c5.toLowerCase().split('')[0];
	}

	$('.c1').find('.front').append(Poker.getCardImage(500,c1.toLowerCase().split('')[1],valuec1));
	$('.c2').find('.front').append(Poker.getCardImage(500,c2.toLowerCase().split('')[1],valuec2));
	$('.c3').find('.front').append(Poker.getCardImage(500,c3.toLowerCase().split('')[1],valuec3));
	$('.c4').find('.front').append(Poker.getCardImage(500,c4.toLowerCase().split('')[1],valuec4));
	$('.c5').find('.front').append(Poker.getCardImage(500,c5.toLowerCase().split('')[1],valuec5));
}

function setInitScore(allPlayers){
	var player = 0
	while( player < allPlayers ){
		var div = ".p" + String(player+1);	
		var scoreDiv = ".score" + String(player+1);
		$(scoreDiv).append("00000");
		$(div).append("Player" + String(player+1));
	
		player = player +1;
	}

}

function updateScore(playerNum, score){
	var playerDiv = ".p" + String(playerNum) ;
	console.log(playerDiv)
	$(playerDiv).find(".score"+String(playerNum)).text(score);
}

function Call(url){
	$.ajax({
  url: url,
  dataType: "json",
  async: false,
  crossDomain: true,
  success: function(data) { console.log(data); return (data);},                                                                                                                                                                                       
    error: function() { console.log('Uh Oh!'); },                                   
  });

}


function callSetup(player){
		$.ajax({
		url: ("http://mickey.io:3000/api/addplayer/"+ player + "/1000"),
		dataType: "json",
		async: false,
		crossDomain: true,
		success: function(data) {
			console.log(data);
		},                                                                                                                                                                                       
		error: function() { console.log('Uh Oh!'); },                                   
	});
}

function makeSetup(totalPlayers, playernames){
	var i = 0;
	console.log(playernames[i]);
	while (i<totalPlayers){
		callSetup(playernames[i]);
		i=i+1;
	}
}

function CheckWinner(){
	$.ajax({
		url: url,
		dataType: "json",
		async: false,
		crossDomain: true,
		success: function(data) {
			if (data==[]){
				return false;
			}
			else{
				return true;
			}
			console.log(data);
	
			console.log(cards);
			


			
		},                                                                                                                                                                                       
		error: function() { console.log('Uh Oh!'); },                                   
	});
}



function CallAndUpdate(url,cards){
	$.ajax({
		url: url,
		dataType: "json",
		async: false,
		crossDomain: true,
		success: function(data) {
			console.log(data);
		
	

			if ((data).table.game.board){
		console.log((data).table.game.board[0]+"EWQERQFGFGGFF");
				cards[0]=(data).table.game.board[0];
				console.log("QWERQWERQER"+cards[0]);
				cards[1]=(data).table.game.board[1];
				cards[2]=(data).table.game.board[2];
				cards[3]=(data).table.game.board[3];
			}
			console.log(cards);
			


			
		},                                                                                                                                                                                       
		error: function() { console.log('Uh Oh!'); },                                   
	});
}

function callPlayAndUpdate(cards,player,move,raise){
		$.ajax({
		url: ("http://mickey.io:3000/api/player/"+ player + '/' + move + '/' + raise),
		dataType: "json",
		async: false,
		crossDomain: true,
		success: function(data) {
			console.log(data);
			if ((data).table.game.board){
		console.log((data).table.game.board[0]+"EWQERQFGFGGFF");
				cards[0]=(data).table.game.board[0];
				console.log("QWERQWERQER"+cards[0]);
				cards[1]=(data).table.game.board[1];
				cards[2]=(data).table.game.board[2];
				cards[3]=(data).table.game.board[3];
				cards[4]=(data).table.game.board[4];
				
			}
			console.log(cards);
		},                                                                                                                                                                          
		error: function() { console.log('Uh Oh!'); },                                   
	});
}

function makeRound(totalPlayers, playernames){
	var tableCards=new Array();
	while(checkWinner()){
		
		setTable(tableCards[0],tableCards[1],tableCards[2],tableCards[3],tableCards[4]);
		callPlayAndUpdate(tableCards)
	}

}

/*
$(function(){

var players = ["fan","usmann"];
var request = CallAndUpdate('http://mickey.io:3000/api/tabledefault/');
makeSetup(totalPlayers,players);
var request = CallAndUpdate('http://mickey.io:3000/api/startgame/');



var request = CallAndUpdate('http://mickey.io:3000/api/tabledefault');
var request = CallAndUpdate('http://mickey.io:3000/api/addplayer/fan/1000');
var request = CallAndUpdate('http://mickey.io:3000/api/addplayer/usmann/1000');
var request = CallAndUpdate('http://mickey.io:3000/api/startgame');




var request = CallAndUpdate('http://mickey.io:3000/api/player/usmann/call');
var request = CallAndUpdate('http://mickey.io:3000/api/player/fan/check');
var request = CallAndUpdate('http://mickey.io:3000/api/player/usmann/check');
var request = CallAndUpdate('http://mickey.io:3000/api/player/fan/check');
console.log( CallAndUpdate('http://mickey.io:3000/api/player/usmann/check'));




	while (playerNum < totalPlayers+1){
		addPokerPlayer('AS','KH');
	}
	setInitScore(totalPlayers);
	var tableCards=new Array();
	CallAndUpdate('http://mickey.io:3000/api/player/fan/check',tableCards);
	console.log("tablecards:"+tableCards[1]);
	setTable(tableCards[0],tableCards[1],tableCards[2],tableCards[3],tableCards[4]);
	$('.flip-container').toggleClass('hover');
	$('.flip-container').toggleClass('hover');
	$('#test').click(function(){$('.flip-container').toggleClass('hover');});

	updateScore(2,99);
	console.log("WINNNERERER");
console.log(CallAndUpdate('http://mickey.io:3000/api/winner'));
var request = CallAndUpdate('http://mickey.io:3000/api/player/usmann/check');
var request = CallAndUpdate('http://mickey.io:3000/api/player/fan/check');
var request = CallAndUpdate('http://mickey.io:3000/api/player/usmann/check');
var request = CallAndUpdate('http://mickey.io:3000/api/player/fan/check');
var request = CallAndUpdate('http://mickey.io:3000/api/player/usmann/check');
var winner;
console.log("REAL iNNERNERN");
var request = CallAndUpdate('http://mickey.io:3000/api/winner');

});
*/