// From a design perspective, the syntax for jQuery is: When I do this, make the CSS do this.
// The more common slogan is: Find something, do something. 
// -Chris Coyler

// When eyes button is clicked, toggle laser class
$('.flash').click(function() {
  $('.brain').toggleClass('laser');
});

// a function should only do one thing. 1. something useful or 2. return a value

// When colour button is clicked, pick a number 0-255
$('.colour').click(function() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  
  //Display the number in an alert window
  alert(red + "," + green + "," + blue);
});
