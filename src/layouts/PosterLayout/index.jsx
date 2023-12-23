import randomBG from '@/components/Zgen/genBG';
import randomPic from '@/components/Zgen/genPic';
import React from 'react';

function PosterLayout({ children }) {
  return (
    <div
      className="components"
      id="components"
      style={{
        position: 'fixed',
        width: 390,
        height: 844,
        backgroundImage: `url(${randomBG()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
}

export default PosterLayout;
