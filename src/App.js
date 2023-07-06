import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Main from './hw1/Main';
import DarkThemeSwitcher from './components/DarkThemeSwithcer';


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
        <div className='container mx-auto grid justify-items-end pr-5'>
          <div className='text-xl'>Корзина</div>
          <div>Количество: {card.length}</div>
          <div>Сумма: {card.reduce((sum, dish) => (sum += dish.price), 0)}руб</div>
        </div>
        <div>
          <Menu onItemBy={(dish) => addToCard(dish)} />
          <Main />
        </div>
      </div>



    </div>
  );
}

export default App;
