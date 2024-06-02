'use client';

import usePortal from '@/hooks/use-portal';
import { createPortal } from 'react-dom';
import MainMenuHeader from './ui/main-menu-header';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  menuRef?: React.ForwardedRef<HTMLDivElement>;
}

function Menu({ isOpen, children, onClose }: Props) {
  const portalRoot = usePortal('menu-portal');

  if (!isOpen) return null;

  return portalRoot
    ? createPortal(
        <div className="bg-white z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <MainMenuHeader title="메뉴" onClose={onClose} />
          {children}
        </div>,
        portalRoot,
      )
    : null;
}

export default Menu;
