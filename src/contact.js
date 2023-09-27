function createContactPage() {
    const element = document.createElement('div')
    element.classList.add('contactPage')

    const contact = document.createElement('div')
    contact.classList.add('contact')

    const reserve = document.createElement('div')
    reserve.classList.add('reserve')

    const contactHeading = document.createElement('p')
    contactHeading.classList.add('contactHeading')
    contactHeading.textContent = 'Contact Us'
    contact.appendChild(contactHeading)

    const contactPhone = document.createElement('p')
    contactPhone.classList.add('contactInfo')
    contactPhone.textContent = '(123)-456-7890'
    contact.appendChild(contactPhone)

    const contactEmail = document.createElement('p')
    contactEmail.classList.add('contactInfo')
    contactEmail.textContent = 'elevenses@restaurant.com'
    contact.appendChild(contactEmail)

    const contactAddress = document.createElement('p')
    contactAddress.classList.add('contactInfo')
    contactAddress.textContent = '3791 Bag End, Arnor'
    contact.appendChild(contactAddress)

    const contactButton = document.createElement('button')
    contactButton.classList.add('contactButton')
    contactButton.textContent = 'Contact Form'
    contact.appendChild(contactButton)

    const reserveHeading = document.createElement('p')
    reserveHeading.classList.add('contactHeading')
    reserveHeading.textContent = 'Reservations'
    reserve.appendChild(reserveHeading)

    const reserveButton = document.createElement('button')
    reserveButton.classList.add('contactButton')
    reserveButton.textContent = 'Book A Table'
    reserve.appendChild(reserveButton)

    element.appendChild(contact)
    element.appendChild(reserve)

    return element
}

export {
    createContactPage
}

