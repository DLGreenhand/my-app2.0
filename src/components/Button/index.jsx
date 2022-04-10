import * as React from 'react';
import { Button as Btn, Box, Icon } from '@alifd/next';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomSelect from '../Zgen/genSelect';

export default function Button() {
  const haveIcon = Math.random();
  let BtnIcon = [];
  if (haveIcon > 0.5) {
    BtnIcon = <Icon type={randomIcon()} key={randomIcon()} />;
  }

  const text = randomString(4);
  const Btns = ['primary', 'secondary', 'normal'];
  const sizes = ['large', 'medium', 'small'];
  const size = randomSelect(sizes);
  const BtnType = randomSelect(Btns);
  return (
    <div className="component" id="Button" style={{ display: 'inline-block', margin: 8 }} title={text}>
      <Box direction="row">
        <Btn type={BtnType} size={size}>
          {BtnIcon}
          {text}
        </Btn>
      </Box>
    </div>
  );
}
