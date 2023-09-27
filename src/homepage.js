function createHeader() {
    const element = document.createElement('div')
    element.classList.add('header')

    const homeButton = document.createElement('button')
    const menuButton = document.createElement('button')
    const contactButton = document.createElement('button')

    homeButton.classList.add('home_button')
    menuButton.classList.add('menu_button')
    contactButton.classList.add('contact_button')

    homeButton.setAttribute('id', 'home_button')
    menuButton.setAttribute('id', 'menu_button')
    contactButton.setAttribute('id', 'contact_button')


    homeButton.textContent = 'HOME'
    menuButton.textContent = 'MENU'
    contactButton.textContent = 'CONTACT'

    element.appendChild(homeButton)
    element.appendChild(menuButton)
    element.appendChild(contactButton)

    return element
}

function createFooter() {
    const element = document.createElement('div')
    element.classList.add('footer')

    const footerText = document.createElement('p')

    footerText.textContent = 'Footer'

    element.appendChild(footerText)

    return element
}

function createMain() {
    const element = document.createElement('div')
    element.classList.add('main')

    const mainContent = document.createElement('p')

    mainContent.textContent = 'Elevenses'

    element.appendChild(mainContent)

    return element
}

export {
    createHeader,
    createMain,
    createFooter
}
