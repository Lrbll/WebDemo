document.getElementById("time").innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = "pink"
}

function lemon() {
  document.body.style.backgroundColor = "lemonchiffon"
}

function purple() {
  document.body.style.backgroundColor = "lavender"
}

function reset() {
  document.body.style.backgroundColor = "rgb(195, 230, 210)"
}

function showHTML() {
  document.getElementById("fig").src = "img/html.png"
}

function showCSS() {
  document.getElementById("fig").src = "img/css.png"
}

function showJS() {
  document.getElementById("fig").src = "img/JS.png"
}

function hide() {
  document.getElementById("fig").src = ""
  document.getElementById("desc").innerHTML = ""
}
