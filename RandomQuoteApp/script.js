let quotes = [

{
text:"Believe in yourself and all that you are.",
author:"Christian Larson",
mood:"Inspired"
},

{
text:"Push yourself because no one else will do it for you.",
author:"Ratan Tata",
mood:"Focused"
},

{
text:"Dream big and dare to fail.",
author:"Norman Vaughan",
mood:"Fearless"
},

{
text:"Stay hungry, stay foolish.",
author:"Steve Jobs",
mood:"Creative"
},

{
text:"Success doesn’t come from comfort zones.",
author:"A.P.J Abdul Kalam",
mood:"Motivated"
},

{
text:"Your future is created by what you do today.",
author:"Robert Kiyosaki",
mood:"Determined"
},

{
text:"The harder you work, the luckier you get.",
author:"Gary Player",
mood:"Driven"
},

{
text:"Do what you can with all you have.",
author:"Theodore Roosevelt",
mood:"Strong"
},

{
text:"Discipline is the bridge between goals and accomplishment.",
author:"Jim Rohn",
mood:"Focused"
},

{
text:"You are capable of amazing things.",
author:"Roy Bennett",
mood:"Positive"
},

{
text:"Doubt kills more dreams than failure ever will.",
author:"Suzy Kassem",
mood:"Confident"
},

{
text:"Work hard in silence. Let success make the noise.",
author:"Frank Ocean",
mood:"Calm"
},

{
text:"Every accomplishment starts with the decision to try.",
author:"John F. Kennedy",
mood:"Hopeful"
},

{
text:"Success is not final. Failure is not fatal.",
author:"Winston Churchill",
mood:"Balanced"
},

{
text:"Your limitation is only your imagination.",
author:"Anonymous",
mood:"Limitless"
},

{
text:"Wake up with determination. Sleep with satisfaction.",
author:"Anonymous",
mood:"Productive"
},

{
text:"Push through the pain. Greatness is waiting.",
author:"Virat Kohli",
mood:"Energetic"
},

{
text:"The best way to predict the future is to create it.",
author:"Peter Drucker",
mood:"Visionary"
},

{
text:"You miss 100 percent of the shots you never take.",
author:"Wayne Gretzky",
mood:"Bold"
},

{
text:"Everything you can imagine is real.",
author:"Pablo Picasso",
mood:"Creative"
},

{
text:"Do one thing every day that scares you.",
author:"Eleanor Roosevelt",
mood:"Brave"
},

{
text:"Stars can’t shine without darkness.",
author:"D.H. Sidebottom",
mood:"Reflective"
},

{
text:"The secret of getting ahead is getting started.",
author:"Mark Twain",
mood:"Motivated"
},

{
text:"Nothing will work unless you do.",
author:"Maya Angelou",
mood:"Strong"
},

{
text:"Great things take time. Stay patient.",
author:"Priya Sharma",
mood:"Peaceful"
}

];

let favorites = 0;

/* Generate New Quote */
function newQuote(){

  let random =
  Math.floor(Math.random()*quotes.length);

  document.getElementById("quote")
  .innerText =
  quotes[random].text;

  document.getElementById("author")
  .innerText =
  "- " + quotes[random].author;

  document.getElementById("mood")
  .innerText =
  quotes[random].mood;

  document.querySelector(".quote-box")
  .style.animation =
  "none";

  setTimeout(()=>{

    document.querySelector(".quote-box")
    .style.animation =
    "fade 1s";

  },10);
}

/* Copy Quote */
function copyQuote(){

  let text =
  document.getElementById("quote")
  .innerText;

  navigator.clipboard.writeText(text);

  alert("✨ Quote copied successfully!");
}

/* Speak Quote */
function speakQuote(){

  let text =
  document.getElementById("quote")
  .innerText;

  let speech =
  new SpeechSynthesisUtterance(text);

  speech.rate = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}

/* Save Favorites */
function saveFavorite(){

  favorites++;

  document.getElementById("favCount")
  .innerText =
  favorites;
}

/* Theme Toggle */
function toggleTheme(){

  document.body
  .classList.toggle("dark");
}

/* Dynamic Motivation Messages */
let motivationTexts = [

"🚀 Your future is built today.",

"✨ Dream bigger. Work harder.",

"🔥 Consistency creates success.",

"💡 Great minds never stop learning.",

"🌌 Shine even in dark times.",

"🏆 Progress is still progress.",

"⚡ Energy flows where focus goes."

];

/* Auto-changing motivation */
setInterval(()=>{

  let random =
  Math.floor(
  Math.random()*motivationTexts.length
  );

  document.getElementById("motivation")
  .innerText =
  motivationTexts[random];

},5000);

/* Auto quote change */
setInterval(()=>{

  newQuote();

},9000);

/* Keyboard shortcuts */
document.addEventListener("keydown",(e)=>{

  if(e.key==="ArrowRight"){

    newQuote();

  }

});

/* First Quote */
newQuote();