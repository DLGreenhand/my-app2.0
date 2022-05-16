import Button from '@/components/Button';
import Text from '@/components/Text';
import randomArr from '@/components/Zgen/genArr';
import randomBool from '@/components/Zgen/genBool';
import randomNum from '@/components/Zgen/genNum';
import randomSelect from '@/components/Zgen/genSelect';
import randomString from '@/components/Zgen/genText';
import { Card } from '@alifd/next';
import * as React from 'react';
import Across from '../Across';
import Navi from '../Navi';

const extraContent = [<Button />, null];
const content = [<Across />, randomArr(extraContent, 3), <Text textLen={randomNum(6, 40)} fontSize="20px" />, <Navi />];
export default function CardGroup() {
  return (
    <div className="component" id="CardGroup" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Card
        title={<Text textLen={randomNum(6, 10)} />}
        style={{ width: '370px', display: 'block' }}
        showTitleBullet={randomBool()}
        showHeadDivider={randomBool()}
        hasBorder
        extra={randomSelect(extraContent)}
      >
        {randomSelect(content)}
      </Card>
    </div>
  );
}
