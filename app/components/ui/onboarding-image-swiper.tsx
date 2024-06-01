'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import React, { ForwardedRef } from 'react';

const OnboardingImageSwiper = React.forwardRef<SwiperClass | null>(
  (props, ref: ForwardedRef<SwiperClass | null>) => {
    return (
      <>
        <Swiper
          className="w-full h-full"
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
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <Image
              alt="더미이미지1"
              src="https://c4.wallpaperflare.com/wallpaper/744/428/981/aespa-k-pop-karina-yoo-ji-min-giselle-uchinaga-aeri-ningning-ning-yizhuo-hd-wallpaper-preview.jpg"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="더미이미지2"
              src="https://c4.wallpaperflare.com/wallpaper/540/13/204/new-jeans-korean-basketball-hd-wallpaper-preview.jpg"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="더미이미지3"
              src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fseries%2F350573%2Fbackgrounds%2F5fc90ce3aac79.jpg&w=3840&q=75"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="더미이미지4"
              src="https://c4.wallpaperflare.com/wallpaper/30/129/154/fromis-9-k-pop-white-clothing-black-hair-blonde-hd-wallpaper-preview.jpg"
              fill
            />
          </SwiperSlide>
        </Swiper>
      </>
    );
  },
);

OnboardingImageSwiper.displayName = 'OnboardingImageSwiper';
export default OnboardingImageSwiper;
