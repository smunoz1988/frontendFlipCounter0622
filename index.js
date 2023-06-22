const startTime = new Date()
startTime.setHours(0, 0, 0, 0)
let previousTimeBetweenDates

setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((currentDate - startTime) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
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

  topHalf.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", () => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", () => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
