import './task-list.css'

import Task from '../task';

function TaskList() {
  return (
    <ul className="todo-list">
      <Task class={'completed'} description={'Completed task'} created={'17 seconds'}/>
      <Task class={'editing'} description={'Editing task'} created={'5 minutes'}/>
      <Task description={'Active task'} created={'5 minutes'}/>
    </ul>
  );
}

export default TaskList