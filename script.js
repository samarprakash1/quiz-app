const quizData= [
    {
    question: '1. Who is prime minister of india?',
    a: 'Dr. Manmohan Singh',
    b: 'Narendra Modi',
    c: 'Rahul Gandhi',
    d: 'Lalu Yadaw',
    correct: 'b'
}, {
    question: '2. which is the most used programming language?',
    a: 'Pythin',
    b: 'C',
    c: 'C++',
    d: 'Java',
    correct: 'd'
} , {
    question: '3. Choose the correct Order?',
    a: 'Deep > viku > ghatak > parag > vishal > Abhishek > Shashi',
    b: 'Viku > Deep > ghatak > parag > vishal > Abhishek > Shashi',
    c: 'Deep > viku > ghatak > parag > vishal > Abhishek > Shashi',
    d: 'None of these',
    correct: 'd'
} 

]
const quiz=document.getElementById("quiz");

const questionEl =document.getElementById('question');
const answerEls=document.querySelectorAll(".answer");

const a_text =document.getElementById('a-text');
const b_text =document.getElementById('b-text');
const c_text =document.getElementById('c-text');
const d_text =document.getElementById('d-text');

const submitBtn = document.getElementById('submit');




let currentQuiz =0;
let score=0;
// let answer = undefined;
loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData =quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText =currentQuizData.b;
    c_text.innerText =currentQuizData.c;
    d_text.innerText =currentQuizData.d
    
}

function getSelected(){
    // const answerEls = document.querySelectorAll(".answer");
    let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer= answerEl.id
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        
            answerEl.checked=false;
        
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer=getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct)
        score ++;
        currentQuiz++;
        if(currentQuiz < quizData.length){
        loadQuiz();
    } else {
        quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} question</h2> <button onclick="location.reload()">
        Reload</button>`
    }
}

    

    
});