import { Component } from 'react';

import './app.css';

import NewTaskForm from '../new-task-form/new-task-form';
// import Main from '../main/main';
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('sdfghjkl'),
      this.createTodoItem('00-0-0-0=-'),
      this.createTodoItem('uuuuuuuuuuuu'),
      // { fieldClass: 'completed', description: 'Completed task', created: '17 seconds', id: 1 },
      // { fieldClass: 'editing', description: 'Editing task', created: '5 seconds', id: 2 },
      // { fieldClass: 'active', description: 'Active task', created: '5 minutes', id: 3 },
    ]
  };

  createTodoItem(text) {
    return {
      text,
      fieldClass: 'active',
      created: new Date(),
      id: this.maxId++
    }
  }
  // changeClass = (fieldClass) => {
  //   this.setState(({ todoData }) => {

  //   })
  //   // console.log(fieldClass)
  // }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      
      const newArray = [ 
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  // toggleProperty(arr, id, propName) {
  //   const idx = arr.findIndex((el) => el.id === id)

  //   // 1. update object
  //   const oldItem = arr[idx]
  //   const newItem = {...oldItem, [propName]: !oldItem[propName]}
    
  //   // 2. construct new array
  //   return [ 
  //     ...arr.slice(0, idx), 
  //     newItem,
  //     ...arr.slice(idx + 1)
  //   ]
  // }

  // onToggleDone = (id) => {
  //   this.setState(({ todoData }) => {
  //     return {
  //       todoData: this.toggleProperty(todoData, id, 'completed')
  //     }
  //   })
  // }

  // onToggleEdit = (id) => {
  //   this.setState(({ todoData }) => {
  //     return {
  //       todoData: this.toggleProperty(todoData, id, 'editing')
  //     }
  //   })
  // }

  render() {
    const { todoData } = this.state

    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList 
            todos={ todoData } 
            // onLabelClick={ this.changeClass }
            onDeleted={ this.deleteItem }
            // onToggleEdit={ this.onToggleEdit }
            // onToggleDone={ this.onToggleDone }
          />
          <Footer 
            // todos={ todoData } 
          />
        </section>
      </section>
    );
  }
}