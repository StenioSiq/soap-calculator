const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = process.argv.slice(2);

function operation(url, intA, intB, op) {
  soap.createClient(url, function(err, client) {
    if (err) {
      console.error('Erro ao criar cliente SOAP:', err);
      return;
    }

    let method;
    switch(op) {
      case 'adicionar':
        method = 'Add';
        break;
      case 'subtrair':
        method = 'Subtract';
        break;
      case 'multiplicar':
        method = 'Multiply';
        break;
      case 'dividir':
        method = 'Divide';
        break;
      default:
        console.log('Operação inválida.');
        return;
    }

    client[method]({ intA, intB }, function(err, result) {
      if (err) {
        console.error('Erro na operação:', err);
      } else {
        console.log(`Resultado: ${result[`${method}Result`]}`);
      }
    });
  });
}

operation(url, parseInt(args[0]), parseInt(args[1]), args[2]);
