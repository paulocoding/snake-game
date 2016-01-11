// paints the square white
var paintGridWhite = function(){
  $(this).css('background-color', '#fff');
};

// paints the square black
var paintGridBlack = function(){
  $(this).css('background-color', '#000');
};

var mySquare = '<div class="square"></div>';

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
}
var main = function() {
  generateGrid(400, 24);
};
// end of main function



$(document).ready(main);