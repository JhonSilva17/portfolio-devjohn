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

/* ScrollReveal - Quando eu der scroll no site, eu consigo animar os itens */
const scrollReveal = ScrollReveal({
    origin: top,
    distance: '20px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(`
    #intro, #intro h1,
    #projects, #projects h2, #projects .init-p, #projects .container-card,
    #about, #about img, #about p, #about h3, #about .techs,
    #contact h2, #contact p, #contact label, #contact input, #contact textarea, #contact button, 
    #footer, #footer .logo, #footer ul li
`, {interval: 40})