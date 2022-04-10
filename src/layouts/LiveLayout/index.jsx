import Input from '@/components/Input';
import Video from '@/components/Video';
import randomPic from '@/components/Zgen/genPic';
import randomSelect from '@/components/Zgen/genSelect';
import React from 'react';

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
  return (
    <div
      style={{
        width: '390px',
        height: '844px',
        display: 'block',
        backgroundImage: `url(${randomPic()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {randomSelect(selects)}
    </div>
  );
}

export default LiveLayout;
