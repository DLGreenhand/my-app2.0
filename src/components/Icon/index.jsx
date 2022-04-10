import * as React from 'react';
import styles from './index.module.css';
import randomIcon from '../Zgen/genIcon';
import { Icon as Ic } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';
import randomColor from '../Zgen/genColor';

const Sizes = ['xxl', 'xl', 'xxxl', 'large', 'medium', 'small'];

export default function Icon(props) {
  const { size, color } = props;
  return (
    <div className="component" id="Icon">
      <Ic size={size} style={{ color }} type={randomIcon()} />
    </div>
  );
}
Icon.defaultProps = {
  size: randomSelect(Sizes),
};
