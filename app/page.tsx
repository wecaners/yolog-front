'use client';
import UseDialog from '@/hooks/use-dialog';
import useToast from '@/hooks/use-toast';
import { Dialog, DialogLogout } from './components';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const showToast = useToast();
  const { isDialogOpen, dialogOutsideClick, setIsDialogOpen, dialogRef } =
    UseDialog();
  const { data: session } = useSession();

  console.log({ session });

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
      {session ? (
        <h1 className="text-30pxr font-semibold">{`${session?.user?.name}님 로그인중이시네요`}</h1>
      ) : null}
      <div className="flex flex-col gap-16pxr">
        <button
          className="w-300pxr h-70pxr bg-yellow-300 rounded-xl"
          onClick={() => signIn('kakao', { redirectTo: '/' })}
        >
          카카오로그인
        </button>
        <button
          className="w-300pxr h-70pxr bg-green-300 rounded-xl"
          onClick={() => signIn('naver', { redirectTo: '/' })}
        >
          네이버로그인
        </button>
        <button
          className="w-300pxr h-70pxr bg-black text-white rounded-xl"
          onClick={() => signIn('google', { redirectTo: '/' })}
        >
          구글로그인
        </button>
      </div>
    </div>
  );
}
