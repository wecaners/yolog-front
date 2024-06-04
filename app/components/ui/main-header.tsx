'use client';

import { useState } from 'react';
import { IconMenu } from '../icon';
import Menu from '../menu';
import { gowunBatang } from './fonts';
import MainMenu from './main-menu';
import useMenu from '@/hooks/use-menu';

function MainHeader() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const [tabs, setTabs] = useState('일기');
  const selectedTabStyle =
    'text-black font-bold border-b-4 border-[#506046] rounded-[2px] opacity-100';

  return (
    <header className="items-center h-65pxr bg-[#eaf2e4]">
      <Menu isOpen={isMenuOpen}>
        <MainMenu onClose={handleClose} />
      </Menu>
      <div className="mx-16pxr flex justify-between pt-20pxr items-center">
        <div className="flex gap-28pxr">
          <button
            className={`${gowunBatang.className} text-17pxr font-bold opacity-[0.25] pb-4pxr ${tabs === '일기' ? selectedTabStyle : ''}`}
            onClick={() => setTabs('일기')}
          >
            여행 일기
          </button>
          <button
            className={`${gowunBatang.className} text-17pxr font-bold opacity-[0.25] pb-4pxr ${tabs === '메모' ? selectedTabStyle : ''}`}
            onClick={() => setTabs('메모')}
          >
            빠른 메모
          </button>
        </div>
        <button className="pb-4pxr" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IconMenu />
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
