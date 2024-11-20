import  React from "react";
import  ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Home from "../Home";
import Header from "./components/Header";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
