'use client';

import { useState } from 'react';
import { IconHeadPhone, IconPerson } from '../icon';
import {
  AccountMenu,
  CustomerServiceMenu,
  MainMenuHeader,
  MenuBarButton,
} from '../index';

interface Props {
  onClose: () => void;
}

function MainMenu({ onClose }: Props) {
  const [menu, setMenu] = useState('메뉴');
  const handleClickMenu = (menu: string) => {
    setMenu(menu);
  };
  const renderMenu = () => {
    switch (menu) {
      case '메뉴':
        return (
          <>
            <MenuBarButton
              title="계정"
              icon={<IconPerson />}
              onClick={() => handleClickMenu('계정')}
            />
            <MenuBarButton
              title="고객센터"
              icon={<IconHeadPhone />}
              onClick={() => handleClickMenu('고객센터')}
            />
          </>
        );
      case '계정':
        return <AccountMenu />;
      case '고객센터':
        return <CustomerServiceMenu />;
    }
  };
  return (
    <>
      <MainMenuHeader title={menu} onClose={onClose} />
      <div className="mx-16pxr mt-20pxr flex-1 overflow-auto">
        {renderMenu()}
      </div>
    </>
  );
}

export default MainMenu;
