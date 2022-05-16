import * as React from 'react';
import randomPic from '../Zgen/genPic';
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl, // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton, // 倍速播放选项
  VolumeMenuButton,
} from 'video-react';
import 'video-react/dist/video-react.css';
import randomSelect from '../Zgen/genSelect';
import randomBool from '../Zgen/genBool';
import { DefaultPlayer as Video5 } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Text from '../Text';

const videos = [
  <video
    className="component"
    id="Video"
    poster={randomPic()}
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      textAlign: 'center',
      float: 'none',
      flexWrap: 'nowrap',
      objectFit: 'fill',
    }}
    controls
  />,
  <div className="component" id="Video">
    <Player fluid poster={randomPic()} src={'https://fusion.alicdn.com/images/page-1.mp4'} style={{ zIndex: '999' }}>
      <ControlBar autoHide={false}>
        <ReplayControl seconds={10} order={1.1} />
        <PlayToggle />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
        <VolumeMenuButton />
      </ControlBar>
      {/* <PlayToggle /> */}
    </Player>
  </div>,
  <div className="component" id="Video">
    <Video5 controls={['PlayPause', 'Seek', 'Time', 'Volume']} poster={randomPic()}>
      <source src="https://fusion.alicdn.com/images/page-1.mp4" />
    </Video5>
  </div>,
];

export default function Video(props) {
  const { width } = props;
  return <div style={{ margin: '10px', width }}>{randomSelect(videos)}</div>;
}
Video.defaultProps = {
  width: '95%',
};
