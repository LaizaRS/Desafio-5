function atualizarP() {
  var div = document.getElementById("vazio");
  var span = document.getElementById("total");

  var numeroString = '';
  var total = 0;
  var operacaoPendente = null; 

  var tabela = document.getElementById("minhaTabela");

  function adicionarNumero(numero) {
    if (numeroString === "0" || numeroString === total.toString()) {
      numeroString = numero;
    } else {
      numeroString += numero;
    }
  }

  function executarOperacaoPendente() {
    var valorAtual = parseFloat(numeroString);
    if (!isNaN(valorAtual)) {
      if (operacaoPendente === "adicao") {
        total += valorAtual;
      } else if (operacaoPendente === "subtracao") {
        total -= valorAtual;
      } else if (operacaoPendente === "multiplicacao") {
        total *= valorAtual;
      } else if (operacaoPendente === "divisao") {
        total /= valorAtual;
      } else if (operacaoPendente === "porcentagem") {
        total = (total * valorAtual) / 100;
      } else {
        total = valorAtual; 
      }
      numeroString = total.toString();
    }
  }

  tabela.addEventListener("click", function(event) {
    if (event.target.tagName === "TD") {
      var acao = event.target.getAttribute("data-action");

      switch (acao) {
        case "acaoCE":
          numeroString = "0";
          total = 0;
          operacaoPendente = null;
          break;
        case "acaoC":
          numeroString = "0";
          total = 0;
          operacaoPendente = null;
          break;

        case "acao0":
          adicionarNumero("0");
          break;
        case "acao1":
          adicionarNumero("1");
          break;
        case "acao2":
          adicionarNumero("2");
          break;
        case "acao3":
          adicionarNumero("3");
          break;
        case "acao4":
          adicionarNumero("4");
          break;
        case "acao5":
          adicionarNumero("5");
          break;
        case "acao6":
          adicionarNumero("6");
          break;
        case "acao7":
          adicionarNumero("7");
          break;
        case "acao8":
          adicionarNumero("8");
          break;
        case "acao9":
          adicionarNumero("9");
          break;
        case "acaoPonto":
          adicionarNumero(".");
          break

        case "acaoAdicao":
          executarOperacaoPendente();
          operacaoPendente = "adicao";
          break;
        case "acaoSubtracao":
          executarOperacaoPendente();
          operacaoPendente = "subtracao";
          break;
        case "acaoMultiplicacao":
          executarOperacaoPendente();
          operacaoPendente = "multiplicacao";
          break;
        case "acaoDivisao":
          executarOperacaoPendente();
          operacaoPendente = "divisao";
          break;
        case "acaoPorcentagem":
          executarOperacaoPendente();
          operacaoPendente = "porcentagem";
          break;

        case "acaoIgual":
          executarOperacaoPendente();
          operacaoPendente = null;
          break;  
        default:
      }
      div.innerHTML = numeroString;
      span.innerHTML = total;
    }
  });
}

atualizarP();
