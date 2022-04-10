import React from 'react';
import AppHead from '@/FuncBlock/AppHead';
import Navi from '@/FuncBlock/Navi';
import randomPic from '@/components/Zgen/genPic';

export default function CommonLayout({ children }) {
  return (
    <div
      style={{
        overflow: 'hidden',
        width: '390px',
        maxHeight: '844px',
        display: 'block',
        backgroundImage: `url(${randomPic()})`,
      }}
    >
      <AppHead />
      {children}
      <Navi pos="fixed" num={1} />
    </div>
  );
}
