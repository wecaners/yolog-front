import type { Config } from 'tailwindcss';

type AccType = Record<string, string>;

const range = (start: number, end: number): number[] => {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
};

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'check-icon': 'url("/icons/check.svg")',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary100: '#EEF9E7',
        primary200: '#DDEEC5',
        primary300: '#AFC98D',
        primary400: '#8BA47B',
        primary500: '#506046',
        onboardingBg: '#A4BF82',
        inputGray: '#686868',
        inputGreen: '#3E5C16',
        background: '#F8F7EE',
        mainPageBackground: '#EAF2E4',
        gray: '#b1b1b1',
        error: '#ff0000',
      },
      boxShadow: {
        dialog: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        button: '0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
        floatingButton: '0px 2px 10px rgba(0, 0, 0, 0.18)',
        mainDiaryList: '-2px -2px 10px 0px rgba(0, 0, 0, 0.03)',
      },
      keyframes: {
        showToast: {
          '0%': {
            transform: 'translateX(-50%) translateY(-65px)',
            opacity: '0',
          },
          '20%': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
          '75%': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
          '100%': { transform: 'translateX(-50%) translateY(0)', opacity: '0' },
        },
        showBottomSheet: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        closeBottomSheet: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
        },
        showSubTitle: {
          '0%': {
            transform: 'translateX(-50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        showToast: 'showToast 2s ease-in-out',
        showBottomSheet: 'showBottomSheet 0.3s ease-in-out',
        closeBottomSheet: 'closeBottomSheet 0.3s ease-in-out',
        showSubTitle: 'showSubTitle 1.7s ease-in-out',
      },
      dropShadow: {
        textShadow: '1px 4px 4px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
