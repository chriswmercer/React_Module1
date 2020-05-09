import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const root = document.getElementById('root')

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.tasks
    }
  }

  submitHandler = (task) => {
    //copy array don't just add
    const newTasks = this.state.tasks.concat([task])
    this.setState({ tasks: newTasks })
  }

  render() {
    return React.createElement(
      'div',
      { className: 'projectName' },
      this.props.name,
      this.props.children,
      React.createElement(
        'div',
        {},
        this.props.description,
        this.state.tasks.map((task) => {
          return React.createElement(Task, {
            key: task.id,
            id: task.id,
            name: task.name
          })
        })
      ),
    React.createElement(NewTask, {
      handleSubmit: this.submitHandler
    }))
  }
}

Project.propTypes = {
  tasks: PropTypes.arrayOf(Object),
  id: PropTypes.number.isRequired
}

/////////////////////////////////////////////////////////////////////////////////////////

class Task extends Component {
  render() {
    return React.createElement(
      'li',
      { className: 'taskName' },
      this.props.name
    )
  }
}

/////////////////////////////////////////////////////////////////////////////////////////

class NewTask extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = { name: 'Learning React'}
  }

  nameChangedHandler = (event) => {
    const value = event.target.value
    this.setState((prevState, props) => {
      return {
        name: value
      }
    })
  }

  submitHandler = (event) => {
    event.preventDefault();

    const task = {
        name: this.state.name
    }
    task.id = Date.now()
    this.props.handleSubmit(task)

    this.setState((prevState, props) => {
      return {
        name: ''
      }
    })
  }

  render() {
    return React.createElement(
      'form',
      {
        onSubmit: this.submitHandler
      },
      React.createElement('p', {}, this.state.name),
      React.createElement(
        'input',
        {
          type: 'text',
          placeHolder: 'Task Name',
          value: this.state.name,
          onChange: this.nameChangedHandler
        }
      ), 
      React.createElement(
        'input',
        {
          type: 'submit',
          value: 'Post'
        }
      )
    )
  }
}

NewTask.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

/////////////////////////////////////////////////////////////////////////////////////////

const App = React.createElement(Project, {
  name: 'Learn react by building 10 projects',
  id: 1,
  description: "Tasks",
  tasks: [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn C#" },
    { id: 3, name: "Learn Java" },
  ]
});

render(App, root);

