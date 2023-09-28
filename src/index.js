import {createHeader, createMain, createFooter} from './homepage.js';
import {createMenuItem} from './menu.js';
import {createContactPage} from './contact.js'
import './style.css';
import Icon from './background.jpg'


function clearPage() {
    const element = document.querySelector('#content')

    element.textContent = ''
}

function loadHomePage() {
    const element = document.querySelector('#content')

    element.appendChild(createHeader())
    loadButtons()
    element.appendChild(createMain())
    element.appendChild(createFooter())
}

function loadMenuPage() {
    const element = document.querySelector('#content')

    element.appendChild(createHeader())
    loadButtons();
    element.appendChild(createMenuItem('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', '$2.50'))
    element.appendChild(createMenuItem('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', '$2.50'))
    element.appendChild(createMenuItem('Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', '$2.50'))
    element.appendChild(createFooter())
}

function loadContactPage() {
    const element = document.querySelector('#content')

    element.appendChild(createHeader())
    loadButtons();
    element.appendChild(createContactPage())
    element.appendChild(createFooter())
}

function loadButtons() {

    const home_button = document.querySelector('#home_button')

    home_button.addEventListener('click', () => {
        clearPage();
        loadHomePage();
    })

    const menu_button = document.querySelector('#menu_button')

    menu_button.addEventListener('click', () => {
        clearPage();
        loadMenuPage();
    })

    const contact_button = document.querySelector('#contact_button')

    contact_button.addEventListener('click', () => {
        clearPage();
        loadContactPage();
    })
}



loadHomePage();
