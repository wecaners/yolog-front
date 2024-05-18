'use client';

import { useRef, useState } from 'react';
import { Dialog, DialogLogout } from './components';

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const dialogOutsideClick = (e: React.MouseEvent) => {
    if (dialogRef.current === e.target) setIsDialogOpen(false);
  };
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
