import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Headshots from './pages/Headshots';
import Contact from './pages/Contact';


import TheyDontPay from './pages/Projects/TheyDontPay';
import RadiumGirls from './pages/Projects/RadiumGirls';
import MenOnBoats from './pages/Projects/MenOnBoats';
import AboutLove from './pages/Projects/AboutLove';
import SpecificCostume from './pages/Projects/SpecificCostume';
import Wonderland from './pages/Projects/Wonderland';


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
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Gallery/theydontpay",
        element: <TheyDontPay />,
      },
      {
        path: "/Gallery/radiumgirls",
        element: <RadiumGirls />,
      },
      {
        path: "/Gallery/menonboats",
        element: <MenOnBoats />,
      },
      {
        path: "/Gallery/aboutlove",
        element: <AboutLove />,
      },
      {
        path: "/Gallery/specificcostume",
        element: <SpecificCostume />,
      },
      {
        path: "/Gallery/wonderland",
        element: <Wonderland />,
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
