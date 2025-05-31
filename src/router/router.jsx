import {
  createBrowserRouter,
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/register',
            Component: Register,
        },
    ]
  },
]);

export default router;