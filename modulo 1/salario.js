let salario = 7100.00;

if(salario <= 280.00){
    console.log("o salario sofrerá um aumento de 20%");
    console.log("salario antes do aumento: " + salario);
    console.log("salario após o aumento: " + (salario + (salario * 20)/100));
}
if(salario > 280.00 && salario < 700.00){
    console.log("o salario sofrerá um aumento de 15%");
    console.log("salario antes do aumento: " + salario);
    console.log("salario após o aumento: " + (salario + (salario * 15)/100));
}
if(salario >= 700.00 && salario < 1500.00){
    console.log("o salario sofrerá um aumento de 10%");
    console.log("salario antes do aumento: " + salario);
    console.log("salario após o aumento: " + (salario + (salario * 10)/100));   
}
if(salario >= 1500.00){
    console.log("o salario sofrerá um aumento de 5%");
    console.log("salario antes do aumento: " + salario);
    console.log("salario após o aumento: " + (salario + (salario * 5)/100));
}
