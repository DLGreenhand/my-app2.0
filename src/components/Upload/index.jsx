import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Upload as Upld, Button, Icon } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';
import randomReactNode from '../Zgen/genReactNode';
import randomPic from '../Zgen/genPic';

export default function Upload() {
  const listTypes = ['text', 'image', 'card'];
  const listType = randomSelect(listTypes);
  const title = randomString(6);
  const IconNode = randomReactNode();

  const Num = randomNum(1, 4);
  const text = [];
  const items = [];

  for (let i = 0; i < Num; i++) {
    const picUrl = randomPic();
    const item = {
      uid: `${i}`,
      name: randomString(5),
      state: randomSelect(['done', 'uploading', 'error']),
      percent: randomNum(0, 100),
      url: picUrl,
      downloadURL: picUrl,
      imgURL: picUrl,
    };
    const item_text = item.name;
    items.push(item);
    text.push(item_text);
  }
  return (
    <div
      className="component"
      id="Upload"
      style={{ display: 'inline-block', margin: 8 }}
      title={`title:${title},filenames:${textArr(text)}`}
    >
      <Upld multiple shape="card" listType={listType} defaultValue={items}>
        {IconNode}
        <div>{title}</div>
      </Upld>
    </div>
  );
}
