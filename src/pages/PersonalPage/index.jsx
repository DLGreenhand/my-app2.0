import React from 'react';
import Avatar from '@/components/Avatar';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import Navi from '@/FuncBlock/Navi';
import CardGroup from '@/FuncBlock/CardGroup';
import Across from '@/FuncBlock/Across';
import randomArr from '@/components/Zgen/genArr';

const selects = [<Navi />, <CardGroup />, <Across />];
const children = randomArr(selects, Math.random() * 3 + 7);
function PersonalPage() {
  return <div style={{ display: 'block' }}>{children}</div>;
}

export default PersonalPage;
