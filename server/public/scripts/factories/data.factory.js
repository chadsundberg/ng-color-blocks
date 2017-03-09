colorBlocks.factory('DataFactory', function() {
  console.log("data factory running");
  var colorList = { list:[] };
  console.log(colorList);

  return {
  	    updateColorBlocks: colorList
  	  };

// init();
//
// function init() {
//   self.messageText = "";
//   self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
//   self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
// }
//
// self.handleInput = function(clickedColor) {
//   if(clickedColor === self.currentColor) {
//     alert('You got it!\n\nNow try another!');
//     init();
//   } else {
//     self.messageText = 'Oh no! You guessed wrong!';
//   }
// }
//
// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }




});
