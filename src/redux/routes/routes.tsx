import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import WindowAlt from "@/page/windows/WindowAlt";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/app/window",
        element: <WindowAlt />
    }
]);

export default routes;

