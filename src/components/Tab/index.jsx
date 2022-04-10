import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Tab as Tb } from '@alifd/next';
import randomSize from '../Zgen/genSize';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';

export default function Tab() {
  const Num = randomNum(2, 5);
  const items = [];
  const text = [];
  const closeable = randomBool();
  for (let i = 0; i < Num; i++) {
    const item_text = [];
    item_text.push(randomString(4));
    const item = <Tb.Item title={item_text[0]} key={i} closeable={closeable} disabled={randomBool()} />;
    items.push(item);
    text.push(`title:${item_text[0]}}`);
  }

  const shapes = ['pure', 'wrapped', 'text', '  capsule'];
  const shape = randomSelect(shapes);
  const excessModes = ['slide', 'dropdown'];
  const excessMode = randomSelect(excessModes);
  const defaultActiveKey = randomNum(0, Num);
  const size = randomSize();
  return (
    <div className="component" id="Tab" style={{ width: '100%' }} title={textArr(text)}>
      <Tb
        size={size}
        shape={shape}
        excessMode={excessMode}
        defaultActiveKey={randomNum(0, Num)}
        style={{ float: 'left', display: 'flex', justifyContent: 'center' }}
      >
        {items}
      </Tb>
    </div>
  );
}
