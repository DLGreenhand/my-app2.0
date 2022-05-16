import Card from '@/components/Card';
import Search from '@/components/Search';
import Slider from '@/components/Slider';
import Across from '@/FuncBlock/Across';
import BtnGroup from '@/FuncBlock/BtnGroup';
import Navi from '@/FuncBlock/Navi';
import Random from '@/FuncBlock/Random';
import React from 'react';
import randomArr from '@/components/Zgen/genArr';
import Video from '@/components/Video';
import Text from '@/components/Text';
import Image from '@/components/Image';
import randomNum from '@/components/Zgen/genNum';
import Button from '@/components/Button';
import randomSelect from '@/components/Zgen/genSelect';
import CardGroup from '@/FuncBlock/CardGroup';

export default function CommonPage() {
  const videoText = randomSelect([<Text textLen={randomNum(10, 50)} FontSize="15px" />, null]);
  const videoGroup = (
    <div style={{ display: 'flex', justifyContent: 'space-around', minHeight: '20%', maxHeight: '40%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
        <Video />
        {videoText}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
        <Video />
        {videoText}
      </div>
    </div>
  );

  const selects = [
    <CardGroup />,
    <Video />,
    <Slider />,
    <Across />,
    <Search />,
    <Navi />,
    <div style={{ margin: '20px' }}>
      <Text textLen={randomNum(30, 100)} FontSize="20px" />
    </div>,
    videoGroup,
    ///
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end' }}>
      {randomArr(
        [
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '10px',
            }}
          >
            <Image />
            <Text FontSize="15px" textLen={randomNum(5, 30)} />
          </div>,
        ],
        3,
      )}
    </div>,
    ///
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {randomArr([<Button />], 4)}
    </div>,
    ///
  ];
  const children = [];
  for (let i = 0; i < 10; i++) {
    if (Math.random() > 0.8) {
      children.push(randomSelect(selects));
    } else {
      // eslint-disable-next-line no-lonely-if
      if (Math.random() < 0.05) {
        children.push(<Slider />);
      } else {
        children.push(<Random />);
      }
    }
  }

  return <div style={{ display: 'block' }}>{children}</div>;
}
