import React, { useEffect } from 'react';
import './App.css'; // You can include your global styles here
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home"
import AddBlog from "./pages/AddBlog"
import Article from "./pages/Article"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
//import "./styles.scss"
import "./styles2.css"

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
};

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add-blog",
        element: <AddBlog />
      },
      {
        path: "/post/:id",
        element: <Article />
      },
    ]
  },
  {
    path: "/add-blog",
    element: <AddBlog />,
  },
  {
    path: "/post/:id",
    element: <Article />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container1">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;