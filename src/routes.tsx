import React, { FC, ReactNode } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom';

import Paths from './utils/paths';
import Content from './components/ui/layout/Content/Content';
import { MainPage } from './pages/MainPage/MainPage';

export interface IRoute {
  path: string;
  element: ReactNode;
}

export const routes: IRoute[] = [
  {
    path: Paths.MAIN,
    element: <MainPage />,
  },
];

const MainLayout: FC = () => (
  <>
    <Content>
      <Outlet />
    </Content>
  </>
);

const RouteEnableWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <>{children ? <>{children}</> : <Navigate to='/' replace />}</>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<RouteEnableWrapper>{route.element}</RouteEnableWrapper>}
        />
      ))}
    </Route>,
  ),
);
