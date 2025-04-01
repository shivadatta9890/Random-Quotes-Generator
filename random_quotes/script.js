let quote = document.querySelector(".quote");

let authorName = document.querySelector(".name");

let speakBtn = document.querySelector(".sound");
let copyBtn = document.querySelector(".copy");

const newQuoteBtn = document.querySelector(".btn");

const generateNewQuote = async () => {
  newQuoteBtn.innerText = "Loading Quote...";
  newQuoteBtn.classList.add("loading");
  const res = await fetch("https://zenquotes.io/api/quotes/");
  const randomNumber = Math.floor(Math.random() * 50);
  const data = await res.json();
  // console.log("data",data);
  quote.innerText = data[randomNumber].q;
  authorName.innerText = data[randomNumber].a;
  newQuoteBtn.innerText = "New Quote";
  newQuoteBtn.classList.remove("loading");
};

const speakQuote = async () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance);
};

const copyQuote = async()=>{
  copyBtn.innerHTML ='<i class="fas fa-check"></i>';
  navigator.clipboard.writeText(quote.innerText);
  setTimeout(()=>{
    copyBtn.innerHTML ='<i class="fas fa-copy"></i>';
  },3000);
};

newQuoteBtn.addEventListener("click", () => {
  generateNewQuote();
});

speakBtn.addEventListener("click", () => {
  setTimeout(() => {
    speakQuote();
  }, 1000);
});

copyBtn.addEventListener("click",()=>{
  copyQuote();
});
