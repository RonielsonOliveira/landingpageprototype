import React from 'react';
import { Home } from './components/Home/Home';
import Menu from './components/Menu';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Main } from './components/Home/styles';

function App() {
  return (
    <div className="App">
      <Menu />
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
