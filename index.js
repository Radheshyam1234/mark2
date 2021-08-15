const readline=require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Hey ! Welcome to the quiz ");


const queList = [
  {
    question: `
	Who is the captain of Indian cricket team?
	a: Virat kohli
	b: Rohit sharma
	c:Sikhar dhawan\n`,
    answer: "a"
  },
  {
    question: `
	Who is the president of BCCI ?
	a: VVS Laxman
	b: Saurabh ganguly
  c: Sunil Gavaskar\n`,
    answer: "b"
  },
  {
    question: `
	Who was the 1st batsman to score Double century in ODI "?
	a: Sachin Tendulkar
	b: V. Sehwag
	c: Rohit sharma
	d: Kohli\n`,
    answer: "a"
  },
  {
    question: `
	Who was the 1st Indian batsman to score Triple century in Test cricket ?
	a: VVS Laxman
	b: Brian Lara
	c: Virendra Sehwag\n`,
    answer: "c"
  }
];

let questionIndex = 0;

function question() {
  rl.question(queList[questionIndex].question, (answer) => {
    console.log(`You answered: ${answer}`);

    if (answer.toLowerCase() == queList[questionIndex].answer.toLowerCase()) {
      console.log("right answer!!!");
      questionIndex++;
      play();
    } else {
      console.log("wrong answer!!!");
      console.log("try again");
      question();
    }
  });
}

function play() {
  if (isQuestionListEnded()) {
    console.log("thanks for playing....");
    rl.close();
  } else {
    rl.question(" Press e to exit, any other key to continue....  ", (choice) => {
      console.log(`You selected ${choice}`);

      if (choice.toLowerCase() !== "e") {
        question();
      } else {
        console.log("thanks for playing....");
        rl.close();
      }
    });
  }
}

function isQuestionListEnded() {
  if (queList.length == questionIndex) {
    return true;
  }
}

play();
