import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import ConnectWallet from './pages/connectwallet';
import WithoutWallet from './pages/withoutwallet';
import Pacman from './pages/pacman';
import SpaceInvaders from './pages/spaceinvaders';
import About from './pages/about';
import Explore from './pages/explore';

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/connectwallet' element={<ConnectWallet/>} />
        <Route path='/withoutwallet' element={<WithoutWallet/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/pacman' element={<Pacman/>} />
        <Route path='/spaceinvaders' element={<SpaceInvaders/>} />
    </Routes>
    </Router>
  );
}

export default App;
