let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
const colorButton = document.getElementById('btn');
function changeBackgroundColor() {
        
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
}
btn.addEventListener('click', changeBackgroundColor);
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);