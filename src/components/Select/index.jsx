import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Select as Slct } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';
import randomSize from '../Zgen/genSize';
import randomBool from '../Zgen/genBool';

const { Option } = Slct;
export default function Select() {
  const Num = randomNum(1, 4);
  const text = [];
  const items = [];
  const size = randomSize();
  for (let i = 0; i < Num; i++) {
    const item_text = randomString(4);
    const item = <Option value={item_text}>{item_text}</Option>;
    items.push(item);
    text.push(item_text);
  }

  const states = ['error', 'loading', 'success', 'warning'];
  const state = randomSelect(states);
  return (
    <div className="component" id="Select" style={{ display: 'inline-block', margin: 8 }} title={textArr(text)}>
      <Slct
        state={state}
        disabled={randomBool()}
        hasArrow
        hasBorder={randomBool()}
        defaultValue={randomSelect(text)}
        size={size}
        style={{ marginRight: 8 }}
      >
        {items}
      </Slct>
    </div>
  );
}
