console.log('hello') // test to see that JS is running

let todoItems = [];

// 1. ADDING TO-DO ITEMS
const addTodo = (text) => {
  const todo = {
    text, // text: text,
    checked: false,
    id: Date.now(),
  };

  // todoItems.push(todo); // This is an example of mutable operation:
  // https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript
  todoItems = [...todoItems, todo] //
}

const form = document.querySelector('.js-form');

form.addEventListener('submit', event => {
  // https://developer.mozilla.org/en-US/docs/Web/Events
  event.preventDefault(); 
  const input = document.querySelector('.js-todo-input');
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    // clear input
    input.value = '';
  }

  const listStingArray = todoItems.map((todo) => {
    return `<li class="todo-item ${todo.checked ? "done" : " "}" data-key="${todo.id}">
          <input id="${todo.id}" type="checkbox"/>
          <label for="${todo.id}" class="tick js-tick "></label>
          <span>${todo.text}</span>
          <button class="delete-todo js-delete-todo">
           <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>`
  })

  const listString = listStingArray.join('')
  const list = document.querySelector('.js-todo-list');
  list.innerHTML = listString

  // 2. CHECKING OFF TO-DO ITEMS 
  const todoItemsLi = document.querySelectorAll('.todo-item');
  // Nodelist methods: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
  todoItemsLi.forEach((todoItemli, index) => {
    todoItemli.addEventListener('click', event => {
        if (todoItemli.classList.contains('done')) {
          todoItemli.classList.remove('done');
          
        } else {
          todoItemli.classList.add('done');
        }
        todoItems[index].checked = !todoItems[index].checked;
    });
  });

  // 3. DELETE TO-DO ITEMS (HOMEWORK - Follow the article)
    const deleteButtons = document.querySelectorAll('.delete-todo');
    // Nodelist methods: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', event => {
        event.stopPropagation();
        console.log('clicked')
      });
    });
});



