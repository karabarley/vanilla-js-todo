// Test that input is working
console.log('hello')

let todoItems = [];

// 1. ADDING TO-DO ITEMS
function addTodo(text) {
  const todo = {
    text, // text: text,
    checked: false,
    id: Date.now(),
  };

  // todoItems.push(todo); // Note this is an example of mutable operation:
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
    return `<li class="todo-item" data-key="${todo.id}">
          <input id="${todo.id}" type="checkbox"/>
          <label for="${todo.id}" class="tick js-tick"></label>
          <span>${todo.text}</span>
          <button class="delete-todo js-delete-todo">
           <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>`
  })

  const listString = listStingArray.join('')
  const list = document.querySelector('.js-todo-list');
  list.innerHTML = listString
});

// 2. ADDING TO-DO ITEMS