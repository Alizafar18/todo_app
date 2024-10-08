import React from 'react';
import { Link } from 'react-router-dom';


function TaskList({ tasks,setEditText,setTasks }) {

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  
  const startEditing = (index) => {
    setEditText(tasks[index].text);
  };



  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1 style={{ width: '250px', textAlign: 'center', marginLeft: '400px' }}>Task List</h1>
   
      <ul style={{ listStyle: 'none', padding: 0, width: '95%', marginLeft: '40px', textAlign: 'left'}}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0', textDecoration: task.completed ? 'line-through' : 'none' }}>
            <div style={{border: '1px solid #ccc',           
             width: '98%',                        
             margin: '10px auto',                 
             height: 'auto',                      
             padding: '10px',                     
             borderRadius: '8px',                 
             backgroundColor: '#f9f9f9',          
             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',  
             display: 'flex',                     
             alignItems: 'center',                
             justifyContent: 'space-between',     
             transition: 'background-color 0.3s ease' }}><span onClick={() => toggleTask(index)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span></div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
  <button onClick={() => startEditing(index)} style={{
    backgroundColor: 'grey',
    borderRadius: '8px',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer'
  }}>
    <Link to={`/edit-task/${index}`} style={{ textDecoration: 'none', color: 'white' }}>Edit</Link>
  </button>
  
  <button onClick={() => deleteTask(index)} style={{
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '4px',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer'
  }}>
    Delete
  </button>
</div>

          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default TaskList;
