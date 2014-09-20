//insert a <img> to the end of body
document.body.appendChild(Poker.getCardImage(300,'hearts','q'));

var front = $('.front').add(Poker.getCardImage(300,'hearts','q'));

$('.front').append(Poker.getCardImage(480,'hearts','q'));

//insert a <canvas> to the end of body
//document.body.appendChild(Poker.getCardCanvas(60,'hearts','q'));
//get image data and store in variable pokerHQ
//var pokerHQ = Poker.getCardData(60,'hearts','q');