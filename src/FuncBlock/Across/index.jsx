import Avatar from '@/components/Avatar';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import randomColor from '@/components/Zgen/genColor';
import randomSelect from '@/components/Zgen/genSelect';
import * as React from 'react';

const acrossNum = Math.random() * 3 + 1;
const acrossType = Math.floor(Math.random() * 2);
const acrosses = [];
for (let i = 0; i < acrossNum; i++) {
  const tmp = [
    <div
      style={{
        display: 'flex',
        flexDirection: randomSelect(['row', 'row-reverse']),
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Avatar />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text FontSize="25px" textLen={4} color={randomColor(0)[0]} />
        <Text FontSize="12px" textLen={20} color={randomColor(0)[0]} />
      </div>
    </div>,
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <Icon size="xs" color={randomColor(0)[0]} />
      <Text FontSize="16px" textLen={30} color={randomColor(0)[0]} />
      <Icon size="s" style={{ float: 'right' }} color={randomColor(0)[0]} />
    </div>,
  ];
  acrosses.push(tmp[acrossType]);
}

export default function Across() {
  return (
    <div className="component" id="Across" style={{ display: 'block' }}>
      {acrosses}
    </div>
  );
}
