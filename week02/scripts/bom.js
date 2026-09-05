(function() {

    let bomList = document.querySelector('#list'), 
        chapter = document.querySelector('#favchap');
    

    document.querySelector('button').onclick = function(){
        let li = document.createElement('li'),
            deleteButton = document.createElement('button');

        deleteButton.innerHTML = '&#x274c';
        deleteButton.setAttribute('class', 'delete');


        deleteButton.addEventListener('click', () => {
            this.parentElement.remove();
        });

        li.textContent = chapter.value;
        
        li.appendChild(deleteButton)

        bomList.appendChild(li);


        

    };

    

})();