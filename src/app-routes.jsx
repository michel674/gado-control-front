import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Cattle } from './pages/cattle';
import { Login } from './pages/login';
import { Test } from './pages/test';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cattle" element={<Cattle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/div" element={<div>Hello World</div>} />
    </Routes>
  );
};
