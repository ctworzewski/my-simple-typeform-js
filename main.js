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


const tab = ['element 1', 'element 2', 'element 3'];

// funkcja sprawdza czy istnieje dany element w tablicy
// jeśli istnieje to go pokazuje
function showQuestion(indexArray) {
    let $question = document.querySelector('.question');
    if (indexArray <= tab.length - 1 && indexArray >= 0) {
        $question.textContent = tab[indexArray];
    } else {
        console.log('Nie ma takiego indeksu tablicy');
    }
}

showQuestion(2);