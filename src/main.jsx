import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Header from "./components/header";
import Pizzadetails from "./Pizzadetails";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/pizza-details",
    element:<Pizzadetails/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
