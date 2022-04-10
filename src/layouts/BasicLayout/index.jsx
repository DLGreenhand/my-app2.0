import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';
import randomString from '@/components/Zgen/genText';
import randomPic from '@/components/Zgen/genPic';

(function () {
  const throttle = function (type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();

export default function BasicLayout({ children }) {
  const getDevice = (width) => {
    // const isPhone = typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);
    const isPhone = true;
    if (width < 680 || isPhone) {
      return 'phone';
    } else if (width < 1280 && width > 680) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth = (e && e.target && e.target.innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return (
    <ConfigProvider device={device}>
      <Shell
        style={{
          minHeight: '100vh',
          padding: '0%',
        }}
        type="brand"
        fixedHeader={false}
      >
        {/* <Shell.Branding>
          <Logo image={`src\\components\\Pics\\${randomPic(pics)}.jpg`} text={randomString(4)} />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        />
        <Shell.Action /> */}
        {/* <Shell.Navigation>
          <PageNav />
        </Shell.Navigation> */}

        <Shell.Content>{children}</Shell.Content>
        {/* <Shell.Footer>
          <Footer />
        </Shell.Footer> */}
      </Shell>
    </ConfigProvider>
  );
}
