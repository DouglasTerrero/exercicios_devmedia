import chuva_meteoros from "./data/chuva_meteoros.js";
import imprimeListaChuva from "./funcoes/funcoes_interface.js";
import { verificaChuvaFuturo, verificaChuvaHoje } from "./funcoes/funcoes.js";

const dataAtual = new Date();
//const dataFimdeAno = new Date("2022 12 29");
//const dataSemChuva = new Date("2024 04 14");

const chuvasVisiveisHoje = chuva_meteoros.filter((chuva)=> verificaChuvaHoje(dataAtual, chuva));
//const chuvasVisiveisHoje = chuva_meteoros.filter((chuva)=> verificaChuvaHoje(dataSemChuva, chuva));
//const chuvasVisiveisHoje = chuva_meteoros.filter((chuva)=> verificaChuvaHoje(dataFimdeAno, chuva));

const chuvasVisiveisFuturo = chuva_meteoros.filter((chuva) => verificaChuvaFuturo(dataAtual, chuva));
//const chuvasVisiveisFuturo = chuva_meteoros.filter((chuva) => verificaChuvaFuturo(dataFimdeAno, chuva));

console.log("Chuva de meteoros!!");

if ( chuvasVisiveisHoje.length > 0 ) {
  let msg = "\nEncontramos ";
  msg += chuvasVisiveisHoje.length == 1 ? '1 chuva de meteoros que pode ser vista hoje' : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

  console.log(msg);

  imprimeListaChuva(chuvasVisiveisHoje);
} 
else {
  console.log('\nNenhuma chuva de meteoros passando no momento');
}

console.log('\n\nNão perca as próximas chuvas de meteoros:');
imprimeListaChuva(chuvasVisiveisFuturo);