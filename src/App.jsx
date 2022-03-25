import './App.css';
import Header from './Header';

function App() {

  function handleButtonClick(){
    alert('Click no botão');
  }

  function sum(a,b){
    return a+b
  }

  return (
   
     <>
       <Header title="Meu Primeiro Component React"/>
       <Header title="Um Component Com Props"/>
        <h2>
          Amanha é Sexta ALELUIA
          <div>Retorno da Soma:{sum(10,5)}</div>
        </h2>
        <button onClick={handleButtonClick}>Click Me!</button>
      
      </>  
      
    
  );
}

export default App;
