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
  const menus = {
    menu: '메뉴',
    account: '계정',
    customerService: '고객센터',
  };
  const [menu, setMenu] = useState(menus.menu);
  const handleClickMenu = (menu: string) => {
    setMenu(menu);
  };
  const handleClickBack = () => {
    if (menu !== menus.menu) {
      setMenu(menus.menu);
    } else {
      onClose();
    }
  };
  const renderMenu = () => {
    switch (menu) {
      case menus.menu:
        return (
          <>
            <MenuBarButton
              title={menus.account}
              icon={<IconPerson />}
              onClick={() => handleClickMenu(menus.account)}
            />
            <MenuBarButton
              title={menus.customerService}
              icon={<IconHeadPhone />}
              onClick={() => handleClickMenu(menus.customerService)}
            />
          </>
        );
      case menus.account:
        return <AccountMenu />;
      case menus.customerService:
        return <CustomerServiceMenu />;
    }
  };
  return (
    <>
      <MainMenuHeader title={menu} onClick={handleClickBack} />
      <div className="mx-16pxr mt-20pxr flex-1 overflow-auto">
        {renderMenu()}
      </div>
    </>
  );
}

export default MainMenu;
