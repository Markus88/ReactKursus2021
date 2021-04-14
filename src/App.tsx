import './App.css';
import Eksempel01 from './Eksempel01VisVariable'
import Eksempel02 from './Eksempel02KaldUseState'
import Chapter_1_1 from './Chapter_1_1'
import Chapter_1_2 from './Chapter_1_2'

function App(): React.ReactElement {
  return (
    <div> 
      <h1>Eksempel 1</h1>
      <Eksempel01/>
      <h1>Eksempel 2</h1>
      <Eksempel02/>  
      <h1>Chaper_1_1</h1>
      <Chapter_1_1/>  
      <h1>Chaper_1_2</h1>
      <Chapter_1_2/>  
    </div>
  );
}

export default App;
