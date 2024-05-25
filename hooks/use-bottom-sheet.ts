'use client';

import { useRef, useState } from 'react';

function useBottomSheet() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (bottomSheetRef.current === e.target) {
      setIsSheetOpen(false);
    }
  };
  return {
    isSheetOpen,
    setIsSheetOpen,
    bottomSheetRef,
    handleOutsideClick,
  };
}

export default useBottomSheet;
