import * as React from 'react';
import styles from './index.module.css';
import { SplitButton as SplitBtn, Box } from '@alifd/next';
import randomString from '../Zgen/genText';
import textArr from '../Zgen/genTextArr';
import randomSize from '../Zgen/genSize';

const { Item } = SplitBtn;

export default function SplitButton() {
  const menuText = [randomString(4), randomString(4), randomString(4), randomString(4), randomString(4)];
  const menu = menuText.map((item) => <Item key={item}>{item}</Item>);

  const text = randomString(4);

  const SplitBtns = ['normal', 'primary', 'secondary'];
  const SplitBtnType = Math.floor(Math.random() * SplitBtns.length);
  return (
    <div
      className="component"
      id="SplitButton"
      style={{ display: 'inline-block', margin: 8 }}
      title={`Label:${text}, Menu:${textArr(menuText)}`}
    >
      <Box direction="row" spacing={20}>
        <SplitBtn label={text} type={SplitBtns[SplitBtnType]} size={randomSize()}>
          {menu}
        </SplitBtn>
      </Box>
    </div>
  );
}
