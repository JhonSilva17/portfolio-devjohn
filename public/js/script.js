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

function scrollSuave() {
    const links = document.querySelectorAll('.js-scrollSuave')
    function initScrollSuave(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }

links.forEach((item)=> {
    item.addEventListener('click', initScrollSuave)
})
}
scrollSuave()
