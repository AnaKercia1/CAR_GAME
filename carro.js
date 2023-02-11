//codigo dos carros vindo
let yCarrosVindo = [96, 150, 40]
let xCarrosVindo = [600, 600, 600]
let velocidadeCarrosVindo = [3, 4, 5]

//codigos carros indo
let yCarrosIndo = [320, 265, 210]
let xCarrosIndo = [0, 0, 0]
let velocidadeCarrosIndo = [4, 5, 3]

let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarrosVindo.length; i++){
  image(imagemCarrosVindo[i], xCarrosVindo[i], yCarrosVindo[i], comprimentoCarro, alturaCarro);
  }
  for(let i = 0; i < imagemCarrosIndo.length; i++){
  image(imagemCarrosIndo[i], xCarrosIndo[i], yCarrosIndo[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarrosVindo.length; i++){
      xCarrosVindo[i] -= velocidadeCarrosVindo[i];
  }
  for(let i = 0; i < imagemCarrosIndo.length; i++){
      xCarrosIndo[i] += velocidadeCarrosIndo[i];
  }
}
function voltaPosicaoInicialDoCarro(){
   for(let i = 0; i < imagemCarrosVindo.length; i++){
        if(passouTodaATelaVindo(xCarrosVindo[i])){
                xCarrosVindo[i] = 600;
        }
    }
   for(let i = 0; i < imagemCarrosIndo.length; i++){
        if(passouTodaATelaIndo(xCarrosIndo[i])){
                xCarrosIndo[i] = 0;
        }
    }
}

function passouTodaATelaVindo(xCarrosVindo){
    return xCarrosVindo < - 50;
}
function passouTodaATelaIndo(xCarrosIndo){
    return xCarrosIndo > 650;
}