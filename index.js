const countToDate = new Date().setHours(new Date().getHours() + 24)
console.log('count', countToDate);
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  console.log('current', currentDate);
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  console.log('time', timeBetweenDates);
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
  console.log('previous', previousTimeBetweenDates);
}, 250)

function flipAllCards(time) {
  const seconds = time % 60

  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}