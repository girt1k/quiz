const questoins = [
    {
    questoin: "Какое число жизни?",
    answers: [
        
        {
            text:"11",
        correct: false
    },

        {
            text:"42",
        correct: true
    },

        {
            text:"1137",
        correct: false
    },

        {
            text:"999",
        correct: false
    },
    ]
},

    {
    questoin: "Как называется камень из майнкрафта, котрый сломали и подобрали?",
    answers: [

        {
            text:"Итальянский мрамор",
        correct: true
    },

        {
            text:"Булыжник",
        correct: false
    },

        {
            text:"Андезит",
        correct: false
    },

        {
            text:"Бедрок",
        correct: false
    },
    ]
},

    {
    questoin: "У Васи был арбуз, пока он нес его до дома, арбуз упал четыре раза, вопрос: Cколько вмятин на жигуле его брата?",
    answers: [

        {
            text:"1",
        correct: false
    },

        {
            text:"2",
        correct: false
    },

        {
            text:"3",
        correct: false
    },

        {
            text:"у брата нет жигуля",
        correct: true
    },
    ]
},

    {
    questoin: "Какая планета находится ближе всего к Солнцу?",
    answers: [

        {
            text:"Земля",
        correct: false
    },

        {
            text:"Марс",
        correct: true
    },

        {
            text:"Меркурий",
        correct: true
    },

        {
            text:"Венера",
        correct: false
    },
    ]
}
];

const questoinElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Дальше"
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questoins[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questoinElement.innerHTML = questionNo +". " + currentQuestion.questoin;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
    button.addEventListener("click", selectAnswer);
    })
};

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorretc = selectBtn.dataset.correct === "true";
    if (isCorretc){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === " true"){
            button.classList.add("correct");
        }
    button.disabled = true;
    });
    nextButton.style.display = "block"
};

function showScore(){
    resetState();
    questoinElement.innerHTML = `Вы выбрали ${score} правильных ответов из ${questoins.length}!`;
    nextButton.innerHTML = "Играть снова!";
    nextButton.style.display = "block"
};

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questoins.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton,addEventListener("click", () =>{
    if(currentQuestionIndex <questoins.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();