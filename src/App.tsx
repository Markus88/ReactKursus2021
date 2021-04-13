import './App.css';
import Eksempel01 from './Eksempel01VisVariable'
import Eksempel02 from './Eksempel02KaldUseState'

function App(): React.ReactElement {
  return (
    <div> 
      <h1>Eksempel 1</h1>
      <Eksempel01/>
      <h1>Eksempel 2</h1>
      <Eksempel02/>  
    </div>
  );
}

export default App;
