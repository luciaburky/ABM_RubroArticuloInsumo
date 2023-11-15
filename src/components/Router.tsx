import { Routes, Route } from 'react-router-dom';
import * as React from 'react';

const Admin = React.lazy(() => import('../pages/admin/Admin'));
const Home = React.lazy(() => import('../pages/home/Home'));
const Login = React.lazy(() => import('../pages/login/Login'));
const Components = React.lazy(() => import('../pages/components/components'));
const PrivateRoute = React.lazy(() => import('./PrivateRoute'));

const Router: React.FC = () => (
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PrivateRoute element={<Admin />} />} path="/admin" />
        <Route element={<Components />} path="/components" />
        <Route element={<Login />} path="/login" />
    </Routes>
);

export default Router;