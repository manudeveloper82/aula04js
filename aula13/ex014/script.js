function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas.`
    var hora = 22
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg' 
        document.body.style.background = '#e4999981'
        console.log("manha");
    }else if (hora >=12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#e4963e81'
        console.log("tarde");
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#330f0f81'
        console.log("noite");
    }
}


