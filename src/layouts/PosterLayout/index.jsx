import randomPic from '@/components/Zgen/genPic';
import React from 'react';

function Poster({ children }) {
  return (
    <div
      style={{
        position: 'fixed',
        width: 390,
        height: 844,
        backgroundImage: `url(${randomPic()})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
}

export default Poster;
