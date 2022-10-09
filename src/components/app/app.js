import './app.css';

import NewTaskForm from '../new-task-form/new-task-form';
import Main from '../main/main';


function App() {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <Main />
    </section>
  );
}

export default App;
