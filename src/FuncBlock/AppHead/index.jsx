import Components from '@/components';
import Icon from '@/components/Icon';
import Search from '@/components/Search';
import Text from '@/components/Text';
import randomColor from '@/components/Zgen/genColor';
import randomSelect from '@/components/Zgen/genSelect';
import * as React from 'react';

const AppHeads = [
  <Text
    type="h1"
    mark={false}
    code={false}
    delete={false}
    underline={false}
    strong={false}
    style={{
      display: 'inline-block',
      width: '320px',
      textAlign: 'center',
      fontSize: '30px',
      lineHeight: '30px',
    }}
  />,
  <Search />,
];

export default function AppHead() {
  const arrColor = randomColor(2);
  return (
    <div
      className="component"
      id="AppHead"
      style={{
        width: '390px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: '50px',
        backgroundColor: arrColor[0],
        // position: 'fixed',
        // top: '0px',
        // left: '0px',
      }}
    >
      <Icon size={'xl'} color={arrColor[1]} />
      {randomSelect(AppHeads)}
      <Icon size={'xl'} color={arrColor[2]} />
    </div>
  );
}
