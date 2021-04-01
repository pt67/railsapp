import React from 'react';
import axios from 'axios';

export default class TodoData extends React.Component {
  state = {
    task: []
  }

  componentDidMount() {
  axios('http://127.0.0.1:8000/api/todos')
      .then(res => {
        const task = res.data;
        this.setState({ task });
      })
  }

  render(){
    return (
      <ul>
        { this.state.task.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    )
  }
}
