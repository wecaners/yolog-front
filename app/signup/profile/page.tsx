'use client';

import { SignupGowunTitle, SignupProfileForm } from '@/app/components';

function SignupProfilePage() {
  return (
    <div className="bg-background h-full flex flex-col justify-between gap-40pxr">
      <SignupGowunTitle className="mt-101pxr">
        프로필 이름만 입력하면
        <br />
        가입이 완료돼요
      </SignupGowunTitle>
      <SignupProfileForm />
    </div>
  );
}

export default SignupProfilePage;
