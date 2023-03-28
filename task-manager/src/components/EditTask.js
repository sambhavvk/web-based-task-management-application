import React from "react";
class EditTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: props.task.title,
        description: props.task.description,
        dueDate: props.task.dueDate,
        priority: props.task.priority,
        assignedTo: props.task.assignedTo,
      };
    }
  
    handleInputChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
  
      this.setState({
        [name]: value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      const updatedTask = {
        id: this.props.task.id,
        title: this.state.title,
        description: this.state.description,
        dueDate: this.state.dueDate,
        priority: this.state.priority,
        assignedTo: this.state.assignedTo,
      };
      this.props.onEditTask(updatedTask);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Due Date:
            <input
              name="dueDate"
              type="date"
              value={this.state.dueDate}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Priority:
            <select
              name="priority"
              value={this.state.priority}
              onChange={this.handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            Assigned To:
            <input
              name="assignedTo"
              type="text"
              value={this.state.assignedTo}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      );
    }
  }
export default EditTask