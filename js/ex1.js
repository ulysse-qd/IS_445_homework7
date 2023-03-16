const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const contentDiv = document.getElementById("content");

questions.forEach((question, index) => {
  const questionDiv = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "Show the answer";
  button.addEventListener("click", () => {
    questionDiv.removeChild(button);
    const solution = document.createElement("p");
    solution.innerText = question.answer;
    questionDiv.appendChild(solution);
  });

  const statement = document.createElement("p");
  statement.innerText = `Question ${index + 1}: ` + question.statement;
  questionDiv.appendChild(statement);
  questionDiv.appendChild(button);
  contentDiv.appendChild(questionDiv);
});