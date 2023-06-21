const questions = [
  "O que eu aprendi hoje?",
  "O que eu poderia fazer para melhorar?",
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + "-> ");
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
    Bacana Matheus!

    Hoje você aprendeu: ${answers[0]}

    E o que você poderia fazer para melhorar é: ${answers[1]}
    `);
});
