import { lazy } from 'ice';
import { level } from './level';
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
const layouts = [
  PosterLayout,
  CommonLayout,
  PersonalLayout,
  LiveLayout,
];


// const page_num = 0;
const pages = [PosterPage, CommonPage, PersonalPage, LivePage];
let page_num;
const decision = Math.random();
if (decision < 0.05) {
  page_num = 2;
} else if (decision < 0.1) {
  page_num = 3;
} else if (decision < 0.15) {
  page_num = 0;
} else {
  page_num = 1;
}
let level_page;
let level_layout;
if (level <= 1) {
  level_page = Dashboard;
} else {
  level_page = pages[page_num];
  level_layout = layouts[page_num];
}

const routerConfig = [
  {
    path: '/',
    component: level_layout, // Layout
    children: [
      {
        path: '/',
        component: level_page, // page
      },
    ],
  },
];
export default routerConfig;
