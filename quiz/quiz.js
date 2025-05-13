const question = document.getElementById('question');
const showAnswer = document.getElementById('answers-buttons')
const next = document.getElementById('next');

let questionIndex = 0;
let score = 0;

function startQuiz(){
  questionIndex = 0;
  score = 0;
  next.innerHTML = "Next";
  shuffle(questions);
  
  showQuestion();
}

function showQuestion(){
  reset();
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    question.innerHTML = questionNumber + ". " + currentQuestion.question;

    shuffle(currentQuestion.answers);

    currentQuestion.answers.forEach(answer =>{
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      showAnswer.appendChild(button)
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);

 
    })
}

//fisher-yates so questions are in random order
function shuffle(questions){
  let shuffleIndex = questions.length;

  while (shuffleIndex != 0){
    let randomIndex = Math.floor(Math.random() * shuffleIndex);
    shuffleIndex --;

    [questions[shuffleIndex], questions[randomIndex]] = [questions[randomIndex], questions[shuffleIndex]]
  }
}

function reset(){
  next.style.display = "none"
  while(showAnswer.firstChild){
    showAnswer.removeChild(showAnswer.firstChild);
  }
}

function selectAnswer(e){
  const selectedAnswer = e.target;
  const isCorrect = selectedAnswer.dataset.correct === "true";
  if(isCorrect){
    selectedAnswer.classList.add("correct");
    score++
  }
  else{
    selectedAnswer.classList.add("incorrect");
  }
  Array.from(showAnswer.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
  });
  next.style.display = "block";
}

function handleNextButton(){
  questionIndex++;
  if(questionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

function showScore(){
  reset();

  if (score == 0){
    question.innerHTML = `Your score was <span class="red-text">${score} out of ${questions.length}.</span> <br> Try Again.`;
  }
  else{
    question.innerHTML = `Your score was <span class="green-text">${score} out of ${questions.length}!</span>`;
  }
  next.innerHTML = "Restart Quiz"
  next.style.display = "block"
}

next.addEventListener("click", ()=>{
  if(questionIndex < questions.length){
      handleNextButton();
  }
  else{
    startQuiz();
  }
})

startQuiz();