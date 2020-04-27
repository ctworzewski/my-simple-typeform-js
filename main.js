/* const listsQuestion = ['Czy mnie lubisz?', 'Czy lubisz się uczyć?', 'Czy kochasz JavaScript?', 'Czy lubisz swoją pracę?', 'Czy masz ochotę na obiad?'];

let $question = document.querySelector('.question');
let $btnNext = document.querySelector('.btnNext');
let $btnPrev = document.querySelector('.btnPrev');

 */


/* const tab1 = new Array();
tab1[0] = 'element 1';
tab1[1] = 'element 2';
tab1[2] = 'element 3';
tab1[3] = 'element 4';
tab1.push(60);
tab1[10] = 'ciasteczko'; */

/* function showQuestion() {
    let suma = 2 + 3;
    return suma;
}

function checkShow() {
    let returnShowQuestion = showQuestion();
    returnShowQuestion += 4
    console.log(returnShowQuestion);
} */


const tab = ['element 1', 'element 2', 'element 3', 'element 4', 'element 5', 'element 6'];

// funkcja sprawdza czy istnieje dany element w tablicy
// jeśli istnieje to go pokazuje
function showQuestion(indexArray) {
    console.log('pokauje element o indeksie: ', indexArray);
    let $question = document.querySelector('.question');
    if (indexArray <= tab.length - 1 && indexArray >= 0) {
        $question.textContent = tab[indexArray];
        lastShowIndex = indexArray; //zapamiętanie ostatniego wyświetlonego elementu tablicy
    } else {
        $question.textContent = '';
        console.log('Nie ma takiego indeksu tablicy');
    }
}


let $showIndexQuestion = document.querySelector('.showIndexQuestion');
let lastShowIndex = -1; //wyświetlenie istniejącego indeksu tablicy

// po podaniu w inpucie  indkesu tablicy i kliknięcu Pokaz, wyświetla daną wartość z tablicy na strone
$showIndexQuestion.addEventListener('click', function () {
    let $indexQuestion = document.querySelector('.IndexQuestion').value;
    showQuestion($indexQuestion);
})


let $btnNext = document.querySelector('.btnNext');
$btnNext.addEventListener('click', function () {

    showQuestion(lastShowIndex + 1);

})

let $btnPrev = document.querySelector('.btnPrev');

// przez kliknięcie pobieramy ostatni wyświetlany element i odejmujemy 1
$btnPrev.addEventListener('click', function () {
    console.log('ostatni element: ', lastShowIndex)
    showQuestion(lastShowIndex - 1);
})