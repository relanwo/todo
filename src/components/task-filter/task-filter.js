import './task-filter.css'
import { Component } from 'react';

export default class TaskFilter extends Component{

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'},
  ]

  render() {

    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : ''

      return (
        <li key={name}>
          <button 
            type="button" 
            className={clazz}
            onClick={() => onFilterChange(name) } >
            {label}
          </button>
        </li>
      )
    })

    return (
      <ul className="filters">
        {buttons}
      </ul>
    );
  }
}

      // <ul className="filters">
      //     <TaskFilter class={'selected'} innerText={'All'}/>
      //     <TaskFilter innerText={'Active'}/>
      //     <TaskFilter innerText={'Completed'}/>
      // </ul>