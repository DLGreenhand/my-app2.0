import React from 'react';
import AppHead from '@/FuncBlock/AppHead';
import Navi from '@/FuncBlock/Navi';
import randomPic from '@/components/Zgen/genPic';
import { level } from '@/level';
import randomBG from '@/components/Zgen/genBG';

export default function CommonLayout({ children }) {
  let backGround;
  if (level >= 4) {
    backGround = randomBG();
  }
  return (
    <div
      id="components"
      style={{
        overflow: 'hidden',
        width: '390px',
        maxHeight: '844px',
        display: 'block',
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
      }}
    >
      <AppHead />
      <Navi />
      {children}
      <Navi pos="fixed" num={1} />
    </div>
  );
}
