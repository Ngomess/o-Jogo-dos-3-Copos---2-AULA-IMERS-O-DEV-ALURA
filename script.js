function jogar() {
  let idade = prompt("Quantos anos você tem?");

  if (idade < 18) {
    alert("Infelizmente, você não pode jogar");
  } 
  if(idade >= 18) {
    alert("Bem vindo ao jogo")
    let escolhaJogador = prompt("Escolha um copo (1, 2 ou 3):");

    let posicaoBolinha = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == posicaoBolinha) {
      alert("Parabéns! Você encontrou a bolinha!");
    } else {
      alert("Que pena! A bolinha estava no copo " + posicaoBolinha);
    }
  }
}

jogar();