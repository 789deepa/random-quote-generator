const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

const fallbackQuotes = [
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

async function getQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    quoteText.textContent = `"${data.content}" — ${data.author}`;
  } catch (error) {
    const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteText.textContent = `"${random.text}" — ${random.author}`;
  }
}

newQuoteBtn.addEventListener("click", getQuote);
