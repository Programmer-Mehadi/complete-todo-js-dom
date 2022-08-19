const todoListSection = document.getElementById('incomplete-todo-list');
const completeTodoListSection = document.getElementById('complete-todo-list');
document.getElementById('add-todo-button').addEventListener('click', function () {

    const todoInput = document.getElementById('todo-input');
    const todoInputValue = todoInput.value;
    if(todoInputValue!==''){
    const div = document.createElement('div');
    const cardClassList = ['card', 'w-full', 'bg-base-100', 'shadow-lg', 'overflow-visible', 'bg-gray-100'];
    for (let className of cardClassList) {
        div.classList.add(className);
        }
    div.innerHTML = `
            <div class="card-body flex flex-col gap-4">
            <div class="option-list flex flex-row gap-4 items-center">
              <label for="my-modal-3" class"modal-button"><i class="view fa-solid fa-file text-gray-400 cursor-pointer"></i></label>
              
                <i
                  class="status-box fa-solid fa-square-check text-sky-400 cursor-pointer"
                ></i>
                <label for="my-modal-4" class"modal-button"><i
                  
                class="edit fa-solid fa-pen-to-square text-green-600 cursor-pointer"
              ></i></label>
                
                <i
                  class="delete fa-solid fa-trash-can text-rose-600 cursor-pointer"
                ></i>
              </div>
              <p   class="overflow-auto  w-full">
                 ${todoInputValue}
              </p>
              
            </div> 
    `
    todoListSection.appendChild(div);
    todoInput.value = '';}
});


function makeCompleteTodo(todo) {
    const todoInputValue = todo.children[0].children[1].innerText;
    const div = document.createElement('div');
    const cardClassList = ['card', 'w-full', 'bg-base-100', 'shadow-lg', 'overflow-visible', 'bg-gray-100'];
    for (let className of cardClassList) {
        div.classList.add(className);
        }
    div.innerHTML = `
            <div class="card-body flex flex-col gap-4">
            <div class="option-list flex flex-row gap-4 items-center">
              <label for="my-modal-3" class"modal-button"><i class="view fa-solid fa-file text-gray-400 cursor-pointer"></i></label>
              
                 
                <label for="my-modal-4" class"modal-button"><i
                  
                class="edit fa-solid fa-pen-to-square text-green-600 cursor-pointer"
              ></i></label>
                
                <i
                  class="delete fa-solid fa-trash-can text-rose-600 cursor-pointer"
                ></i>
              </div>
              <p   class="overflow-auto  w-full">
                 ${todoInputValue}
              </p>
              
            </div> 
    `
    completeTodoListSection.appendChild(div);
}
document.getElementById('incomplete-todo-list').addEventListener('click', function (event) {

    if(event.target.classList[0] === 'delete'){
        const deleteTodo = event.target.parentNode.parentNode.parentNode;
        todoListSection.removeChild(deleteTodo); 
    }
    else if(event.target.classList[0] === 'view'){
        const viewTodo = event.target.parentNode.parentNode.parentNode;
        document.getElementById('modal-todo-content').innerText = viewTodo.children[1].innerText;       
    }
    else if(event.target.classList[0] === 'edit'){
        const editTodo = event.target.parentNode.parentNode.parentNode;
        document.getElementById('modal-edit-todo-content').value = editTodo.children[1].innerText; 
        document.getElementById('save-todo').addEventListener('click', function () {
            const newTodoValue = document.getElementById('modal-edit-todo-content').value;
            if (newTodoValue !== '') {
                editTodo.children[1].innerText = newTodoValue;
            }
            
             
        })
    }
    else if (event.target.classList[0] === 'status-box') {
        const todo = event.target.parentNode.parentNode.parentNode;
        makeCompleteTodo(todo);
        todoListSection.removeChild(todo);
    }
});
document.getElementById('complete-todo-list').addEventListener('click', function (event) {

    if(event.target.classList[0] === 'delete'){
        const deleteTodo = event.target.parentNode.parentNode.parentNode;
        completeTodoListSection.removeChild(deleteTodo); 
    }
    else if(event.target.classList[0] === 'view'){
        const viewTodo = event.target.parentNode.parentNode.parentNode;
        document.getElementById('modal-todo-content').innerText = viewTodo.children[1].innerText;       
    }
    else if(event.target.classList[0] === 'edit'){
        const editTodo = event.target.parentNode.parentNode.parentNode;
        document.getElementById('modal-edit-todo-content').value = editTodo.children[1].innerText; 
        document.getElementById('save-todo').addEventListener('click', function () {
            const newTodoValue = document.getElementById('modal-edit-todo-content').value;
            if (newTodoValue !== '') {
                editTodo.children[1].innerText = newTodoValue;
            }
            
             
        })
    }
     
});

