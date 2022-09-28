import Car from './components/Car';
import './App.css';

function App() {

  const myCars = [
    { name: "Opala", km: 8000, color: "green" },
    { name: "HB20", km: 5000, color: "Red" },
    { name: "Celta", km: 3000, color: "Gray" },
  ];

  return (
    <div className="App">
      <h1 className='title'>Desafio 5 - Seção 4</h1>
      <div>
        {myCars.map((car) => (
          <Car car={car}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
