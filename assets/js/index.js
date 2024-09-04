document.addEventListener('DOMContentLoaded', function() {
    // Array of quotes and authors
    var quotes = [
        { quote: "\"A room without books is like a body without a soul.\"", author: "--Marcus Tullius Cicero" },
        { quote: "\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"", author: "--Bernard M. Baruch" },
        { quote: "\"Be the change that you wish to see in the world.\"", author: "--Mahatma Gandhi" },
        { quote: "\"You only live once, but if you do it right, once is enough.\"", author: "-- Mae West" },
        { quote: "\"If you tell the truth, you don't have to remember anything.\"", author: "--Mark Twain" },
        { quote: "\"To live is the rarest thing in the world. Most people exist, that is all.\"", author: "--Oscar Wilde" },
        { quote: "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\"", author: "--Mahatma Gandhi" },
    ];
    var quoteContainer = document.getElementById('quoteContainer');
    var authorContainer = document.getElementById('authorContainer');
    var button = document.querySelector('button');

    
    function displayQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        
        
        if (quotes[randomIndex].quote === quoteContainer.textContent) {
            randomIndex = (randomIndex + 1) % quotes.length;
        }

        var randomQuote = quotes[randomIndex];
        quoteContainer.textContent = randomQuote.quote;
        authorContainer.textContent = randomQuote.author;
    }
    button.addEventListener('click', displayQuote);
});
