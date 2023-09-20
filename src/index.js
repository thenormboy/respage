import {createHeader, createMain, createFooter} from './homepage.js';
import {createMenuItem} from './menu.js';
import './style.css';
import Icon from './background.jpg'

function loadPage() {
    const element = document.querySelector('#content')

    element.appendChild(createHeader())
    element.appendChild(createMain())
    element.appendChild(createFooter())
}

loadPage();

