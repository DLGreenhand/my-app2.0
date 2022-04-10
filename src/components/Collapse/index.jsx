import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import randomBool from '../Zgen/genBool';
import { Collapse as Clsp } from '@alifd/next';

export default function Collapse() {
  const Num = randomNum(2, 5);
  const text = [];
  const items = [];
  const defaultExpandedKeys = [];
  for (let i = 0; i < Num; i++) {
    const item = {
      title: randomString(6),
      content: randomString(24),
      disabled: randomBool(),
    };
    defaultExpandedKeys.push(randomNum(0, Num));
    const item_text = `title:${item.title};content:${item.content}`;
    items.push(item);
    text.push(item_text);
  }
  return (
    <Clsp
      style={{ display: 'inline-block', margin: 8 }}
      title={textArr(text)}
      id="Collapse"
      className="component"
      dataSource={items}
      disabled={randomBool()}
    />
  );
}
