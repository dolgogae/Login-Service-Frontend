import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={< MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-in" element={<SignInPage />} />

      {/* "catch-all" 라우트 */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
