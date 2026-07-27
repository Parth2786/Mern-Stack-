const quotes = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", createdBy: "Franklin D. Roosevelt" },
  { quote: "In the middle of every difficulty lies opportunity.", createdBy: "Albert Einstein" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", createdBy: "Winston Churchill" },
  { quote: "Happiness depends upon ourselves.", createdBy: "Aristotle" },
  { quote: "Do what you can, with what you have, where you are.", createdBy: "Theodore Roosevelt" },
  { quote: "It always seems impossible until it’s done.", createdBy: "Nelson Mandela" },
  { quote: "Turn your wounds into wisdom.", createdBy: "Oprah Winfrey" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", createdBy: "Eleanor Roosevelt" },
  { quote: "Don’t count the days, make the days count.", createdBy: "Muhammad Ali" },
  { quote: "Be yourself; everyone else is already taken.", createdBy: "Oscar Wilde" },
  { quote: "The best way to predict the future is to invent it.", createdBy: "Alan Kay" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", createdBy: "Steve Jobs" },
  { quote: "If you want to lift yourself up, lift up someone else.", createdBy: "Booker T. Washington" },
  { quote: "Act as if what you do makes a difference. It does.", createdBy: "William James" },
  { quote: "Don’t let yesterday take up too much of today.", createdBy: "Will Rogers" },
  { quote: "The secret of getting ahead is getting started.", createdBy: "Mark Twain" },
  { quote: "Everything you can imagine is real.", createdBy: "Pablo Picasso" },
  { quote: "What we think, we become.", createdBy: "Buddha" },
  { quote: "Stay hungry, stay foolish.", createdBy: "Steve Jobs" },
  { quote: "Dream big and dare to fail.", createdBy: "Norman Vaughan" }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quoteDisplay").innerText =
    `"${randomQuote.quote}" — ${randomQuote.createdBy}`;
}
