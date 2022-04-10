import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Guide from './components/Guide';
import 'lib-flexible';


const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Guide />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
