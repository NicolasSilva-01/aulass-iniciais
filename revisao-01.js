/*5 - Calculadora de pontos em jogo Desenvolva um programa que calcule os pontos ganhos em uma fase de um jogo considerando: pontos base (100), nível de dificuldade (1 a 5, multiplicador dos pontos), se completou em tempo recorde (completouEmTempoRecorde = true - dobra os pontos) e se coletou todos os itens (coletouTodosItens = true - adiciona 150 pontos).

pontos base (100)
nivel de dificuldade (1 a 5, multiplicador dos pontos)
completouEmTempoRecorde = true - dobra os pontos
coletouTodosItens = true - adiciona 150 pontos
*/

const pontosBase = 150;
const nivelDificuldade = 5;
const completouEmTempoRecorde = false; 
const coletouTodosItens = false;

//calculando pontos totais inicialmente
let pontosTotais = pontosBase * nivelDificuldade; 
console.log(`pontos Totais: ${pontosTotais}`);

//verificar bonus de recorde
if (completouEmTempoRecorde) {
    pontosTotais = pontosTotais * 2;
    console.log(`Parabéns, jogador você bateu o recorde e dobrou os seus pontos! pontuação: ${pontosTotais}`);
}

//varificar coleta de todos os itens 
if (coletouTodosItens) {
    pontosTotais = pontosTotais + 150;
    console.log(`Parabéns, jogador você coletou todos os itens da fase! pontuação: ${pontosTotais}`);
}

console.log(`sua pontuação final foi de: ${pontosTotais} pontos!`);

if(pontosTotais > 1000) {
    console.log(`Parabéns jogador! VOCÊ PLATINOU O JOGO!`);
    
}



