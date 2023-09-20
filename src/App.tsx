import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Adventure } from './pages/Adventure';
import { GlobalProvider } from './GlobalContext/context';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adventure" element={<Adventure />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
