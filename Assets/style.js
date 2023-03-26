var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var nameForm = document.getElementById("nameform")

   // Set the countdown time in seconds
    var countDownTime = 60;
    function countDown() {
    // Update the countdown time
      countDownTime--;
      
    // Check if the countdown has finished
      if (countDownTime <= 0) {
        clearInterval(timerInterval);
        timerDisplay.innerHTML = "Time's up!";
      } else {
    // Display the remaining time
        timerDisplay.innerHTML = "Time remaining: " + countDownTime + " seconds";
      }
      
    }

    nameForm.style.display="none"
    // Add an event listener to the start button
    var startButton = document.getElementById("start-btn");
    startButton.addEventListener("click", function() {

      startButton.style.display = "none";
      hidetxt.style.display = "none";
      answerchoices.style.display="none"

    // Call the countDown function every second, starts after button is clicked
    var timerInterval = setInterval(countDown, 1000);

    // Show the question display
    questioncontainer.style.display = "block";

    // Get the current question
    var currentQuestionObj = questions[currentQuestion];

    // Display the question
    questionDisplay.innerHTML = "<h2>" + currentQuestionObj.question + "</h2>";

    // Create an array to store the question choices
    var choices = currentQuestionObj.choices;

    // Create an unordered list to hold the answer choices
    var answerList = document.createElement("ul");
    answerList.setAttribute("id", "answer-list");
    questioncontainer.appendChild(answerList);

    // Loop through the choices and add them to the answer list
    for (var i = 0; i < choices.length; i++) {
      var answerItem = document.createElement("li");
      var answerButton = document.createElement("button");
      answerButton.setAttribute("class", "answer-button");
      answerButton.setAttribute("value", choices[i]);
      answerButton.textContent = choices[i];
      answerItem.appendChild(answerButton);
      answerList.appendChild(answerItem);
    }

    // Add an event listener to each answer button
    var answerButtons = document.querySelectorAll(".answer-button");
    for (var i = 0; i < answerButtons.length; i++) {
      answerButtons[i].addEventListener("click", checkAnswer);
    }

    function loadQuestion() {
      var previousAnswerList = document.getElementById("answer-list");
      if (previousAnswerList !== null) {
        previousAnswerList.parentNode.removeChild(previousAnswerList);
      }
    // increment the currentQuestion index to move to the next question
      currentQuestion++;

    // check if there are more questions
    if (currentQuestion >= questions.length) {
        clearInterval(timerInterval);
        questioncontainer.innerHTML = "Quiz Over!";
        nameForm.style.display=""
        rightWrong.style.display="none"
     
        displayScore();
        return;

    }

    function displayScore() {
    // Calculate the percentage score
    var totalQuestions = questions.length;
    var percentageScore = Math.round((score / totalQuestions) * 100);
      
    // Display the score
    var scoreDisplay = document.getElementById("score");
        scoreDisplay.innerHTML = "You scored " + score + " out of " + totalQuestions + " (" + percentageScore + "%)";

    }
      
    // get the current question
    var currentQuestionObj = questions[currentQuestion];

    // display the question
    questionDisplay.innerHTML = "<h2>" + currentQuestionObj.question + "</h2>";

    // create an array to store the question choices
    var choices = currentQuestionObj.choices;

    // create an unordered list to hold the answer choices
    var answerList = document.createElement("ul");
      answerList.setAttribute("id", "answer-list");
      questioncontainer.appendChild(answerList);

    // loop through the choices and add them to the answer list
    for (var i = 0; i < choices.length; i++) {
    var answerItem = document.createElement("li");
    var answerButton = document.createElement("button");
        answerButton.setAttribute("class", "answer-button");
        answerButton.setAttribute("value", choices[i]);
        answerButton.textContent = choices[i];
        answerItem.appendChild(answerButton);
        answerList.appendChild(answerItem);

      }

    // add an event listener to each answer button
    var answerButtons = document.querySelectorAll(".answer-button");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", checkAnswer);

    }

    }
    
    var rightWrong = document.getElementById("ying-yang")
    
    function checkAnswer() {
    // Check if the selected answer is correct
      if (this.value === questions[currentQuestion].answer) {
       
        // Increment the score
        score++;

        answerList.style.display = "none";

      } else {
    // Deduct 10 seconds from the timer
        countDownTime -= 10;
     
        answerList.style.display = "none";
      }
     
    // Load the next question
      loadQuestion();

    }

    });
    
    // Get the HTML element to display the countdown
    var timerDisplay = document.getElementById("timer");
    if (timerDisplay !== null) {
      timerDisplay.style.display = "none";

    }

    // Get the HTML element to display the question
    var questionDisplay = document.getElementById("question");

    // Hide the question initially
    timerDisplay.style.display = "block";
    questionDisplay.style.display = "block";

    // Create an array of multiple choice questions
    var questions = [
      {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "What choice represents strict equality?",
        choices: ["=", "==", "==="],
        answer: "==="
      },
      {
        question: "What are alt attributes used for?",
        choices: ["picking syntax","figure./const", "describing images on a web page"],
        answer: "describing images on a web page"
      },
      {
        question: "What company developed Javascript?",
        choices: ["Netscape", "Google", "Microsoft"],
        answer: "Netscape"
       },
       {
        question: "How many days did it take to write javascript?",
        choices: ["10", "33", "100"],
        answer: "10"
       },

      // add more questions here...
    ];

    // Keep track of the current question
    var currentQuestion = 0;

    // Declare the variable timerInterval and set it to null
    var timerInterval = null;

    var inputName = document.getElementById("initials")
    function showScore() {

      nameForm.style.display ="none"

      initialString = localStorage.getItem("score");
    
      for (var i = 0; i < scores.length; i++) {
    
    var scoreId = document.createElement("li");
    
      scoreId.textContent = scores[i].initial + " finished with " + scores[i].timeLeft + " seconds left";
    
      highscores.appendChild(scoreId);
    
      }
    
    }
    var subButton = document.getElementById("submit")
      subButton.addEventListener("click", function(event){
      event.preventDefault()

    var initial = document.querySelector("#initials").value;

      if (!initial) {
        alert("Please enter your initials!");
        return;
      }
    
    var timeLeft = countDownTime
    
    var personScore = {
    
        initial: initial,
    
        timeLeft: timeLeft
    
      };
    
      localStorage.setItem(initial, timeLeft)
    
      scores.push(personScore);

      showScore()
    
      })
      
    var highScorePage = document.getElementById("scores")
    var highscores = document.getElementById("highscore")

    var scores = []

    for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i)
      
    var value = localStorage.getItem(key);

    var personScore = {
      
          initial: key,
      
          timeLeft: value
      
        };
      
       scores.push(personScore);
      
    }