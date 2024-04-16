import chuva_meteoros from "../data/chuva_meteoros.js";

const dataAtual = new Date();

const verificaChuvaHoje = (chuva, dataAtual) => {
const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if ( dataInicio.getMonth() + 1 > dataFim.getMonth() + 1 ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

    return ( dataAtual >= dataInicio && dataAtual <= dataFim );
}

for (let chuva of chuva_meteoros){
  console.log("inicio  " + chuva.inicio);
  console.log("fim  " + chuva.fim);
}

const listaChuvaHoje = chuva_meteoros.filter(verificaChuvaHoje);

console.log(verificaChuvaHoje(dataAtual,chuva_meteoros));
console.log(listaChuvaHoje);