import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import 'lib-flexible';
import Components from '@/components';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Components num={10} />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
