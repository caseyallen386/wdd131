const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');
const PI = 3.14159;


// Radius was assigned as a constant
// Needed to change the to use the let keywork instead
let radius = 10;
let area = PI * radius * radius;


// Before
// radiusOutput = radius;
// areaOutput = area;
// After
radiusOutput.textContent = radius;
areaOutput.textContent = area;


//This part overrides the previous calculations so they are never seen in the browser
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;