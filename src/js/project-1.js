let quote = document.querySelector(".quote");
let person = document.getElementById("person");
let btnNewQuote = document.getElementById("newQuote");

const quotes = [
  {
    quote: `"Love is an untamed force. When we try to control it, it destroys us.
    When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused"`,
    person: `Nelson Dayo`,
  },
  {
    quote: `"As he read, I fell in love the way you fall asleep: slowly, and then all at once."`,
    person: `John Green`,
  },
  {
    quote: `"I saw that you were perfect, and so I loved you. Then I saw that you were not 
    perfect and I loved you even more."`,
    person: `Angelita Lim`,
  },
  {
    quote: `"I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. 
    I love you for the part of me that you bring out."`,
    person: `Elizabeth Barrett Browning`,
  },
  {
    quote: `"I fell in love with her courage, her sincerity, and her flaming self respect. 
    And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. 
    I love her and it is the beginning of everything."`,
    person: `F. Scott Fitzgerald`,
  },
  {
    quote: `"I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow."`,
    person: `Leo Christopher`,
  },
  {
    quote: `"Women are meant to be loved, not to be understood."`,
    person: `Oscar Wilde`,
  },
];

// document.addEventListener('event', function)
function randomQuotes() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomQuote].quote;
  person.innerText = quotes[randomQuote].person;
}

btnNewQuote.addEventListener("click", randomQuotes);
