const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um valor: ', (valor) => {
    console.log(`O valor digitado foi: ${valor}`);
    rl.close();
});

