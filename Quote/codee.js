var quotes = [
    "The best way to predict the future is to invent it.  Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. Charles R. Swindoll",
    "The only way to do great work is to love what you do. Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. Roy T. Bennett",
    "Your time is limited, don't waste it living someone else's life. Steve Jobs" 
];
var auther=Object.keys(quotes);

var quote;
var randomIndex;
var quota= document.getElementById('newQuote');
document.addEventListener('click', generateQuote);

function generateQuote() {



   randomIndex =  Math.floor(Math.random() * auther.length);
  quote = quotes[randomIndex];
  document.getElementById('theQuote').innerHTML = quote;

}