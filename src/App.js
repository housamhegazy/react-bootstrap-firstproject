
import { themeContext } from "context/ThemeContext";
import Home from "pages/Home";
import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
function App() {
  const {theme} = useContext(themeContext)
  return (
    <div className={`App ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
