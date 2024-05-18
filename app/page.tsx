'use client';

import UseDialog from '@/hooks/use-dialog';
import { Dialog, DialogLogout } from './components';

export default function Home() {
  const { setIsDialogOpen, dialogOutsideClick, dialogRef, isDialogOpen } =
    UseDialog();
  return (
    <>
      <button
        className="w-240pxr h-115pxr bg-primary300 text-white"
        onClick={() => setIsDialogOpen(true)}
      >
        모달 보이기
      </button>
      <Dialog
        dialogOutsideClick={dialogOutsideClick}
        isOpen={isDialogOpen}
        dialogRef={dialogRef}
      >
        <DialogLogout />
      </Dialog>
    </>
  );
}
