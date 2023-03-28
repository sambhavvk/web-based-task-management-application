import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: this.state.title,
      description: this.state.description
    };
    this.props.onAddTask(newTask);
    this.setState({title: '', description: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        <label>Description:</label>
        <textarea value={this.state.description} onChange={this.handleDescriptionChange} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default AddTask;
