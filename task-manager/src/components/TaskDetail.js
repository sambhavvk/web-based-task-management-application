function TaskDetail(props) {
    const { task } = props;
    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
        <p>Assigned To: {task.assignedTo}</p>
      </div>
    );
  }
  