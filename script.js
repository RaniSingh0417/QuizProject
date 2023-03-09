const quizDB = [
  {
    question: "Q:1 Full Form of HTML is ?",
    a: "Hypo Text Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hypo Test Markup Language",
    d: "Hyper Text Marquee Language",
    ans: "opt_2",
  },
  {
    question: "Q:2 Full Form of CSS is ?",
    a: "Cascaded Style Sheets",
    b: "Cascading Styling Sheets",
    c: "Cascoding Style Sheets",
    d: "Cascading Style Sheets",
    ans: "opt_4",
  },
  {
    question: "Q:3 Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<scripting>",
    d: "<javascript>",
    ans: "opt_1",
  },
  {
    question: "Q:4 Where is the correct place to insert a JavaScript?",
    a: "Both the <head> section and <body> section are correct",
    b: "the <body> section",
    c: "the <head> section",
    d: "none",
    ans: "opt_2",
  },
  {
    question: 'Q:5 How do you write "HELLO WORLD" in an alert box?',
    a: 'alert("HELlO WORLD")',
    b: 'msg("HELlO WORLD")',
    c: 'msgBox("HELlO WORLD")',
    d: 'alertBox("HELlO WORLD")',
    ans: "opt_1",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
const deSelectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deSelectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3>You Scored ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()">Play Again</button>
`;
    showScore.classList.remove("scoreArea");
  }
});
