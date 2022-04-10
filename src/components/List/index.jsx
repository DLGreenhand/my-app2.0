import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import randomPic from '../Zgen/genPic';
import { List as Lst } from '@alifd/next';
import randomSize from '../Zgen/genSize';
import randomBool from '../Zgen/genBool';
import randomSelect from '../Zgen/genSelect';

export default function List() {
  const Num = randomNum(2, 5);
  const text = [];
  const items = [];
  for (let i = 0; i < Num; i++) {
    const item = {
      title: randomString(6),
      description: randomString(24),
      author: randomString(4),
      img: randomPic(),
    };
    const item_text = `title:${item.title};description:${item.description};author:${item.author}`;
    items.push(item);
    text.push(item_text);
  }
  return (
    <div
      className="component"
      id="List"
      style={{ display: 'inline-block', margin: 8, float: 'left' }}
      title={textArr(text)}
    >
      <Lst
        size={randomSelect(['small', 'medium'])}
        divider={randomBool()}
        loading={randomBool()}
        dataSource={items}
        renderItem={(item) => (
          <Lst.Item
            key={item.title}
            media={<img style={{ width: 24, height: 24 }} src={item.img} />}
            title={item.title}
          >
            <p>{item.description}</p>
            <div>{item.author}</div>
          </Lst.Item>
        )}
      />
    </div>
  );
}
