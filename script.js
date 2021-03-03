// Your code here
//added during "Creating Elements"

//grabs all 'table' elements and puts them into a collection. 
//use array syntax to access the element we want (there is only one table in our index.html, so we want the first element in the collection) 
const table = document.getElementsByTagName('table')[0];

//added during 4) Choosing A Color
let currentColor = 'red';

function makeRow(){
    const tr = document.createElement('tr');
    for(let i=0; i < 20; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

makeRow();
makeRow();

//added during "Making Rows"
const addRowButton = document.getElementById('add-row');
addRowButton.addEventListener('click', makeRow);

//added during 3) Event Delegation
function colorize(event){
    const target = event.target;
    if(target.tagName.toLowerCase() === 'td'){ //added during 5) Finishing Touches
        if(target.className !== currentColor){ //changed during 4) Toggling Colors
            target.className = currentColor; //changed during 4) Choosing A Color
        } else{
            target.className = '';
        }
    }
}
table.addEventListener('click', colorize)

//added during 4) Change Event
const select = document.getElementsByTagName('select')[0];

//added during 4) Choosing A Color
function changeColor(event){
    currentColor = event.target.value;
}

//changed during 4) Choosing A Color
select.addEventListener('change', changeColor)

//added during 5) Dragging to Paint
table.addEventListener('mousedown', addMouseOverListener);
table.addEventListener('mouseup', removeMouseOverListener);

function addMouseOverListener(){
    table.addEventListener('mouseover', colorize)
}

function removeMouseOverListener(){
    table.removeEventListener('mouseover', colorize)
}