const quizQuestions = [
  {
    question: "Should you share your home address online?",
    answers: [
      { text: "Yes", correct: false, tip: "Never share personal info online." },
      { text: "No", correct: true, tip: "Good! Keeping your home address private is safe." }
    ]
  },
  {
    question: "What should you do if you get a friend request from a stranger?",
    answers: [
      { text: "Accept it", correct: false, tip: "Only accept requests from people you know." },
      { text: "Ignore or decline", correct: true, tip: "Correct! Stay safe by ignoring strangers." }
    ]
  },
  {
    question: "Is it safe to click links from unknown emails?",
    answers: [
      { text: "Yes", correct: false, tip: "Beware of phishing! Don't click suspicious links." },
      { text: "No", correct: true, tip: "Well done! Always think twice before clicking." }
    ]
  },
  {
    question: "Password Safety 🔹 What makes a strong password?",
    answers: [
      { text: "Your name and birthday", correct: false, tip: "Avoid using personal info in passwords." },
      { text: "A short, easy-to-remember word", correct: false, tip: "Longer, complex passwords are stronger." },
      { text: "A mix of letters, numbers, and symbols", correct: true, tip: "Correct! Complexity makes passwords strong." }
    ]
  },
  {
    question: "Internet Safety 🔹 If a stranger asks for your personal information online, what should you do?",
    answers: [
      { text: "Give it to them so they can be your friend", correct: false, tip: "Never share personal info with strangers." },
      { text: "Ignore them or tell a trusted adult", correct: true, tip: "Great! Always tell a trusted adult." },
      { text: "Tell them where you live", correct: false, tip: "Sharing location can be dangerous." }
    ]
  },
  {
    question: "Phishing Awareness 🔹 What is a phishing email?",
    answers: [
      { text: "A message that tries to trick you into sharing personal information", correct: true, tip: "Yes! Phishing emails are scams." },
      { text: "A way to catch fish online", correct: false, tip: "Haha, no. It's a scam email." },
      { text: "A fun email from a friend", correct: false, tip: "Phishing emails are not fun, they're dangerous." }
    ]
  },
  {
    question: "Social Media Rules 🔹 Should you share your location on social media?",
    answers: [
      { text: "Yes, so everyone knows where you are", correct: false, tip: "Avoid sharing your location publicly." },
      { text: "No, to protect your privacy", correct: true, tip: "Exactly! Protect your privacy by hiding your location." },
      { text: "Only sometimes, when traveling", correct: false, tip: "It's safer to avoid sharing location even when traveling." }
    ]
  }
];

let currentQuestion = 0;

function startQuiz() {
  showQuestion(currentQuestion);
}

function showQuestion(index) {
  const quiz = document.getElementById("quiz");
  const q = quizQuestions[index];
  let answersHtml = "";
  q.answers.forEach((a, i) => {
    answersHtml += `<button onclick="answerQuestion(${index}, ${i})">${a.text}</button>`;
  });
  quiz.innerHTML = `
    <h3>Question ${index + 1} of ${quizQuestions.length}</h3>
    <p>${q.question}</p>
    ${answersHtml}
    <div id="tip" style="margin-top:15px; font-style: italic;"></div>
  `;
}

function answerQuestion(qIndex, aIndex) {
  const tipBox = document.getElementById("tip");
  const answer = quizQuestions[qIndex].answers[aIndex];
  if(answer.correct) {
    tipBox.textContent = `✔️ ${answer.tip}`;
  } else {
    tipBox.textContent = `❌ ${answer.tip}`;
  }
  
  // Show next question after 2 seconds or finish message
  setTimeout(() => {
    if(qIndex + 1 < quizQuestions.length) {
      showQuestion(qIndex + 1);
    } else {
      showFinish();
    }
  }, 2000);
}

function showFinish() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `
    <h3>Great job! You completed the quiz.</h3>
    <p>Remember: Always stay cautious and think before you click or share.</p>
    <button onclick="startQuiz()">Try Again</button>
  `;
}
