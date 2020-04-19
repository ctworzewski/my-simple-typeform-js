const typeformList = [

    {
        question: 'Lubisz jeść?',
        choice: 'Tak Nie',
    },
    {
        question: 'Ile lat ma Ziemia',
        choice: 'Tak Nie',
    },
    {
        question: 'Ile lat ma Ziemia',
        choice: 'Tak Nie',
    },
    {
        question: 'Czy mne lubisz',
        choice: 'Tak Nie',
    }
];

let $text = null;
let $choice = null;

function displayTypeform(typeformIndex) {
    let typeform = typeformList[typeformIndex];
    // $text.setAttribute('src', typeform.text);
    $text.textContent = typeform.question;
    $choice.textContent = typeform.choice;
}

function changeTypeform(index) {
    let typeform = typeformList[index];
    displayTypeform(index);

    setInterval(() => {
        index++;

        if (index === typeformList.length) {
            index = 0;
        }
        displayTypeform(index);
    }, 2000)
}

function setup() {
    $text = document.querySelector('.typeform__text')
    $choice = document.querySelector('.typeform__checkbox');
    console.log('działa');

    changeTypeform(0);
}

window.addEventListener('click', setup);