import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/footer';
import Navigation from './Pages/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
