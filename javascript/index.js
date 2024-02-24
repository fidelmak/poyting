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


const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Life is what happens when you're busy making other plans. - Allen Sanders",
  "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
  "Life is either a daring adventure or nothing at all. - Helen Keller"
];
  
    
    
      function generateQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            document.getElementById("quote").innerText = randomQuote;
        }


// No need to append the result of type() since it doesn't return anything

// Optionally, you can use the following line to append a text node to the element
// var display = document.getElementById("text").appendChild(document.createTextNode(displayx));
