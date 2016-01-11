
var gameUpdate = function(){
  // food.newFood(grid);
  snake.update(grid);
  snake.left();
  grid.update(snake, food);
  grid.draw();
};

var main = function() {
  generateGrid(grid.width, grid.cols);
  grid.init();
  food.init(grid);
  grid.update(snake, food);
  grid.draw();
  
  setInterval(gameUpdate, 500);
};
// end of main function


$(document).ready(main);