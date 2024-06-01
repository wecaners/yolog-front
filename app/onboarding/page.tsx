'use client';

import { gowunBatang } from '../components/ui/fonts';
import Image from 'next/image';
import Indicator from '../components/ui/indicator';
import onboardingBackground from '../../public/images/onboarding.avif';
import { Button, OnboardingSwiper, SigninBottom } from '../components';
import { useSwiper } from 'swiper/react';

function OnboardingPage() {
  const swiper = useSwiper();
  return (
    <div className="flex flex-col justify-center h-full w-full">
      <div className="bg-onboardingBg relative w-full h-full">
        <OnboardingSwiper />
      </div>
      <div className="bg-background w-full h-387pxr flex flex-col items-center z-10">
        <div className="mt-17pxr">
          <Indicator />
        </div>
        <p
          className={`text-primary500 text-15pxr font-bold ${gowunBatang.className} mt-15pxr`}
        >
          여록
        </p>
        <p
          className={`text-[#32301C] ${gowunBatang.className} text-26pxr font-bold leading-[47px] mt-41pxr mb-60pxr text-center`}
        >
          여행의 모든 순간
          <br />
          생생하게 기록해요
        </p>
        <Button
          onClick={() => swiper.slideNext()}
          styles="bg-primary300 !w-358pxr text-white"
        >
          다음
        </Button>
        <SigninBottom className="mt-22pxr" />
      </div>
    </div>
  );
}

{
  /* <Image
          src={onboardingBackground}
          alt="온보딩 배경이미지"
          width={333}
          height={690}
          priority
          className="rotate-[-14.784deg] rounded-[20px] absolute left-108pxr top-70pxr"
        /> */
}

export default OnboardingPage;
