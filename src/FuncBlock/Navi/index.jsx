import Components from '@/components';
import Tab from '@/components/Tab';
import randomColor from '@/components/Zgen/genColor';
import randomSelect from '@/components/Zgen/genSelect';
import * as React from 'react';
import BtnGroup from '../BtnGroup';

export default function Navi(props) {
  let { size, pos, num, inCard } = props;
  const Group_num = Math.random() * 5 + 1;
  const BtnGroups = [];
  const arrColor = randomColor(2 * Group_num);
  let BGC;
  if (num === 1) {
    BGC = arrColor[0];
  }
  for (let i = 0; i < Group_num; i++) {
    BtnGroups.push(<BtnGroup size={size} textColor={arrColor[2 * i + 1]} iconColor={arrColor[2 * i + 2]} />);
  }
  let selected;
  if (Math.random() > 0.5 || num !== 0) {
    selected = BtnGroups;
  } else {
    selected = <Tab />;
    pos = 'static';
  }
  if (inCard === 1) {
    BGC = '0';
  }
  return (
    <div
      // className="component"
      // id="Navi"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: pos,
        bottom: 0,
        width: '100%',
        maxWidth: '390px',
        backgroundColor: BGC,
      }}
    >
      {selected}
    </div>
  );
}
Navi.defaultProps = {
  size: 'xl',
  pos: 'static',
  num: 0,
  inCard: 0,
};
