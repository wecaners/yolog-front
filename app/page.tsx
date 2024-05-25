'use client';

import Image from 'next/image';
import onboardingBackground from '../public/images/onboarding.avif';
import { gowunBatang } from './components/ui/fonts';
import Indicator from './components/ui/indicator';
import { Button, SigninBottom } from './components';

function Home() {
  return (
    <div className="bg-onboardingBg relative flex flex-col justify-center h-full">
      <Image
        src={onboardingBackground}
        alt="온보딩 배경이미지"
        width={333}
        height={690}
        priority
        className="rotate-[-14.784deg] rounded-[20px] absolute left-108pxr top-70pxr"
      />
      <div className="bg-background w-392pxr h-387pxr absolute bottom-0pxr flex flex-col items-center">
        <div className="mt-17pxr">
          <Indicator />
        </div>
        <p
          className={`text-primary500 text-15pxr font-bold ${gowunBatang.className} mt-15pxr`}
        >
          여록
        </p>
        <p
          className={`text-[#32301C] ${gowunBatang.className} text-26pxr font-bold leading-[47px] mt-41pxr mb-60pxr`}
        >
          여행의 모든 순간
          <br />
          생생하게 기록해요
        </p>
        <Button styles="bg-primary300 !w-358pxr text-white">다음</Button>
        <SigninBottom className="mt-22pxr" />
      </div>
    </div>
  );
}

export default Home;
