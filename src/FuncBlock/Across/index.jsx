import Avatar from '@/components/Avatar';
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import Text from '@/components/Text';
import randomArr from '@/components/Zgen/genArr';
import randomColor from '@/components/Zgen/genColor';
import randomNum from '@/components/Zgen/genNum';
import randomSelect from '@/components/Zgen/genSelect';
import * as React from 'react';
export default function Across() {
  const acrossArr = [
    <div
      style={{
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: randomSelect(['flex-end', 'flex-start']),
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text FontSize="25px" textLen={randomNum(5, 15)} />
        <Icon />
      </div>
      <div style={{ display: 'flex', justifyContent: randomSelect(['space-around', 'flex-start', 'space-between']) }}>
        {randomArr(
          [
            <div
              style={{
                marginRight: '10px',
                display: 'flex',
                flexDirection: randomSelect(['row', 'row-reverse']),
                alignItems: 'center',
              }}
            >
              <Icon size="small" />
              <Text FontSize="15px" textLen={randomNum(2, 6)} />
            </div>,
          ],
          randomNum(1, 4),
        )}
      </div>
    </div>,
    ///
    <div
      style={{
        display: 'flex',
        flexDirection: randomSelect(['row', 'row-reverse']),
        justifyContent: randomSelect(['center', 'flex-start', 'flex-end']),
        alignItems: randomSelect(['center', 'flex-start', 'flex-end']),
      }}
    >
      <Avatar />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: randomSelect(['left', 'right']),
        }}
      >
        <Text
          FontSize="25px"
          textLen={randomNum(2, 5)}
          color={randomColor(0)[0]}
        />
        <Text
          FontSize="12px"
          textLen={randomNum(10, 20)}
          color={randomColor(0)[0]}
        />
      </div>
    </div>,
    ///
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <Icon size="xs" color={randomColor(0)[0]} />
      <Text FontSize="16px" textLen={30} color={randomColor(0)[0]} />
      <Icon size="s" style={{ float: 'right' }} color={randomColor(0)[0]} />
    </div>,
    ///
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <Text FontSize="16px" textLen={3} color={randomColor(0)[0]} />
      <Text FontSize="16px" textLen={30} color={randomColor(0)[0]} />
      <Icon size="s" style={{ float: 'right' }} color={randomColor(0)[0]} />
    </div>,
    ///
    <div
      style={{
        display: 'flex',
        flexDirection: randomSelect(['row', 'row-reverse']),
        justifyContent: randomSelect(['center', 'flex-start', 'flex-end']),
        alignItems: randomSelect(['center', 'flex-start', 'flex-end']),
        margin: '10px',
      }}
    >
      <Image width="27%" height="100%" />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: randomSelect(['flex-start', 'flex-end']),
        }}
      >
        <Text FontSize="35px" textLen={randomNum(2, 5)} color={randomColor(0)[0]} />
        <Text FontSize="20px" textLen={randomNum(10, 20)} color={randomColor(0)[0]} />
      </div>
    </div>,
    ///
    <div
      style={{ margin: '20px', display: 'flex', justifyContent: randomSelect(['center', 'flex-start', 'flex-end']) }}
    >
      <Text FontSize="20px" textLen={randomNum(5, 60)} color={randomColor(0)[0]} />
    </div>,
    ///
  ];
  return (
    <div
      // className="component"
      // id="Across"
      style={{ display: 'block', width: `${randomNum(90, 100)}%` }}
    >
      {randomSelect(acrossArr)}
    </div>
  );
}
