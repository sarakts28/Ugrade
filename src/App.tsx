import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./utilities/publicRoutes";
import { AboutScreen, ConatctScreen, HomeScreen, Program } from "./screens";

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
        {
          path: "/contact",
          element: <ConatctScreen />,
        },
        {
          path: "programs",
          element: <Program />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <div id="modal-root">www</div>
    </>
  );
}

export default App;
