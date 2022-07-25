let button = document.querySelector('#submit');
let input = document.querySelector('#userinput');
let ul = document.querySelector('ul');
let lis = document.querySelector('li');
let deleteButton;

const inputLength = () => {
    return input.value.length;
}

const createDeleteButton = (parent) =>{
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('X'));
    button.className = 'delete';
    parent.appendChild(button);
}

const toggleDoneClass = () => {
    this.classList.toggle('done');
}

const createList =() => {
    let li = document.querySelector('li');
    let span = document.querySelector('span');
    li.appendChild(span);
    span.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    createDeleteButton(li);
    deleteButton = document.querySelectorAll('.delete')
    updateDeleteButton()
    li.addEventListener('click', toggleDoneClass);
    input.value = '';
}

 const addListAfterClick = () => {
    if(inputLength() > 0)
    createList();
 }
  
 const addListAfter = (event ) =>{
    if(inputLength() > 0 && event.keyCode === 13)
    createList();
 }

 const updateDeleteButton = () => {
    for ( let i = 0 ; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', function(){
            this.parentNode.remove()
        })
    }
 }

 button.addEventListener('click', addListAfterClick);
 input.addEventListener('keypress', addListAfter);

 for (let i = 0; i < lis.length; i++) {

    lis[i].addEventListener('click', toggleDoneClass);
    createDeleteButton(lis[i])

 }
 deleteButton = document.querySelectorAll('.delete');
 updateDeleteButton()