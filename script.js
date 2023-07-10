
//------------------------------------------------------//
//--------------- variaveis escopo global --------------//
//------------------------------------------------------//
var historico1 = document.querySelector(".pontuacao1");
let nome = document.querySelector("#nome");
var historico3 = document.querySelector(".pontuacao3");

let char = window.document.querySelector(".char");
let pipe = window.document.querySelector(".pipe1");
let bonecos = document.querySelector(".bonecos");
let bonecos2 = document.querySelector(".bonecos2");
let interval;


//---------------Funçao pular----------------//


function PularFuncao() {
  char.style.animation = "";
  setTimeout(() => (char.style.animation = "fly .8s"), 100);
}


let Pular = document.querySelector("#Pular");
Pular.addEventListener("click", PularFuncao);


//evento para o efeito de pulo
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 38) {
    PularFuncao();
  }
});


//---------------comandos de parede inisivel--------------//



const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const charPosition = +window.getComputedStyle(char).bottom.replace("px", "");

  function loser() {
    let rai = window.document.querySelector("#rai");
    let GameOver = window.document.querySelector(".GameOver");
    char.style.bottom = `${charPosition}px`;
    pipe.style.left = `${pipePosition}px`;
    pipe.style.animation = "none";
    pipe.style.position = "absolute";
    rai.style.animation = "rai-kua 4s linear";
    rai.style.display = "block";
    GameOver.style.animation = "Game-Over 4s linear";
    GameOver.style.display = "block";

    clearInterval(interval);
    let h2 = parseFloat(value.toFixed(1));
    historico1.innerHTML = h2;
  }


  // Função para verificar colisão e parar o pipe
  function verificarColisao() {
    if (window.innerWidth <= 430) {
      if (charPosition < 35 && pipePosition >= 215 && pipePosition <= 305) {
        loser()
      }
    } else {
      if (charPosition < 25 && pipePosition >= 290 && pipePosition <= 380) {
        loser()
      }
 
      
    }
  }

  window.addEventListener('resize', verificarColisao);
  verificarColisao();

 
}, 10);

//----------------------- modo dark ---------------------//


let hora = new Date().getHours();

if (hora >= 18 || hora >= 0 && hora <= 4 ) {
  let game_board = document.querySelector(".game-board");
  let main = document.querySelector("main");

  document.body.style.backgroundColor = "#2c2c2c";
  main.style.backgroundColor = "#2c2c2c";
  game_board.style.backgroundImage =
    "linear-gradient(to top, #40ff63, white 20%, #2c2c2c)";
}


//------------------sistema iniciar--------------------//


let span = document.querySelector(".pontuacao");

function iniciar() {
  let rai = window.document.querySelector("#rai");
  const GO = window.document.querySelector(".GameOver");
  pipe.style.animation = "pipe-animation 1.7s infinite linear";
  rai.style.animation = "none";
  rai.style.display = "none";
  GO.style.animation = "none";
  GO.style.display = "none";
  char.style.position = "absolute";
  char.style.bottom = "0%";

}


//--------------sistema pontuaçao-------------------//


function Pontuacao() {
  btnstart = true;
  value = parseFloat(span.innerText);
  interval = setInterval(() => {
    value += 0.1;

    span.innerText = value.toFixed(1);
  }, 100);
}

//---------------zerar pontuaçao-------------------//
function zerar() {
  clearInterval(interval);
  span.innerText = "0.0";
}

//chama a funçao, iniciar, zerar
let btnstart = document.querySelector("#btnstart");
btnstart.addEventListener("click", zerar);
btnstart.addEventListener("click", iniciar);
btnstart.addEventListener("click", Pontuacao);


//--------------modificar skin, obs--------------------//


//botao skin
let Skin = document.querySelector("#Skin");
Skin.addEventListener("click", () => {

  bonecos.style.display = "block";

});

//botao obs
let OBS = document.querySelector("#OBS");
OBS.addEventListener("click", () => {

  bonecos2.style.display = "block";

});


//----------------funçoes Aviso skin------------------/


function AvisoSkin() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Skin modificada com sucesso",
  });
}


//--------------------- trocar  skin 1------------------//

