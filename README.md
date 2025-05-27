# 🧼  SOAP &  NODE.js

Este projeto consiste no consumo de um serviço SOAP utilizando Node.js.
<br> A aplicação se conecta ao serviço SOAP disponível em:

    http://www.dneonline.com/calculator.asmx?WSDL

Executa operações matemáticas básicas (adição, subtração, multiplicação e divisão) com dois números inteiros fornecidos via linha de comando.

## Funcionalidades

A aplicação implementa duas versões de consumo do serviço:

-  `calculator_sync.js`: modo síncrono
- `calculator_async.js`: modo assíncrono

Ambas versões recebem três argumentos via linha de comando:

    node calculator_sync.js <intA> <intB> <operacao>
    
    node calculator_async.js <intA> <intB> <operacao>

Operações suportadas:

    Adicionar
    Subtrair
    Multiplicar
    Dividir

## Requisitos

- Node.js instalado
- Dependência:
        
        npm install soap
## Estrutura

    ├── calculator_sync.js
    ├── calculator_async.js
    └── package.json

## Como Executar

Exemplo de execução para adição no modo síncrono:

    node calculator_sync.js 4 5 adicionar

Exemplo no modo assíncrono:

    node calculator_async.js 10 3 dividir