var quantidades = [];
var nomesPratos = ['Pão com Ovo', 'Pernil com Abacate', 'Almôndegas', "Abacate Recheado", 'Salada', 'Batata Frita'];
var precos = ['30.00', '25.00', '22.00', '10.00', '08.00', '12.00'];

$( document ).ready(function() {
  Inputmask("(99) 9999-9999").mask($('#telefoneForm'));
});

$(function() {
    $(".whiteButton").on("click", function() {
    
      var $botao = $(this);
      var $qtdSpan = $botao.parent().find("span");
      var valorAtual = $qtdSpan.text();

      if ($botao.text() == "+") {
          var novoValor = parseInt(valorAtual) + 1;
        } else {
       // Don't allow decrementing below zero
        if (valorAtual > 0) {
          var novoValor = parseInt(valorAtual) - 1;
        } else {
         novoValor = 0;
        }
      }
      $qtdSpan.text(novoValor);
      
      if($qtdSpan.attr("id") == "qtd paocomovo"){
        quantidades[0] = novoValor;
      } else if($qtdSpan.attr("id") == "qtd pernilcomabacate") {
        quantidades[1] = novoValor;
      } else if($qtdSpan.attr("id") == "qtd almondegas") {
        quantidades[2] = novoValor;
      } else if($qtdSpan.attr("id") == "qtd abacaterecheado") {
        quantidades[3] = novoValor;
      } else if($qtdSpan.attr("id") == "qtd salada") {
        quantidades[4] = novoValor;
      } else {
        quantidades[5] = novoValor;
      }
    })

    
    $(".formButton").on("click", function() {
        var $nomeCliente = $('#nomeForm').val();
        var $telefoneCliente = $('#telefoneForm').val();
        var $emailCliente = $('#emailCliente').val();
        var precoFinal = 0;
        
        for(i = 0; i < 6; i++) {
          if (quantidades[i] != 0 && quantidades[i] != null) {
              precoFinal = precoFinal + parseInt(precos[i]) * parseInt(quantidades[i]);
          }
      }

        $('#resultados').empty();
        $("#resultados").append("<p>Caro <b>" + $nomeCliente + "</b></p>");
        $("#resultados").append("<p>Seguem os dados do seu pedido:</p>");

        if (precoFinal != 0) {
          $("#resultados").append("<p>O seu pedido é:");
          $("#resultados").append("<ul>");
  
          for(i = 0; i < 6; i++) {
              if (quantidades[i] != 0 && quantidades[i] != null) {
                  $("#resultados").append("<li>Prato: " + nomesPratos[i] + " - Quantidade: " + quantidades[i] + " - Total: R$" + precos[i] * quantidades[i]  + " </li>");
              }
          }
  
          $("#resultados").append("</ul></p> <p><b>Preço Final: R$" + precoFinal + "</b></p>");
        } else {
          $("#resultados").append("<p id='pedidovazio'>Nenhum pedido foi realizado, por favor escolha um prato.</p>");
        }
    });
});