//  "pixel" unit of the grid:
var mySquare = '<div class="square"></div>';

// grid object:
var grid = {
  //  initializing grid dimensions
  width : 400,
  cols : 24,
  state : [],
  
  //  initializing grid state to false
  init : function(){
    for(var y = 0; y<this.cols;y++){
      this.state.push([]);
      for(var x = 0; x < this.cols; x++){
        this.state[y].push(false);
      }
    }
  },
  
  draw : function(){
    var $grid=$('.level');
    for(var y=0, l=this.cols;y<l;y++){
      for(var x=0; x<l; x++){
        if(this.state[y][x]){
          console.log(" x "+ x+" y " + y) ;
          console.log(y*l+x);
          paintGridWhite($grid.children()[y*l+x]);
        } else {
          paintGridBlack($grid.children()[y*l+x]);
        }
      }
    }
  },
  
  update : function(s, f){
    this.init();
    for(var i = 0, l = s.position.length; i < l;i++){
      this.state[s.position[i][1]][s.position[i][0]] = true;
    }
  }

}

var snake = {
  alive: true,
  position: [[11,11]],
  direction: {
    x : 1,
    y : 0 
  }
};

var food = {
  position: [4,4]  
}
// paints the square white
var paintGridWhite = function(s){
  $(s).css('background-color', '#fff');
};

// paints the square black
var paintGridBlack = function(s){
  $(s).css('background-color', '#000');
};


// generates a grid with l squares on each side
var generateGrid = function(totalWidth, l){
  var squareWidth=(totalWidth/l)+'px';
  var $grid=$('.level');
  // squaring side size
  l = l*l;
  $grid[0].innerHTML="";
  for(var i=0;i<l;i++){
    $grid.append(mySquare);
  }
  $('.square').css('width',squareWidth);
  $('.square').css('height', squareWidth);
};

var main = function() {
  generateGrid(grid.width, grid.cols);
  grid.init();
  grid.update(snake, food);
  grid.draw();
};
// end of main function



$(document).ready(main);