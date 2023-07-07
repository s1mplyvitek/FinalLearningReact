import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Main from './hw1/Main';
import DarkThemeSwitcher from './components/DarkThemeSwithcer';
import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import CardWidget from './components/CardWidget';


function App() {
  // =======================================
  const [themeDark, setThemeDark] = useState(false);

  const setDarkTheme = (value) => {
    setThemeDark(value);
  };
  // =======================================
  const [card, setCard] = useState([]);

  const addToCard = (dish) => {
    setCard([...card, dish]);
  };
  // ==========================================
  return (

    <div className={
      "p-2 min-h-screen " + (themeDark ? "dark bg-slate-300 text-white" : "")
    }>

      <div className="App container mx-auto">
        <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme} />
        <MainMenu />
        <CardWidget card={card} />              
        <Outlet></Outlet>
        <Main />

      </div>

    </div>
  );
}

export default App;
