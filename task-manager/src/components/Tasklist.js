import React from "react";
import Task from "./Task"
function Tasklist(props) {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} />);
    return (
      <div>
        {tasks}
      </div>
    );
  }

export default Tasklist;  
