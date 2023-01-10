import './App.css'
import Restrict from './components/RestrictProps/Restrict';
function App() {
  return (
    <div className="App">
         {/* <Restrict value={5} isNegative isPositive/> */}
         {/* akoi sathe akadhik props evabe pathano jabe na */}

         <Restrict value={5} isPositive/>
    </div>
  );
}

export default App;
