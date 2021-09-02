let counterValue = 0

const incrementEl = document.querySelector('[data-action="increment"]')
const decrementEl = document.querySelector('[data-action="decrement"]')

const spanEl = document.querySelector('#value')

const increment = () => (spanEl.textContent = counterValue += 1)
const decrement = () => (spanEl.textContent = counterValue -= 1)

incrementEl.addEventListener('click', increment)
decrementEl.addEventListener('click', decrement)
