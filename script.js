const questions = [
  {
              question: "1. question palceholder",
              options: ["A.", "B.","C.", "D."],
              answer: "D."
  },
  {
              question: "2. question placeholder",
              options: ["A.", "B.", "C.", "D."],
              answer: "A."
  },
  {
               question: "3. question placeholder",
               options: ["A.", "B.", "C.", "D."],
               answer: "B."
  },
  {
               question: "4. question placeholder",
               options: ["A.","B.","C.","D."],
               answer: "D."
  },
  {
               question: "5. question placeholder",
               options: ["A.","B.", "C.","D."],
               answer: "A."
  },
  {
               question: "6. question placeholder",
               options: ["A.", "B.","C.","D."],
               answer: "B."
  },
  {
               question: "7. question placeholder",
               options: ["A.", "B.", "C.", "D."],
               answer: "D."
  },
  {
               question: "8. question placeholder",
               options: ["A.", "B.", "C.", "D."],
               answer: "D."
  },
  {
               question: "9. question placeholder",
               options: [ "A.","B","C","D"],
               answer: "A."
  },
  {
              question: "10. question placeholder",
              options: ["A.","B.", "C.","D."],
              answer: "B."
  },
];
// STORES THE CURRENT  QUESTION INDEX
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
// RENDERS THE CURRENT QUESTIONS AND ANSWERS ON SCREEN 
//AND ITERATE THROUGH THE QUESTIONS AND ANSWERS THAT IS STORED IN AN ARRAY OF OBJECTS
  function loadQuestion() {
          const currentQuestion = questions[currentQuestionIndex];
          questionElement.textContent = currentQuestion.question;
          optionsElement.innerHTML = "";
          currentQuestion.options.forEach((option) => {
          const li = document.createElement("li");
          li.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;

                         optionsElement.appendChild(li);
    });
  }

  function prevButton(){
          if (currentQuestionIndex > 0){
             currentQuestionIndex--;
          }
          loadQuestion();
  }
//PREVENTS THE USER FROM PROGRESSING IF THEY HAVENT SELECTED ONE OF THE OPTIONS
  function checkAnswer() {
          const selectedOption = document.querySelector('input[name="option"]:checked');
          if (!selectedOption) {
          alert("CHECK MO YUNG BUTTON");
          return false;
    }
          if (selectedOption.value === questions[currentQuestionIndex].answer) {
                score++;
             }
                return true;
  }

  //SHOWS THE RESULT 
  function showResult() {
           resultElement.style.display = "block";
           document.getElementById("quiz").style.display = "none";
           scoreElement.textContent = `Your score is ${score} out of ${questions.length}`;
  }
  const prevButtonElement = document.getElementById('prev');
  prevButtonElement.addEventListener('click', prevButton);
  
  submitButton.addEventListener("click", () => {
           if (!checkAnswer()) return;
  
                    currentQuestionIndex++;
     
           if (currentQuestionIndex < questions.length) {
                loadQuestion();
           } else {
                showResult();
    }
  });
  
  loadQuestion();