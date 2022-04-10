import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Progress as Prgs, Box } from '@alifd/next';
import randomSize from '../Zgen/genSize';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';
import randomColor from '../Zgen/genColor';

export default function Progress() {
  const shapes = ['circle', 'line'];
  const shape = randomSelect(shapes);
  const Width = shape === 'line' ? 300 : 'auto';
  const arrColor = randomColor();
  return (
    <div className="component" id="Progress" style={{ display: 'block', margin: 8, minWidth: 250 }}>
      <Box direction="column" spacing={20}>
        <Prgs
          percent={randomNum(0, 100)}
          size={randomSize()}
          shape={shape}
          state={randomSelect(['normal', 'success', 'error'])}
          hasBorder={randomBool()}
          color={arrColor[1]}
          backgroundColor={arrColor[0]}
        />
      </Box>
    </div>
  );
}
