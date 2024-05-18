'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IDialogProps {
  children: ReactNode;
  isOpen: boolean;
  dialogRef?: React.ForwardedRef<HTMLDivElement>;
  dialogOutsideClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
}

function Dialog({
  children,
  isOpen,
  dialogRef,
  dialogOutsideClick,
}: IDialogProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;
  return createPortal(
    <div>
      <div
        ref={dialogRef}
        onClick={dialogOutsideClick}
        className="z-4 fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-black bg-opacity-50"
      />
      <div className="z-4 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-276pxr py-16pxr px-9pxr gap-20pxr rounded-[20px] shadow-dialog bg-white text-black">
        {children}
      </div>
    </div>,
    document.getElementById('global-dialog') as HTMLElement,
  );
}

export default Dialog;
