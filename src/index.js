import {createHeader, createFooter} from './homepage.js';

function loadPage() {
    const element = document.querySelector('#content')
    element.appendChild(createHeader())
    element.appendChild(createFooter())
}

loadPage();

