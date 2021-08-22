const readline=require("readline");
const chalk =require('chalk');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Your name",(name)=>{

console.log(chalk.blue("Hey ")+chalk.green(name)+chalk.blue(" ! Welcome to the quiz.. This is a cricket quiz and you will be awarderd 1 marks for each right answer"));

play();
})



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
  },
   {
    question: `
	In which year India won the 1st ODI world cup?
	a: 1996
	b: 2011
	c: 1983\n`,
    answer: "c"
  }
];

let questionIndex = 0;
var score =0

function question() {
  rl.question(queList[questionIndex].question, (answer) => {
    console.log(chalk.blueBright(`You answered: ${answer}`));

    if (answer.toLowerCase() == queList[questionIndex].answer.toLowerCase()) {
      console.log(chalk.green("right answer!!!"));
      score+=1;
      questionIndex++;
      play();
    } else {
      console.log(chalk.red("wrong answer!!!"));
      questionIndex++;
      play();
    }
  });
}

function play() {
  if (isQuestionListEnded()) {
       if(score>=4)
       { 
         console.log(chalk.magenta("Excellent")) 
          }
        else
       { 
          console.log(chalk.magenta("You didn't scored well"))
          }
      console.log(chalk.yellow(`Your score is ${score} out of 5`))
      console.log(chalk.cyan("Thanks for playing...."));
      rl.close();
  } 
  else 
  {
    rl.question(" Press e to exit, any other key to continue....  ", (choice) => {
      console.log(`You selected ${choice}\n--------------------------------------`);

      if (choice.toLowerCase() !== "e") {
        question();
      }
       else {
        if(score>=4)
       { console.log(chalk.magenta("Excellent"))  }
        else
       {  console.log(chalk.magenta("You didn't scored well"))}
        console.log(chalk.yellow(`Your score is ${score} out of 5`))
        console.log(chalk.cyan("Thanks for playing...."));
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


