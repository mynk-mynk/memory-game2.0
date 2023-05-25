import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorPage, GamePage, HomePage, WinnersPage } from './pages/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
