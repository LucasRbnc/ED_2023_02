function maior_menor(a:number,b:number):string{
    if(a == b){
        return (`O número ${a} é igual ao número ${b}`);
    }else{
        if(a < b){
            return (`O número ${b} é maior que o número ${a}`);
        }else{
            return (`O número ${a} é maior que o número ${b}`);
        }
    }
}
export{
    maior_menor
}