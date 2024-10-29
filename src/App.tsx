import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
