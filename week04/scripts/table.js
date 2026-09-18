let tableContainer = document.getElementById('account-compair');



let tableData ={

    packages : [
        'Basic',
        'Premium',
        'Deluxe'
    ],

    features : {
        'feature 1' : [
            '',
            '',
            ''
        ],
        'feature 2' : [
            '',
            '',
        ],
        'feature 3' : [
            '✔️',
            '✔️',
            '✔️'
        ]

    }
};

const table = document.createElement('table'),
      thead = document.createElement('thead'),
      tbody = document.createElement('tbody');

let tr = document.createElement('tr');

tr.appendChild(document.createElement('th'));

for (let i = 0; i <= tableData.packages.length; i++) {
    let th = document.createElement('th');
    th.innerHTML = tableData.packages[i];
    tr.appendChild(th);
}

thead.appendChild(tr);
table.appendChild(thead);


tr = document.createElement('tr');

tableData.features.forEach(element => {
    tr.appendChild(() => {

    });

});