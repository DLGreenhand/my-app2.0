import * as React from 'react';
import styles from './index.module.css';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import randomSelect from '@/components/Zgen/genSelect';

export default function BtnGroup(props) {
  const { size, textColor, iconColor } = props;
  const Icons = [<Icon size={size} color={iconColor} />, <Text color={iconColor} textLen={2} FontSize={25} />];
  return (
    // <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
    //   <div className="block" id="BtnGroup" style={{ display: 'flex', flexDirection: 'column', marginBottom: 0 }}>
    //     {randomSelect(Icons)}
    //     <Text />
    //   </div>
    <div className="component" id="BtnGroup" style={{ display: 'flex', flexDirection: 'column' }}>
      {randomSelect(Icons)}
      <Text color={textColor} />
    </div>
    // </div>
  );
}
BtnGroup.defaultProps = {
  size: 'xl',
};
