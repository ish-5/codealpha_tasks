let totalCalories = 0;
let xp = 0;
let level = 1;

let dailyGoal = 1000;

let workouts = [];

let motivationTexts = [

"🔥 Sweat now. Shine later.",

"🏆 One workout at a time.",

"⚡ Stronger every day.",

"💪 Discipline creates results.",

"🚀 Progress beats excuses.",

"🥗 Healthy body. Healthy mind."

];

/* Add Workout */
function addWorkout(){

  let activity =
  document.getElementById("activity").value;

  let calories =
  parseInt(
  document.getElementById("calories").value
  );

  if(activity==="" || isNaN(calories)){

    return;
  }

  workouts.push({

    activity,
    calories

  });

  totalCalories += calories;

  xp += 10;

  if(xp % 50 === 0){

    level++;

  }

  updateUI();

  document.getElementById("activity").value="";
  document.getElementById("calories").value="";
}

/* Update UI */
function updateUI(){

  document.getElementById("totalCalories")
  .innerText=totalCalories;

  document.getElementById("xp")
  .innerText=xp;

  document.getElementById("level")
  .innerText=level;

  let progress =
  (totalCalories/dailyGoal)*100;

  document.getElementById("progressBar")
  .style.width =
  progress + "%";

  let list =
  document.getElementById("workoutList");

  list.innerHTML="";

  workouts.forEach((workout,index)=>{

    let li =
    document.createElement("li");

    li.innerHTML=`

    ${workout.activity}
    - ${workout.calories} cal

    <button onclick="deleteWorkout(${index})">
    ❌
    </button>

    `;

    list.appendChild(li);

  });

}

/* Delete */
function deleteWorkout(index){

  totalCalories -=
  workouts[index].calories;

  workouts.splice(index,1);

  updateUI();
}

/* BMI */
function calculateBMI(){

  let weight =
  document.getElementById("weight").value;

  let height =
  document.getElementById("height").value/100;

  let bmi =
  (weight/(height*height)).toFixed(1);

  let result =
  document.getElementById("bmiResult");

  if(bmi < 18.5){

    result.innerText =
    "🥗 Underweight | BMI: " + bmi;

  }

  else if(bmi < 25){

    result.innerText =
    "🏆 Healthy | BMI: " + bmi;

  }

  else{

    result.innerText =
    "🔥 Keep Training | BMI: " + bmi;

  }

}

/* Theme */
function toggleTheme(){

  document.body
  .classList.toggle("dark");
}

/* Motivation Change */
setInterval(()=>{

  let random =
  Math.floor(
  Math.random()*motivationTexts.length
  );

  document.getElementById("motivation")
  .innerText =
  motivationTexts[random];

},4000);