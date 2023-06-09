function handleCostKeydown(){
    if(event.key === 'Enter'){
    addTodo()
    }
}
const todoList = JSON.parse(localStorage.getItem('toDoList'))||[{
   name: 'make dinner',
   dueDate: '2023-06-7', 
   
},{
   name: 'wash dishes',
   dueDate: '2023-06-7'
}]

renderTodoList()


function renderTodoList(){
let todoListHTML = '';

todoList.forEach((todoObj,index)=>{
    const {name,dueDate} = todoObj
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
<button class="delete-button js-delete"
">Delete</button>`
    todoListHTML += html
})
document.querySelector('.div').innerHTML = todoListHTML

document.querySelectorAll('.js-delete')
    .forEach((deleteButton,index) =>{
        deleteButton.addEventListener('click',() =>{
            todoList.splice(index,1);
             renderTodoList()
                 save()
        })
    })

}


function addTodo(){
  const input = document.querySelector('.js-input')
  const date = document.querySelector('.js-due')
  let name = input.value
  let dueDate = date.value
  todoList.push({
    name,
    dueDate
})

 input.value = ''

 renderTodoList()
save()
}

function save(){
    
    localStorage.setItem('toDoList',JSON.stringify(todoList))
}


