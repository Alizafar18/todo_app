import React from 'react';
import { Link } from 'react-router-dom';

function TaskList({ tasks, toggleTask, startEditing, deleteTask }) {
  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1 style={{ width: '250px', textAlign: 'center', marginLeft: '550px' }}>Task List</h1>
   
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
            <div style={{marginLeft:'90.3%'}}>
            <button onClick={() => startEditing(index)} style={{ marginLeft: '10px',backgroundColor:'grey',alignContent:'left',borderRadius:'8px' }}>
              <Link to={`/edit-task/${index}`} style={{ textDecoration: 'none',color:'white' }}>Edit</Link>
            </button>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px',backgroundColor:'grey',color:'white',borderRadius:'4px'  }}>
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
