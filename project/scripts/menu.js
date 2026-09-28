const menu = document.getElementById('main-menu'),
    mobileMenuButton = document.getElementById('mobile-menu-button');


mobileMenuButton.addEventListener('click', () => {
    //TODO: see if we can make this menu a little better
    let isOpen = mobileMenuButton.getAttribute('aria-expanded') == "true";

    console.log(isOpen);

    switch(isOpen) {
        case true:

            menu.style.left = '100vw';
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            setTimeout(() => menu.style.zIndex = '0', 400);
            break;

        case false:

            menu.style.left = '0px';
            menu.style.zIndex = '500';

            mobileMenuButton.setAttribute('aria-expanded', 'true');

            break;
    }
});
