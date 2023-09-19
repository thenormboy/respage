import {createHeader, createFooter} from './homepage.js';
import './style.css';
import Icon from './background.jpg'

function loadPage() {
    const element = document.querySelector('#content')

    element.appendChild(createHeader())
    element.appendChild(createFooter())
}

loadPage();

