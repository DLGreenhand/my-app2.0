import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Rating as Rat } from '@alifd/next';
import randomSize from '../Zgen/genSize';
import randomBool from '../Zgen/genBool';

export default function Rating() {
  const Rate = Math.random() * 5;
  return (
    <div className="component" id="Rating" style={{ display: 'inline-block', margin: 8 }}>
      <Rat size={randomSize()} defaultValue={Rate} disabled={randomBool()} />
    </div>
  );
}
