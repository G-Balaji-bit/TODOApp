import React, { useState } from 'react'; 
import TodoList from './TodoList'; 
import AddTodo from './AddTodo'; 
const App = () => {
const [todos, setTodos] = useState([]); 
const handleAddTodo = (newTodo) => { 
setTodos([...todos, newTodo]);
};
const handleDeleteTodo = (id) => { 
setTodos(todos.filter((todo) => todo.id !== id));
};
return (
<div className="App">
<h1>TODO App</h1>
<AddTodo onAdd={handleAddTodo} />
<TodoList todos={todos} onDelete={handleDeleteTodo} />
</div>
);
};
export default App;