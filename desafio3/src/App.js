import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    { id: 1, name: 'Joana', job:'Programmer', age: 26 },
    { id: 2, name: 'Ana', job:'Manager', age: 33 },
    { id: 3, name: 'Maria', job:'Student', age: 17 },
    { id: 4, name: 'Antonia', job:'Teacher', age: 28 },
    { id: 5, name: 'Joaquina', job:'Student', age: 15 },
  ];

  return (
    <div className="App">
      {/*Tarefa 3 - Seção 3 */}
      <h1>Seção 3</h1>

      {/*Tarefa 4 - Seção 3*/}
      {users.map((user) => (
        <UserDetails key={user.id} 
          name={user.name} job={user.job} age={user.age}/>
      ))}
    </div>
  );
}

export default App;
