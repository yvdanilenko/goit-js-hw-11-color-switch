const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
}

let intervalId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const changeTheme = () => {
  console.log('change color')
  refs.startBtn.disabled = true
  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 800)
}

const stopChangeTheme = () => {
  refs.startBtn.disabled = false
  clearInterval(intervalId)
}

refs.startBtn.addEventListener('click', changeTheme)
refs.stopBtn.addEventListener('click', stopChangeTheme)
