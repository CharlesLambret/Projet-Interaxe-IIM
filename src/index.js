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
import FormValidation from './Routes/tests/devtest2';
import TroisD from './Routes/jeu/3D/3D';
import JV from './Routes/jeu/JV/jv';
import Dev from './Routes/jeu/dev/dev';
import Crea from './Routes/jeu/Créa-Design/crea';
import Com from './Routes/jeu/Com/com';
import TestForm from './Routes/jeu/dev/testdev';

import Jeu from './Routes/tests/testjeu';

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
    path: "/developpement",
    element: <Dev/>
  },
  {
    path: "/crea-design",
    element: <Crea/>
  },
  {
    path: "/jeu-vidéo",
    element: <JV/>
  },
  {
    path: "/communication",
    element: <Com/>
  },
  {
    path: "/3D",
    element: <TroisD/>
  },
  {
    path: "/testsjeu",
    element: <Jeu/>
  },
  /*{
    path:"/glitch",
    element: <PageGlitch/>
  },*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
