import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Statistics from "./pages/Statistics";
import UserDetails from "./pages/UserDetails";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path:"/users/:userId", element: <UserDetails/>},
    { path: "/statistics", element: <Statistics /> },
  ]);
  return <RouterProvider router={router} />;
}
