import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import randomSize from '../Zgen/genSize';
import { Avatar as Avt, Badge } from '@alifd/next';
import randomPic from '../Zgen/genPic';
import randomColor from '../Zgen/genColor';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';
import Text from '../Text';

export default function Avatar() {
  const arrColor = randomColor(1);
  const items = [
    <Avt
      shape="circle"
      style={{ color: arrColor[1], backgroundColor: arrColor[0] }}
      size={randomSize()}
      icon={randomIcon()}
    />,
    <Avt shape="circle" style={{ color: arrColor[1], backgroundColor: arrColor[0] }} size={randomSize()}>
      <Text textLen={3} />
    </Avt>,
    <Avt
      shape="circle"
      src={randomPic()}
      style={{ color: arrColor[1], backgroundColor: arrColor[0] }}
      size={randomSize()}
    />,
  ];
  const item = randomSelect(items);
  return (
    <div className="component" id="Avatar" style={{ display: 'inline-block', margin: 8 }}>
      {item}
    </div>
  );
}
