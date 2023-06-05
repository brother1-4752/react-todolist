import { createBrowserRouter } from "react-router-dom";

import { IRouter } from "./types/routerType";

import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ToDoList from "./pages/toDoList/ToDoList";

const routerData: IRouter[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    // children: [
    //   {
    //     path: "",
    //     element: <ToDoList />,
    //   },
    // ],
  },
];

const router = createBrowserRouter(routerData, {
  basename: "/react-todolist/",
});

export default router;
