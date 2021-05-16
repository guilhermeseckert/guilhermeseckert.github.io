const btn = document.getElementById('load-quote');


let data = [{
  quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it",
  source: "Patrick McKenzi",
  citation: "twitter",
  year: "2016"
},
{
  quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
  source: " Martin Fowler",
  citation: "facebook",
  year: "2019"

},
{
  quote: "First, solve the problem. Then, write the code",
  source: "John Johnson",
  citation: "facebook",
  year: "2018"
},

{
  quote: " Code is like humor. When you have to explain it, it’s bad.",
  source: "Cory House",
  citation: "twitter",
  year: "2020"
}

]



function random() {
  return Math.floor(Math.random() * data.length);
}

function nextQuote() {
  let index = random();

  var message = `
  <p class="quote">${data[index].quote}</p>
  <p class="source">${data[index].source}
    <span class="citation">${data[index].citation}</span>
    <span class="year">${data[index].year}</span>
  </p>`;

  document.querySelector(".container").innerHTML = message;
}
nextQuote();
btn.addEventListener('click', nextQuote);
