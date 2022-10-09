import './task-filter.css'

function TaskFilter(props) {
  return (
    // <ul className="filters">
      <li>
        <button className={props.class}>{props.innerText}</button>
      </li>
    // </ul>
  );
}

export default TaskFilter;