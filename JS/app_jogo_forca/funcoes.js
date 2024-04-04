import leitor from 'readline-sync';

function validaLetra(letraDigitada){
  if(letraDigitada.length === 1 && letraDigitada.match([/a-z/])){
    return true;
  }
else 
    return false;
}

function exibeMensagem(statusJogo){
  if(statusJogo == "venceu"){
    return console.log(`Parabens, voce ganhou!!`);
  }
  else
    return console.log(`Que pena, nao foi dessa vez. Tente novamente!`);
}

function verificaLetra(letraDigitada, palavraOculta,palavraEscolhida, tentativas){
  var palavraOcultaArray = palavraOculta.split('');
  for (let i=0; i<palavraOcultaArray.length;i++){
    if (letraDigitada === palavraEscolhida[i]){
      return true;
    }
    else{
      tentativas--;
      return false;
    }
  }
}

function atualizaPalavra(letraDigitada, palavraOculta, palavraEscolhida){
  var palavraOcultaArray = palavraOculta.split('');
  for (let i=0; i<palavraOcultaArray.length;i++){
    if (letraDigitada === palavraEscolhida[i]){
      palavraOcultaArray[i] = letraDigitada;
      return palavraOcultaArray = palavraOcultaArray.join('');
    }
}
}

function verificaStatus(palavraOcultaArray,palavraEscolhida){
  if (palavraOcultaArray === palavraEscolhida){
    return statusJogo = "venceu";
  }
}

export {validaLetra, exibeMensagem, verificaLetra, verificaStatus} ;