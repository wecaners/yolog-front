type SocialType = 'kakao' | 'naver' | 'google' | 'apple';

interface ISocialButtons {
  id: number;
  type: SocialType;
}

export const socialButtons: ISocialButtons[] = [
  {
    id: 1,
    type: 'kakao',
  },
  {
    id: 2,
    type: 'naver',
  },
  {
    id: 3,
    type: 'google',
  },
  {
    id: 4,
    type: 'apple',
  },
];
