/*Crie um programa que calcule a média de notas de uma turma:
 */

const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]
let media = 0;
let soma = 0;
let acimaDaMedia = 0;
let notaMaxima = notas[0];
let notaMinima = notas[0];

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}
media = soma / notas.length;

console.log(`a média é igual a: ${media}`);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acimaDaMedia++;
    } 
 if (notas[i] > notaMaxima) {
    notaMaxima = notas[i];
 }
 if (notas[i] < notaMinima) {
    notaMinima = notas[i];
 }
}

console.log(`${acimaDaMedia} alunos tiraram nota acima da média`);
 console.log(`a maior nota foi: ${notaMaxima}`);
 console.log(`a menor nota foi: ${notaMinima}`);

 
 