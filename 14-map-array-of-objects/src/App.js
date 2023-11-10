import './App.css';
import persons from './components/data/persons';
import Person from './components/Person';

function App() {

  return (
    <div className="App">
      <Person />  
      {persons.map((person) => {    
        return <h1>{person.name}</h1>
      })}
    </div>
  );
}

export default App;
