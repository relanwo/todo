import Task from '../task'
import './task-list.css'

const TaskList = ({ todos, onLabelClick, onDeleted, onToggleEdit, onToggleDone }) => {
  const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
      return (
        // <li key={id} className="list-group-item">
          <Task 
            // {...item}
            {...itemProps} 
            // onLabelClick={() => onLabelClick(itemProps.fieldClass)}
            onDeleted={() => onDeleted(id)}
            // onToggleEdit={() => onToggleEdit(id)}
            // onToggleDone={() => onToggleDone(id)}
          />
        // </li>
      );
    });
  return <ul className="todo-list">{ elements }</ul>
  // return (
  //   <ul className="todo-list">
  //     <Task class={class} description={'Completed task'} created={'17 seconds'}/>
  //     <Task class={class} description={'Editing task'} created={'5 seconds'}/>
  //     <Task class={class} description={'Active task'} created={'5 minutes'}/>
  //   </ul>
  // );
}

export default TaskList