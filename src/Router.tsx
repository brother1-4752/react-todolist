import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ToDoList from "./pages/toDoList/ToDoList";
import { IRouter } from "./types/routerType";

const routerData: IRouter[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [{ path: "", element: <ToDoList /> }],
  },
];

export const router = createBrowserRouter(routerData);
