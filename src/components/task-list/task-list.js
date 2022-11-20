import React from "react"
import PropTypes from 'prop-types';

import Task from '../task'
import './task-list.css'

const TaskList = ({ todos, onDeleted, onToggleEdit, onToggleDone, timer }) => {

  TaskList.defaultProps = {
    onDeleted: () => {},
    onToggleEdit: () => {},
    onToggleDone: () => {},
  }

  TaskList.propTypes = {
    toDos: PropTypes.array,
    // timer
  }

  const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
      return (
          <Task 
            { ...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleEdit={() => onToggleEdit(id)}
            onToggleDone={() => onToggleDone(id)}
            timer={ timer }
          />
      );
    });
  return <ul className="todo-list">{ elements }</ul>
}

export default TaskList