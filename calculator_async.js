const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = process.argv.slice(2);

async function operation(url, intA, intB, op) {
  try {
    const client = await soap.createClientAsync(url);
    
    let method;
    switch(op) {
      case 'adicionar':
        method = 'AddAsync';
        break;
      case 'subtrair':
        method = 'SubtractAsync';
        break;
      case 'multiplicar':
        method = 'MultiplyAsync';
        break;
      case 'dividir':
        method = 'DivideAsync';
        break;
      default:
        console.log('Operação inválida.');
        return;
    }

    const [result] = await client[method]({ intA, intB });
    const key = method.replace('Async', 'Result');
    console.log(`Resultado: ${result[key]}`);
    
  } catch (err) {
    console.error('Erro:', err);
  }
}

operation(url, parseInt(args[0]), parseInt(args[1]), args[2]);
