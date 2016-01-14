

var main = function() {
  // set size of the grid:
  grid.cols = 20;
  generateGrid(grid.width, grid.cols);
  grid.init();
  food.init(grid);
  grid.update(snake, food);
  grid.draw();
  
  $( "html" ).keydown(function( event ) {
    if(event.which === 39){
      snake.right();
    }
    if(event.which === 37){
      snake.left();
    }
    if(event.which === 38){
      snake.top();
    }
    if(event.which === 40){
      snake.bot();
    }
    
  });
   
  
  var gameLoop = setInterval(function(){
    snake.update(grid, food);
    grid.update(snake, food);
    grid.draw();
    if(!snake.alive){
      $('.game-title').text("LOST");
      clearInterval( gameLoop );
    }    
  }, 80);
  
};
// end of main function


$(document).ready(main);