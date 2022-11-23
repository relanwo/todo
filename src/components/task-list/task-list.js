import React from "react"
import PropTypes from 'prop-types';

import Task from '../task'
import './task-list.css'

const TaskList = ({ todos, onDeleted, onToggleEdit, onToggleDone, onSubmit }) => {

  TaskList.defaultProps = {
    onDeleted: () => {},
    onToggleEdit: () => {},
    onToggleDone: () => {},
    onSubmit: () => {},
  }

  TaskList.propTypes = {
    toDos: PropTypes.array,
  }

  const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
      return (
          <Task 
            { ...itemProps}
            key={id}
            id={id}
            onDeleted={() => onDeleted(id)}
            onToggleEdit={() => onToggleEdit(id)}
            onToggleDone={() => onToggleDone(id)}
            onSubmit={onSubmit}
          />
      );
    });
  return <ul className="todo-list">{ elements }</ul>
}

export default TaskList