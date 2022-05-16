import Image from '@/components/Image';
import Text from '@/components/Text';
import randomArr from '@/components/Zgen/genArr';
import randomColor from '@/components/Zgen/genColor';
import randomNum from '@/components/Zgen/genNum';
import randomSelect from '@/components/Zgen/genSelect';
import Across from '@/FuncBlock/Across';
import React from 'react';

// const selects = [<Text FontSize="25px" textLen="25" color={randomColor(0)[0]} />, <Across />];
const children = [];
for (let i = 0; i < 10; i++) {
  const tmp = randomSelect([
    // <Text FontSize="20px" textLen={randomNum(20, 30)} color={randomColor(0)[0]} />,
    <Across />,
  ]);
  children.push(tmp);
}

function LivePage() {
  return <div style={{ display: 'block' }}>{children}</div>;
}

export default LivePage;
