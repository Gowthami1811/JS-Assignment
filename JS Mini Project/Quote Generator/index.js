const newQuote = document.querySelector("#new_quote");
const quote = document.querySelector("#quote_text");
const author = document.querySelector("#quote_author");

let quoteObject = {
		quoteText: "As we express our gratitude, we must never forget action is not to utter words, but to live by them.", 
     	quoteAuthor: "John F. Kennedy"
    };


//change quote after a number of seconds
$(document).ready(function() {
  setTimeout(function() {
    getQuote();
  }, 3000);
});

//change quote when button is clicked
newQuote.addEventListener("click", getQuote);

function getQuote(){
	//fetch the data
    fetch('https://quota.glitch.me/random')
    .then(res => res.json())//response type
    .then(data => quoteObject = data) // assign data to quoteObject


	//display quote
	quote.textContent = quoteObject["quoteText"];
	//display author
	author.innerHTML = "...<i class='fas fa-pencil-alt'></i> " + quoteObject["quoteAuthor"];
	
}
