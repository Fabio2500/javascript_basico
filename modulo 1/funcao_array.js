let inovaBank = [];

function addCostumers(name1,name2){
    if(typeof name1 != 'string' && typeof name2 != 'string'){
        return false;
    }
    if(typeof name1 != 'string'){
        console.log("não pode adicionar numeros");
        inovaBank.push(name2);
        return false;
    }
    
    if(typeof name2 != 'string'){
        console.log("não pode adicionar numeros");
        inovaBank.push(name1);
        return false;
    }
    
    return inovaBank.push(name1,name2);
}

function addCostumer(name){
    if(typeof name != 'string'){
        console.log("não pode adicionar numeros");
        return false;
    }
    return inovaBank.push(name);
}

addCostumers(10,"daluncio");
addCostumers("rafael",20);
addCostumers(20,30);
addCostumers("bruno","barreto");


console.log(inovaBank);