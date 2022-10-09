import './main.css'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer';

function Main() {
  return (
    <section className="main">
      <TaskList />
      <Footer />
    </section>
  );
}

export default Main;