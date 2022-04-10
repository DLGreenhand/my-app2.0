import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Menu as Mn } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';

const { SubMenu, Item } = Mn;
export default function Menu() {
  const Num = randomNum(2, 4);
  const text = [];
  const items = [];
  for (let i = 0; i < Num; i++) {
    const item_text = randomString(4);
    const sub_items = [];
    const sub_text = [];
    for (let j = 0; j < Num; j++) {
      const tmp_text = randomString(4);
      const tmp_item = <Item key={tmp_text}>{tmp_text}</Item>;
      sub_items.push(tmp_item);
      sub_text.push(tmp_text);
    }
    const item = (
      <SubMenu key={i} label={item_text} disabled={randomBool()}>
        {sub_items}
      </SubMenu>
    );
    const display_text = `Top:${item_text};Sub:${textArr(sub_text)}`;
    items.push(item);
    text.push(display_text);
  }
  return (
    <div className="component" id="Menu" style={{ display: 'inline', margin: 8 }} title={textArr(text)}>
      <Mn defaultOpenKeys={`${randomNum(0, Num)}`} mode="inline" direction={randomSelect(['ver', 'hoz'])}>
        {items}
      </Mn>
    </div>
  );
}
