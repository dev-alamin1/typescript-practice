import './App.css'
import AuthContextProvider from './components/Context/AuthContextProvider';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
       <AuthContextProvider>
         <Login/>
       </AuthContextProvider>
    </div>
  );
}

export default App;
