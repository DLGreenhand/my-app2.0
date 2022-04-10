import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { NumberPicker } from '@alifd/next';

export default function NumPicker() {
  return (
    <div className="component" id="NumPicker" style={{ display: 'inline-block', margin: 8 }}>
      <NumberPicker type="inline" defaultValue={randomNum(0, 10)} />
    </div>
  );
}
