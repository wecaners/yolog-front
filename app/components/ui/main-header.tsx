'use client';

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

  return (
    <header className="mx-16pxr flex justify-between items-center h-65pxr">
      <Menu isOpen={isMenuOpen}>
        <MainMenu onClose={handleClose} />
      </Menu>
      <div className="flex gap-28pxr">
        <button
          className={`${gowunBatang.className} text-17pxr font-bold opacity-[0.25]`}
        >
          여행 일기
        </button>
        <button
          className={`${gowunBatang.className} text-17pxr font-bold opacity-[0.25]`}
        >
          빠른 메모
        </button>
      </div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IconMenu />
      </button>
    </header>
  );
}

export default MainHeader;
