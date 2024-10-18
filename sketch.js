let palavra;

function setup() {
  createCanvas(400, 400); //criar tela

  palavra = palavraAleatoria();// palavra aleatória
}

function palavraAleatoria() {
  let palavras = ["mariarr"]; //palavras escolhidas
  return random(palavras); //palavras aleatorias retornam
}

function inicializaCores() {
  background("purple"); //fundo ruxo
  fill("black"); //cor da palavra, preta
  textSize(64); //tamanho da palavra
  textAlign(CENTER, CENTER); // alinhar palavra no centro
}

function draw() {
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length //comprimento da palavra

  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);// tamanho do texto
}
