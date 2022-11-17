import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import IIM from './Routes/prologue/iim';
import IIMCorrupt from './Routes/prologue/iimcorrupt';
import Hub from "./Routes/hub/hub";
import Hub2 from "./Routes/hub/hub2";
import Hub3 from "./Routes/hub/hub3";
import Hub4 from "./Routes/hub/hub4";
import Hub5 from "./Routes/hub/hub5";
import Hub6 from "./Routes/hub/hub6";
import TroisD from './Routes/jeu/3D/3D';
import JeuVideo from './Routes/jeu/JV/jv';
import Dev from './Routes/jeu/dev/dev';
import Crea from './Routes/jeu/Créa-Design/crea';
import Com from './Routes/jeu/Com/com';


const router = createBrowserRouter([
  {
    path: "/",
    element: <IIM/>
  },
  {
    path: "/corrupt",
    element: <IIMCorrupt/>
  },
  {
    path: "/hub",
    element: <Hub/>
  },
  {
    path: "/hub2",
    element: <Hub2/>
  },
  {
    path: "/hub3",
    element: <Hub3/>
  },
  {
    path: "/hub4",
    element: <Hub4/>
  },
  {
    path: "/hub5",
    element: <Hub5/>
  },
  {
    path: "/hub6",
    element: <Hub6/>
  },
  {
    path: "/developpement",
    element: <Dev/>
  },
  {
    path: "/crea-design",
    element: <Crea/>
  },
  {
    path: "/jeu-video",
    element: <JeuVideo/>
  },
  {
    path: "/communication",
    element: <Com/>
  },
  {
    path: "/3D",
    element: <TroisD/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
