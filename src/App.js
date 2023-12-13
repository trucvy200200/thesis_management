import './App.css';
import { useEffect } from 'react';
import axios from "axios"
import guestRoutes from './routes/guestRoutes';
import studentRoutes from "./routes/studentRoutes"
import lecturerRoutes from "./routes/lecturerRoutes"
import adminRoutes from "./routes/adminRoutes"
import managementRoutes from "./routes/managementRoutes"
import Layout from './components/layout/Layout';
import PageNotFound from './pages/404';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
function App() {
  const role = 2

  const router = createBrowserRouter([
    {
      element: <Layout role={role} />,
      errorElement: <PageNotFound />,
      children: !role ? guestRoutes : (role === 1 ? studentRoutes : (role === 2 ? lecturerRoutes : (role === 3 ? managementRoutes : adminRoutes)))
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
