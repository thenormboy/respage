import createHeader from './homepage.js';

function loadPage() {
    const element = document.querySelector('#content')
    element.appendChild(createHeader())
}

loadPage();

