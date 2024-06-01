'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import React, { ForwardedRef } from 'react';
import { gowunBatang } from './fonts';
import ONBOARDING_TEXT_SLIDES from '@/app/lib/constants/onboarding-text-slides';

const OnboardingTextSwiper = React.forwardRef<SwiperClass | null>(
  (props, ref: ForwardedRef<SwiperClass | null>) => {
    return (
      <>
        <Swiper
          className="w-full mt-17pxr"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            if (typeof ref === 'function') {
              ref(swiper);
            } else if (ref) {
              (ref as React.MutableRefObject<SwiperClass | null>).current =
                swiper;
            }
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !w-6pxr !h-6pxr !rounded-full inline-block "></span> `;
            },
            bulletActiveClass: 'active-bullet',
            bulletClass: 'default-bullet',
          }}
          navigation
        >
          {ONBOARDING_TEXT_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <p
                className={`text-[#32301C] ${gowunBatang.className} text-26pxr font-bold leading-[47px] mt-84pxr mb-60pxr text-center`}
              >
                {slide.firstLine}
                <br />
                {slide.secondLine}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  },
);

OnboardingTextSwiper.displayName = 'OnboardingTextSwiper';
export default OnboardingTextSwiper;
