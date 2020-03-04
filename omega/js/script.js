"use strict";
//função incializadora (quando o docuemnto esta pronto)
//função inicializdora
/*$(document).ready(function()

{*/ //ativar o slick
    $(".slider").slick({
       autoplay:true,
       autoplaySpeed:5000,
       arrows:false,
       dots:true
});

//};

//ativação do jquery mask
$("#telefone").mask("(00)0000-00000");
$("#telefone").cleanVal();

/*script para contador de caracteres*/

var spanmax = $("#maximo");
var bcaracteres = $("#caracteres");
var textmensagem = $("#mensagem");
var quantidade=300;
//evento para detectar entrada(digitaçõ) no campo
textmensagem.on("input",function(){
 //captura em tempo real
/*console.log(textmensagem.val());*/

var conteudo = textmensagem.val();
var contagem = quantidade - conteudo.length;
console.log(contagem);
//exibir a contagem no HTML
bcaracteres.text(contagem);
/*se  contagem chegar no zero, exibir o spn em vermehlo cso contraio er em preto.*/
if(contagem ==0){
    spanmax.css("color","red");
}else {
    spanmax.css("color","black");
}
});