
function atualizarP() {
  var div = document.getElementById("vazio");
  var span = document.getElementById("total");

  // primeiro passo, pensar na logica antes de programar
  // segundo passo, pensar na melhor logica antes de programar
  // identificar o que deve fazer quando clicar em cada botão.
  // Quando clicar em um numero ou operador irá chamar uma função 
  // que irá colocar dentro de uma variavel do tipo string o que foi digitado
  // Quando clicar no igual irá dar o total do que foi digitado
  

  var numeroString = '';
  var numeroNumero = 0;
  let adicao = 0;
  let subtracao = 0;
  let multiplicacao = 0;
  let divisao = 0;
  let porcento = 0;
  var total = 0;

  var tabela = document.getElementById("minhaTabela");

  tabela.addEventListener("click", function(event) {
    if (event.target.tagName === "TD") {
      var acao = event.target.getAttribute("data-action");
  
      switch (acao) {
        case "acaoCE":
          if (numeroString === "0") {
          } else {
            numeroString = 0;
            total = 0; 
          }
          div.innerHTML = numeroString;
          span.innerHTML = total;
          break;
          case "acaoC":
            if (numeroString === "0") {
            } else {
              numeroString = 0;
              total = 0; 
            }
            div.innerHTML = numeroString;
            span.innerHTML = total;
            break;

        case "acao0":
          if (numeroString === "0") {
            // Evite definir "0" repetidamente
          } else {
            numeroString = "0";
          }
          break;
          case "acao1":
          numeroString += "1";
          break;
          case "acao2":
          numeroString += "2";
          break;
          case "acao3":
          numeroString += "3";
          break;
          case "acao4":
          numeroString += "4";
          break;
          case "acao5":
          numeroString += "5";
          break;
          case "acao6":
          numeroString += "6";
          break;
          case "acao7":
          numeroString += "7";
          break;
          case "acao8":
          numeroString += "8";
          break;
          case "acao9":
          numeroString += "9";
          break;



          case "acaoAdicao":
            if (numeroString === "0") {
            } else {
              numeroNumero = parseInt(numeroString);
              numeroString = ''; 
              adicao += numeroNumero;
              console.log("Adição realizada:", adicao);
            }
            break;
         case "acaoSubtracao":
          if (numeroString === "0") {
          } else {
            numeroNumero = parseInt(numeroString);
            numeroString = '';
            subtracao += numeroNumero;
          }
         break;
         case "acaoMultiplicacao":
          if (numeroString === "0") {
          } else {
            numeroNumero = parseInt(numeroString);
            numeroString = '';
            multiplicacao = numeroNumero
          }
         break;
         case "acaoDivisao":
          if (numeroString === "0") {
          } else {
            numeroNumero = parseInt(numeroString);
            numeroString = '';
            divisao += numeroNumero;
          }
         break;
         case "acaoPorcento":
          if (numeroString === "0") {
          } else {
            numeroNumero = parseInt(numeroString)/100;
            numeroString = '';
            porcento += numeroNumero;
          }
          break;

          case "acaoIgual":
            if (numeroNumero !== 0) {
              if (adicao) {
                total = numeroNumero + adicao;
              } else if (subtracao) {
                total = numeroNumero - subtracao;
              } else if (multiplicacao) {
                total = numeroNumero * multiplicacao;
              } else if (divisao) {
                total = numeroNumero / divisao;
              } else if (porcento) {
                total = numeroNumero * porcento;
              }
            }
            console.log(numeroNumero, divisao)
            div.innerHTML = numeroString;
            span.innerHTML = total;
            break;
        
          default:
            div.innerHTML = numeroString;
            span.innerHTML = total;
        }

      div.innerHTML = numeroString;
      span.innerHTML = total;
    }
  });
}


atualizarP()