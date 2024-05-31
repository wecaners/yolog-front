'use client';

import { gowunBatang } from './fonts';
import useBottomSheet from '@/hooks/use-bottom-sheet';
import { BottomSheet, SocialBottomSheet } from '../../components/index';

interface Props {
  className?: string;
}

function SigninBottom({ className }: Props) {
  const { isSheetOpen, setIsSheetOpen, handleOutsideClick, bottomSheetRef } =
    useBottomSheet();

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <button
        className={`text-[#646464] ${gowunBatang.className} text-14pxr font-normal leading-[20px] underline ${className}`}
        onClick={() => setIsSheetOpen(!isSheetOpen)}
      >
        기존 계정으로<span className="text-primary400">&nbsp;로그인</span>
      </button>
      <BottomSheet
        title="기존 계정으로 로그인"
        isOpen={isSheetOpen}
        bottomSheetRef={bottomSheetRef}
        onOutsideClick={handleOutsideClick}
        onClose={handleCloseSheet}
      >
        <SocialBottomSheet />
      </BottomSheet>
    </>
  );
}

export default SigninBottom;
