import React from "react"
import { Component } from 'react'
import PropTypes from 'prop-types';

import './task.css'

export default class Task extends Component {

  static defaultProps = {
    onDeleted: () => {},
    onToggleEdit: () => {},
    onToggleDone: () => {},
    onSubmit: () => {},
  }

  static propTypes = {
    fieldClass: PropTypes.oneOf(['active', 'editing', 'completed']),
    itemProps: PropTypes.array,
    id: PropTypes.number,
  }

  onValueChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { onDeleted, onToggleEdit, onToggleDone, fieldClass, id, onSubmit, ...itemProps } = this.props;

    let input
    fieldClass === 'editing' 
      ? input = (<input type="text" className="edit" autoFocus
                        defaultValue={itemProps.text}
                        onChange={this.onValueChange}
                        onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          onSubmit(id, e.target.value)
                          onToggleEdit(id)
                        }
                        }} >
                </input>)
      : input = ''

    return (
      <li className={fieldClass}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox" 
            onClick={onToggleDone}
          />
          <label>
            <span className="description">{itemProps.text}</span>
            <span className="created">created {itemProps.timeGone} ago</span>
          </label>
          <button 
            className="icon icon-edit"
            onClick={onToggleEdit}
          ></button>
          <button 
            className="icon icon-destroy"
            onClick={onDeleted}
          ></button>
        </div>
        { input }
      </li>
    );
  }
}