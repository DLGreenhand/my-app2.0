import * as React from 'react';
import { Breadcrumb, Icon } from '@alifd/next';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';

export default function BreadCrumb() {
  const text = [];
  const Crumbs = [];
  let sperator = Math.random();
  if (sperator > 0.5) {
    sperator = '/';
  } else {
    sperator = '>';
  }
  const CrumbNum = randomNum(2, 5);
  for (let i = 0; i < CrumbNum; i++) {
    const tmp_text = randomString(5);
    // eslint-disable-next-line no-script-url
    Crumbs.push(<Breadcrumb.Item link="javascript:void(0);">{tmp_text}</Breadcrumb.Item>);
    text.push(tmp_text);
  }
  return (
    <div
      className="component"
      id="BreadCrumb"
      style={{ display: 'inline-block', margin: 8 }}
      title={textArr(text)}
    >
      <Breadcrumb maxNode={randomNum(2, 5)} separator={sperator}>
        {Crumbs}
      </Breadcrumb>
    </div>
  );
}
