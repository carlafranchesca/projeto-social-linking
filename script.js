function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    img.setAttribute("src", "./img/avatar.png")
  }

  const alt = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute("alt", "Homem sorrindo usando oculos de sol com uma blusa preta em um fundo azul.")
  } else {
    img.setAttribute("alt", "Homem sorrindo usando óculos de grau com uma blusa preta em um fundo amarelo.")
  }
}