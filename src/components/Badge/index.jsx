import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import randomColor from '../Zgen/genColor';
import { Badge as Bdg } from '@alifd/next';
import randomBool from '../Zgen/genBool';
import randomSize from '../Zgen/genSize';
import randomSelect from '../Zgen/genSelect';

export default function Badge() {
  let text;
  const arrColor = randomColor(1);
  const items = [
    <Bdg
      style={{ color: arrColor[1], backgroundColor: arrColor[0] }}
      showZero={randomBool()}
      count={randomNum(0, 110)}
    />,
    <Bdg style={{ color: arrColor[1], backgroundColor: arrColor[0] }} content={randomString(3)} />,
    <Bdg dot />,
  ];
  const item = randomSelect(items);
  if (item.content !== undefined) {
    text = item.content;
  }
  return (
    <div className="component" id="Badge" style={{ display: 'inline-block', margin: 8 }} title={text}>
      {item}
    </div>
  );
}
