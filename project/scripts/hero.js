function centerTitle() {
    const h1 = document.querySelector('h1');

    h1.setAttribute('style', `left: ${(window.innerWidth - h1.offsetWidth)/2}px ;`);
}

window.addEventListener('resize', centerTitle);

centerTitle();