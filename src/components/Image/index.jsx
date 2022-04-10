import * as React from 'react';
import styles from './index.module.css';
import randomPic from '../Zgen/genPic';

export default function Image(props) {
  const { width, height } = props;
  return (
    <img className="component" id="Image" src={randomPic()} width={width} height={height} />
  );
}
Image.defaultProps = {
  width: '100%',
  height: '100%',
};
