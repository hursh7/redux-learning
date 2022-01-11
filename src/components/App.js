import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
