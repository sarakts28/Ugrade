import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./utilities/publicRoutes";
import { AboutScreen, HomeScreen } from "./screens";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/about",
          element: <AboutScreen />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
