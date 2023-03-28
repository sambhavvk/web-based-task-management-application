function DeleteTask(props) {
    const { task, onDeleteTask } = props;
  
    const handleDeleteTask = () => {
      onDeleteTask(task.id);
    };
  
    return (
      <div>
        <p>Are you sure you want to delete this task?</p>
        <p>{task.title}</p>
        <button onClick={handleDeleteTask}>Delete</button>
      </div>
    );
  }
export default DeleteTask