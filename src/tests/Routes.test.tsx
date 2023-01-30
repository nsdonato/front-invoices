import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "../utils/test-utils";
import App from "../App";

describe("App", () => {
  test("should render the view home", () => {
    const routes = [
      {
        path: "/",
        element: <App />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
  });

  test.skip("should render the view home", () => {
    const routes = [
      {
        path: "/",
        element: <App />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText(/invoice app/i)).toBeInTheDocument();
  });

  test.skip("should render the detail view invoice", () => {
    const routes = [
      {
        path: "/invoice/:id/detail",
        element: <h1>Detail View Invoice</h1>,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/invoice/:id/detail"],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText(/detail view invoice/i)).toBeInTheDocument();
  });

  test.skip("should render the detail view invoice", () => {
    const routes = [
      {
        path: "/invoice/:id?",
        element: <h1>Create, Edit Invoice</h1>,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/invoice/:id?"],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Create, Edit Invoice/i)).toBeInTheDocument();
  });
});
