const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

// console.log(inputEl)
// console.log(spanEl)

inputEl.addEventListener('input', (event) => {
  event.preventDefault()
  const value = event.target.value
  //   console.log(value)
  if (value !== '') {
    spanEl.textContent = value
  } else {
    spanEl.textContent = 'незнакомец'
  }
})
