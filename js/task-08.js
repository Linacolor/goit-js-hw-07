const inputEl = document.querySelector('input')
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const boxesEl = document.querySelector('#boxes')

function createBoxes(amount) {
  const arrayOfDiv = []
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement('div')
    arrayOfDiv.push(divElement)
  }
  boxesEl.append(...arrayOfDiv)
}
function destroyBoxes() {
  boxesEl.innerHTML = ''
}

renderBtn.addEventListener('click', () => {
  createBoxes(inputEl.value)
})
destroyBtn.addEventListener('click', () => {
  destroyBoxes()
})
