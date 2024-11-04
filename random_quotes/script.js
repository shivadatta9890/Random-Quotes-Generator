let quoteText = document.querySelector(".quote");
let authorName = document.querySelector(".name");
let soundBtn = document.querySelector('.sound');
let copyBtn = document.querySelector('.copy');
let twitterBtn = document.querySelector('.twitter');
let newquoteBtn = document.querySelector(".btn");


const getRandomQuote = async()=>{
    let randomIndex = Math.floor(Math.random()*51);
    // console.log(randomIndex);
    newquoteBtn.classList.add("loading");
    newquoteBtn.innerText = "Loading...";
    const res = await fetch("https://zenquotes.io/api/quotes/");
    const data = await res.json();
    quoteText.innerText = data[randomIndex].q;
    authorName.innerText = data[randomIndex].a;
    // console.log(data);
    // console.log(data[randomIndex]);
    newquoteBtn.innerText = "New Quote";
    newquoteBtn.classList.remove("loading");
}
newquoteBtn.addEventListener('click',getRandomQuote);

soundBtn.addEventListener('click',()=>{
    let text = `${quoteText.innerText} by ${authorName.innerText}`;
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);

})

copyBtn.addEventListener('click',()=>{
    let text = quoteText.innerText;
    navigator.clipboard.writeText(text);
    // console.log(text);
});