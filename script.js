const questions = [
  {
              question: "1.What is 1+1?",
              options: ["A.5", "B.4","C.3", "D.2"],
              answer: "D."
  },
  {
              question: "2.What is 10/10?",
              options: ["A.1", "B.13", "C.5", "D.100 B.C"],
              answer: "A."
  },
  {
               question: "3.What is 2+2?",
               options: ["A.3", "B.4", "C.7", "D.43"],
               answer: "B."
  },
  {
               question: "4.what is the dog sound",
               options: ["A.GRRRRR","B.AWOOO","C.ARF","D.AW"],
               answer: "D."
  },
  {
               question: "5.Ano gagawin sa I.T",
               options: ["A.Mag shift","B.Mag batak mag code", "C.Matulog","D.Magsipag"],
               answer: "A."
  },
  {
               question: "6.Ilan ang butas ng rebisco",
               options: ["A.33", "B.56","C.33","D.55"],
               answer: "B."
  },
  {
               question: "7.question placeholder",
               options: ["A.", "B.", "C.", "D."],
               answer: "D."
  },
  {
               question: "8.question placeholder",
               options: ["A.", "B.", "C.", "D."],
               answer: "D."
  },
  {
               question: "9.question placeholder",
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
// RENDERS THE CURRENT QUESTIONS,ANSWERS ON SCREEN 
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