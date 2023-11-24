import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';

import { Layout as HomeLayout } from 'src/layouts/home';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';

const Error401Page = lazy(() => import('src/pages/401'));
const Error404Page = lazy(() => import('src/pages/404'));
const Error500Page = lazy(() => import('src/pages/500'));

const HomePage = lazy(() => import('src/pages/index'));
const DashboardPage = lazy(() => import('src/pages/dashboard'));

export const routes: RouteObject[] = [
    {
        element: (
            <HomeLayout>
                <Outlet />
            </HomeLayout>
        ),
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        element: (
            <DashboardLayout>
                <Suspense>
                    <Outlet />
                </Suspense>
            </DashboardLayout>
        ),
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />
            }
        ]
    },
    {
        path: '401',
        element: <Error401Page />,
    },
    {
        path: '404',
        element: <Error404Page />,
    },
    {
        path: '500',
        element: <Error500Page />,
    },
    {
        path: '*',
        element: <Error404Page />,
    }
]