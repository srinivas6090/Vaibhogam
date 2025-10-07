import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Location from './Components/Location';
import LandView from './Components/LandView';
import Form from './Components/FormPage';
import Payment from './Components/Payment';

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/location" element={<Location />} />
      <Route path="/landview" element={<LandView />} />
      <Route path="/form" element={<Form />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
