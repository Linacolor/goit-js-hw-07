const itemEl = document.querySelectorAll('.item')
const itemTotalQuantity = itemEl.length
console.log(`В списке ${itemTotalQuantity} категории.`)

for (const item of itemEl) {
  const itemText = item.querySelector('h2').textContent
  const liQuantity = item.querySelectorAll('li').length
  console.log(itemText, liQuantity)
}
