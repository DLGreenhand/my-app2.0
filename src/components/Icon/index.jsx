import * as React from 'react';
import styles from './index.module.css';
import randomIcon from '../Zgen/genIcon';
import { Badge, Icon as Ic } from '@alifd/next';
import randomSelect from '../Zgen/genSelect';
import randomColor from '../Zgen/genColor';
import randomBool from '../Zgen/genBool';
import randomNum from '../Zgen/genNum';
import randomString from '../Zgen/genText';

const Sizes = ['xxl', 'xl', 'xxxl', 'large', 'medium', 'small'];

export default function Icon(props) {
  const { size, color } = props;
  const arrColor = randomColor(1);
  const Icons = [
    <Ic className="component" id="Icon" size={size} style={{ color }} type={randomIcon()} />,
    <Badge
      dot
      // className="component"
      // id="Badge"
    >
      <Ic className="component" id="Icon" size={size} style={{ color }} type={randomIcon()} />
    </Badge>,
    <Badge
      // className="component"
      // id="Badge"
      style={{ color: arrColor[1], backgroundColor: arrColor[0] }}
      showZero={randomBool()}
      count={randomNum(0, 110)}
    >
      <Ic className="component" id="Icon" size={size} style={{ color }} type={randomIcon()} />
    </Badge>,
    <Badge
      // className="component"
      // id="Badge"
      style={{ color: arrColor[1], backgroundColor: arrColor[0] }}
      content={randomString(3)}
    >
      <Ic className="component" id="Icon" size={size} style={{ color }} type={randomIcon()} />
    </Badge>,
  ];
  return (randomSelect(Icons));
}
Icon.defaultProps = {
  size: randomSelect(Sizes),
  color: randomColor(0)[0],
};
