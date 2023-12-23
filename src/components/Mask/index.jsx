import * as React from 'react';
import styles from './index.module.css';
import randomPic from '../Zgen/genPic';
import randomNum from '../Zgen/genNum';
import randomSelect from '../Zgen/genSelect';
import Icon from '../Icon';
import randomIconPic from '../Zgen/genIconPic';
import randomClsPic from '../Zgen/genClsPic';

const cols = ['column-reverse', 'column'];
const rows = ['center', 'start', 'end'];
export default function Mask(props) {
  return (
    <div
      className="mask"
      id="mask"
      style={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        backgroundColor: `rgba(0, 0, 0, ${Math.random()})`,
        zIndex: 999,
        display: 'flex',
        flexDirection: `${randomSelect(cols)}`,
      }}
    >
      <div
        style={{
          borderRadius: `${Math.random() * 10}%`,
          maxHeight: '50%',
          maxWidth: '75%',
          marginLeft: `${randomNum(0, 25)}%`,
          marginTop: `${randomNum(0, 25)}%`,
          marginBottom: `${randomNum(0, 25)}%`,
          display: 'flex',
          flexDirection: `${randomSelect(cols)}`,
          // justifyItems: ,
          alignItems: `${randomSelect(rows)}`,
        }}
      >
        <img
          className="component"
          id="Icon"
          style={{
            maxWidth: '10%',
            maxHeight: '10%',
          }}
          src={randomClsPic()}
        />
        <img
          className="component"
          id="Image"
          style={{
            borderRadius: `${Math.random() * 10}%`,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src={randomPic()}
        />
      </div>
    </div>
  );
}
