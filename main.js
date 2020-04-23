const typeformList = [

    'Czy jesteś dorosły?', 'Czy mnie lubisz', 'Czy skończyłeś się uczyć'
];

let $question = document.querySelector('.question');

console.log(typeformList)

let $btnNext = document.querySelector('.btnNext');

let numberQuestion = 0;

function changeQuestions() {
    let $alert = document.querySelector('.alert');
    $question.textContent = typeformList[numberQuestion++];
    if (numberQuestion > typeformList.length) {
        console.log('Nie ma więcej pytań');
        $alert.textContent = 'Nie ma więcej pytań';
        $alert.style.color = 'red';

    } else {
        console.log('następne pytanie');
        $alert.textContent = 'następne pytanie';
        $alert.style.color = 'green';
    }
}

$btnNext.addEventListener('click', changeQuestions);