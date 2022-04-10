import Image from '@/components/Image';
import Text from '@/components/Text';
import randomArr from '@/components/Zgen/genArr';
import randomColor from '@/components/Zgen/genColor';
import randomSelect from '@/components/Zgen/genSelect';
import Across from '@/FuncBlock/Across';
import React from 'react';

const selects = [
  <div style={{ display: 'flex', justifyContent: randomSelect(['center', 'left', 'right', 'space-around']) }}>
    <Image width="20%" />
    <Image width="20%" />
    <Image width="20%" />
    <Image width="20%" />
  </div>,
  <Text FontSize="25px" textLen="25" color={randomColor(0)[0]} />,
  <Across />,
];
const children = randomArr(selects, Math.random() * 2 + 4);

function LivePage() {
  return <div style={{ display: 'block' }}>{children}</div>;
}

export default LivePage;
