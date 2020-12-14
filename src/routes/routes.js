import React from 'react'

import { Redirect } from "react-router-dom";


const Home = React.lazy(() => import('../app/home/Home'));
const Shopping = React.lazy(() => import('../app/shopping/Shopping'));
// const Login = React.lazy(() => import('../views/auth/Login'));
// const Register = React.lazy(() => import('../views/auth/Register'));

const authProtectedRoutes = [
    { path: '/home', component: Home },
    { path: '/shopping', component: Shopping },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to='/home' />,
    }
]


const publicRoutes = [
    // { path: '/login', component: Login },
    // { path: '/register', component: Register },
]

const routes = [...authProtectedRoutes, ...publicRoutes]

export { authProtectedRoutes, publicRoutes, routes };