import React from 'react';

function EditTask({ editText, setEditText, updateTask, taskIndex }) {
  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1 style={{ border: 'solid', width: '250px', textAlign: 'center', marginLeft: '550px' }}>Edit Task</h1>

      <input
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Edit task"
        style={{ padding: '10px', fontSize: '16px', marginLeft: '500px' }}
      />
      <button onClick={() => updateTask(taskIndex)} style={{ marginLeft: '10px', padding: '10px 15px', fontSize: '16px' }}>
        Update Task
      </button>
    </div>
  );
}

export default EditTask;
