import './App.css'
import Card from './components/StyleComponent/Card';
function App() {
  return (
    <div className="App">
      <Card style={{width:"200px",height:"200px", backgroundColor:"red"}}>Welcome</Card>

      <Card style={{width:"200px",height:"auto",backgroundColor:"bisque",padding:"5px",marginTop:"5px"}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error aliquid odio impedit repellat in aliquam labore ea distinctio unde!</p>
      </Card>
    </div>
  );
}

export default App;
