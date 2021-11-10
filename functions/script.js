// function imc(peso, altura){
//   const imc  = peso / (altura ** 2);//altura ao quadrado
//   return 'O seu imc é ' +imc;
// }
// //console.log(imc(95,1.85))


// function corFavorita(cor){
//   if(cor=='azul'){
//     return 'Você gosta do Céu';
//   }
//   else if(cor=== 'verde'){
//     return 'Você gosta das Matas';
//   }
//   else{
//     return 'Você não gosta de nada';
//   }
// }

// // console.log(corFavorita('azul'))

// // addEventListener('tipo_evento','funcao_anonima(){
  
// // //}')

// addEventListener('click',function(){
//   console.log('OIII!')
// });

// function terceiraIdade(idade){
//   if (typeof idade != 'number'){
//     console.log('Preencha um número');
//   }else if (idade >=60){
//     console.log('IDOSO');

//   }else{
//     console.log('Jovem')
//   }
// }

// terceiraIdade(30)

// function faltaVisitar(paisesVisitados){
//   var totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados} países`;
// }

// console.log(faltaVisitar(20));




//EXERCÍCIO

//01 - Criar uma função pra verificar se um valor é True

function confereValor(valor){
  if(valor){
    console.log('Valor é True')
  }
  else{
    console.log('Valor é False')
  }
}

confereValor()

//02 - Criar uma função matemática que retorne o perímetro de um quadrado

function perimetro(valor,valor2){
  var quadrado = valor * valor2 ;
  return quadrado;
}

var area = perimetro(50,33);
console.log(area)

//03 - Criar uma função que retorne um nome completo

function nomeTodo(nome,nome2){
  var nomeComp = nome + ' '+nome2;
  console.log(nomeComp)
}

nomeTodo('Alex','Rocha')

//04 - Criar uma função que verifica se é par ou ímpar

function par_impar(valor){
  if(valor%2==0){
    console.log('É PAR');
  }else{
    console.log('É Ímpar');
  }
}

par_impar(31);

//05 - addEventListener

addEventListener('click',function(){
  console.log('Alex Rocha Sobral');
})