import { Component } from 'react'

import './task.css'
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {
	// state = {
	// 	fieldClass: 'active',
	// };

  // onDone = () => {
  //   this.setState(({fieldClass}) => {
  //     if (fieldClass === 'active') {
  //       return {
  //         fieldClass: 'completed'
  //       }
  //     } 
  //     else {
  //       return {
  //         fieldClass: 'active'
  //       }        
  //     }
  //   })
  // }

  // onEdit = () => {
  //   this.setState(({fieldClass}) => {
  //     if (fieldClass === 'active') {
  //       return {
  //         fieldClass: 'editing'
  //       }
  //     } 
  //     else {
  //       return {
  //         fieldClass: 'active'
  //       }        
  //     }
  //   })
  // }

  render() {
    const { onDeleted, onToggleEdit, onToggleDone, fieldClass, ...itemProps } = this.props;
    // const { fieldClass } = this.state

    if (fieldClass === 'editing') {
    return (
      <li className={fieldClass} key={itemProps.id}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{itemProps.text}</span>
          <span className="created">created {formatDistanceToNow(new Date())} ago</span>
        </label>
      </div>
      <input type="text" className="edit" value={itemProps.text}></input>
      </li>
      );
    }
    return (
      <li className={fieldClass} key={itemProps.id}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox" 
            // onClick={this.onDone}
            onClick={onToggleDone}
          />
          <label>
            <span className="description">{itemProps.text}</span>
            <span className="created">created {formatDistanceToNow(new Date())} ago</span>
          </label>
          <button 
            className="icon icon-edit"
            // onClick={this.onEdit}
            onClick={onToggleEdit}
          ></button>
          <button 
            className="icon icon-destroy"
            onClick={onDeleted}
          ></button>
        </div>
      </li>
    );
  }
}