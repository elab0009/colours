var STEVE = {
  box: null,
  assignBox: function( selector ){
    STEVE.box = document.querySelector( selector );
  },
  highlight: function(){
    if(STEVE.box){
      STEVE.box.style.backgroundColor = "gold";
      setTimeout(STEVE.clearHighlight, 3000, STEVE.box);
    }
  },
  clearHighlight: function( box ){
    box.style.backgroundColor = "transparent";
  }
};
/**
let box = document.querySelector(".box");
if(box){
  alert('found a box');
  box.addEventListener("click", highlight);
}


function highlight(ev){
  ev.currentTarget.style.backgroundColor = "gold";
  setTimeout(clearHighlight, 3000, ev.currentTarget);
}

function clearHighlight(box){
  box.style.backgroundColor = "transparent";
}
**/