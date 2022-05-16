import Avatar from '@/components/Avatar';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import Navi from '@/FuncBlock/Navi';
import randomColor from '@/components/Zgen/genColor';
import { level } from '@/level';
import randomPic from '@/components/Zgen/genPic';
import randomBG from '@/components/Zgen/genBG';

function PersonalLayout({ children }) {
  const arrColor = randomColor(3);
  let backGround;
  if (level >= 4) {
    backGround = randomBG();
  }
  return (
    <div
      id="components"
      style={{
        width: '390px',
        height: '844px',
        display: 'block',
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: arrColor[0],
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Avatar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text FontSize="25px" textLen={4} color={arrColor[1]} />
          <Text FontSize="12px" textLen={20} color={arrColor[2]} />
        </div>
        <div style={{ marginLeft: '140px' }}>
          <Icon size="xl" color={arrColor[3]} />
        </div>
      </div>
      {children}
      <Navi num={1} pos="fixed" />
    </div>
  );
}

export default PersonalLayout;
