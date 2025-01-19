import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Error404 from '../pages/Error404/Error404';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
