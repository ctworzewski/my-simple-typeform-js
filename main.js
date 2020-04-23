const typeformList = [

    'Czy jesteś dorosły?', 'Czy mnie lubisz', 'Czy skończyłeś się uczyć'
];

let $question = document.querySelector('.question');

console.log(typeformList)

let $btnNext = document.querySelector('.btnNext');

let numberQuestion = 0;

function changeQuestions() {

    $question.textContent = typeformList[numberQuestion++];

}

$btnNext.addEventListener('click', changeQuestions);