import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './landing';
import Offer from './offer';

export default function hero() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Landing />}>
          <Route path="offer" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
