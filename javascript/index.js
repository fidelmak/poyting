var displayx = " Akintunde Oluborode";
var i = -2;
var speed = 50;

function type() {
  if (i < displayx.length) {
    document.getElementById("text").innerHTML += displayx.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

// Call the type() function to display the text
type();

// No need to append the result of type() since it doesn't return anything

// Optionally, you can use the following line to append a text node to the element
// var display = document.getElementById("text").appendChild(document.createTextNode(displayx));
