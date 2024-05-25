'use client';

import usePortal from '@/hooks/use-portal';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { IconNavigateLeft } from '../components/index';

interface Props {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  bottomSheetRef?: React.ForwardedRef<HTMLDivElement>;
  onOutsideClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClose?: () => void;
}

function BottomSheet({
  title,
  children,
  bottomSheetRef,
  onOutsideClick,
  isOpen,
  onClose,
}: Props) {
  const portalRoot = usePortal('bottomSheet');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isOpen && !isAnimating) return null;
  return portalRoot
    ? createPortal(
        <>
          <div
            ref={bottomSheetRef}
            onClick={onOutsideClick}
            className="z-4 fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-black bg-opacity-50"
          />
          <div
            className={`z-4 fixed bottom-0pxr  bg-white rounded-tl-[15px] rounded-tr-[15px] w-390pxr h-402pxr ${isOpen ? 'animate-showBottomSheet' : 'animate-closeBottomSheet'}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <div className="flex justify-center">
              <button
                className="absolute left-6pxr top-26pxr w-33pxr h-33pxr"
                onClick={onClose}
              >
                <IconNavigateLeft />
              </button>
              <h1 className="text-center text-black text-18pxr font-semibold mt-30pxr">
                {title}
              </h1>
            </div>
            {children}
          </div>
        </>,
        portalRoot,
      )
    : null;
}

export default BottomSheet;
