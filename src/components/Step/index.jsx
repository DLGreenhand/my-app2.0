import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Step as Stp } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';

export default function Step() {
  const stepNum = randomNum(2, 4);
  const display_text = [];
  const steps = [];
  for (let i = 0; i < stepNum; i++) {
    const tmp_text = [];
    tmp_text.push(randomString(4));
    tmp_text.push(randomString(6));
    display_text.push(`step:${tmp_text[0]},content:${tmp_text[1]}`);
    steps.push(tmp_text);
  }

  const statuss = ['wait', 'process', 'finish'];
  const status = randomSelect(statuss);
  const Steps = steps.map((item, index) => (
    <Stp.Item
      aria-current={index === 1 ? 'step' : null}
      key={index}
      title={item[0]}
      content={item[1]}
      icon={randomIcon()}
      status={status}
    />
  ));

  const current = randomNum(0, stepNum);
  const directions = ['hoz', 'ver'];
  const direction = randomSelect(directions);
  const shapes = ['circle', 'arrow', 'dot'];
  const shape = randomSelect(shapes);

  return (
    <div
      className="component"
      id="Step"
      style={{ display: 'inline-block', margin: 20, minWidth: 200 }}
      title={textArr(display_text)}
    >
      <Stp current={current} shape={shape} direction={direction}>
        {Steps}
      </Stp>
    </div>
  );
}
