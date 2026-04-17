let quoteText = document.querySelector(".quote");
let newQuoteBtn = document.querySelector(".btn");
let authorName = document.querySelector(".author .name");
let speakBtn = document.querySelector(".sound");
let copyBtn = document.querySelector(".copy");


const getRandomQuote = async()=>{
    newQuoteBtn.innerText = "Loading Quote...";
    newQuoteBtn.classList.add("loading");
    let randomNumber = Math.floor(Math.random()*50);
    const res = await fetch('https://zenquotes.io/api/quotes/');
    const data = await res.json();
    quoteText.innerText = data[randomNumber].q;
    authorName.innerText = data[randomNumber].a;
    newQuoteBtn.innerText = "New Quote";
    newQuoteBtn.classList.remove("loading");
    // console.log("data",data);
    // console.log(randomNumber);
};

newQuoteBtn.onclick = ()=>{
    getRandomQuote();
};

speakBtn.onclick = ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);  
};

copyBtn.onclick = ()=>{
    copyBtn.innerHTML = `<i class="fas fa-check"></i>`;
    navigator.clipboard.writeText(quoteText.innerText);

    setTimeout(() => {
        copyBtn.innerHTML = `<i class="fas fa-copy"></i>`        
    }, 1500);
};