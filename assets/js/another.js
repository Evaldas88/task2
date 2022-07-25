const add = document.querySelector('#add');
const todolist = document.querySelector('ul');
const toInput = document.querySelector('#userinput');
const ul = document.querySelector('ul');
let masyvas =[]
const creatToDo = () =>{

     if (toInput.value.length > 0){
        let todo = document.createElement("li");
     
     const todoText = document.querySelector('input').value;

     todo.textContent = todoText;

     todolist.appendChild(todo);

     const deleteButton = document.createElement('button');

     deleteButton.textContent = 'x';
     deleteButton.onclick = () =>{
        deleteButton.parentNode.remove();
     };
     todo.appendChild(deleteButton);
    };
}

    // const toggleDone = ()=>{
    //     if(event.target.tagname === 'LI'){
    //         event.target.classList.toggle('done')
    //     }
    // }

    add.onsubmit = (event) =>{
        event.preventDefault();
        creatToDo(toInput.value)
        toInput.value = masyvas.push(toInput.value)
        console.log(aaa)

    }

    // ul.addEventListener("click", toggleDone);
