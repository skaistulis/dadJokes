const jokeBtn = document.getElementById("jokeBtn");
const jokeGoesHere = document.getElementById("joke");

const randomBtn = document.getElementById("randomBtn");
const randomGoesHere = document.getElementById("random");

const input = document.getElementById("input");
const chooseBtn = document.getElementById("chooseBtn");
const chosenGoesHere = document.getElementById("chosen");

const countBtn = document.getElementById("countBtn");
const countGoesHere = document.getElementById("count");

const randomQBtn = document.getElementById("randomQBtn");
const randomQGoesHere = document.getElementById("randomQ");

let data = [
  {
    id: 1,
    joke: "Dad, did you get a haircut?",
    punchline: "No, I got them all cut!",
  },

  {
    id: 2,
    joke: "How do you get a squirrel to like you?",
    punchline: "Act like a nut.",
  },

  {
    id: 3,
    joke: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up.",
  },

  {
    id: 4,
    joke: "What do you call someone with no body and no nose?",
    punchline: "Nobody knows.",
  },

  {
    id: 5,
    joke: "Why couldn't the bicycle stand up by itself?",
    punchline: "It was two tired.",
  },

  {
    id: 6,
    joke: "What kind of shoes do ninjas wear?",
    punchline: "Sneakers!",
  },

  {
    id: 7,
    joke: "How does a penguin build its house?",
    punchline: "Igloos it together.",
  },

  {
    id: 8,
    joke: "Why did the math book look so sad?",
    punchline: "Because of all of its problems!",
  },

  {
    id: 9,
    joke: "How many tickles does it take to make an octopus laugh?",
    punchline: "Ten tickles.",
  },

  {
    id: 10,
    joke: "Did you hear about the guy who invented the knock-knock joke?",
    punchline: "He won the 'no-bell' prize.",
  },
];

//all jokes
jokeBtn.addEventListener(
  "click",
  function () {
    for (var i = 0; i < data.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let cardContent = `<div class="card__content"><h4>Question: ${data[i].joke}</h4><p>Answer: ${data[i].punchline}</p></div>`;
      card.innerHTML += cardContent;
      jokeGoesHere.appendChild(card);
    }
  },
  { once: true }
);

//random joke

randomBtn.addEventListener("click", function () {
  const keys = Object.keys(data);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  const item = data[randomIndex];
  random.innerHTML =
    "<span>Question: </span>" +
    item.joke +
    "<br><span>Answer: </span>" +
    item.punchline;
});

//chosen joke

chooseBtn.addEventListener("click", function () {
  let id = parseInt(input.value);
  let filteredJoke = data.filter((item) => item.id === id);
  chosenGoesHere.innerHTML =
    "<span>Question: </span>" +
    filteredJoke[0].joke +
    "<br><span>Answer: </span>" +
    filteredJoke[0].punchline;
});

// current amount of jokes
countBtn.addEventListener("click", function () {
  countGoesHere.innerHTML = data.length;
});

//random question and random punchline

randomQBtn.addEventListener("click", function () {
  const keys = Object.keys(data);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  const randomIndex2 = keys[Math.floor(Math.random() * keys.length)];
  console.log(randomIndex);
  const item1 = data[randomIndex];
  const item2 = data[randomIndex2];
  randomQ.innerHTML =
    "<span>Question: </span>" +
    item1.joke +
    "<br><span>Answer: </span>" +
    item2.punchline;
});
