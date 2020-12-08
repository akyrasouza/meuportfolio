    var foto = document.getElementById('imagem')
    foto.addEventListener("click", carregar, true)
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são: ${horas} horas`

    if(horas > 0 && horas < 6 ){
        //Boa Madrugada
        img.src = 'fotomadrugada.webp'
        document.body.style.background = 'black'

    }else if(horas < 12){
        //Bom Dia
        img.src = 'fotodia.webp'
        document.body.style.background = '#e2cd9f'

    }else if(horas <= 18 && horas < 23){
        //Boa Tarde
        img.src = 'fototarde.webp'
        document.body.style.background = '#b9846f'

    }else{
        //Boa Noite
        img.src = 'fotonoite.webp'
        document.body.style.background = '#515154'
    }

}