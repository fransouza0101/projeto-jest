function aplicarDescontoTest(){
   return aplicarDesconto(10,2) === 8;
}
 
console.log('A aplicação de desconto está funcionando? ');
console.log(aplicarDescontoTest());
JavaScript

function aplicarDesconto(valor, desconto){
   return valor - desconto;
}