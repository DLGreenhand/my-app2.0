import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Radio as Rdo } from '@alifd/next';
import randomBool from '../Zgen/genBool';

export default function Radio() {
  const text = randomString(6);
  return (
    <div className="component" id="Radio" style={{ display: 'inline-block', margin: 8 }} title={text}>
      <Rdo defaultChecked={randomBool()} disabled={randomBool()}>
        {text}
      </Rdo>
    </div>
  );
}
