import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Footer from './components/Footer';
import EditTaskComponent from './components/EditTaskComponent';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editText, setEditText] = useState('');

  
  const appLayoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle = {
    marginLeft: '200px', 
    padding: '20px', 
    flex: '1', 
    overflowY: 'auto', 
  };

  const sidebarStyle = {
    height: '100%', 
    width: '200px',
    backgroundColor: '#000',
    position: 'fixed',
    top: '168px', 
    left: 0,
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '20px',
    fontSize: '18px',
    border: '1px solid rgba(255, 255, 255, 0.5)', 
    borderRadius: '5px',
    padding: '10px 15px', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    transition: 'background-color 0.3s, transform 0.2s', 
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
};


  return (
    <Router>
      <div style={appLayoutStyle}>
        <Header />

        
        <nav style={sidebarStyle}>
          <Link to="/" style={linkStyle}>
            View Saved Tasks
          </Link>
          <Link to="/add-task" style={linkStyle}>
            Add Task
          </Link>
        </nav>

        
        <div style={mainContentStyle}>
          <Routes>
            <Route
              path="/"
              element={<TaskList tasks={tasks} setEditText={setEditText} setTasks={setTasks} />}
            />
            <Route
              path="/add-task"
              element={<AddTask inputValue={inputValue} setInputValue={setInputValue} setTasks={setTasks} tasks={tasks} />}
            />
            <Route
              path="/edit-task/:index"
              element={<EditTaskComponent tasks={tasks} setEditText={setEditText} editText={editText} setTasks={setTasks} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
