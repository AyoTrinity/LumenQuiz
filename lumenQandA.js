const quizData = [
    {
      question: 'What is the name of the largest island on the globe?',
      options: ['Greenland', 'United Kingdom', 'Australia', 'Marshall Island'],
      answer: 'Greenland',
    },
    {
      question: 'The Eiffel Tower was launched in which year?',
      options: ['1886', '1887', '1888', '1889'],
      answer: '1889',
    },
    {
      question: ' How many players make up a football team?',
      options: ['8', '9', '12', '11'],
      answer: '11',
    },
    {
      question: 'Flowers manufacture a substance to attract insects called?',
      options: ['Pollen', 'Nectar', 'Athem', 'Stimulus'],
      answer: 'Nectar',
    },
    {
      question: 'DC means what in the field of electricity?',
      options: ['Direct Current', 'Danger Cell', 'Danger Current','Danger Circuit',
      ],
      answer: 'Direct Current',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo'],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Winston Churchill was a prisoner of war during which war?',
      options: ['World War 1', 'World War 2', 'The British War', 'The Boer War'],
      answer: 'The Boer War',
    },
    {
      question: 'Who is the author of the popular book “Pride and Prejudice”?',
      options: ['Jane Hildof', 'Jane Ze Derdi', 'Jane Austen', 'Jane Arthur'],
      answer: 'Jane Austen',
    },
    {
      question: 'What is the name of the largest landlocked country in the world?',
      options: ['Afghanistan', 'Turkmenistan', 'Kazakhstan', 'Azerbaijan'],
      answer: 'Kazakhstan',
    },
  ];
  
  let quizContainer = document.getElementById('quiz');
  let resultContainer = document.getElementById('result');
  let submitButton = document.getElementById('submit');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    let questionData = quizData[currentQuestion];
  
    let questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    let optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    let shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      let option = document.createElement('label');
      option.className = 'option';
  
      let radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
      radio.style.marginLeft = '10px'
      radio.style.marginTop = '20px'
      radio.style.marginBottom = '20px'
  
      let optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      let answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
  }
  submitButton.addEventListener('click', checkAnswer);
  displayQuestion();