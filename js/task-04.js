let counterValue = 0

const incrBtnEl = document.querySelector('[data-action="increment"]')
const decrBtnEl = document.querySelector('[data-action="decrement"]')

const spanEl = document.querySelector('#value')

const increment = () => (spanEl.textContent = counterValue += 1)
const decrement = () => (spanEl.textContent = counterValue -= 1)

incrBtnEl.addEventListener('click', increment)
decrBtnEl.addEventListener('click', decrement)
