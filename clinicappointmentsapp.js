let id=0;

document.getElementById('add').addEventListener('click',()=>{
    let createdDate= new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id',`item-${id}`);
    row.insertCell(0).innerHTML= document.getElementById('new-date').value;
    row.insertCell(1).innerHTML= document.getElementById('new-time').value;
    row.insertCell(2).innerHTML= document.getElementById('new-name').value;
    row.insertCell(3).innerHTML=`${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`;
    row.insertCell(4).innerHTML= document.getElementById('new-comment').value;
    
  
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-name').value='';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className='btn btn-light';
    btn.id=id;
    btn.innerHTML='Delete';
    btn.onclick=()=>{
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}