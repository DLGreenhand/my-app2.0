import * as React from 'react';
import styles from './index.module.css';
import { MenuButton as MnBtn, Box } from '@alifd/next';
import randomString from '../Zgen/genText';
import textArr from '../Zgen/genTextArr';
import randomSize from '../Zgen/genSize';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';
import randomNum from '../Zgen/genNum';

const { Item } = MnBtn;

export default function MenuButton() {
  const menuNum = randomNum(2, 5);
  const menuText = [];
  for (let i = 0; i < menuNum; i++) {
    const tmp_text = randomString(4);
    menuText.push(tmp_text);
  }
  const menu = menuText.map((item) => <Item key={item}>{item}</Item>);
  const text = randomString(4);
  const Types = ['normal', 'primary', 'secondary'];
  const Type = randomSelect(Types);
  const MenuBtnType = (
    <MnBtn label={text} type={Type} text={randomBool()}>
      {menu}
    </MnBtn>
  );
  return (
    <div
      className="component"
      id="MenuButton"
      style={{ display: 'inline-block', margin: 8 }}
      title={`Label:${text}, Menu:${textArr(menuText)}`}
    >
      <Box direction="row" size={randomSize()} spacing={20}>
        {MenuBtnType}
      </Box>
    </div>
  );
}
