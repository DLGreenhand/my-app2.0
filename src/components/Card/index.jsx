import * as React from 'react';
import styles from './index.module.css';
import randomString from '../Zgen/genText';
import randomIcon from '../Zgen/genIcon';
import randomNum from '../Zgen/genNum';
import textArr from '../Zgen/genTextArr';
import { Card as Cd } from '@alifd/next';
import randomPic from '../Zgen/genPic';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';

export default function Card() {
  const title = randomString(5);
  const subTitle = randomString(4);
  const content = randomString(24);
  const medias = [null, randomPic()];
  const media = randomSelect(medias);
  return (
    <div
      className="component"
      id="Card"
      style={{ display: 'inline-block', margin: 8, backgroundImage: randomPic() }}
      title={`title:${title};subtitle:${subTitle};content:${content}`}
    >
      <Cd free={randomBool()} showHeadDivider={randomBool()} showTitleBullet={randomBool()} hasBorder={randomBool()}>
        <Cd.Media>
          <img src={media} />
        </Cd.Media>
        <Cd.Header title={title} subTitle={subTitle} />
        <Cd.Content>{content}</Cd.Content>
      </Cd>
    </div>
  );
}
