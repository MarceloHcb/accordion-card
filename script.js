let h1 = document.getElementById("h1")
let pergunta = document.getElementById("pergunta")
let pergunta1 = document.getElementById("pergunta1")
let pergunta2 = document.getElementById("pergunta2")
let pergunta3 = document.getElementById("pergunta3")
let perg = document.getElementsByClassName("pergunta")
let label = document.getElementsByClassName("label");
for (let x = 0; x < label.length; x++) {
   label[0].addEventListener("click", mudar)
   label[1].addEventListener("click", mudar1)
   label[2].addEventListener("click", mudar2)
   label[3].addEventListener("click", mudar3)
   label[4].addEventListener("click", mudar4)
}
function mudar() {
   pergunta.classList.remove("pergunta")
   pergunta.classList.add("pergunta1")
   pergunta1.classList.add("pergunta")
   pergunta1.classList.remove("pergunta1")
   pergunta2.classList.add("pergunta")
   pergunta2.classList.remove("pergunta1")
   pergunta3.classList.add("pergunta")
   pergunta3.classList.remove("pergunta1")
   pergunta4.classList.add("pergunta")
   pergunta4.classList.remove("pergunta1")
}
function mudar1() {
   pergunta1.classList.remove("pergunta")
   pergunta1.classList.add("pergunta1")
   pergunta.classList.add("pergunta")
   pergunta.classList.remove("pergunta1")
   pergunta2.classList.add("pergunta")
   pergunta2.classList.remove("pergunta1")
   pergunta3.classList.add("pergunta")
   pergunta3.classList.remove("pergunta1")
   pergunta4.classList.add("pergunta")
   pergunta4.classList.remove("pergunta1")
}
function mudar2() {
   pergunta2.classList.remove("pergunta")
   pergunta2.classList.add("pergunta1")
   pergunta.classList.add("pergunta")
   pergunta.classList.remove("pergunta1")
   pergunta1.classList.add("pergunta")
   pergunta1.classList.remove("pergunta1")
   pergunta3.classList.add("pergunta")
   pergunta3.classList.remove("pergunta1")
   pergunta4.classList.add("pergunta")
   pergunta4.classList.remove("pergunta1")
}
function mudar3() {
   pergunta3.classList.remove("pergunta")
   pergunta3.classList.add("pergunta1")
   pergunta.classList.add("pergunta")
   pergunta.classList.remove("pergunta1")
   pergunta1.classList.add("pergunta")
   pergunta1.classList.remove("pergunta1")
   pergunta2.classList.add("pergunta")
   pergunta2.classList.remove("pergunta1")
   pergunta4.classList.add("pergunta")
   pergunta4.classList.remove("pergunta1")
}
function mudar4() {
   pergunta4.classList.remove("pergunta")
   pergunta4.classList.add("pergunta1")
   pergunta.classList.add("pergunta")
   pergunta.classList.remove("pergunta1")
   pergunta1.classList.add("pergunta")
   pergunta1.classList.remove("pergunta1")
   pergunta2.classList.add("pergunta")
   pergunta2.classList.remove("pergunta1")
   pergunta3.classList.add("pergunta")
   pergunta3.classList.remove("pergunta1")
}



