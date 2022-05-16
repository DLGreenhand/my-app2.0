import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import randomPic from '../Zgen/genPic';
import { Slider as Sld } from '@alifd/next';
import randomBool from '../Zgen/genBool';
import randomSelect from '../Zgen/genSelect';

export default function Slider() {
  const Num = randomNum(2, 4);
  const text = [];
  const items = [];

  for (let i = 0; i < Num; i++) {
    const item = {
      url: randomPic(),
      text: randomString(4),
    };
    const item_text = item.text;
    items.push(item);
    text.push(item_text);
  }
  const itemNodes = items.map((item, index) => (
    <div key={index}>
      <img draggable={false} style={{ width: '100%' }} src={item.url} alt={item.text} />
    </div>
  ));

  return (
    <Sld
      // style={{ maxHeight: '200px' }}
      title={textArr(text)}
      id="Slider"
      className="component"
      arrows={false}
      centerMode={randomBool()}
      // variableWidth
    >
      {items.map((item, index) => (
        // <div key={index}>
        <img src={randomPic()} style={{ maxHeight: '200px' }} alt={item.text} />
        // </div>
      ))}
    </Sld>
  );
}
