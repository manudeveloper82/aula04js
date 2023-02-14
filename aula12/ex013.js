var agora = new Date()
var hora = agora.getHours() 
console.log (`Agora são exatamente ${hora} horas!`)
if (hora > 18) {
    console.log ('você está atrasado!')
}
else if (hora <=12) {
    console.log ('vc chegou antes da  hora!')
}else {
    console.log ('vc chegou antes da hora')
}