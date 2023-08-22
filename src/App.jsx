import Frase from './components/Frase';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const nome = 'Vinícius';

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu primeiro App</p>
      <p>Olá {nome}</p>
      < HelloWorld/>
      < Frase/>
    </div>
  );
}

export default App;
