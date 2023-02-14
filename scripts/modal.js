const modal = document.querySelector('#modal')
const openModal = document.querySelector('.openModal')
const closeModal = document.querySelector('.closeModal')
const imgGame = document.querySelectorAll('.image-item')

for(var game of imgGame){
    imgGame.addEventListener('click', ()=>{
        modal.showModal()
    })
}

closeModal.addEventListener('click', ()=>{
    modal.close()
})
