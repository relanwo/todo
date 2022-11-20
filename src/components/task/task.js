import React from "react"
import { Component } from 'react'
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns'

import './task.css'

export default class Task extends Component {

  static defaultProps = {
    onDeleted: () => {},
    onToggleEdit: () => {},
    onToggleDone: () => {},
  }

  static propTypes = {
    fieldClass: PropTypes.oneOf(['active', 'editing', 'completed']),
    // timer
    itemProps: PropTypes.array
  }

  render() {
    const { onDeleted, onToggleEdit, onToggleDone, fieldClass, timer, id, ...itemProps } = this.props;

    let input
    fieldClass === 'editing' 
      ? input = <input type="text" className="edit" defaultValue={itemProps.text}></input>
      : input = ''

    return (
      <li className={fieldClass} key={id}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox" 
            onClick={onToggleDone}
          />
          <label>
            <span className="description">{itemProps.text}</span>
            {/* <span className="created">created {formatDistanceToNow(new Date())} ago</span> */}
            {/* <span className="created">created {setInterval(formatDistanceToNow(Date.now() - +itemProps.created, {includeSeconds: true}), 10000)} ago</span> */}
            <span className="created">created {timer} ago</span>
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