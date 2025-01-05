import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Resume from './pages/Resume';
import Positions from './pages/Positions';
import Headshots from './pages/Headshots';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Positions",
        element: <Positions />,
      },
      {
        path: "/Headshots",
        element: <Headshots />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
