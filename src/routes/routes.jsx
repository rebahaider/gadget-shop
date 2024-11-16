import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../assets/layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../assets/layouts/DashboardLayout";
import PrivateRoutes from "./private/PrivateRoutes";
import OverView from "../pages/Dashboard/OverView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashboard",
    element:
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>,
    children: [{
      path: "/dashboard/overview",
      element: <OverView></OverView>,
    }]
  }
]);