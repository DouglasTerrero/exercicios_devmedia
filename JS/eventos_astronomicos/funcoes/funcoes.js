import chuva_meteoros from "../data/chuva_meteoros.js";

const dataAtual = new Date();

function verificaChuvaHoje(data,chuva){

let ano = dataAtual.getFullYear();
let dataInicio;
let dataFim;
let verifica = false

for (let chuva of chuva_meteoros){

  dataInicio = new Date(ano + '-' + chuva["inicio"]);
  dataFim = new Date(ano + '-' + chuva["fim"]);
  if (dataInicio.getMonth() > dataFim.getMonth())
    dataFim = new Date((ano+1) + '-' + chuva["fim"]);
  console.log(dataInicio);
  console.log(dataFim);

  if (data >= dataInicio && data <= dataFim)
    verifica = true;
}

return verifica;

}
console.log(verificaChuvaHoje(dataAtual,chuva_meteoros));

