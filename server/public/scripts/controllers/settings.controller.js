colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");
  var self = this;
  
  self.colors = DataFactory.updateColorBlocks;

  self.newColor = '';

  self.addNewColor = function() {
    DataFactory.addNew(self.newColor);
  };


}]);
