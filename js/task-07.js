const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
spanEl.style.fontSize = '50px'
inputEl.addEventListener('input', (event) => {
  //   console.log(event)
  spanEl.style.fontSize = event.currentTarget.value + 'px'
})
