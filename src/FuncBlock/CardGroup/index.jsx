import Button from '@/components/Button';
import Image from '@/components/Image';
import Step from '@/components/Step';
import randomBool from '@/components/Zgen/genBool';
import randomPic from '@/components/Zgen/genPic';
import randomSelect from '@/components/Zgen/genSelect';
import randomString from '@/components/Zgen/genText';
import { Card } from '@alifd/next';
import * as React from 'react';
import Navi from '../Navi';

const content = [<Button />, <Navi num={1} inCard={1} />];
const extraContent = [<Button />, null];

export default function CardGroup() {
  return (
    <div className="component" id="CardGroup" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Card
        title={randomString(6)}
        className="component"
        id="Card"
        style={{ width: '370px', display: 'block' }}
        showTitleBullet={randomBool()}
        showHeadDivider={randomBool()}
        hasBorder
        extra={extraContent}
      >
        {randomSelect(content)}
      </Card>
    </div>
  );
}
