import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home/home";
import { Projects } from "../projects/projects";
import { ThemeProvider } from "../../libs/components/theme-provider";
import { Root } from "../root/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export { App };