let trocar1 = document.querySelector('#trocar1')

trocar1.addEventListener('click', () => {

  bonecos.style.display = "none";
  char.src = "imagem/eevee.gif";
  char.classList.add("charClass");

  AvisoSkin()

})


//-------------------trocar skin 2--------------------//


let trocar2 = document.querySelector('#trocar2');

trocar2.addEventListener('click', () => {

  bonecos.style.display = "none";
  char.src = "imagem/pikachu.gif";
  char.style.position = "absolute";
  char.style.bottom = "-5%";
  char.style.width = "25%";
  char.style.right = "4%";

  AvisoSkin()

})


//------------------trocar  skin 3-----------------------//


let trocar3 = document.querySelector('#trocar3');

trocar3.addEventListener('click', () => {

  bonecos.style.display = "none";
  char.src = "imagem/char.gif";
  char.style.position = "absolute";
  char.style.bottom = "0px";
  char.style.right = "0";
  char.style.width = "30%";

  AvisoSkin()

})


//------------------- troca skin 4 -----------------//


let trocar4 = document.querySelector('#trocar4');

trocar4.addEventListener('click', () => {

  bonecos.style.display = "none";
  char.src = "imagem/raro.gif";
  char.style.position = "absolute";
  char.style.bottom = "0%%";
  char.style.right = "6%";
  char.style.width = "30%";

  AvisoSkin()

})


//--------------------trocar  skin 5------------------//


let mew2 = document.querySelector('#mew2');

mew2.addEventListener('click', () => {

  bonecos.style.display = "none";
  char.src = "imagem/mew2.gif";
  char.style.position = "absolute";
  char.style.bottom = "3%";
  char.style.right = "10%";
  char.style.width = "20%";

  AvisoSkin()

})


//----------------trocar obstaculo 1---------------------//


let trocab2 = document.querySelector("#trocab2");

trocab2.addEventListener('click', () => {

  pipe.src = "imagem/raro2.gif";
  pipe.style.position = "absolute";
  pipe.style.bottom = "0%";
  bonecos2.style.display = "none";
  pipe.style.width = "20%";

  AvisoSkin()

});


//---------------------trocar obstaculo 2---------------------//


let trocab3 = document.querySelector('#trocab3')

trocab3.addEventListener('click', () => {

  pipe.src = "imagem/blas.gif";
  pipe.style.position = "absolute";
  pipe.style.bottom = "0%";
  bonecos2.style.display = "none";
  pipe.style.width = "15%";

  AvisoSkin()

})


//---------------------trocar obstaculo 3--------------------//


let trocab4 = document.querySelector("#trocab4")
trocab4.addEventListener('click', () => {

  pipe.src = "imagem/gordo.gif";
  pipe.style.position = "absolute";
  pipe.style.bottom = "-2%";
  bonecos2.style.display = "none";
  pipe.style.width = "15%";

  AvisoSkin()

})

//trocar obstaculo 4
let trocab5 = document.querySelector("#trocab5");
trocab5.addEventListener('click', () => {

  pipe.src = "imagem/mewtwo.gif";
  pipe.style.position = "absolute";
  pipe.style.bottom = "-2%";
  bonecos2.style.display = "none";
  pipe.style.width = "20%";

  AvisoSkin()

})


//----------------------botao enviar Nome----------------------//


let EnviarNome = document.querySelector('#EnviarNome');

EnviarNome.addEventListener('click', () => {

  let EscreverNome = document.querySelector("#EscreverNome");
  let nome1 = EscreverNome.value;
  nome.innerText = `${nome1}`;
  EscreverNome.value = "Digite seu Nome";
  Swal.fire("sucesso!", `Seja bem-vindo ${nome1}!`, "success");


  if (nome1 == "Digite seu Nome") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Digite um nome por favor!",
    });

    nome.innerText = "";
  }
});


//-------------------botao escrever nome -----------------//


let EscreverNome = document.querySelector("#EscreverNome")

EscreverNome.addEventListener('focus', () => {

  EscreverNome.value = "";
  if (EscreverNome.value = "") {
    EscreverNome.value = "Digite seu Nome";
  }

})