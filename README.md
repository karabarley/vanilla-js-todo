# vanilla-js-todo

## Resources
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Course: https://learnjavascript.online/


## Topics to go over
- Functions & ES6
  - Arrow functions and the 'this' keyword
  - Ternary
  - Template strings
  - Spread operator

- Arrays & Objects
  - Array Methods
  - .map()
  - .filter()

- DOM Manipulation
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents


## Project: Vanilla-JS TO-DO
We'll start by going over this exercise but make some slight modifications:
https://freshman.tech/todo-list/#getting-started

1. Add a to-do item
Once the user adds a task, we’ll push a new todo object into the array and render the text on the screen. 

2. Check off to-do item off
When the user completes a todo by checking it off,
we will toggle a class of 'done' to the to-do item,
and toggle the checked property in the todo item to true

3. Delete to-do item off
When the user deletes a todo, we’ll locate the todo item in the array using its id and remove it.


## Data Shapes
```
todo = {
  text : 'Buy groceries', // string 
  checked: false // boolean 
  id = 1589234345551 // Date.now() used to create a unique identifier
  
}

todoList = [{}, {}, {}]
```