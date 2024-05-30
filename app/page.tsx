'use client';

import { useEffect, useState } from 'react';
import { gowunBatang } from './components/ui/fonts';
import { useRouter } from 'next/navigation';

function Home() {
  const [isAfterTwoSeconds, setIsAfterTwoSeconds] = useState(false);
  const router = useRouter();

  const handleSubTitleAnimation = () => {
    setTimeout(() => {
      setIsAfterTwoSeconds(true);
    }, 1500);
  };

  const routeToOnboarding = () => {
    setTimeout(() => {
      router.push('/onboarding');
    }, 500);
  };

  useEffect(() => {
    handleSubTitleAnimation();
  }, []);

  return (
    <div className="bg-onboardingBg relative flex flex-col justify-center h-full items-center">
      <p
        className={`text-white ${gowunBatang.className} text-40pxr font-bold leading-[45px]`}
      >
        여록
      </p>
      <p
        className={`text-white ${gowunBatang.className} text-20pxr font-bold leading-[45px] invisible ${isAfterTwoSeconds ? '!visible animate-showSubTitle' : ''}`}
        onAnimationEnd={routeToOnboarding}
      >
        ; 여행을 기록하다
      </p>
    </div>
  );
}

export default Home;
