import * as React from 'react';
import { Divider as Div } from '@alifd/next';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import textArr from '../Zgen/genTextArr';
import randomSelect from '../Zgen/genSelect';

export default function Divider() {
  let divider;
  let w;
  const text = [];
  const dividerType = Math.random();
  if (dividerType > 0.8) {
    // ver
    w = 'auto';
    divider = <Div className="component" id="DividerCpn" style={{ color: 'black', width: w }} direction="ver" />;
  } else if (dividerType > 0.6) {
    // hoz
    w = 240;
    divider = <Div className="component" id="DividerCpn" style={{ color: 'black', width: w }} />;
  } else {
    text.push(randomString(4));
    const textPos = ['right', 'left', 'center'];
    const Pos = randomSelect(textPos);
    w = 240;
    divider = (
      <Div
        className="component"
        id="Divider"
        style={{ color: 'black', width: w, margin: 8 }}
        orientation={Pos}
        title={`${textArr(text)}`}
      >
        {text[0]}
      </Div>
    );
  }
  return <div>{divider}</div>;
}
