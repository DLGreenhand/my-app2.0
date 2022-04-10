import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import PosterLayout from './layouts/PosterLayout';
import 'lib-flexible';
import CommonLayout from './layouts/CommonLayout';
import PersonalLayout from './layouts/PersonalLayout';
import LiveLayout from './layouts/LiveLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const PosterPage = lazy(() => import('@/pages/PosterPage'));
const CommonPage = lazy(() => import('@/pages/CommonPage'));
const PersonalPage = lazy(() => import('@/pages/PersonalPage'));
const LivePage = lazy(() => import('@/pages/LivePage'));
const layouts = [PosterLayout, CommonLayout, PersonalLayout, LiveLayout];
const pages = [PosterPage, CommonPage, PersonalPage, LivePage];
const page_num = Math.floor(Math.random() * 4);
// const page_num = 0;
const routerConfig = [
  {
    path: '/',
    component: layouts[page_num], // Layout
    children: [
      {
        path: '/',
        component: pages[page_num], // page
      },
    ],
  },
];
export default routerConfig;
