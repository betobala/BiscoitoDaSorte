const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const imgClick = document.querySelector("#imgClick")
let randomNumber = Math.round(Math.random() * 10)
let frases = [
"A vida trará coisas boas se tiver paciência.",
"A vida trará coisas boas se tiver paciência.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"Não há que ser forte. Há que ser flexível.",
"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
"A juventude não é uma época da vida, é um estado de espírito.",
"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
"Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida",
]
screen2.querySelector("p").innerText = frases[randomNumber]

imgClick.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', reset)
document.addEventListener('keypress', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")) {
    reset()
  }
  else if(e.key == 'Enter' && screen2.classList.contains("hide")) {
    toggleScreen()
  }
})

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function changePhrase() {
  randomNumber = Math.round(Math.random() * 10)
  screen2.querySelector("p").innerText = frases[randomNumber]
  console.log(randomNumber)
}

function reset() {
  toggleScreen()
  changePhrase()
}