var displayx = "=> Akintunde Oluborode";
var i = -2;
var speed = 50;
function type() {
  if (i < displayx.length) {
    document.getElementById("text").innerHTML += displayx.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
var display = document.getElementById("text");
//const newList = document.createTextNode(type());
display.append(type());
