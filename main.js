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
  document.getElementById("desc").innerHTML =
    "<b>HTML</b>을 이용하여, 웹의 구조를 지정했어요"
}

function showCSS() {
  document.getElementById("fig").src = "img/css.png"
  document.getElementById("desc").innerHTML =
    "<b>CSS</b>를 이용하여, 스타일을 입혔어요"
}

function showJS() {
  document.getElementById("fig").src = "img/JS.png"
  document.getElementById("desc").innerHTML =
    "<b>Javascript</b>를 이용하여, 동적인 기능을 추가했어요"
}

function hide() {
  document.getElementById("fig").src = ""
  document.getElementById("desc").innerHTML = ""
}
