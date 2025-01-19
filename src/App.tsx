import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Router>
      <Routes>
        {/* Страница входа */}
        <Route path="/login" element={<Login />} />
        {/* Страница 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
