import './App.css'
import User from './components/User';
function App() {

  const user = {
    name:"Al-amin Mondal",
    age:20
  }

  return (
    <div className="App">
      <User user={user}/>
    </div>
  );
}

export default App;
