import Input from '@/components/Input';
import Video from '@/components/Video';
import randomPic from '@/components/Zgen/genPic';
import randomSelect from '@/components/Zgen/genSelect';
import React from 'react';
import { level } from '@/level';
import randomBG from '@/components/Zgen/genBG';

function LiveLayout({ children }) {
  const selects = [
    <div style={{ width: '390px', height: '844px', display: 'block' }}>
      <Video />
      {children}
      <div style={{ position: 'fixed', bottom: 0 }}>
        <Input />
      </div>
    </div>,
  ];
  let backGround;
  if (level >= 4) {
    backGround = randomBG();
  }
  return (
    <div
      id="components"
      style={{
        width: '390px',
        height: '844px',
        display: 'block',
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
      }}
    >
      {randomSelect(selects)}
    </div>
  );
}

export default LiveLayout;
