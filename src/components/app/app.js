import React from "react"
import { Component } from 'react';

import './app.css';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('sdfghjkl'),
      this.createTodoItem('00-0-0-0=-'),
      this.createTodoItem('uuuuuuuuuuuu'),
      // { fieldClass: 'completed', text: 'Completed task', created: '17 seconds', id: 1 },
      // { fieldClass: 'editing', description: 'Editing task', created: '5 seconds', id: 2 },
      // { fieldClass: 'active', description: 'Active task', created: '5 minutes', id: 3 },
    ],
    filter: 'all', //all, active, completed
    timer: ''
  };

  createTodoItem(text) {
    return {
      text,
      fieldClass: 'active',
      created: new Date(),
      id: this.maxId++
    }
  }

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

  addItem = (text) => {
    // generate id
    const newItem = this.createTodoItem(text)

    // add item
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      }
    })
  }

  toggleProperty(arr, id, propClass) {
    const idx = arr.findIndex((el) => el.id === id)

    // 1. update object
    const oldItem = arr[idx]
    const toggledClass = oldItem.fieldClass === 'active' ? propClass : 'active'
    const newItem = {...oldItem, fieldClass: toggledClass}
    
    // 2. construct new array
    return [ 
      ...arr.slice(0, idx), 
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleDone = (id) => {
    // console.log('onToggleDone', id)
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed')
      }
    })
    // this.setState(({todoData}) => {
    //   const idx = todoData.findIndex((el) => el.id === id)

    //   const oldItem = todoData[idx]
    //   const toggledClass = oldItem.fieldClass === 'active' ? 'completed' : 'active'
    //   const newItem = {...oldItem, fieldClass: toggledClass}

    //   const newArray = [ 
    //     ...todoData.slice(0, idx), 
    //     newItem,
    //     ...todoData.slice(idx + 1)
    //   ]
    //   return {
    //     todoData: newArray
    //   }
    // })
  }

  onToggleEdit = (id) => {
    // console.log('onToggleEdit', id)
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'editing')
      }
    })
    // this.setState(({todoData}) => {
    //   const idx = todoData.findIndex((el) => el.id === id)

    //   const oldItem = todoData[idx]
    //   const toggledClass = oldItem.fieldClass === 'active' ? 'editing' : 'active'
    //   const newItem = {...oldItem, fieldClass: toggledClass}

    //   const newArray = [ 
    //     ...todoData.slice(0, idx), 
    //     newItem,
    //     ...todoData.slice(idx + 1)
    //   ]
    //   return {
    //     todoData: newArray
    //   }
    // })
  }

  onCompletedDeleted = () => {
    this.setState(({ todoData }) => {
      let completedArray = todoData.filter((item) => item.fieldClass === 'completed')

      completedArray.forEach((item, i) => this.deleteItem(item.id))
    })
  }

  filter(items, filter) {
    switch(filter) {
      case 'all':
        // console.log('a')
        return items;
      case 'active':
        // console.log(items.filter((item) => item.fieldClass === 'active'))
        return items.filter((item) => item.fieldClass === 'active')
      case 'completed':
        // console.log(items.filter((item) => item.fieldClass === 'completed'))
        return items.filter((item) => item.fieldClass === 'completed')
      default:
        // console.log('d')
        return items;
      }
    };
  
  onFilterChange = (filter) => {
    this.setState({filter})
  }

  // setInterval(this.refreshTime, 10000);
          
  render() {
    const { todoData, filter, timer } = this.state

    const visibleItems = this.filter(todoData, filter)

    const doneCount = todoData.filter((el) => {
      return el.fieldClass === 'completed'
    }).length;
    const todoCount = todoData.length - doneCount

    return (
      <section className="todoapp">
        
        <NewTaskForm
          onItemAdded={ this.addItem }
         />
        <section className="main">
          <TaskList 
            todos={ visibleItems } 
            onDeleted={ this.deleteItem }
            onToggleEdit={ this.onToggleEdit }
            onToggleDone={ this.onToggleDone }
            timer={ timer }
          />
          <Footer 
            toDo={ todoCount } 
            onCompletedDeleted={ this.onCompletedDeleted }
            filter={ filter }
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}