'use client';

import useMenu from '@/hooks/use-menu';
import { IconNavigateLeft } from '../icon';

interface Props {
  title: string;
  onClose: () => void;
}

function MainMenuHeader({ title, onClose }: Props) {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  return (
    <div className="relative flex items-center justify-center mt-74pxr">
      <button className="absolute left-6pxr" onClick={onClose}>
        <IconNavigateLeft />
      </button>
      <h1 className="text-18pxr font-semibold">{title}</h1>
    </div>
  );
}

export default MainMenuHeader;
