import React, { useState } from 'react';
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import EditTask from './components/EditTask';
import Login from './components/Login';
import TaskDetails from './components/TaskDetails';
import UserList from './components/UserList';
import TaskList from './components/Tasklist';

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
    <div>
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && (
        <div>
          <h1>Task Management Application</h1>
          <UserList users={users} onSelectUser={handleSelectUser} />
          {selectedUser && <h2>Tasks Assigned to {selectedUser.name}</h2>}
          <TaskList tasks={tasks} onSelectTask={handleSelectTask} onTaskCompletion={handleTaskCompletion} selectedUser={selectedUser} />
          {selectedTask && <TaskDetails task={selectedTask} />}
          <AddTask onAddTask={handleAddTask} />
          <EditTask task={selectedTask} onEditTask={handleEditTask} />
          <DeleteTask taskId={selectedTask ? selectedTask.id : null} onDeleteTask={handleDeleteTask} />
        </div>
      )}
    </div>
  );
}

export default App;
