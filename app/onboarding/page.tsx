'use client';

import { gowunBatang } from '../components/ui/fonts';
import {
  Button,
  OnboardingImageSwiper,
  OnboardingTextSwiper,
  SigninBottom,
} from '../components';
import { SwiperClass } from 'swiper/react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

function OnboardingPage() {
  const router = useRouter();
  const imageSwiperRef = useRef<SwiperClass | null>(null);
  const textSwiperRef = useRef<SwiperClass | null>(null);

  const handleNextSlide = () => {
    if (imageSwiperRef.current?.isEnd) {
      router.push('/sign');
    } else {
      imageSwiperRef.current?.slideNext();
      textSwiperRef.current?.slideNext();
    }
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="bg-onboardingBg h-full">
        <OnboardingImageSwiper ref={imageSwiperRef} />
      </div>
      <div className="bg-background w-full h-387pxr flex flex-col items-center z-20 relative">
        <OnboardingTextSwiper ref={textSwiperRef} />
        <p
          className={`text-primary500 text-15pxr font-bold ${gowunBatang.className} absolute top-38pxr left-1/2 -translate-x-1/2`}
        >
          여록
        </p>
        <Button
          onClick={() => handleNextSlide()}
          styles="bg-primary300 !w-358pxr text-white"
        >
          다음
        </Button>
        <SigninBottom className="mt-22pxr mb-33pxr" />
      </div>
    </div>
  );
}

export default OnboardingPage;
