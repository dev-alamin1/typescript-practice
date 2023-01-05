import './App.css'
import HtmlCompnetPassToChildren from './components/ChildrenDataPass/HtmlCompnetPassToChildren';
function App() {

  return (
    <div className="App">
      <HtmlCompnetPassToChildren>
        <div>
            <h2>How to pass Html compoent to a component ?</h2>
            <p>It's so easy !</p>
        </div>
      </HtmlCompnetPassToChildren>
    </div>
  );
}

export default App;
