// jshintesversion: 6
function Open() {
    var x = document.getElementById("nav-items");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


let space = document.getElementById('space');
let mountain = document.getElementById('mountain');
let text = document.getElementById('text');
let brn = document.getElementById('explore-btn');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    space.style.top = value * 0.50 + 'px';
    text.style.marginTop = value * 2 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});