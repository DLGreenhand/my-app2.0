import * as React from 'react';
import * as styles from './index.module.css';
import randomString from '../Zgen/genText';
import { Paragraph } from '@alifd/next';
import randomColor from '../Zgen/genColor';

export default function Text(props) {
  const { FontSize, textLen, color } = props;
  const text = randomString(textLen);
  return (
    <a className="component" id="Text" style={{ fontSize: FontSize, color }}>{text}</a>
  );
}
Text.defaultProps = {
  textLen: 6,
  FontSize: '20px',
  color: randomColor(0)[0],
};
