import './footer.css'
import TaskFilter from '../task-filter';

function Footer({ toDo, onCompletedDeleted, filter, onFilterChange}) {

  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TaskFilter 
        filter={ filter }
        onFilterChange={onFilterChange} />
      {/* <ul className="filters"> */}
        {/* <TaskFilter class={'selected'} innerText={'All'}/>
        <TaskFilter innerText={'Active'}/>
        <TaskFilter innerText={'Completed'}/> */}
      {/* </ul> */}
      <button 
        className="clear-completed"
        onClick={ onCompletedDeleted }
      >
          Clear completed
      </button>
    </footer>
  );
}

export default Footer;