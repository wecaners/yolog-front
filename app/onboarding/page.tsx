'use client';

import { gowunBatang } from '../components/ui/fonts';
import Indicator from '../components/ui/indicator';
import {
  Button,
  OnboardingImageSwiper,
  OnboardingTextSwiper,
  SigninBottom,
} from '../components';
import { SwiperClass } from 'swiper/react';
import { useRef } from 'react';

function OnboardingPage() {
  const imageSwiperRef = useRef<SwiperClass | null>(null);
  const textSwiperRef = useRef<SwiperClass | null>(null);

  const handleNextSlide = () => {
    imageSwiperRef.current?.slideNext();
    textSwiperRef.current?.slideNext();
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="bg-onboardingBg relative h-full">
        <OnboardingImageSwiper ref={imageSwiperRef} />
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
        <OnboardingTextSwiper ref={textSwiperRef} />
        <Button
          onClick={() => handleNextSlide()}
          styles="bg-primary300 !w-358pxr text-white"
        >
          다음
        </Button>
        <SigninBottom className="mt-22pxr" />
      </div>
    </div>
  );
}

export default OnboardingPage;
