// Your code here
//added during "Creating Elements"

//grabs all 'table' elements and puts them into a collection. 
//use array syntax to access the element we want (there is only one table in our index.html, so we want the first element in the collection) 
const table = document.getElementsByTagName('table')[0];

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
    if(target.className === ''){
        target.className = 'red';
    } else{
        target.className = '';
    }
}
table.addEventListener('click', colorize)

//added during 4) Change Event
const select = document.getElementsByTagName('select')[0];
select.addEventListener('change', (event) => {
    console.log(event.target.value)
})