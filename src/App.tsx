import './App.css'
import Box from './components/ThemeContext/Box';
import ThemeContextProvider from './components/ThemeContext/ThemeContextProvider';
function App() {
  return (
    <div className="App">
       <ThemeContextProvider>
          <Box/>
       </ThemeContextProvider>
    </div>
  );
}

export default App;
