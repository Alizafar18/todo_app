import React from 'react';

function AddTask({ tasks,inputValue, setInputValue, setTasks}) {

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  
  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1 style={{ width: '250px', textAlign: 'center', marginLeft: '400px' }}>Add Task</h1>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new task"
        style={{ padding: '10px', fontSize: '16px', marginLeft: '50px', width:'80%' }}
      />
      <button onClick={addTask} style={{ marginLeft: '10px', padding: '10px 15px', fontSize: '16px' }}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
