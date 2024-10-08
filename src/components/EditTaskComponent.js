
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



function EditTaskComponent({ tasks, setEditText, editText,setTasks}) {
  const { index } = useParams(); 
  const navigate = useNavigate(); 

  const taskIndex = parseInt(index);
  const updateTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = editText;
    setTasks(newTasks);
  };
  
  useEffect(() => {
    if (tasks[taskIndex]) {
      setEditText(tasks[taskIndex].text);
    }
  }, [taskIndex, tasks, setEditText]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Edit Task</h2>
      <input
        value={editText}
        onChange={(e) => setEditText(e.target.value)} 
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={() => {
          updateTask(taskIndex); 
          navigate('/');
        }}
        style={{ marginLeft: '10px', padding: '10px 15px', fontSize: '16px' }}
      >
        Update Task
      </button>
    </div>
  );
}

export default EditTaskComponent;
