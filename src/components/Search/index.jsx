import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Search as Sch } from '@alifd/next';
import randomSize from '../Zgen/genSize';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';

export default function Search() {
  const types = ['primary', 'secondary', 'normal', 'dark'];
  const type = randomSelect(types);
  const shapes = ['normal', 'simple'];
  const shape = randomSelect(shapes);
  const defaultValue = randomString(3);
  const search_text = randomString(3);
  const placeholder = randomString(4);
  const Num = randomNum(0, 3);
  const text = [];
  const items = [];
  const size = randomSize();

  for (let i = 0; i < Num; i++) {
    const label = randomString(4);
    const value = randomString(4);
    const item = {
      label,
      value,
    };
    const item_text = `label:${label},value:${value};`;
    items.push(item);
    text.push(item_text);
  }
  return (
    <div
      className="component"
      id="Search"
      style={{ display: 'inline-block', margin: 8 }}
      title={`placeholder:${placeholder};default:${defaultValue};searchText:${search_text};filter:${textArr(text)}`}
    >
      <Sch
        style={{ width: 'auto' }}
        placeholder={placeholder}
        disabled={randomBool()}
        size={size}
        shape={shape}
        type={type}
        defaultValue={defaultValue}
        filter={items}
        searchText={search_text}
      />
    </div>
  );
}
