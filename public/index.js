// javascript for handing nav collapsing

const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

// on clicking the burger icon
burger.addEventListener('click', () => {
    // if it contains the class hidden, its hidden
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})