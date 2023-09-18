export default function createHeader() {
    const element = document.createElement('div')
    element.classList.add('header')

    const homeButton = document.createElement('button')
    const menuButton = document.createElement('button')
    const contactButton = document.createElement('button')

    homeButton.textContent = 'HOME'
    menuButton.textContent = 'MENU'
    contactButton.textContent = 'CONTACT'

    element.appendChild(homeButton)
    element.appendChild(menuButton)
    element.appendChild(contactButton)

    return element
}


