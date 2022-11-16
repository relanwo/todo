import './footer.css'
import TaskFilter from '../task-filter';

function Footer({ todos }) {
  // const {todoData} = this.props
  // const doneCount = todos.filter((el) => el.done).length;
  // const todoCount = todos.length - doneCount

  return (
    <footer className="footer">
      <span className="todo-count">{1} items left</span>
      <ul className="filters">
        <TaskFilter class={'selected'} innerText={'All'}/>
        <TaskFilter innerText={'Active'}/>
        <TaskFilter innerText={'Completed'}/>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;