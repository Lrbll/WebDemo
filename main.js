document.getElementById("time").innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = "pink"
}

function showHTML() {
  document.getElementById("fig").src = "img/html.png"
}

function hide() {
  document.getElementById("fig").src = ""
  document.getElementById("desc").innerHTML = ""
}
