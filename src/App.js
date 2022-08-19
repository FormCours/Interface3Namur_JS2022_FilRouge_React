import { Drawer } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './containers/header/header';
import NavBar from './containers/nav-bar/nav-bar';

import { routes } from './routes';
import { useRoutes } from 'react-router-dom';

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  const element = useRoutes(routes);

  return (
    <>
      <Header
        onOpenMenu={() => setMenuVisible(true)} />
      <Drawer
        anchor='left'
        open={menuVisible}
        onClose={() => setMenuVisible(false)}>

        <NavBar />

      </Drawer>
      <main className="App">
        {element}
      </main>
    </>
  );
}

export default App;
