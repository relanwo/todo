import './task.css'
import { formatDistanceToNow } from 'date-fns'

function Task(props) {
  if (props.description === 'Editing task') {
    return (
      <li className={props.class}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{props.description}</span>
          <span className="created">created {formatDistanceToNow(new Date())} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" class="edit" value="Editing task"></input>
    </li>
    );
  }
  return (
    <li className={props.class}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{props.description}</span>
          <span className="created">created {formatDistanceToNow(new Date())} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

export default Task