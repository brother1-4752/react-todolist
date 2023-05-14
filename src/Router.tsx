import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ToDoList from "./components/ToDoList";

interface IRouter {
  id: number;
  path: string;
  element: React.ReactNode;
  errorElement: React.ReactNode;
}

const routerData: IRouter[] = [
  {
    id: 1,
    path: "/",
    element: <ToDoList />,
    errorElement: <ErrorBoundary />,
  },
];

export const router = createBrowserRouter(
  routerData.map((routerInfo) => {
    return {
      // id property 넘기면 무조건 오류 발생한다.
      // id : routerInfo.id

      path: routerInfo.path,
      element: routerInfo.element,
      errorElement: routerInfo.errorElement,
    };
  }),
  {
    basename: "/react-todolist/",
  }
);
