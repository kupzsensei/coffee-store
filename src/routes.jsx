import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <h1>this is a product page</h1>,
      },
      {
        path: "branches",
        element: <h1>this is a Branches page</h1>,
      },
      {
        path: "contacts",
        element: <h1>this is a Contacts page</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>this is a login page</h1>,
  },
]);
