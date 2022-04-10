import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import randomSize from '../Zgen/genSize';
import textArr from '../Zgen/genTextArr';
import { Pagination as Pgt } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';

export default function Pagination() {
  const types = ['normal', 'simple', 'mini'];
  const type = randomSelect(types);
  const shapes = ['normal', 'arrow-only', 'arrow-prev-only', 'no-border'];
  const shape = randomSelect(shapes);
  const page_size = randomNum(1, 20);
  const total = page_size + randomNum(1, 20);
  const page_selector = () => {
    if (randomBool() !== true) {
      return false;
    } else {
      const selectors = ['filter', 'dropdown'];
      const selector = randomSelect(selectors);
      return selector;
    }
  };
  return (
    <div className="component" id="Pagination" style={{ display: 'inline-block', margin: 8 }}>
      <Pgt
        size={randomSize()}
        shape={shape}
        type={type}
        pageSizeSelector={page_selector()}
        pageSize={page_size}
        showJump={randomBool()}
        total={total}
        defaultCurrent={randomNum(1, total / page_size + 1)}
      />
    </div>
  );
}
