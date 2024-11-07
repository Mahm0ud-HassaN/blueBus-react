import {  createHashRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
// import Book from "./Components/Booking/Book.jsx";
import Busses from "./Components/Busses/Busses.jsx";
import Faqs from "./Components/Faqs/Faqs.jsx";
import PrivateStation from "./Components/PrivateStation/PrivateStation.jsx";
import Terms from "./Components/Terms/Terms.jsx";
import Stations from "./Components/Stations/Stations.jsx";
import Notfound from "./Components/NotFound/Notfound.jsx";


// import Services from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";

import Layout from "./Components/Layout/Layout.jsx";
import Destinations from "./Components/Destinations/Destinations.jsx";
// import Notfound from "./Components/NotFound/Notfound.jsx";

let routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "faqs", element: <Faqs /> },
      { path: "terms", element: <Terms /> },
      // { path: "book", element: <Home /> },
      {path:'destinations',element:<Destinations/>},
      { path: "privateStation", element: <PrivateStation /> },
      { path: "station", element: <Stations /> },
      { path: "contact", element: <Contact /> },
      // { path: "services", element: <Services /> },
      { path: "busses", element: <Busses /> },
      { path: "*", element: <Notfound /> }
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routers} />;
}

 
