/*
Você conseguiu um estágio na equipe de marketing de uma loja de aplicativos para celular
e seu primeiro trabalho é analisar os dados dos 10 aplicativos mais baixados do mês.

Os dados são:
Nomes: ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
Downloads (em milhões): [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
Avaliações (de 1 a 5 estrelas): [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
Categorias: ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]
Seu gerente quer um relatório detalhado com as seguintes informações:

1. Mostre todos os dados em formato de tabela (nome, downloads, avaliação e categoria)
2. Encontre o aplicativo com maior número de downloads e sua categoria
3. Encontre o aplicativo com a melhor avaliação e sua categoria
4. Calcule a média de downloads dos aplicativos
5. Crie um novo array apenas com os nomes dos aplicativos que têm avaliação maior que 4.5
6. Calcule o total de downloads de todos os aplicativos da categoria "Social"
7. Verifique qual categoria tem mais aplicativos no Top 10

Esta análise será apresentada na reunião de marketing na próxima semana e ajudará
a definir as estratégias de promoção da loja.
*/

l

































let 

let maiorNumeroDownloads = downloads[0];

for(let i = 0;i < nomeAplicativos.length; i++) {
    if (downloads[i] > maiorNumeroDownloads) {
        maiorNumeroDownloads = downloads[i];
        
    }
}

console.table(nomeAplicativos);
console.table(downloads);
console.table(avaliacoes);
console.table(categorias);


if (avaliacoes[i] > maiorAvaliacao) {

    console.log(` o aplicativo com a maior avaliaçaõ é ${aplicativomaioravalialçao}`);
    
}somatotaldownloads += downloads[i]
let novoArray = [];
contadorNovoArray = categorias[i]

if(avaliacoes[i] >4.5) {
    novoArray[contadorNovoArray] = nomeAplicativos[i];
    contadorNovoArray++;
    
}
console.log(`os aplicativos com mais que 4.5 estrelas de avaliação são ${novoArray}`);
let categoriaMaisAplicativos = "";
let maiorContagem = 