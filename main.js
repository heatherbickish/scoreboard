

let home = 0
let away = 0

// SECTION HOME

function addHome() {
  home++
  console.log(home)
  homeInput()
}

function homeInput() {
  let homeElm = document.getElementById('home-score')
  homeElm.innerText = home
}

function homeAdd3() {
  home += 3
  homeInput()
}

function homeMinus() {
  home--
  if (home < 0) {
    home = 0
  }
  homeInput()
}

//SECTION AWAY

function addAway() {
  away++
  awayInput()
}

function awayInput() {
  let awayElm = document.getElementById('away-score')
  awayElm.innerText = away
}

function awayAdd3() {
  away += 3
  awayInput()
}

function awayMinus() {
  away--
  if (away < 0) {
    away = 0
  }
  awayInput()
}