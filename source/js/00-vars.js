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