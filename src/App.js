import { useState } from 'react';
import './App.css';
import Main from './hw1/Main';
import DarkThemeSwitcher from './components/DarkThemeSwithcer';
import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import CardWidget from './components/CardWidget';
import CardProvider from './components/providers/CardProvider';


function App() {
  // =======================================
  const [themeDark, setThemeDark] = useState(false);

  const setDarkTheme = (value) => {
    setThemeDark(value);
  };
  // =======================================
  
  // ==========================================
  return (

    <div className={
      "p-2 min-h-screen " + (themeDark ? "dark bg-slate-300 text-white" : "")
    }>

      <div className="App container mx-auto">
        <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme} />        
        <CardProvider>
          <CardWidget />
        </CardProvider>                      
        <Outlet></Outlet>
        <Main />

      </div>

    </div>
  );
}

export default App;
