function centerTitle() {
    const heroText = document.querySelector('.hero-text');

    heroText.setAttribute('style', `left: ${(window.innerWidth - heroText.clientWidth)/2}px ;`);
}

window.addEventListener('resize', centerTitle);

centerTitle();