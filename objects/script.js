 

// console.log(pessoa.idade);

//MÉTODOS

var quadrado = {
  lados:4,
  area: function(lado){
    return lado * lado;
  },
  perimetro:function(lado){
    return this.lados * lado;
  },
}

// console.log(quadrado.lados);
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(8));

//ABREVIAÇÃO DE FUNCTION

var quadrado2 = {
  lados:4,
  area(lado){
    return lado * lado;
  },
  perimetro(lado){
    return this.lados * lado;
  },
  cinco(){
    return 5;
  },
}

// console.log(quadrado2.perimetro(5));
// console.log(quadrado2.cinco())
// console.table(quadrado2)//show object on the table


//OBJECTS 

var menu = {
  width:800,
  height:50,
  backgroudColor:'#84E',
}
menu.backgroudColor = 'blue';
var bg = menu.backgroudColor;
console.log(bg);

//USANDO .this NO ESCOPO

var cor = 'green';

var carro = {
  pneus:4,
  volante:1,
  cor:'azul',
  andar(){
    return this.cor;//com o this imprime a cor do escopo
  }
}
console.log(carro.andar())


//EXERCÍCIO

//1 - crie um objeto com os seus dados pessoais

var pessoa  = {
  nome: 'Alexandre',
  sobrenome:'Rocha',
  idade:40,
  sexo:'M',
  cpf:'966.216.563-00',
  nomecompleto(){
    return this.nome + ' '+ this.sobrenome;
  },
}

console.log(pessoa.nomecompleto());
console.log(pessoa.cpf);

var carro = {
  preco:1000,
  portas:4,
  marca:'audi',
}

carro.preco = 2000;
console.log(carro.preco)