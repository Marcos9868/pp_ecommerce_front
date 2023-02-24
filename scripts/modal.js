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


const modalSacola = document.querySelector('#modalSacola')
const openModalSacola = document.querySelector('.openModalSacola')
const closeModalSacola = document.querySelector('.closeModalSacola')

openModalSacola.addEventListener('click', ()=>{
    modalSacola.showModal()
})

closeModalSacola.addEventListener('click', ()=>{
    modalSacola.close()
})



//MODAL GAME
const imgGame = document.querySelectorAll('.image-item')
const spn = document.querySelector('#closeMod');
const openModalGame = document.querySelector('.overlay')

console.log(spn)

imgGame.forEach(function(item){
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        openModalGame.style.display = "block"

        spn.addEventListener('click', function(){
            openModalGame.style.display = "none"
        })
    })
})

  

