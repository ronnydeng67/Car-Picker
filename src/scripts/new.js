
const navMenu = document.getElementById('navMenu');
const navTog = document.getElementById('navTog');
const navClose = document.getElementById('navClose')



    if(navTog) {
        navTog.addEventListener('click', () => {
            navMenu.classList.add('showMenu')
        })
    }

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('showMenu')
        })
    }


// export * from "new";