import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Switch as Swch } from '@alifd/next';
import randomBool from '../Zgen/genBool';
import randomSize from '../Zgen/genSize';
import randomReactNode from '../Zgen/genReactNode';
import randomSelect from '../Zgen/genSelect';
import randomColor from '../Zgen/genColor';

export default function Switch() {
  let text;
  const checkedChildren = randomSelect([randomString(3), randomReactNode()]);
  const unCheckedChildren = randomSelect([randomString(3), randomReactNode()]);
  if (typeof checkedChildren === 'string') {
    text += `Checked:${checkedChildren}`;
  }
  if (typeof unCheckedChildren === 'string') {
    text += `;unChecked:${unCheckedChildren}`;
  }
  return (
    <div className="component" id="Switch" style={{ display: 'inline-block', margin: 8 }} title={text}>
      <Swch
        style={{ backgroundColor: randomColor(0)[0] }}
        disabled={randomBool()}
        loading={randomBool()}
        autoWidth
        defaultChecked={randomBool()}
        size={randomSize()}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
      />
    </div>
  );
}
