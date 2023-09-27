function atualizarP() {
  var div = document.getElementById("vazio");
  var span = document.getElementById("total");

  var numeroString = '';
  var numeroNumero = 0;
  let adicao = 0;
  let subtracao = 0;
  let multiplicacao = 0;
  let divisao = 0;
  let porcento = 0;
  var total = '0';

  var tabela = document.getElementById("minhaTabela");

  function adicionarNumero(numero) {
    if (numeroString === "0") {
      numeroString = numero;
    } else {
      numeroString += numero;
    }
  }

  tabela.addEventListener("click", function(event) {
    if (event.target.tagName === "TD") {
      var acao = event.target.getAttribute("data-action");

      switch (acao) {
        case "acaoCE":
          numeroString = "0";
          total = 0;
          adicao = 0;
          subtracao = 0;
          multiplicacao = 0;
          divisao = 0;
          porcento = 0;
          break;
        case "acaoC":
          numeroString = "0";
          total = 0;
          adicao = 0;
          subtracao = 0;
          multiplicacao = 0;
          divisao = 0;
          porcento = 0;
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
          numeroNumero = parseFloat(numeroString);
          numeroString = '';
          adicao += numeroNumero;
          subtracao = 0;
          multiplicacao = 0;
          divisao = 0;
          porcento = 0;
          break;
        case "acaoSubtracao":
          numeroNumero = parseFloat(numeroString);
          numeroString = '';
          subtracao += numeroNumero;
          adicao = 0;
          multiplicacao = 0;
          divisao = 0;
          porcento = 0;
          break;
        case "acaoMultiplicacao":
          numeroNumero = parseFloat(numeroString);
          numeroString = '';
          multiplicacao = numeroNumero;
          adicao = 0;
          subtracao = 0;
          divisao = 0;
          porcento = 0;
          break;
        case "acaoDivisao":
          numeroNumero = parseFloat(numeroString);
          numeroString = '';
          divisao += numeroNumero;
          adicao = 0;
          subtracao = 0;
          multiplicacao = 0;
          porcento = 0;
          break;
        case "acaoPorcento":
          numeroNumero = parseFloat(numeroString) / 100;
          numeroString = '';
          porcento += numeroNumero;
          adicao = 0;
          subtracao = 0;
          multiplicacao = 0;
          divisao = 0;
          break;

        case "acaoIgual":
          if (numeroNumero !== 0) {
            if (adicao) {
              total = adicao + parseFloat(numeroString);
            } else if (subtracao) {
              total =  subtracao - parseFloat(numeroString);
            } else if (multiplicacao) {
              total = multiplicacao * parseFloat(numeroString);
            } else if (divisao) {
              total = divisao / parseFloat(numeroString);
            } else if (porcento) {
              total = porcento * parseFloat(numeroString);
            }
          }
          break;  
        default:
      }
      div.innerHTML = numeroString;
      span.innerHTML = total;
    }
  });
}

atualizarP();
