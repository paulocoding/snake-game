var main = function() {
  generateGrid(grid.width, grid.cols);
  grid.init();
  grid.update(snake, food);
  grid.draw();
};
// end of main function



$(document).ready(main);