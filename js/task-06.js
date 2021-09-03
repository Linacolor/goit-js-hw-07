const inputEl = document.querySelector('#validation-input')

// console.log(inputEl)

inputEl.addEventListener('blur', (event) => {
  if (event.target.value.length == inputEl.dataset.length) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  } else {
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')
  }
  //   console.log(event.target.value.length)
  //   console.log(inputEl.dataset.length)
})
