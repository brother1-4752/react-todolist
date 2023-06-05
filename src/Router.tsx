import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { IRouter } from "./types/routerType";
import { ToDoList } from "./pages/toDoList";

const routerData: IRouter[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [{ path: "", element: <ToDoList /> }],
  },
];

const router = createBrowserRouter(routerData);

export default router;
