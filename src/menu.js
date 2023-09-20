function createMenuItem(foodName, description, price) {
    const element = document.createElement('div')
    element.classList.add(menuItem)

    const name = document.createElement('p')
    name.classList.add('food_name')
    name.textContent = foodName

    const desc = document.createElement('p')
    desc.classList.add('food_desc')
    desc.textContent = description

    const cost = document.createElement('p')
    cost.classList.add('food_cost')
    cost.textContent = price

    element.appendChild(name)
    element.appendChild(desc)
    element.appendChild(cost)

    return element
}

export {
    createMenuItem
}