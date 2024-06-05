'use client';

import UseDialog from '@/hooks/use-dialog';
import {
  AccountMenuBarButton,
  Dialog,
  DialogLogout,
  MenuBarButton,
} from '../index';

interface Props {
  onClick: () => void;
}

function AccountMenu({ onClick }: Props) {
  const { isDialogOpen, setIsDialogOpen, dialogOutsideClick, dialogRef } =
    UseDialog();
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <AccountMenuBarButton socialType="google" onClick={onClick} />
      <MenuBarButton title="로그아웃" onClick={() => setIsDialogOpen(true)} />
      <Dialog
        isOpen={isDialogOpen}
        dialogOutsideClick={dialogOutsideClick}
        dialogRef={dialogRef}
      >
        <DialogLogout onClose={handleCloseDialog} />
      </Dialog>
      <MenuBarButton title="계정 탈퇴" />
    </>
  );
}

export default AccountMenu;
