//MODAL lOGIN


const modalLogin = document.querySelector('#modalPerfil')
const openModalLogin = document.querySelector('.openModalLogin')
const closeModalLogin = document.querySelector('.closeModalLogin')

openModalLogin.addEventListener('click', ()=>{
    modalLogin.showModal()
})

closeModalLogin.addEventListener('click', ()=>{
    modalLogin.close()
})

/* 
const modalSacola = document.querySelector('#modalSacola')
const openModalSacola = document.querySelector('.openModalSacola')
const closeModalSacola = document.querySelector('.closeModalSacola')

openModalSacola.addEventListener('click', ()=>{
    modalSacola.showModal()
})

closeModalSacola.addEventListener('click', ()=>{
    modalSacola.close()
})*/



//MODAL GAME
const modalGame = document.querySelector('#modalGame')
const closeModalGame = document.querySelector('.closeModalGame')
const imgGame = document.querySelectorAll('.image-item')

imgGame.forEach(function(item){
    item.addEventListener('click', ()=>{
        modalGame.showModal()
    })
})

closeModalGame.addEventListener('click', ()=>{
    modalGame.close()
})
