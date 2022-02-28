const quizDB = [
    {
        question:"The World's Largest desert is ?",
        a:"Thar",
        b:"Kalahari",
        c:"Sahara",
        d:"Sonoran",
        ans:"ans3"
    },
    {
        question:"Country that has the highest in Barley Production ?",
        a:"China",
        b:"India",
        c:"Russia",
        d:"France",
        ans:"ans3"
    },
    {
        question:"The metal whose salts are sensitive to light is ?",
        a:"Zinc",
        b:"Silver",
        c:"Copper",
        d:"Aluminium",
        ans:"ans2"
    },
    {
        question:"The Central Rice Research Station is situated in ?",
        a:"Chennai",
        b:"Cuttack",
        c:"Bangalore",
        d:"Quilon",
        ans:"ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount];

    question.innerText= questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getslectedAnswer = () =>{
    let answer;

    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsEle)=> curAnsEle.checked = false);
}

submit.addEventListener('click', () =>{
    const slectedAnswer = getslectedAnswer();
    console.log(slectedAnswer);

    if(slectedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You got ${score}/${quizDB.length} </h3>
        <button class ="btn" onclick="location.reload()">Try again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});

