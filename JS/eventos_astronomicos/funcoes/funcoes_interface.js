import chuva_meteoros from "../data/chuva_meteoros.js";
import { formataIntensidade,formataHemisferio, inverteData } from "./funcoes.js";

const imprimeListaChuva = (chuva) =>{

  console.log("\nNOME DA CHUVA               - INTENSIDADE - HESMIFÉRIO - PERÍODO");

  chuva.forEach(imprimeChuva);
}

const imprimeChuva = (chuva) =>{
  let nomeChuva = chuva.nome;
  nomeChuva = nomeChuva.padEnd(27," ");

  let intensidade = formataIntensidade(chuva.intensidade);
  intensidade = intensidade.padEnd(11," ");

  let hemisferio = formataHemisferio(chuva.declinacao);
  hemisferio = hemisferio.padEnd(10," ");

  let periodo = inverteData(chuva.inicio) + " à " + inverteData(chuva.fim);
  console.log(`${nomeChuva} - ${intensidade} - ${hemisferio} - ${periodo}`);
}

export default imprimeListaChuva;