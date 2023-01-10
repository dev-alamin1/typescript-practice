import './App.css'
import Private from './components/PassComponent/Private';
import LoggegInUser from './components/PassComponent/LoggegInUser';
function App() {
  return (
    <div className="App">
        <Private isLoggedIn={true} component={LoggegInUser}/>
    </div>
  );
}

export default App;
