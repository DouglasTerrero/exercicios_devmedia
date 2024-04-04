import leitor from 'readline-sync';
import nomesNaruto from "./dados.js";
import {validaLetra, exibeMensagem, verificaLetra, verificaStatus} from "./funcoes.js";

function iniciaJogo(){

  // Escolhe aleatoriamente uma palavra da lista
  const palavraEscolhida = nomesNaruto[Math.floor(Math.random(0,1) * nomesNaruto.length)];

  // Oculta a palavra escolhida com 'underlines' deixando visivel somente a letra inicial
  let primeiraLetra = palavraEscolhida[0];
  let underline = "_".repeat(palavraEscolhida.length-1);
  let palavraOculta = primeiraLetra + underline;

  //Quantidade de tentativas
  let tentativas = 4;
  let statusJogo = "iniciado";
 
  console.log(`--------------------JOGO DA FORCA--------------------`);
  console.log(`Nome do personagem com ${palavraEscolhida.length} letras:`);

  while (statusJogo === "iniciado"){

    console.log(`Personagem: ${palavraOculta}`);

    // Recebe a letra digitada pelo usuário aceitando tanto maiuscula quanto minuscula
    const letraDigitada = leitor.question("Digite uma letra: ").toLowerCase();
    console.log(letraDigitada);

    if(validaLetra(letraDigitada)){
      if(verificaLetra(letraDigitada, palavraOculta, palavraEscolhida, tentativas)){
        atualizaPalavra(letraDigitada, palavraOculta, palavraEscolhida);
        verificaStatus(palavraOcultaArray,palavraEscolhida);
      }
      else{
        if(tentativas > 0){
          console.log(`Voce tem mais ${tentativas} tentativas!!`);
        }
        else{
          statusJogo = "perdeu";
      }
      }
    }
    else{
      console.log("\nPor favor, digite uma letra válida.");
    }
    
  }
  exibeMensagem(statusJogo);
}

iniciaJogo();