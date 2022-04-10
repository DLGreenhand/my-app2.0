import Card from '@/components/Card';
import Search from '@/components/Search';
import Slider from '@/components/Slider';
import Across from '@/FuncBlock/Across';
import BtnGroup from '@/FuncBlock/BtnGroup';
import Navi from '@/FuncBlock/Navi';
import Random from '@/FuncBlock/Random';
import React from 'react';
import randomArr from '@/components/Zgen/genArr';

const selects = [<Slider />, <Across />, <Search />, <Random />, <Navi />];
const children = randomArr(selects, 10);

export default function CommonPage() {
  return <div style={{ marginTop: '50px', display: 'block' }}>{children}</div>;
}
