import * as React from 'react';
import * as styles from './index.module.css';
import { Grid as Gd } from '@alifd/next';
import randomString from '../Zgen/genText';
import textArr from '../Zgen/genTextArr';
import randomNum from '../Zgen/genNum';

const { Row, Col } = Gd;
export default function Grid() {
  const text = [];
  const Grids = [];
  const GridNum = randomNum(1, 5);
  const gutter = randomNum(0, 8);
  for (let i = 0; i < GridNum; i++) {
    const tmp_text = randomString(3);
    Grids.push(
      <Col className={styles.next_col} span={`${24 / GridNum}`}>
        {tmp_text}
      </Col>,
    );
    text.push(tmp_text);
  }
  return (
    // eslint-disable-next-line max-len
    <div
      className="component"
      id="Grid"
      style={{ display: 'inline-block', margin: 8, minWidth: 100 }}
      title={`body:${textArr(text)}`}
    >
      <div className={styles.basic_demo}>
        <Row className={styles.next_row} gutter={gutter}>
          {Grids}
        </Row>
        <br />
      </div>
    </div>
  );
}
