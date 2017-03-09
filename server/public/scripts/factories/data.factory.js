colorBlocks.factory('DataFactory', function() {
  console.log("data factory running");
  var colorList = ['red', 'blue', 'magenta', 'green', 'pink', 'yellow'];

  function addingNewColorToFactoryArray(newColor){
    colorList.push(newColor);
  }

  //public API

  return {
  	    updateColorBlocks: colorList,
        addNew: addingNewColorToFactoryArray
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
