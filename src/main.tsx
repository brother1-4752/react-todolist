import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";

import "./styles/reset.css";
<<<<<<< HEAD
import router from "./router.tsx";
=======
import router from "./router";
>>>>>>> c44b17cfcf4f1dae6542c732e59d7ccfcaa9d29e

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
