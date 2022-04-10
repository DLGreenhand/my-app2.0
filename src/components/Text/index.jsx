import * as React from 'react';
import * as styles from './index.module.css';
import randomString from '../Zgen/genText';
import { Paragraph } from '@alifd/next';

export default function Text(props) {
  const { FontSize, textLen, color } = props;
  const text = randomString(textLen);
  return (
    <div className="component" id="Text" title={text}>
      <Paragraph style={{ fontSize: FontSize, color }}>{text}</Paragraph>
    </div>
  );
}
Text.defaultProps = {
  textLen: 6,
};
