import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editText, setEditText] = useState('');

 
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  
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

 
  const updateTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = editText;
    setTasks(newTasks);
  };

  return (
    <Router>
      <nav  style={{ textAlign: 'center',height:'50px',backgroundColor:'black' }}>
        <Link to="/" style={{ marginRight: '20px',color:'white' }}>View Saved Task</Link>
        <Link to="/add-task" style={{color:'white' }}>Add Task</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} toggleTask={toggleTask} startEditing={startEditing} deleteTask={deleteTask} />}
        />
        <Route
          path="/add-task"
          element={<AddTask inputValue={inputValue} setInputValue={setInputValue} addTask={addTask} />}
        />
        <Route
          path="/edit-task/:index"
          element={<EditTaskComponent tasks={tasks} setEditText={setEditText} editText={editText} updateTask={updateTask} />}
        />
      </Routes>
    </Router>
  );
}


function EditTaskComponent({ tasks, setEditText, editText, updateTask }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const taskIndex = parseInt(index);

  
  React.useEffect(() => {
    if (tasks[taskIndex]) {
      setEditText(tasks[taskIndex].text);
    }
  }, [taskIndex, tasks, setEditText]);

  return (
    <EditTask
      editText={editText}
      setEditText={setEditText}
      updateTask={(index) => {
        updateTask(taskIndex);
        navigate('/');
      }}
    />
  );
}

export default App;
