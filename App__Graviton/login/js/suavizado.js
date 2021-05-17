/*-- ----- ----- Efecto Suavizado ----- ----- --*/
window.onload = () => {
  let linkss = document.querySelectorAll('.link')

  let primero = linkss[0]
  primero.addEventListener('click', () => {
    scrollSuave('#primero', 3500, 0)
  })

  let segundo = linkss[1]
  segundo.addEventListener('click', () => {
    scrollSuave('#segundo', 3500, 0)
  })

  let tercero = linkss[2]
  tercero.addEventListener('click', () => {
    scrollSuave('#tercero', 3500, 0)
  })

  let cuarto = linkss[3]
  cuarto.addEventListener('click', () => {
    scrollSuave('#cuarto', 3500, 0)
  })
}

const scrollSuave = (objetivo, duracion, compensacion) => {
  let elemObj = document.querySelector(objetivo)
  let elemPos = elemObj.getBoundingClientRect().top - compensacion
  let posInicial = window.pageYOffset
  let tiempoInicial = null

  const animacion = tiempoAhora => {
    if (tiempoInicial == null) tiempoInicial = tiempoAhora
    tiempoPasado = tiempoAhora - tiempoInicial
    let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
    window.scrollTo(0, auxAnimacion)
    if(tiempoPasado < duracion) requestAnimationFrame(animacion)
  }
  requestAnimationFrame(animacion)
}

const easeInOutQuad = (t, b, c, d) => {
  t /= d/2
  if(t < 1) return c / 2 * t * t + b
  t--
  return - c / 2 * (t * (t - 2) - 1) + b
}