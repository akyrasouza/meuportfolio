var btna = document.getElementById('btna')//Botao Adicionjar
btna.addEventListener("click",adicionar,true)
var btnf = document.getElementById('btnf')//Botao Finalizar
btnf.addEventListener("click",finalizar,true)
var res = document.getElementById('res')//<div id"res">
var lpar = document.getElementById('slcp')
var limpar = document.getElementById('slci')
var num = document.getElementById('num')
var valores = []
var par = []
var impar = []

//Verifica se o numero e maior que 1 e menor qu 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}


//Verifica se o numero já esta na Lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){//verifica se numero é diferente de -1
        return true
    } else{
        return false
    }
}

//Verifica se o numero é par ou impar
function parimpar(n){
    if(n % 2 == 0){
        return true
    } else{
        return false
    }
}

//So adiciona se for um numero e se não estiver na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))//adiciona o numero no array valores
        let item = document.createElement('option')//cria um elemento option no HTML
        item.text += (`Valor ${num.value} foi adicionado`)

        //VERIFICA SE O NUMERO DIGITADO É PAR OU IMPA
        if(parimpar(num.value)){
            lpar.appendChild(item)//Se par, inseri na lpar(<select>)
            res.innerHTML = ''
        }else{
            limpar.appendChild(item)//inseri o valor par na limpar(<select>)
            res.innerHTML = ''
        }

    }else {
        alert('Valor inválido ou já inserido na lista')
    }
    num.value = ''//apagar input toda vez que um numero for inserido
    num.focus()//levar o cursosr do mouse para dentro do imput number
}

function finalizar(){
    //Percorre o Array valores e verifica se ele está vazio
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else{
        let maior = valores[0]
        let menor = valores[0]
        let somap = 0
        let somai = 0

        //Verifica o maior e o menor numero
        for(let x in valores){
            if(valores[x] > maior)
                 maior = valores[x]
            
            if(valores[x] < menor)
                menor = valores[x]
        }

        //Verifica quais valores do Array  é Par ou Impar
        for(let pos in valores){
            if(parimpar(valores[pos])){
                par.push(valores[pos])              
            }else{
                impar.push(valores[pos])
            }
            
        }


        //soma os valores pares
        for(let p in par){
            somap+= par[p]
        }
        //soma os valores impares
        for(let i in impar){
            somai+= impar[i]
        }

        res.innerHTML = ''
        valores.sort();
        res.innerHTML+= `<p>Numeros cadastrados: [${valores}]</p>`
        res.innerHTML+= `<p>Ao todo, temos ${valores.length} números inseridos</p>`
        res.innerHTML+= `<p>Maior valor inserido: ${maior} </p>`
        res.innerHTML+= `<p>Menor valor inserido: ${menor} </p>`
        par.sort();//coloca numero pares em ordem
        res.innerHTML+= `<p>Numeros pares: ${par} </p>`
        impar.sort();//coloca numero impares em ordem
        res.innerHTML+=`<p>Numeros impares: ${impar} </p>`
        res.innerHTML+= `<p>Soma dos valores Pares: ${somap} </p>`
        res.innerHTML+= `<p>Soma dos valores Imares: ${somai} </p>`
       
        

    }
}