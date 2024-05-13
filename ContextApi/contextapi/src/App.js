import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Msg from './components/Msg';
import { useContext } from 'react';
import { ThemeChange } from './ThemeChnange';
function App() {

  const {theme,ToggleTheme} = useContext(ThemeChange)
  console.log(theme)
  return (
    <div className="App" style={{backgroundColor: theme=== "light" ? "white":"black",color:theme==="light"?"black":"white"}}>
     <Home/>
     <Msg/>
     <button onClick={ToggleTheme}>ChnageTheme</button>
    </div>
  );
}

export default App;
