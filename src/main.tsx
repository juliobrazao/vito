import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContextProvider from "./contexts/MainContext.tsx";

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
