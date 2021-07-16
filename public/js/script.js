const Menu = {
    locationDoc: document.querySelector('#menujs'),
    openMenu() {
        this.locationDoc.style.right = "0%"
    },
    closeMenu() {
        this.locationDoc.style.right = "-100%"
    }
}

// Quando eu der scroll até determinada parte do site, o menu aparece
const header = document.querySelector('#header')
const intro = document.querySelector('#intro')
const ativo = "ativo"

function surgirMenu() {
    const medidasIntro = intro.getBoundingClientRect().bottom
    if (medidasIntro < 0) {
        header.classList.add(ativo)
    } else {
        header.classList.remove(ativo)
    }
}
window.addEventListener('scroll', surgirMenu)


// Código que faz aparecer as seções ao dar scroll sobre o item
const sections = document.querySelectorAll('.js-scroll')
const nameClass = 'section-visible'
sections[0].classList.add(nameClass)
function scrollSectionVisible() {
    const heightWindow = window.innerHeight * .70
    
    sections.forEach((item)=> {
        const topSections = item.getBoundingClientRect().top - heightWindow
        if (topSections < 0) {
            item.classList.add(nameClass)
        } else {
            item.classList.remove(nameClass)
        }
    })
}
window.addEventListener('scroll', scrollSectionVisible)