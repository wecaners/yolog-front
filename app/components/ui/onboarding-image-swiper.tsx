'use client';

import Image from 'next/image';
import React, { ForwardedRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ONBOARDING_IMAGE_SLIDES from '@/app/lib/constants/onboarding-image-slides';
import 'swiper/css';

const OnboardingImageSwiper = React.forwardRef<SwiperClass | null>(
  (props, ref: ForwardedRef<SwiperClass | null>) => {
    return (
      <>
        <Swiper
          className="w-full h-full"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          simulateTouch={false}
          onSwiper={(swiper) => {
            if (typeof ref === 'function') {
              ref(swiper);
            } else if (ref) {
              (ref as React.MutableRefObject<SwiperClass | null>).current =
                swiper;
            }
          }}
        >
          {ONBOARDING_IMAGE_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image alt={slide.alt} src={slide.src} fill draggable={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  },
);

OnboardingImageSwiper.displayName = 'OnboardingImageSwiper';
export default OnboardingImageSwiper;
