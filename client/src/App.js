import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

function App() {
const Layout =()=>{
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer/>
    </>
  )
}

  const router = createBrowserRouter([
    {
     
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/write",
          element: <Write />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="app">
      <div className="container">
       <RouterProvider router={router} />
       </div>
    </div>
  );
}

export default App;
