
     var interval
     var char = window.document.querySelector('.char')
     var pipe = window.document.querySelector('.pipe1')
     var historico1= document.querySelector(".pontuacao1")
     var historico2= document.querySelector(".pontuacao2")
     var historico3 = document.querySelector(".pontuacao3")
    


   

function clicar(){
     var char = window.document.querySelector('.char')
     var pipe = window.document.querySelector('.pipe1')
         
         
     char.style.animation = ""; setTimeout(() => char.style.animation = "fly .8s", 100);}
     const  loop = setInterval(()=>{
     
     pipe = window.document.querySelector('.pipe1')
     char = window.document.querySelector('.char')
   
     const pipePosition = pipe.offsetLeft
     
     const charPosition = +window.getComputedStyle(char).bottom.replace('px', '')

     if (charPosition < 35 && pipePosition >= 290 && pipePosition <= 380){

          var rai = window.document.querySelector('#rai')
          var GameOver = window.document.querySelector('.GameOver')
          pipe.style.position = "absolute"
          char.style.bottom = `${charPosition}px`
          pipe.style.left =`${pipePosition}px`
          pipe.style.animation = 'none'
          rai.style.animation = 'rai-kua 4s linear'
          rai.style.display = 'block'
          GameOver.style.animation = 'Game-Over 4s linear'
          GameOver.style.display = 'block'
          

          clearInterval(interval)
          var h2 = parseFloat(value.toFixed(1))
          historico1.innerHTML = h2
     
     }
     
     if (span.innerText >= 30.0) {
          document.body.style.backgroundColor = '#2c2c2c'
          let game_board = document.querySelector('.game-board')
          let main = document.querySelector('main')

          main.style.backgroundColor = '#2c2c2c'
          game_board.style.backgroundImage ='linear-gradient(to top, #40ff63, white 20%, #2c2c2c)'
     }  

},10)

document.addEventListener("keydown", function(event) {
    
     if (event.keyCode == 38) {
       clicar();
     }
});
  

//botao iniciar
var span = document.querySelector(".pontuacao")
function voltar(){
     const blas = window.document.querySelector('.pipe1')
     const rais = window.document.querySelector("#rai")
     const GO = window.document.querySelector('.GameOver')
     blas.style.animation = 'pipe-animation 1.7s infinite linear'
     rais.style.animation = 'none'
     rais.style.display = 'none'
     GO.style.animation = 'none'
     GO.style.display = 'none'
     char.style.position = "absolute"
     char.style.bottom = "0%"
     let btnstart = document.querySelector("#btnstart")
     btnstart = true
     value = parseFloat(span.innerText) 
     interval = setInterval(() => {
          value += 0.1
          
          span.innerText = value.toFixed(1)
         
     }, 100)

     
}   


//zerar o cronometro
function zerar() {
     clearInterval(interval)
     span.innerText = "0.0"
} 
//trocar  skin 1
function trocar1(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "imagem/eevee.gif"
     char.style.position = "absolute"
     char.style.bottom = "0%"
     char.style.width = "25%"
     char.style.right = "4%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}
//trocar  skin 2
function trocar2(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "imagem/pikachu.gif"
     char.style.position = "absolute"
     char.style.bottom = "-5%"
     char.style.width = "25%"
     char.style.right = "4%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}
//trocar  skin 3
function trocar3(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "imagem/char.gif"
     char.style.position = "absolute"
     char.style.bottom = "0px"
     char.style.right = "0"
     char.style.width = "30%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}
//trocar  skin 4
function trocar4(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "imagem/raro.gif"
     char.style.position = "absolute"
     char.style.bottom = "0%%"
     char.style.right = "6%"
     char.style.width = "30%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}
    
//trocar  skin 5
function trocar5(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "imagem/mew2.gif"
     char.style.position = "absolute"
     char.style.bottom = "3%"
     char.style.right = "10%"
     char.style.width = "20%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}
//botao Skin
function Skin(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "block"
}
//botao obs
function OBS(){
     var bonecos2 =document.querySelector(".bonecos2")
     bonecos2.style.display = "block"
}
//trocar obstaculo 1
function trocab2(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "imagem/raro2.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "0%"
     bonecos2.style.display ="none"
     pipe.style.width = "20%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}


//trocar obstaculo 2
function trocab3(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "imagem/blas.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "0%"
     bonecos2.style.display ="none"
     pipe.style.width = "15%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}


//trocar obstaculo 3
function trocab4(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "imagem/gordo.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "-2%"
     bonecos2.style.display ="none"
     pipe.style.width = "15%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
}


//trocar obstaculo 4
function trocab5(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "imagem/mewtwo.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "-2%"
     bonecos2.style.display ="none"
     pipe.style.width = "20%"

     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

     Toast.fire({
     icon: 'success',
     title: 'Skin modificada com sucesso'
})
     
}


//botao enviar Nome
function Enviarnome(){
     let EscreverNome = document.querySelector("#EscreverNome")
     let nome = EscreverNome.value
     historico2.innerText = `${nome}`
     EscreverNome.value = "Digite seu Nome"
     Swal.fire( 'sucesso!', `Seja bem-vindo ${nome}!`, 'success' )

  if (nome == "Digite seu Nome") {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Digite um nome por favor!' })
          historico2.innerText = ""
  }
     
}
function nada(){
     EscreverNome.value = ""
}
function foco(){
  if (EscreverNome.value == "") {
      EscreverNome.value = "Digite seu Nome"
     }
     
}

let slide = document.querySelector('.slide');
const next = document.querySelector('.next')
let passarFoto = []

next.addEventListener('click', ()=>{
     passarFoto.unshift(1)
     console.log(passarFoto.length)
     if (passarFoto.length == 1) {
          slide.src = 'imagem/sobreIniciar2.png'
          slide.style.width = '100%'
          document.querySelector('#textoExplicacao').innerHTML = 'usado parar trocar o obstaculo'
       
     }
     if (passarFoto.length == 2) {
          passarFoto.pop()
          console.log(passarFoto)
     }
    
     
    
     
})
 
let prev = document.querySelector(".prev")

prev.addEventListener('click', ()=>{
     passarFoto.pop()
     
     if (passarFoto.length == 0) {
          slide.src = 'imagem/images.png'
          slide.style.width = '70%'
          document.querySelector('#textoExplicacao').innerHTML = 'usado parar trocar o obstaculo'
        
     }
     if (passarFoto.length == 3) {
          console.log('ainn ze da manga')
     }
})