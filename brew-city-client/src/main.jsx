import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const response = await fetch('http://localhost:5000/coffee');
      if (!response.ok) {
        throw new Error("Failed to fetch coffee data");
      }
      return response.json(); // Ensure you return the data (like JSON)
    }
  },
  {
    path: "addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
