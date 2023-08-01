import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import DeepLinking from "./deeplinking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/deeplinking",
      element: (
        <div>
          <DeepLinking />
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <Link to="/deeplinking">click to check deep linking</Link>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
