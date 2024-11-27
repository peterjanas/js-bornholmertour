import React, { useState } from "react";
import "./styles/App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home.jsx";
import Travels from "./pages/Travels.jsx";
import About from "./pages/About.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      >
        <Route index element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <Admin />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
