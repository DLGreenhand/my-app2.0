import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Input as Ipt, Icon } from '@alifd/next';
import randomBool from '../Zgen/genBool';
import randomSelect from '../Zgen/genSelect';
import randomSize from '../Zgen/genSize';
import randomReactNode from '../Zgen/genReactNode';

export default function Input() {
  const placeholder = randomString(8);
  const states = ['error', 'loading', 'success', 'warning'];
  const state = randomSelect(states);

  const label = randomString(4);
  const InnerBefore = randomReactNode();
  const InnerAfter = randomReactNode();
  const addonBefore = randomReactNode();
  const addonAfter = randomReactNode();
  const addonTextBefore = randomString(5);
  const addonTextAfter = randomString(5);
  const maxlength = Math.random() > 0.5 ? null : randomNum(1, 11);
  const value = randomString(6);
  return (
    <div
      className="component"
      id="Input"
      style={{ display: 'inline-block', margin: 8 }}
      title={`placeholder:
      ${placeholder},value:${value},label:${label},TextBefore:${addonTextBefore},TextAfter:${addonTextAfter}`}
    >
      <Ipt
        label={label}
        defaultValue={value}
        InnerAfter={InnerAfter}
        InnerBefore={InnerBefore}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        addonTextAfter={addonTextAfter}
        addonTextBefore={addonTextBefore}
        size={randomSize()}
        hasBorder={randomBool()}
        hasClear={randomBool()}
        state={state}
        disabled={randomBool()}
        placeholder={placeholder}
        maxLength={maxlength}
      />
    </div>
  );
}
