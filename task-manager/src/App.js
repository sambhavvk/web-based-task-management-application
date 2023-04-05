import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import EditTask from './components/EditTask';
import Login from './components/Login';
import TaskDetails from './components/TaskDetails';
import UserList from './components/UserList';
import Tasklist from './components/Tasklist';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'This is the first task', completed: false },
    { id: 2, title: 'Task 2', description: 'This is the second task', completed: true },
    { id: 3, title: 'Task 3', description: 'This is the third task', completed: false },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSelectTask = (task) => {
    setSelectedTask(task);
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  return (
    <Router>
      <div>
        {!isLoggedIn && (
          <div>
            <h1>Task Management Application</h1>
            <Login onLoginSuccess={handleLoginSuccess} />
            <Link to="/register">Register</Link>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <h1>Welcome, User!</h1>
            <Switch>
              <Route exact path="/">
                <Tasklist />
              </Route>
              <Route path="/add-task">
                <AddTask onAddTask={handleAddTask} />
              </Route>
              <Route path="/edit-task/:id">
                <EditTask tasks={tasks} onEditTask={handleEditTask} />
              </Route>
              <Route path="/task-details/:id">
                <TaskDetails tasks={tasks} />
              </Route>
              <Route path="/delete-task/:id">
                <DeleteTask tasks={tasks} onDeleteTask={handleDeleteTask} />
              </Route>
              <Route path="/user-list">
                <UserList users={users} onSelectUser={handleSelectUser} />
              </Route>
              <Route path="/register">
                <RegistrationForm />
              </Route>
            </Switch>
          </div>
        )}
      </div>
    </Router>
  );
}
export default App;
