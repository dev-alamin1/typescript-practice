import './App.css'
import List from './components/Generic/List';

function App() {
  return (
    <div className="App">
        <List students={['Monira','Ritu','Farjana','Shimu']} style={{backgroundColor:"bisque",marginBottom:"5px", color:"green", fontWeight:"bold", fontSize:"20px", width:"300px", padding:"5px"}} onClick={(data)=>console.log(data)}/>

        <List students={[1,2,3,4,5,6]} style={{backgroundColor:"black",marginBottom:"5px", color:"white", fontWeight:"bold", fontSize:"20px", width:"300px", padding:"5px"}} onClick={(data)=>console.log(data)}/>
    </div>
  );
}

export default App;
