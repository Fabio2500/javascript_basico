console.log("qual turno você estuda?");
console.log("1-manhã");
console.log("2-tarde");
console.log("3-noite");
console.log("\n");
let escolha = 3;

if(escolha == 1){
    console.log("bom dia!");
}
if(escolha == 2){
    console.log("boa tarde!");
}
if(escolha == 3){
    console.log("boa noite!");
}
if(escolha != 1 && escolha != 2 && escolha != 3){
    console.log("escolha invalida");
}