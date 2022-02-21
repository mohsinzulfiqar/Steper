import React from 'react'
import { useRoutes } from "react-router-dom";
import First from '../components/first';
import Home from '../components/home';
import Second from '../components/second';
function Routes() {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        {
          path: "/first",
          element: <First />,
        //   children: [
        //     { path: ":id", element: <Invoice /> },
        //     { path: "/pending", element: <Pending /> },
        //     { path: "/complete", element: <Complete /> },
        //   ],
        },
        {
          path: "/second",
          element: <Second />,
        //   children: [
        //     { path: ":id", element: <Profile /> },
        //     { path: "/settings", element: <Settings /> },
        //   ],
        },
      ]);
  return (
    <div> {routes}</div>
  )
}

export default Routes