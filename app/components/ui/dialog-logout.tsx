import React from 'react';

function DialogLogout() {
  const buttonClassName =
    'py-10pxr px-18pxr rounded-lg border border-primary400 bg-primary400 shadow-button text-16pxr font-semibold leading-6 text-white';
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-17pxr mb-8pxr font-semibold leading-[22px] tracking-[-0.4px]">
        로그아웃
      </h1>
      <p className="text-13pxr mb-20pxr leading-[18px] tracking-[-0.4px] text-center">
        로그아웃 상태에서 실수로 앱을 삭제하거나
        <br /> 기기를 바꾸면 기록이 저장되지 않습니다.
      </p>
      <div className="flex items-center gap-14pxr">
        <button className={buttonClassName}>취소</button>
        <button className={buttonClassName}>로그아웃</button>
      </div>
    </div>
  );
}

export default DialogLogout;
