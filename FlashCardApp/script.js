let flashcards = [

{question:"What is Java?",answer:"Programming Language"},

{question:"What does HTML stand for?",answer:"HyperText Markup Language"},

{question:"What is CSS used for?",answer:"Styling web pages"},

{question:"What is Android?",answer:"Mobile Operating System"},

{question:"What is Python?",answer:"High-level programming language"},

{question:"What planet is known as Red Planet?",answer:"Mars"},

{question:"2 + 2 × 5 = ?",answer:"12"},

{question:"Who invented Java?",answer:"James Gosling"},

{question:"What is RAM?",answer:"Random Access Memory"},

{question:"What does CPU stand for?",answer:"Central Processing Unit"}

];

let index = 0;
let score = 0;
let xp = 0;
let level = 1;

let time = 15;
let timerInterval;

let motivations = [
"💡 Learning never stops!",
"🚀 Keep pushing your limits!",
"🔥 You are doing amazing!",
"🎯 Small progress matters!",
"📚 Knowledge is power!"
];

/* Flip */
function flipCard(){
  document.querySelector(".card")
  .classList.toggle("flip");
}

/* Next */
function nextCard(){

  index=(index+1)%flashcards.length;

  document.getElementById("question")
  .innerText=flashcards[index].question;

  document.getElementById("answer")
  .innerText=flashcards[index].answer;

  document.querySelector(".card")
  .classList.remove("flip");

  updateProgress();
  resetTimer();
  randomMotivation();
}

/* Correct */
function markCorrect(){

  score++;
  xp+=10;

  if(xp%50===0){
    level++;
  }

  document.getElementById("score")
  .innerText=score;

  document.getElementById("xp")
  .innerText=xp;

  document.getElementById("level")
  .innerText=level;

  document.querySelector(".card")
  .classList.add("correct");

  setTimeout(()=>{
    document.querySelector(".card")
    .classList.remove("correct");
  },1000);

  document.getElementById("correctSound")
  .play();
}

/* Wrong */
function markWrong(){
  document.getElementById("wrongSound")
  .play();
}

/* Timer */
function startTimer(){

  timerInterval=setInterval(()=>{

    time--;

    document.getElementById("timer")
    .innerText=time;

    if(time===0){
      nextCard();
    }

  },1000);
}

function resetTimer(){

  clearInterval(timerInterval);

  time=15;

  document.getElementById("timer")
  .innerText=time;

  startTimer();
}

/* Progress */
function updateProgress(){

  let progress=
  ((index+1)/flashcards.length)*100;

  document.getElementById("progressBar")
  .style.width=progress+"%";
}

/* Theme */
function toggleTheme(){
  document.body.classList.toggle("dark");
}

/* Motivation */
function randomMotivation(){

  let random=
  Math.floor(Math.random()*motivations.length);

  document.getElementById("motivation")
  .innerText=motivations[random];
}

/* Keyboard */
document.addEventListener("keydown",(e)=>{

  if(e.key==="ArrowRight"){
    nextCard();
  }

});

/* Start */
startTimer();
updateProgress();