import './App.css';
import ComponentA from './components/ComponentA';

function App() {

  const contactExample = {
    name:"Juan",
    lastName:"Perez", 
    email:"juanperez@gmail.com",
    connected:false,
  }

  return (
    <div className="App">
      <header className='App-header'>
        <ComponentA contact={contactExample}></ComponentA>
      </header>
    </div>
  );
}

export default App;
