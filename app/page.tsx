'use client';
import UseDialog from '@/hooks/use-dialog';
import useToast from '@/hooks/use-toast';
import { Dialog, DialogLogout } from './components';

export default function Home() {
  const showToast = useToast();
  const { isDialogOpen, dialogOutsideClick, setIsDialogOpen, dialogRef } =
    UseDialog();

  return (
    <div className="flex gap-20pxr">
      <button
        className="w-200pxr h-120pxr bg-primary300 rounded-2xl"
        onClick={() =>
          showToast({
            message: '성공적으로 토스트가 생성됐습니다!',
            type: 'success',
          })
        }
      >
        토스트 테스트 버튼
      </button>
      <button
        className="w-200pxr h-120pxr bg-primary300 rounded-2xl"
        onClick={() => setIsDialogOpen(!isDialogOpen)}
      >
        모달 테스트 버튼
      </button>

      <Dialog
        isOpen={isDialogOpen}
        dialogOutsideClick={dialogOutsideClick}
        dialogRef={dialogRef}
      >
        <DialogLogout />
      </Dialog>
    </div>
  );
}
