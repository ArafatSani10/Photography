import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import About from './Components/Pages/About/About.jsx';
import Services from './Components/Pages/Services/Services.jsx';
import Portfolio from './Components/Pages/Portfolio/Portfolio.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
import BookConsultation from './Components/Pages/BookConsultation/BookConsultation.jsx';
import Wedding from './Components/Pages/Category/Wedding/Wedding.jsx';
import FashionAndPortait from './Components/Pages/Category/Fashion&Portrait/FashionAndPortait.jsx';
import EventManagement from './Components/Pages/Category/EventManagement/EventManagement.jsx';
import FoodAndProduct from './Components/Pages/Category/FoodAndProduct/FoodAndProduct.jsx';
import Nature from './Components/Pages/Category/Nature/Nature.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: '/about',
        element: <About></About>
      },

      {
        path: "/services",
        element: <Services></Services>
      },

      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
        path: '/bookconsulation',
        element: <BookConsultation></BookConsultation>
      },


      // category wise pages
      {
        path: "/category/wedding",
        element: <Wedding></Wedding>
      },

      {
        path: "/category/fashion & portrait photography",
        element: <FashionAndPortait></FashionAndPortait>
      },

      {
        path: '/category/event-management',
        element: <EventManagement></EventManagement>
      },

      {
        path: '/category/food&product-photgraphy',
        element: <FoodAndProduct></FoodAndProduct>
      },

      {
        path: '/category/Nature-photography',
        element: <Nature></Nature>
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
