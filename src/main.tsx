import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContextProvider from "./contexts/MainContext.tsx";
import "../i18n.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MainContextProvider>
    <RouterProvider router={router} />
  </MainContextProvider>
);
