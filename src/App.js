
import Header from './components/Header';
import Game from './components/Game';
import './App.css';
import { useRef } from 'react';


function App() {

  useEffect( () => {

  
  },[])

  const soemthing = useRef(null)
  
  const startDrawing = () => {

  }
  const finishDrawing =() => {
      
  }

  return (
    <div className="App">
      <Header />
      <Game 
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        />
    </div>
  );
}

export default App;
