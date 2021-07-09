const Menu = {
    locationDoc: document.querySelector('#menujs'),
    openMenu() {
        this.locationDoc.style.right = "0%"
    },
    closeMenu() {
        this.locationDoc.style.right = "-100%"
    }
}

function scrollMenu() {
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
}
scrollMenu()