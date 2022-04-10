import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import randomBool from '../Zgen/genBool';
import { Transfer as Trans } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';

export default function Transfer() {
  const Num = randomNum(2, 10);
  const text = [];
  const items = [];

  for (let i = 0; i < Num; i++) {
    const item = {
      label: randomString(4),
      value: `${i}`,
      disabled: randomBool(),
    };
    const item_text = item.label;
    items.push(item);
    text.push(item_text);
  }
  const leftText = randomString(4);
  const rightText = randomString(4);
  const leftNotFound = randomString(4);
  const rightNotFound = randomString(4);
  const modes = ['simple', 'normal'];
  const mode = randomSelect(modes);
  return (
    <div
      className="component"
      id="Transfer"
      style={{ display: 'inline-block', margin: 8 }}
      title={textArr(text)}
    >
      <Trans
        listStyle={{ maxWidth: '30%' }}
        mode={mode}
        showCheckAll={randomBool()}
        showSearch={[randomBool(), randomBool()]}
        searchProps={{
          hasClear: randomBool(),
        }}
        defaultValue={[`${randomNum(0, Num)}`]}
        dataSource={items}
        defaultLeftChecked={[`${randomNum(0, Num)}`]}
        titles={[leftText, rightText]}
        notFoundContent={[leftNotFound, rightNotFound]}
      />
    </div>
  );
}
