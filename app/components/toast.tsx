'use client';
import { ReactNode, useEffect, useState } from 'react';
import IconCheck from './ui/icon-check';
import { createPortal } from 'react-dom';

interface IToastProps {
  children: ReactNode;
}

function Toast({ children }: IToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(
    <div className="w-358pxr h-58pxr shrink-0 rounded-[15px] bg-[#dfedd5] relative flex items-center">
      <div className="absolute left-22pxr">
        <IconCheck />
      </div>
      <p className="text-[#313131] text-15pxr font-medium absolute left-64pxr">
        {children}
      </p>
    </div>,
    document.getElementById('global-toast') as HTMLElement,
  );
}

export default Toast;
