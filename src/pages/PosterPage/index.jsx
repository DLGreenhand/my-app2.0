import React from 'react';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import randomSelect from '@/components/Zgen/genSelect';
import Button from '@/components/Button';
import randomColor from '@/components/Zgen/genColor';
const flexDirection = randomSelect(['row', 'row-reverse']);

const selects = [
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection,
    }}
  >
    <Text FontSize="30px" textLen={6} color={randomColor(0)[0]} />
    <Icon size="xl" color={randomColor(0)[0]} />
  </div>,
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection,
    }}
  >
    <Button />
  </div>,
];

export default function PosterPage() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          marginTop: '400px',
        }}
      >
        {randomSelect(selects)}
      </div>
      <div
        style={{
          position: 'relative',
          marginTop: '200px',
        }}
      >
        {randomSelect(selects)}
      </div>
    </div>
  );
}
