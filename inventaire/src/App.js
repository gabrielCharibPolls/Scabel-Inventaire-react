import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; // Chemin vers ta page de connexion

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
