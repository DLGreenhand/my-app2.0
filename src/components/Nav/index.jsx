/* eslint-disable comma-spacing */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
import * as React from 'react';
import { Nav as Navi } from '@alifd/next';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import randomSelect from '../Zgen/genSelect';

const { Item, SubNav } = Navi;
const headerText = randomString(6);
const header = <span className="fusion">{headerText}</span>;
const footerText = randomIcon(7);
const footer = (
  // eslint-disable-next-line no-script-url
  <a className="login-in" href="javascript:;">
    {footerText}
  </a>
);

export default function Nav() {
  const directions = ['hoz', 'ver'];
  const direction = randomSelect(directions);
  const types = ['normal', 'primary', 'secondary', 'line'];
  const type = randomSelect(types);
  const items = [];
  const text = [];
  const itemNum = randomNum(1, 4);
  for (let i = 0; i < itemNum; i++) {
    const tmp_text = randomString(5);
    items.push(<Item key={tmp_text}>{tmp_text}</Item>);
    text.push(tmp_text);
  }
  return (
    <div
      className="component"
      id="Nav"
      style={{ display: 'inline-block', margin: 8 }}
      title={`header:${headerText},footer:${footerText},navs:${textArr(text)}`}
    >
      <Navi
        className="basic-nav"
        mode="popup"
        direction={direction}
        type={type}
        header={header}
        footer={footer}
        defaultSelectedKeys={randomSelect(text)}
        triggerType="hover"
      >
        {items}
      </Navi>
    </div>
  );
}
