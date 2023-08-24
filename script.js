const ulname = document.querySelector('.ulname');
const uljob = document.querySelector('.uljob');
const ulprice = document.querySelector('.ulprice');

const names = [
    'Dr. Pepper',
    'Prof. Plum',
    'Dr. Professor',
    'Prof. Doctor',
    'Dr. Monday',
    'Prof. Tuesday'
];

const jobs = [
    'Programmer',
    'Tutor',
    'Artist',
    'Photographer',
    'Architect',
    'Gardener',
]
const prices = [
    '$35',
    '$45',
    '$30',
    '$50',
    '35',
    '$40',
]

function render1(){
    const html = names.map((name) => {
        return `<li>${name}</li>`;
    })
    ulname.innerHTML = html.join('');
}
render1();

function render2(){
    const html = jobs.map((job) => {
        return `<li>${job}</li>`;
    })
    uljob.innerHTML = html.join('');
}
render2();

function render3(){
    const html = prices.map((price) => {
        return `<li>${price}</li>`;
    })
    ulprice.innerHTML = html.join('');
}
render3();


