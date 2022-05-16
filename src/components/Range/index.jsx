import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Range as Rng } from '@alifd/next';
import randomBool from '../Zgen/genBool';
import randomSelect from '../Zgen/genSelect';

export default function Range() {
  const start = randomNum(0, 100);
  const end = randomNum(start + 1, 101);
  const RangeType = Math.random();

  const marks = ['below', 'above'];
  const mark = randomSelect(marks);

  const sliders = ['double', 'single'];
  const slider = randomSelect(sliders);
  let value;
  if (slider === 'single') {
    value = start;
  } else {
    value = [start, end];
  }
  return (
    <Rng
      className="component"
      id="Range"
      style={{ display: 'inline-block', margin: 8, minHeight: 24, maxWidth: `${randomNum(200, 370)}px` }}
      slider={slider}
      mark={mark}
      defaultValue={value}
      disabled={randomBool()}
    />
  );
}
