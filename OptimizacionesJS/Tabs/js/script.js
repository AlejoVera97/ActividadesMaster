'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

//Click en li
    //Todos .li quitar la clase activo
    //todos .bloque le vamos a quitar la clase activo
    // li con la poscion agrageams la clase activo
    //bloque co la posicion que agregamos la clase activo


    //recorriendo todos los li 
li.forEach((cadaLi,i)=>{
    //asignamos un click a cada li
    li[i].addEventListener('click',()=>{
        //quitamos la clase activo de cada li
        li.forEach((cadaLi,i)=>{
            li[i].classList.remove('activo')
            //quitamos la clase actio a cada bloque
            bloque[i].classList.remove('activo')
        })
        //agregamos la clase activo a los li y bloques
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})