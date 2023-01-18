import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/invoice/:id/detail",
        element: <h1>Detail View Invoice</h1>,
      },
      {
        path: "/invoice/:id?",
        element: <h1>Create, Edit Invoice</h1>,
      },
    ],
  },
]);
