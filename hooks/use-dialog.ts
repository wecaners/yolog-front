import { useRef, useState } from 'react';

function UseDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const dialogOutsideClick = (e: React.MouseEvent) => {
    if (dialogRef.current === e.target) setIsDialogOpen(false);
  };
  return {
    isDialogOpen,
    dialogOutsideClick,
    setIsDialogOpen,
    dialogRef,
  };
}

export default UseDialog;
