(function(){
    const menuButton = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    menuButton.addEventListener('click', () => {
        

        // Need to compare the string value of the attribute
        // instead of the literal true of false values
        let isOpen = menuButton.getAttribute('aria-expanded') == "true";

        if (isOpen) {
            
            requestAnimationFrame(() => {
                mainMenu.style.height = '0px';
            });

            menuButton.setAttribute('aria-expanded', 'false');
        
        } else {        
            

            mainMenu.style.height = `${mainMenu.scrollHeight}px`;
            menuButton.setAttribute('aria-expanded', 'true');

        }

    });

    window.addEventListener('resize', () =>{
    
        if (window.innerWidth >= 700) {
            mainMenu.removeAttribute('style');
        }    
        

    });

})();