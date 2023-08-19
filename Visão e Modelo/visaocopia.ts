import * as prompt_sync from "prompt-sync";
const prompt = prompt_sync();
let opcao: string = prompt("Digite sua opção: ");
import{ somar,subtrair,despedir} from "./modelo"
let escolha:string;
escolha = opcao;
let resultado:number;
switch(escolha){
    case "somar":
        const x = parseInt(prompt("Digite um número:"));
        const y = parseInt(prompt("Digite outro número:"));
        resultado = somar (x,y);
        console.log("O resultado da soma é:",resultado);
        break;
    case "subtrair":
        const a = parseInt(prompt("Digite um número:"));
        const b = parseInt(prompt("Digite outro número:"));
        resultado = subtrair(a,b);
        console.log("O resultado da subtração é:",resultado);
        break;
    case "despedir":
        console.log(despedir());
}
