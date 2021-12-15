import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Cattles } from './pages/cattles';
import { Cattle } from './pages/cattle';
import { Login } from './pages/login';
import { AddTransactionPage } from './pages/add-transaction';
import { EditTransactionPage } from './pages/edit-transaction';
import { Transactions } from './pages/transactions';
import { Transaction } from './pages/transaction';
import { AddCattlePage } from './pages/add-cattle';
import { EditCattlePage } from './pages/edit-cattle';
import { LooseCattlePage } from './pages/loose-cattle';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/cattles" element={<Cattles />} />
      <Route path="/cattles/:id" element={<Cattle />} />
      <Route path="/cattles/:id/edit" element={<EditCattlePage />} />
      <Route path="/cattles/:id/Loose" element={<LooseCattlePage />} />
      <Route path="/add-cattle" element={<AddCattlePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transactions/:id" element={<Transaction />} />
      <Route path="/transactions/:id/edit" element={<EditTransactionPage />} />
      <Route path="/add-transaction" element={<AddTransactionPage />} />
      <Route path="/div" element={<div>Hello World</div>} />
    </Routes>
  );
};
