import React from 'react';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import randomSelect from '@/components/Zgen/genSelect';
import Button from '@/components/Button';
import randomColor from '@/components/Zgen/genColor';
import randomNum from '@/components/Zgen/genNum';
import Input from '@/components/Input';
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
    <Button width="100%" />
  </div>,
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection,
    }}
  >
    <Button width="50%" />
  </div>,
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Text textLen={randomNum(5, 15)} FontSize="35px" />
    <Input />
    <Input />
  </div>,
];

export default function PosterPage() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          marginTop: `${Math.floor(Math.random() * 400)}px`,
        }}
      >
        {randomSelect(selects)}
      </div>
      <div
        style={{
          position: 'relative',
          marginTop: `${Math.floor(Math.random() * 400)}px`,
        }}
      >
        {randomSelect(selects)}
      </div>
    </div>
  );
}
