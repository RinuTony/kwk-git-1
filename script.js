
const facts = [
    "I like to believe I have a high spice tolerance (but occasionally regret testing it).",
    "I finally got a helix piercing reently after wanting one forever — and yes, it's my new personality.",
    "I just got back from Malaysia! The city lights were magical, and standing in front of the Twin Towers felt straight out of a movie.",
    "I'm allergic to seafood, pineapple and grapes :(",
    "I speak 3 languages",
    "My comfort food is dosa",
    "My favorite TV show is Brooklyn 99",
    ];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact-box").innerText = facts[randomIndex];
    }

const text = "HI!, I'M RINU";
const speed = 100;         
const delay = 1000;        
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typewriter").innerHTML = "";
      index = 0;
      typeWriter();
    }, delay);
  }
}

window.onload = typeWriter;
