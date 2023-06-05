export interface IRouter {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: IRouter[];
}
