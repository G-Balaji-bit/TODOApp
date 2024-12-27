import React, { useState } from 'react'; 
const AddTodo = ({ onAdd }) => { 
const [text, setText] = useState(''); 
const handleAdd = () => {
if (text.trim() !== '') {
onAdd({ id: Date.now(), text }); 
setText('');
}
};
return (
<div>
<input type="text" value={text} onChange={(e) => 
setText(e.target.value)} />
<button onClick={handleAdd}>Add Todo</button>
</div>
);
};