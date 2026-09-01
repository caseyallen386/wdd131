(function() {
    const TODAY = new Date();

    document.getElementById('last-modified').innerHTML = "Last Modified: " + document.lastModified;
    document.getElementById('currentyear').innerHTML = TODAY.getFullYear();
})()