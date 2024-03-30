import leitor from 'readline-sync';

let salarioMinimo = [
  {ano: 2010, salario: 510.00},
  {ano: 2011, salario: 545.00},
  {ano: 2012, salario: 622.00},
  {ano: 2013, salario:678.00},
  {ano: 2014, salario:724.00},
  {ano: 2015, salario:788.00},
  {ano: 2016, salario:880.00},
  {ano: 2017, salario:937.00},
  {ano: 2018, salario:954.00},
  {ano: 2019, salario:998.00},
  {ano: 2020, salario:1045.00}
];

let inflacao = [
  {ano: 2010, ipca: 5.91},
  {ano: 2011, ipca: 6.50},
  {ano: 2012, ipca: 5.84},
  {ano: 2013, ipca: 5.91},
  {ano: 2014, ipca: 6.41},
  {ano: 2015, ipca: 10.67},
  {ano: 2016, ipca: 6.29},
  {ano: 2017, ipca: 2.95},
  {ano: 2018, ipca: 3.75},
  {ano: 2019, ipca: 4.31},
  {ano: 2020, ipca: 4.52}
];

let labelAno = "Ano:".padEnd(30,".");
let labelSalario = "Salário mínimo:".padEnd(30,".");
let labelInflacao = "Inflação IPCA:".padEnd(30,".");
let label_cresc = "Crescimento salarial:".padEnd(30,".");

console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários minímos de 2010 a 2020");
console.log("2 - Listar o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = leitor.questionInt("Digite o numero da sua escolha: ");

switch(escolha){
  case 1:
    console.log("\nLista de Salários Mínimos de 2010 a 2020:");
    for(let anoSal of salarioMinimo){
      let ano = anoSal.ano;
      let salario = anoSal.salario;
      console.log(`${labelAno}${ano}`);
      console.log(`${labelSalario}R$${salario.toFixed(2).replace(".",",")}\n`);
    }
    break

  case 2:
    console.log("\nLista de Índices IPCA de 2010 a 2020:");
    for(let anoInf of inflacao){
      let ano = anoInf.ano;
      let infla = anoInf.ipca;
      console.log(`${labelAno}${ano}`);
      console.log(`${labelInflacao}${infla.toFixed(2).replace(".",",")}%\n`);
    }
    break
case 3:
    console.log("\nComparação entre o percentual de aumento salarial e o IPCA:");
    if(salarioMinimo.length === inflacao.length){
      /*for(let i = 0; i <= salarioMinimo.length-1; i++){ //antes da correção

        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;
        let infla = inflacao[i].ipca;       
        let salarioAnterior;
                
        if(i > 0){
        salarioAnterior = salarioMinimo[i-1].salario;
        }
        let diferenca = salario - salarioAnterior;
        let percentualCrescimento = (diferenca / salarioAnterior) * 100;*/

        for (let i = 1; i < salarioMinimo.length; i++) { //depois da correção
          let ano = salarioMinimo[i].ano;
          let salario = salarioMinimo[i].salario;
          let salarioAnterior = salarioMinimo[i - 1].salario;
          let diferenca = salario - salarioAnterior;
          let percentualCrescimento = (diferenca / salarioAnterior) * 100;
          let infla = inflacao[i].ipca;
               
        console.log(`${labelAno}${ano}`);
        console.log(`${labelSalario}R$${salario.toFixed(2).replace(".",",")}`);
        console.log(`${label_cresc} ${percentualCrescimento.toFixed(2).replace(".",",")}%`);
        console.log(`${labelInflacao}${infla.toFixed(2).replace(".",",")}%\n`);
      }
    }
    break
  default:
    console.log("Opção inválida. Tente novamente!")
}


