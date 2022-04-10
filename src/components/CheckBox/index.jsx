import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Checkbox } from '@alifd/next';
import randomBool from '../Zgen/genBool';

export default function CheckBox() {
  const text = randomString(6);
  return (
    <div className="component" id="CheckBox" style={{ display: 'inline-block', margin: 8 }} title={text}>
      <Checkbox checked={randomBool()} disabled={randomBool()}>
        {text}
      </Checkbox>
      <br />
    </div>
  );
}
