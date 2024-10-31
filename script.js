function toggleMode() {
  const html = document.documentElement

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.toggle("light")) {
    //se tiver lightmode, adicionar a img light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Marcus Fabio sorrindo, usando um chapéu da Disney')
  } else {
    //se tiver sem lightmode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Marcus Fabio sorrindo, usando óculos e camisa preta com estampa branca, barba e fundo noturno com holofotes"
    )
  }
}



//ESSE BLOCO QUE FAZ A MESMA COISA QUE O TOGGLE ACIMA
// if (html.classList.contains("light")) {
//   html.classList.remove("light")
// } else {
//   html.classList.add("light")
// }
