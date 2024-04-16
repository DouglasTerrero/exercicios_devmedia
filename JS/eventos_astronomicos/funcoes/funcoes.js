import chuva_meteoros from "../data/chuva_meteoros.js";

function verificaChuvaHoje(data,chuva){

const anoAtual = data.getFullYear();

const dataInicio = new Date(chuva["inicio"] + '-' + anoAtual);
const dataFim = new Date(chuva["fim"] + '-' + anoAtual);

if (dataInicio.getMonth() > dataFim.getMonth()){
  const anoFim = dataFim.getFullYear();
  dataFim.setFullYear(anoFim + 1);
}

return (data >= dataInicio && data <= dataFim);
}

function verificaChuvaFuturo(data,chuva){

  const anoAtual = data.getFullYear();
  const dataInicio = new Date(chuva["inicio"] + '-' + anoAtual);
  const dataFim = new Date(data);

  if (data.getMonth() > dataInicio.getMonth() ){
      const anoFim = dataInicio.getFullYear();
      dataInicio.setFullYear(anoFim + 1);  
    }

  dataFim.setMonth(dataFim.getMonth() + 2);
  
  return (data < dataInicio && dataInicio < dataFim);
  }
  
const formataIntensidade = (intensidade) => {
  let intensidadeFormatada = "(1) Fraca";

  if (intensidade.indexOf("Média") >= 0 ){
    intensidadeFormatada = "(2) Média";
  }
  else if (intensidade.indexOf("Forte") >= 0){
    intensidadeFormatada = "(3) Forte";
  }
  else if (intensidade.indexOf("Irregular") >= 0){
    intensidadeFormatada = "Irregular";
  }
  
  return intensidadeFormatada;
  }

const formataHemisferio = (declinacao) => {
  let hemisferio = (declinacao >= 0) ? "Norte" : "Sul";
  return hemisferio;
}

const inverteData = (data) => {
  let dataInvertida = data.split("/");

  return dataInvertida[1] + "/" + dataInvertida[0];
}

export {verificaChuvaHoje, verificaChuvaFuturo, formataIntensidade, formataHemisferio, inverteData };