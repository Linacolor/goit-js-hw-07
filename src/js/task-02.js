const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
const arrayOfLi = []
for (let ingridient of ingredients) {
  const newLi = document.createElement('li')
  newLi.textContent = `${ingridient}`
  arrayOfLi.push(newLi)
}

const navEl = document.querySelector('ul')
navEl.append(...arrayOfLi)
console.log(navEl)
