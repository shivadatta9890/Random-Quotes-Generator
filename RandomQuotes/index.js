const quoteText = document.querySelector(".quote");

const author = document.querySelector(".name");

const quoteBtn = document.querySelector("button");

let soundBtn = document.querySelector(".sound");
let copyBtn = document.querySelector(".copy");
let twitterBtn = document.querySelector(".twitter");

let randomQuote = ()=>{
    // console.log("Shiva");

    quoteBtn.classList.add("loading");

    quoteBtn.innerText = "Loading Quote...";

    fetch("https://api.quotable.io/random")
    .then(res=> res.json())
    .then(result=>{

        quoteText.innerText = result.content;
        author.innerText = result.author;

        quoteBtn.classList.remove("loading");

        quoteBtn.innerText = "New Quote";

        // console.log(result);

    })

}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",()=>{
    let tweetUrl =`https://twitter.com/intent/tweet/?url=${quoteText.innerText}`;
    window.open(tweetUrl , "_blank" );

});

//     let tweetUrl = `https://twitter.com/intent/tweet/?url=${quoteText.innerText}`;
//     window.open(tweetUrl , "_blank");
//     console.log("clicked");
// });


quoteBtn.addEventListener("click",randomQuote);