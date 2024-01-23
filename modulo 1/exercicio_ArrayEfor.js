const numbers = [5,9,3,19,70,8,100,2,35,27];
let soma = 0;
let media;
let maior = 0;

console.log("ITEM 1: imprimir números\n");

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

console.log("\n");

console.log("ITEM 2: somar os elementos\n");

for( let j = 0; j < numbers.length; j++ ){
soma += numbers[j];
}

console.log(`a soma dos elementos: ${soma}`);

console.log("\n");

console.log("ITEM 3: tirar a média aritmética\n");

media = soma/numbers.length;

console.log(`media: ${media}`);

console.log("\n");

console.log("ITEM 4: dizer se é maior ou menor que 20\n");

if(media < 20){
    console.log("a média é menor que 20");
}else{
    console.log("a média é maior ou igual que 20");
}

console.log("\n");

console.log("ITEM 5: percorrer o array com o for e dizer qual é o maior elemento\n");

for(let k = 0; k < numbers.length; k++){
    if(maior < numbers[k]){
        maior = numbers[k];
    }
}

console.log(`maior numero: ${maior}`);

console.log("\n");

console.log("ITEM 6: dizer quantos elementos impares existem no array\n");
let cont = 0;

for(let m = 0; m < numbers.length;m++){
    if(numbers[m] % 2 !=0){
        cont++
    }
}

console.log(`quantidade total de numeros impares: ${cont}`);


