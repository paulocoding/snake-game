

var main = function() {
  generateGrid(grid.width, grid.cols);
  grid.init();
  food.init(grid);
  grid.update(snake, food);
  grid.draw();
  
  $( "html" ).keydown(function( event ) {
    if ( event.which == 13 ) {
    event.preventDefault();
    }
    if(event.key == "ArrowRight"){
      snake.right();
    }
    if(event.key == "ArrowLeft"){
      snake.left();
    }
    if(event.key == "ArrowUp"){
      snake.top();
    }
    if(event.key == "ArrowDown"){
      snake.bot();
    }
    
  });
  
  $( "#other" ).click(function() {
    $( "#target" ).keydown();
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