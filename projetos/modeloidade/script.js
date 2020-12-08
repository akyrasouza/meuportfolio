var res = document.getElementById('res')
var btn = document.getElementById('btn')
btn.addEventListener("click",verificar,true)

function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')

    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO] Verifique o Ano digitado!!!')
    }else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''

        //Colocar Imagem Dinamicamente(dentro do JavaSceipt)
        var img = document.createElement('img')//cria um Elemento imagem <img>
        img.setAttribute('id', 'foto')//Elemento imagem com <img id="foto">

        //Verifica Qual o sexo escolhido no checked box ()
        if(formSex[0].checked){
            genero = 'Homem'

            //Verifica Idade do Home
            if(idade >= 0 && idade < 12){
            //Crianca
            img.setAttribute('src','ft-crc-h.webp')
            } else if(idade < 21 ){
            //Jovem
            img.setAttribute('src','ft-adl-h.webp')
             }else if(idade < 50){
            //Adulto
            img.setAttribute('src','ft-adt-h.webp')
             }else{
            //Idoso
            img.setAttribute('src','ft-ids-h.webp')
             }
          
        //Verifica Idade da Mulher
        }else if(formSex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                //Crianca
                img.setAttribute('src','ft-crc-f.webp')
                } else if(idade < 21 ){
                //Jovem
                img.setAttribute('src','ft-adl-f.webp')
                 }else if(idade < 50){
                //Adulto
                img.setAttribute('src','ft-adt-f.webp')
                 }else{
                //Idoso
                img.setAttribute('src','ft-ids-f.webp')
                 }
    
        }
        res.innerHTML = `Detectamos ${genero}, com ${idade} anos`
        res.appendChild(img)//Adiciona a imagem na pagina
    }
}