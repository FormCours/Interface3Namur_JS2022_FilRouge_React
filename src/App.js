import { useState } from 'react';
import './App.css';
import Header from './containers/header/header';
import NavBar from './containers/nav-bar/nav-bar';

function App() {

  const [menuVisible, setMenuVisible] = useState(false);


  return (
    <>
      <Header
        onOpenMenu={() => setMenuVisible(true)} />
      <NavBar
        isVisible={menuVisible}
        onCloseMenu={() => setMenuVisible(false)} />
      <main className="App">

      </main>
    </>
  );
}

export default App;
