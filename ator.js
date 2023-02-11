//codigos do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor >= 370) {
        yAtor = 370;
    } else {
      yAtor += 3;
    }
    
  }
}
function verificaColisao(){
   for (let i = 0; i < imagemCarrosVindo.length; i++){
    colisao = collideRectCircle(xCarrosVindo[i], yCarrosVindo[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
    if(pontosMaiorQueZero()){
      meusPontos -= 1;
     }
    }
  }
  for (let i = 0; i < imagemCarrosIndo.length; i++){
    colisao = collideRectCircle(xCarrosIndo[i], yCarrosIndo[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
    if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 370;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
    return meusPontos > 0;
}  