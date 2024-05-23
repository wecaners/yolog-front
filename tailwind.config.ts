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
        inputGray: '#686868',
        inputGreen: '#3E5C16',
        gray: '#b1b1b1',
        error: '#ff0000',
      },
      boxShadow: {
        dialog: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        button: '0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
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
      },
      animation: {
        showToast: 'showToast 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
